import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getGameFunFacts(gameTitle: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide 3 dark and interesting fun facts about the game "${gameTitle}". Keep it brief and thematic.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text.trim()) as string[];
    }
    return [];
  } catch (error) {
    console.error("Gemini Error:", error);
    return ["The Reaper is silent today.", "No facts found in the void.", "The shadows hide the truth."];
  }
}

export async function getSimilarGames(gameTitle: string, genre: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Recommend 3 similar games to "${gameTitle}" (Genre: ${genre}). For each game, provide the title and a 1-sentence reason why a fan of "${gameTitle}" would like it.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              reason: { type: Type.STRING }
            },
            required: ["title", "reason"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text.trim()) as { title: string; reason: string }[];
    }
    return [];
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
}
