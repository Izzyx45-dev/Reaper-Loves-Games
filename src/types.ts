export interface Game {
  id: string;
  title: string;
  genre: string;
  platform: string[];
  rating: string;
  image: string;
  price: string;
  steamUrl?: string;
  epicUrl?: string;
  psStoreUrl?: string;
  xboxStoreUrl?: string;
  description: string;
  isFeatured?: boolean;
  screenshots?: string[];
  requirements: {
    minimum: string[];
    recommended: string[];
  };
  trendingScore?: number;
  likes?: number;
  views?: number;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}
