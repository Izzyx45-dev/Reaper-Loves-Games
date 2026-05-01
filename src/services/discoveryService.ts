import { Game } from '../types';
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// This service simulates the "Auto Game Updating Algorithm"
// It uses Gemini to find trending games and "add" them to our ecosystem.
export class DiscoveryService {
  private static STORAGE_KEY = 'reaper_discovered_games';
  private static LIKES_KEY = 'reaper_user_likes';

  static getDiscoveredGames(): Game[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  static saveDiscoveredGame(game: Game) {
    const current = this.getDiscoveredGames();
    if (!current.find(g => g.id === game.id)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify([...current, game]));
    }
  }

  static getUserLikes(): string[] {
    const stored = localStorage.getItem(this.LIKES_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  static toggleLike(gameId: string) {
    const likes = this.getUserLikes();
    const index = likes.indexOf(gameId);
    if (index === -1) {
      likes.push(gameId);
    } else {
      likes.splice(index, 1);
    }
    localStorage.setItem(this.LIKES_KEY, JSON.stringify(likes));
    return likes;
  }

  static async discoverNewGames(existingTitles: string[]): Promise<Game[]> {
    try {
      const prompt = `Act as a gaming trend analyst in May 2026. 
      Identify 3 trending or newly released games that are NOT in this list: ${existingTitles.join(', ')}.
      For each game, provide details in a structured JSON format matching our Game interface.
      Include: id, title, genre, platform (array), rating, description, price, image (use a high quality placeholder if unknown), requirements (minimum and recommended arrays).
      Make them feel "dark" and "visceral" to match the Reaper Love aesthetic.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                title: { type: Type.STRING },
                genre: { type: Type.STRING },
                platform: { type: Type.ARRAY, items: { type: Type.STRING } },
                rating: { type: Type.STRING },
                image: { type: Type.STRING },
                price: { type: Type.STRING },
                psStoreUrl: { type: Type.STRING },
                xboxStoreUrl: { type: Type.STRING },
                description: { type: Type.STRING },
                requirements: {
                  type: Type.OBJECT,
                  properties: {
                    minimum: { type: Type.ARRAY, items: { type: Type.STRING } },
                    recommended: { type: Type.ARRAY, items: { type: Type.STRING } }
                  },
                  required: ["minimum", "recommended"]
                }
              },
              required: ["id", "title", "genre", "platform", "rating", "image", "price", "description", "requirements"]
            }
          }
        }
      });

      if (response.text) {
        const games = JSON.parse(response.text.trim()) as Game[];
        // Assign some default trending scores
        return games.map(g => ({
          ...g,
          trendingScore: Math.floor(Math.random() * 100) + 50,
          likes: Math.floor(Math.random() * 1000),
          views: Math.floor(Math.random() * 5000),
          image: g.image || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
          steamUrl: g.steamUrl || 'https://store.steampowered.com',
          psStoreUrl: g.psStoreUrl || 'https://www.playstation.com/en-us/games/',
          xboxStoreUrl: g.xboxStoreUrl || 'https://www.xbox.com/en-US/games/all-games'
        }));
      }
      return [];
    } catch (error) {
      console.error("Discovery Error:", error);
      return [];
    }
  }
}
