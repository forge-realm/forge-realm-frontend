// ==============================================
// API ROUTE: app/api/generate-image/route.ts
// ==============================================
import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Helper function to fetch with timeout and retry
async function fetchWithTimeout(url: string, timeout = 15000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}


export async function POST(request: NextRequest) {
  try {
    const { imageUrls } = await request.json();

    const prompt = "Combine these two images into a single scene, blending elements from both";

    // Validate input
    if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length === 0) {
      return NextResponse.json(
        { error: 'imageUrls must be a non-empty array' },
        { status: 400 }
      );
    }

    if (imageUrls.length > 5) {
      return NextResponse.json(
        { error: 'Maximum 5 images allowed' },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.NEXT_PUBLIC_GEMINI_KEY
    });

    // Fetch all images in parallel
    console.log('Fetching images from URLs:', imageUrls);
    const fetchResults = await Promise.allSettled(
      imageUrls.map(async (url, index) => {
        try {
          console.log(`Fetching image ${index + 1}:`, url);
          const response = await fetchWithTimeout(url, 15000);
          
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          
          console.log(`Image ${index + 1} fetched successfully`);
          return { response, index, url };
        } catch (error) {
          console.error(`Error fetching image ${index + 1} from ${url}:`, error);
          throw new Error(`Failed to fetch image ${index + 1}: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      })
    );

    // Check for failed fetches
    const failedFetches = fetchResults
      .map((result, idx) => result.status === 'rejected' ? { idx, reason: result.reason } : null)
      .filter(Boolean);

    if (failedFetches.length > 0) {
      const errorMessages = failedFetches.map(f => 
        `Image ${f!.idx + 1}: ${f!.reason.message || 'Unknown error'}`
      ).join('; ');
      
      console.error('Failed fetches:', failedFetches);
      return NextResponse.json(
        { 
          error: 'Failed to fetch one or more images',
          details: errorMessages
        },
        { status: 400 }
      );
    }

    // Extract successful responses
    const successfulFetches = fetchResults
      .filter((result): result is PromiseFulfilledResult<{ response: Response; index: number; url: string }> => 
        result.status === 'fulfilled'
      )
      .map(result => result.value);

    // Convert all images to base64
    console.log('Converting images to base64...');
    const imageDataResults = await Promise.allSettled(
      successfulFetches.map(async ({ response, index }) => {
        try {
          const buffer = await response.arrayBuffer();
          const base64Image = Buffer.from(buffer).toString('base64');
          const mimeType = response.headers.get('content-type') || 'image/jpeg';
          
          console.log(`Image ${index + 1} - MIME type:`, mimeType, 'Size:', buffer.byteLength);
          
          return {
            mimeType,
            data: base64Image
          };
        } catch (error) {
          console.error(`Error converting image ${index + 1}:`, error);
          throw error;
        }
      })
    );

    // Check for conversion failures
    const failedConversions = imageDataResults.filter(result => result.status === 'rejected');
    if (failedConversions.length > 0) {
      console.error('Failed conversions:', failedConversions);
      return NextResponse.json(
        { error: 'Failed to process one or more images' },
        { status: 500 }
      );
    }

    // Build the contents array
    console.log('Building contents array...');
    const contents: any[] = [{ text: prompt }];

    imageDataResults.forEach((result) => {
      if (result.status === 'fulfilled') {
        contents.push({
          inlineData: result.value
        });
      }
    });

    // Generate content
    console.log('Calling Gemini API with', contents.length - 1, 'images...');
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: contents,
    });

    console.log('Gemini API response received');

    // Extract generated image
    if (!response.candidates || response.candidates.length === 0) {
      console.error('No candidates in response:', response);
      return NextResponse.json(
        { error: 'No candidates returned from API' },
        { status: 500 }
      );
    }

    const parts = response?.candidates?.[0]?.content?.parts;
    if (!parts || !Array.isArray(parts)) {
      console.error('Response parts missing or not an array:', response?.candidates?.[0]?.content);
      return NextResponse.json(
        { error: 'Malformed response from API' },
        { status: 500 }
      );
    }

    for (const part of parts) {
      if (part?.inlineData) {
        console.log('Successfully generated image');
        return NextResponse.json({
          success: true,
          imageData: part.inlineData.data,
          mimeType: part.inlineData.mimeType
        });
      }
    }

    console.error('No image data in response parts');
    return NextResponse.json(
      { error: 'No image generated in response' },
      { status: 500 }
    );
  } catch (error) {
    console.error('Detailed error in generate-image API:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error: error
    });

    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// // ==============================================
// // CLIENT COMPONENT: app/components/ImageGenerator.tsx
// // ==============================================
// 'use client'

// import { useState } from 'react';

// export default function ImageGenerator() {
//   const [imageUrls, setImageUrls] = useState<string[]>(['', '']);
//   const [prompt, setPrompt] = useState('Combine these images into a single scene');
//   const [generatedImage, setGeneratedImage] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleUrlChange = (index: number, value: string) => {
//     const newUrls = [...imageUrls];
//     newUrls[index] = value;
//     setImageUrls(newUrls);
//   };

//   const addImageUrl = () => {
//     if (imageUrls.length < 14) {
//       setImageUrls([...imageUrls, '']);
//     }
//   };

//   const removeImageUrl = (index: number) => {
//     if (imageUrls.length > 1) {
//       setImageUrls(imageUrls.filter((_, i) => i !== index));
//     }
//   };

//   const handleGenerate = async () => {
//     // Filter out empty URLs
//     const validUrls = imageUrls.filter(url => url.trim() !== '');
    
//     if (validUrls.length === 0) {
//       alert('Please provide at least one image URL');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch('/api/generate-image', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ imageUrls: validUrls, prompt })
//       });

//       const data = await response.json();
      
//       if (data.success) {
//         setGeneratedImage(`data:${data.mimeType};base64,${data.imageData}`);
//       } else {
//         alert('Error: ' + data.error);
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Failed to generate image');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ... rest is the same as the Server Actions component above
// }

// // ==============================================
// // PAGE: app/page.tsx
// // ==============================================
// import ImageGenerator from './components/ImageGenerator';

// export default function Home() {
//   return <ImageGenerator />;
// }