import { GoogleGenAI } from "@google/genai";
import { Metadata } from "@/interface/nft";

const ai = new GoogleGenAI({ apiKey: `${process.env.NEXT_GEMINI_KEY}` });

export const aiMetadataGenerator = async (avatar: Metadata, weapon: Metadata[]) => {
  const content = `
    You are given an NFT avatar metadata and several NFT asset metadata objects (such as armor, shield, or weapon). 

    Your task is to merge these into a single, standard NFT metadata object. The resulting metadata should:

      - Represent a newly-generated NFT that visually and conceptually combines the AVATAR and ALL provided ASSETS into one unified character/item.
      - Keep all essential attributes (including trait arrays) and combine the visuals, names, and descriptions so the resulting metadata reflects BOTH the appearance and the story of the avatar equipped with these assets.
      - If any fields (like images or animations) can be meaningfully merged or composed, describe the merged result in the metadata (for example, in the description field).
      - Output ONLY the final, single, merged metadata JSON.

    Here is the input data:

    Avatar Metadata:
    ${JSON.stringify(avatar, null, 2)}

    Assets Metadata (array of one or more, these could be weapons, armors, shields, etc.):
    ${JSON.stringify(weapon, null, 2)}
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content
  });
  if (response.text) {
    const match = response.text.match(/{[\s\S]*}/);
    console.log(match);
    const jsonString = match ? match[0] : "";
    return JSON.parse(jsonString);
  }
}