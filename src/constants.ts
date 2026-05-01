import { Game, Post } from './types';

export const GAMES: Game[] = [
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    genre: 'Action RPG',
    platform: ['PC', 'PS5', 'Xbox Series X'],
    rating: 'M',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/capsule_617x353.jpg',
    price: '$59.99',
    steamUrl: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
    epicUrl: 'https://www.epicgames.com/store/en-US/p/cyberpunk-2077',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.',
    isFeatured: true,
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/ss_891e4e58e37cd26e84d436a04870da3b7b25206c.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/ss_f8e6e58f80455581977723223058c42a22a36b95.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/ss_69894cf7fc367776d4f9b8832a8298ba965b2061.1920x1080.jpg'
    ],
    requirements: {
      minimum: ['OS: Windows 10', 'Processor: Intel Core i5-3570K', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 960'],
      recommended: ['OS: Windows 10', 'Processor: Intel Core i7-4790', 'Memory: 12 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
    }
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    genre: 'Action RPG',
    platform: ['PC', 'PS5', 'Xbox Series X'],
    rating: 'M',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_617x353.jpg',
    price: '$59.99',
    steamUrl: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',
    epicUrl: 'https://www.epicgames.com/store/en-US/p/elden-ring',
    description: 'The Golden Order has been broken. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    isFeatured: true,
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_37a909ddb96ce8707e781c002f2360538f83060c.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_49969e061803565e31e54a32338f0dcd22e7a177.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_33c94514780516766d66e74b37346ba8892404ef.1920x1080.jpg'
    ],
    requirements: {
      minimum: ['OS: Windows 10', 'Processor: Intel Core i5-8400', 'Memory: 12 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060'],
      recommended: ['OS: Windows 11', 'Processor: Intel Core i7-8700K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 1070']
    }
  },
  {
    id: 'hades-ii',
    title: 'Hades II',
    genre: 'Roguelike Action',
    platform: ['PC'],
    rating: 'T',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/capsule_617x353.jpg',
    price: '$29.99',
    steamUrl: 'https://store.steampowered.com/app/1145350/Hades_II/',
    epicUrl: 'https://www.epicgames.com/store/en-US/p/hades-ii',
    description: 'Battle beyond the Underworld using dark sorcery to take on the Titan of Time in this rebelliously replayable sequel to the award-winning god-like rogue-like dungeon crawler.',
    isFeatured: true,
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/ss_30ef2d6896205e4a5009f582ba9310a08fc23b7b.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/ss_7be5478461cd186645391629851752b04c86f06c.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/ss_16ba388836528d9c15865f1712a32c02026fb95a.1920x1080.jpg'
    ],
    requirements: {
      minimum: ['OS: Windows 10', 'Processor: Dual Core 2.4 GHz', 'Memory: 4 GB RAM', 'Graphics: 2 GB VRAM'],
      recommended: ['OS: Windows 10', 'Processor: Quad Core 3.0 GHz', 'Memory: 8 GB RAM', 'Graphics: 4 GB VRAM']
    }
  },
  {
    id: 'ghost-of-tsushima',
    title: 'Ghost of Tsushima',
    genre: 'Action Adventure',
    platform: ['PC', 'PS5', 'PS4'],
    rating: 'M',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/capsule_617x353.jpg',
    price: '$59.99',
    steamUrl: 'https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_DIRECTORS_CUT/',
    epicUrl: 'https://www.epicgames.com/store/p/ghost-of-tsushima',
    description: 'In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet.',
    isFeatured: true,
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/ss_7f37471869e5d6666be3f03b547864dd1e2338be.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/ss_c5f492b61405c92c90c76ce83b9e4a30e84b8da1.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/ss_84ab217f223acc9635338166c4c62fa3685e1358.1920x1080.jpg'
    ],
    requirements: {
      minimum: ['OS: Windows 10', 'Processor: Intel Core i3-7100', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 960'],
      recommended: ['OS: Windows 10', 'Processor: Intel Core i5-8600', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2060']
    }
  },
  {
    id: 'black-myth-wukong',
    title: 'Black Myth: Wukong',
    genre: 'Action RPG',
    platform: ['PC', 'PS5'],
    rating: 'M',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/capsule_617x353.jpg',
    price: '$59.99',
    steamUrl: 'https://store.steampowered.com/app/2358720/Black_Myth_Wukong/',
    epicUrl: 'https://www.epicgames.com/store/p/black-myth-wukong',
    description: 'Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature.',
    isFeatured: true,
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/ss_26e5898858f0e08f86f78f657a8a25c1dafc174b.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/ss_138b327b878772a8c96291a84f3ccbdf63e0259b.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/ss_37a909ddb96ce8707e781c002f2360538f83060c.1920x1080.jpg'
    ],
    requirements: {
      minimum: ['OS: Windows 10', 'Processor: Intel Core i5-8400', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060'],
      recommended: ['OS: Windows 10', 'Processor: Intel Core i7-9700', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2060']
    }
  }
];

export const POSTS: Post[] = [
  {
    id: 'reapers-guide-to-rgbs',
    title: "The Reaper's Guide to RGBs",
    excerpt: "Why neon pink will actually improve your aim. Just kidding, but it looks cool.",
    date: 'May 1, 2026',
    author: 'Grimm',
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'dark-souls-vs-elden-ring',
    title: 'Dark Souls vs Elden Ring: Which is more Gothic?',
    excerpt: 'An in-depth analysis of architectural gloom and cosmic dread.',
    date: 'April 28, 2026',
    author: 'Lilithe',
    category: 'Opinion',
    image: 'https://images.unsplash.com/photo-1614027164847-1b280927c858?q=80&w=800&auto=format&fit=crop'
  }
];
