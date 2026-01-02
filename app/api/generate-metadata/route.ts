import { NextResponse, NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: NextRequest) {
  try {
    const { nft } = await request.json();

    if (!nft) {
      return NextResponse.json(
        { error: "Nft is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.NEXT_PUBLIC_GEMINI_KEY,
    });

    // Adapt prompt to include all assets (not just weapon)
    const assets = nft.assets || [];
    const assetsString = Array.isArray(assets)
      ? assets.map(asset => JSON.stringify(asset, null, 2)).join('\n---\n')
      : '';

    const content = `
      You are given an NFT base character metadata and several NFT asset metadata objects (such as armor, shield, or weapon). 

      Your task is to merge these into a single, standard NFT metadata object. The resulting metadata should:

        - Represent a newly-generated NFT that visually and conceptually combines the BASE CHARACTER and ALL provided ASSETS into one unified character/item.
        - Keep all essential attributes (including trait arrays) and combine the visuals, names, and descriptions so the resulting metadata reflects BOTH the appearance and the story of the avatar equipped with these assets.
        - If any fields (like images or animations) can be meaningfully merged or composed, describe the merged result in the metadata (for example, in the description field).
        - Output ONLY the final, single, merged metadata JSON.

      Here is the input data:

      Base Character Metadata:
      ${JSON.stringify(nft.avatar, null, 2)}

      Assets Metadata (array of one or more, these could be weapons, armors, shields, etc.):
      ${assetsString}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: content }] }],
    });

    let text;
    if (response && response.candidates && response.candidates[0].content && response.candidates[0].content.parts && response.candidates[0].content.parts[0].text) {
      text = response.candidates[0].content.parts[0].text;
    } else if (response.text) {
      text = response.text;
    } else {
      return NextResponse.json(
        { error: "No response from model" },
        { status: 500 }
      );
    }

    const match = text.match(/{[\s\S]*}/);
    if (!match) {
      return NextResponse.json(
        { error: "Could not extract JSON from model output" },
        { status: 500 }
      );
    }
    const jsonString = match[0];

    try {
      const mergedMetadata = JSON.parse(jsonString);
      return NextResponse.json(mergedMetadata);
    } catch (e) {
      return NextResponse.json(
        { error: "Failed to parse generated JSON" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}