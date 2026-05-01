import { Game } from '../types';

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
    id: 'starfield',
    title: 'Starfield',
    genre: 'RPG',
    platform: ['PC', 'Xbox Series X'],
    rating: 'M',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_617x353.jpg',
    price: '$69.99',
    steamUrl: 'https://store.steampowered.com/app/1716740/Starfield/',
    epicUrl: 'https://www.epicgames.com/store/p/starfield',
    description: 'Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4.',
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/ss_84ab217f223acc9635338166c4c62fa3685e1358.1920x1080.jpg'
    ],
    requirements: {
      minimum: ['OS: Windows 10', 'Processor: AMD Ryzen 5 2600X', 'Memory: 16 GB RAM', 'Graphics: AMD Radeon RX 5700'],
      recommended: ['OS: Windows 10/11', 'Processor: AMD Ryzen 5 3600X', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2080']
    }
  },
  {
    id: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    genre: 'RPG',
    platform: ['PC', 'PS5', 'Xbox Series X'],
    rating: 'M',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/capsule_617x353.jpg',
    price: '$59.99',
    steamUrl: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    epicUrl: 'https://www.epicgames.com/store/p/baldurs-gate-3',
    description: 'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.',
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/ss_16ba388836528d9c15865f1712a32c02026fb95a.1920x1080.jpg'
    ],
    requirements: {
      minimum: ['OS: Windows 10', 'Processor: Intel i5-4690', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 970'],
      recommended: ['OS: Windows 10', 'Processor: Intel i7-8700K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA RTX 2060']
    }
  },
  {
    id: 'red-dead-redemption-2',
    title: 'Red Dead Redemption 2',
    genre: 'Action Adventure',
    platform: ['PC', 'PS4', 'Xbox One'],
    rating: 'M',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/capsule_617x353.jpg',
    price: '$59.99',
    steamUrl: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
    epicUrl: 'https://www.epicgames.com/store/p/red-dead-redemption-2',
    description: 'Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.',
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_891e4e58e37cd26e84d436a04870da3b7b25206c.1920x1080.jpg'
    ],
    requirements: {
      minimum: ['OS: Windows 10', 'Processor: Intel Core i5-2500K', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 770'],
      recommended: ['OS: Windows 10', 'Processor: Intel Core i7-4770K', 'Memory: 12 GB RAM', 'Graphics: Nvidia GeForce GTX 1060']
    }
  },
  {
    id: 'helldivers-2',
    title: 'Helldivers 2',
    genre: 'Third-Person Shooter',
    platform: ['PC', 'PS5'],
    rating: 'M',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/capsule_617x353.jpg',
    price: '$39.99',
    steamUrl: 'https://store.steampowered.com/app/553850/HELLDIVERS_2/',
    epicUrl: '',
    description: 'The Galaxy’s Last Line of Offence. Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.',
    screenshots: [
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/ss_84ab217f223acc9635338166c4c62fa3685e1358.1920x1080.jpg'
    ],
    requirements: {
      minimum: ['OS: Windows 10', 'Processor: Intel Core i7-4790K', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1050 Ti'],
      recommended: ['OS: Windows 10', 'Processor: Intel Core i7-9700K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2060']
    }
  },
  {
    id: 'resident-evil-4',
    title: 'Resident Evil 4',
    genre: 'Action Horror',
    platform: ['PC', 'PS5', 'Xbox Series X'],
    rating: 'M',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/capsule_617x353.jpg',
    price: '$59.99',
    steamUrl: 'https://store.steampowered.com/app/2050650/Resident_Evil_4/',
    epicUrl: '',
    description: 'Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, has been dispatched to rescue the president’s kidnapped daughter.',
    screenshots: [
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/ss_891e4e58e37cd26e84d436a04870da3b7b25206c.1920x1080.jpg'
    ],
    requirements: {
      minimum: ['OS: Windows 10', 'Processor: AMD Ryzen 3 1200', 'Memory: 8 GB RAM', 'Graphics: AMD Radeon RX 560'],
      recommended: ['OS: Windows 10', 'Processor: AMD Ryzen 5 3600', 'Memory: 16 GB RAM', 'Graphics: AMD Radeon RX 5700']
    }
  },
  {
      id: 'alan-wake-2',
      title: 'Alan Wake 2',
      genre: 'Survival Horror',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/capsule_617x353.jpg',
      price: '$49.99',
      steamUrl: '',
      epicUrl: 'https://www.epicgames.com/store/p/alan-wake-2',
      description: 'A string of ritualistic murders threatens Bright Falls, an eerie small-town community surrounded by Pacific Northwest wilderness. Saga Anderson, an accomplished FBI agent, arrives to investigate.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel i5-7600K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2060'],
          recommended: ['OS: Windows 10', 'Processor: Intel i7-10700K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 3070']
      }
  },
  {
      id: 'street-fighter-6',
      title: 'Street Fighter 6',
      genre: 'Fighting',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1364780/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1364780/Street_Fighter_6/',
      epicUrl: '',
      description: 'Street Fighter 6, the latest entry in the world-renowned Street Fighter series, features three distinct game modes: World Tour, Fighting Ground and Battle Hub.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-7500', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-8700', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2070']
      }
  },
  {
      id: 'diablo-iv',
      title: 'Diablo IV',
      genre: 'Action RPG',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$69.99',
      steamUrl: 'https://store.steampowered.com/app/2357570/Diablo_IV/',
      epicUrl: '',
      description: 'Diablo IV is the ultimate action RPG experience with endless evil to slaughter, countless abilities to master, nightmarish dungeons, and legendary loot.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-2500K', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 660'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-8700K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2060']
      }
  },
  {
      id: 'armored-core-vi',
      title: 'Armored Core VI: Fires of Rubicon',
      genre: 'Action Mecha',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888160/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1888160/ARMORED_CORE_VI_FIRES_OF_RUBICON/',
      epicUrl: '',
      description: 'A new action game based on the concept of the ARMORED CORE series that uses the knowledge gained from FromSoftware’s recent action game development.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-8400', 'Memory: 12 GB RAM', 'Graphics: NVIDIA GeForce GTX 1650'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-4790K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'lies-of-p',
      title: 'Lies of P',
      genre: 'Soulslike',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1627720/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1627720/Lies_of_P/',
      epicUrl: '',
      description: 'Lies of P is a thrilling soulslike that takes the story of Pinocchio, turns it on its head, and sets it against the darkly elegant backdrop of the Belle Époque era.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: AMD Ryzen 3 1200', 'Memory: 8 GB RAM', 'Graphics: AMD Radeon RX 560'],
          recommended: ['OS: Windows 10', 'Processor: AMD Ryzen 5 3600', 'Memory: 16 GB RAM', 'Graphics: AMD Radeon RX 6700']
      }
  },
  {
      id: 'lords-of-the-fallen',
      title: 'Lords of the Fallen',
      genre: 'Action RPG',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1501750/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1501750/Lords_of_the_Fallen/',
      epicUrl: '',
      description: 'A vast world awaits in an all-new, dark fantasy action-RPG. As one of the fabled Dark Crusaders, embark on an epic quest to overthrow Adyr, the demon god.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel i5 8400', 'Memory: 12 GB RAM', 'Graphics: 6GB VRAM'],
          recommended: ['OS: Windows 10', 'Processor: Intel i7 8700', 'Memory: 16 GB RAM', 'Graphics: 8GB VRAM']
      }
  },
  {
      id: 'palworld',
      title: 'Palworld',
      genre: 'Survival Crafting',
      platform: ['PC', 'Xbox Series X'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/capsule_617x353.jpg',
      price: '$29.99',
      steamUrl: 'https://store.steampowered.com/app/1623730/Palworld/',
      description: 'Fight, farm, build and work alongside mysterious creatures called "Pals" in this completely new multi-player, open world survival and crafting game!',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-3570K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 1050'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i9-9900K', 'Memory: 32 GB RAM', 'Graphics: NVIDIA GeForce RTX 2070']
      }
  },
  {
      id: 'dragons-dogma-2',
      title: "Dragon's Dogma 2",
      genre: 'Action RPG',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2054970/capsule_617x353.jpg',
      price: '$69.99',
      steamUrl: 'https://store.steampowered.com/app/2054970/Dragons_Dogma_2/',
      description: "Dragon's Dogma is a single-player, narrative driven action-RPG series that challenges the players to choose their own experience – from the appearance of their Arisen.",
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-10600', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 1070'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-10700', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2080']
      }
  },
  {
      id: 'tekken-8',
      title: 'Tekken 8',
      genre: 'Fighting',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1778820/capsule_617x353.jpg',
      price: '$69.99',
      steamUrl: 'https://store.steampowered.com/app/1778820/TEKKEN_8/',
      description: 'Prepare for the next chapter in the legendary fighting game franchise, TEKKEN 8. Completely redesigned character visuals. Elaborate, highly-detailed models built from the ground-up.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-6600K', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1050 Ti'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-7700K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2070']
      }
  },
  {
      id: 'forza-horizon-5',
      title: 'Forza Horizon 5',
      genre: 'Racing',
      platform: ['PC', 'Xbox Series X'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1551360/Forza_Horizon_5/',
      description: 'Blast off to Horizon 5! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel i5-4460', 'Memory: 8 GB RAM', 'Graphics: NVidia GTX 760'],
          recommended: ['OS: Windows 10', 'Processor: Intel i5-8400', 'Memory: 16 GB RAM', 'Graphics: NVidia GTX 1070']
      }
  },
  {
      id: 'god-of-war',
      title: 'God of War',
      genre: 'Action Adventure',
      platform: ['PC', 'PS4'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1593500/capsule_617x353.jpg',
      price: '$49.99',
      steamUrl: 'https://store.steampowered.com/app/1593500/God_of_War/',
      description: 'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel i5-2500k', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 960'],
          recommended: ['OS: Windows 10', 'Processor: Intel i5-6600k', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 1060']
      }
  },
  {
      id: 'spiderman-remastered',
      title: "Marvel's Spider-Man Remastered",
      genre: 'Action Adventure',
      platform: ['PC', 'PS5'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/',
      description: 'In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i3-4160', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 950'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-4670', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'horizon-zero-dawn',
      title: 'Horizon Zero Dawn',
      genre: 'Action RPG',
      platform: ['PC', 'PS4'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/capsule_617x353.jpg',
      price: '$49.99',
      steamUrl: 'https://store.steampowered.com/app/1151640/Horizon_Zero_Dawn_Complete_Edition/',
      description: 'Experience Aloy’s entire legendary quest to unravel the mysteries of a world ruled by deadly Machines.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-2500K', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 780'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-4770K', 'Memory: 16 GB RAM', 'Graphics: Nvidia GeForce GTX 1060']
      }
  },
  {
      id: 'death-stranding',
      title: 'Death Stranding Director\'s Cut',
      genre: 'Action',
      platform: ['PC', 'PS5'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1850570/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1850570/capsule_617x353.jpg',
      description: 'From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR’S CUT.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-3470', 'Memory: 8 GB RAM', 'Graphics: GeForce GTX 1050'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-3770', 'Memory: 8 GB RAM', 'Graphics: GeForce GTX 1060']
      }
  },
  {
      id: 'control-ultimate-edition',
      title: 'Control Ultimate Edition',
      genre: 'Action Adventure',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/870780/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/870780/Control_Ultimate_Edition/',
      description: 'A corruptive presence has invaded the Federal Bureau of Control… Only you have the power to stop it.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i5-4690', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 780'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-7600K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'doom-eternal',
      title: 'DOOM Eternal',
      genre: 'First-Person Shooter',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/782330/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/782330/DOOM_Eternal/',
      description: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i5 @ 3.3 GHz', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1050Ti'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-6700K', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1080']
      }
  },
  {
      id: 'hollow-knight',
      title: 'Hollow Knight',
      genre: 'Metroidvania',
      platform: ['PC', 'PS4', 'Xbox One', 'Switch'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/capsule_617x353.jpg',
      price: '$14.99',
      steamUrl: 'https://store.steampowered.com/app/367520/Hollow_Knight/',
      description: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core 2 Duo E5200', 'Memory: 4 GB RAM', 'Graphics: GeForce 9800GTX+'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5', 'Memory: 8 GB RAM', 'Graphics: GeForce GTX 560']
      }
  },
  {
      id: 'stardew-valley',
      title: 'Stardew Valley',
      genre: 'Simulation',
      platform: ['PC', 'PS4', 'Xbox One', 'Switch'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/capsule_617x353.jpg',
      price: '$14.99',
      steamUrl: 'https://store.steampowered.com/app/413150/Stardew_Valley/',
      description: 'You\'ve inherited your grandfather\'s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life.',
      requirements: {
          minimum: ['OS: Windows Vista', 'Processor: 2 Ghz', 'Memory: 2 GB RAM', 'Graphics: 256mb video memory'],
          recommended: ['OS: Windows 10', 'Processor: 2 Ghz+', 'Memory: 4 GB RAM', 'Graphics: 1GB video memory']
      }
  },
  {
      id: 'cuphead',
      title: 'Cuphead',
      genre: 'Action',
      platform: ['PC', 'PS4', 'Xbox One', 'Switch'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/268910/capsule_617x353.jpg',
      price: '$19.99',
      steamUrl: 'https://store.steampowered.com/app/268910/Cuphead/',
      description: 'Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core2 Duo E8400', 'Memory: 3 GB RAM', 'Graphics: Geforce 9600 GT'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i3', 'Memory: 4 GB RAM', 'Graphics: Geforce GTX 660']
      }
  },
  {
      id: 'sekiro',
      title: 'Sekiro: Shadows Die Twice',
      genre: 'Action Adventure',
      platform: ['PC', 'PS4', 'Xbox One'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice_GOTY_Edition/',
      description: 'Explore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come face-to-face with larger than life foes in a dark and twisted world.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i3-2100', 'Memory: 4 GB RAM', 'Graphics: NVIDIA GeForce GTX 760'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-2500K', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 970']
      }
  },
  {
      id: 'skyrim',
      title: 'The Elder Scrolls V: Skyrim Special Edition',
      genre: 'RPG',
      platform: ['PC', 'PS4', 'Xbox One'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/489830/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/',
      description: 'Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel i5-750', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 470'],
          recommended: ['OS: Windows 10', 'Processor: Intel i5-2400', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 780']
      }
  },
  {
      id: 'witcher-3',
      title: 'The Witcher 3: Wild Hunt',
      genre: 'RPG',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
      description: 'As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i5-2500K', 'Memory: 6 GB RAM', 'Graphics: Nvidia GPU GeForce GTX 660'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7 3770', 'Memory: 8 GB RAM', 'Graphics: Nvidia GPU GeForce GTX 770']
      }
  },
  {
      id: 'outer-wilds',
      title: 'Outer Wilds',
      genre: 'Exploration',
      platform: ['PC', 'PS4', 'Xbox One'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/753640/capsule_617x353.jpg',
      price: '$24.99',
      steamUrl: 'https://store.steampowered.com/app/753640/Outer_Wilds/',
      description: 'Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed open world mystery about a solar system trapped in an endless time loop.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i5-2300', 'Memory: 4 GB RAM', 'Graphics: Nvidia GeForce GTX 560'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-8400', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 1060']
      }
  },
  {
      id: 'disco-elysium',
      title: 'Disco Elysium - The Final Cut',
      genre: 'RPG',
      platform: ['PC', 'PS5', 'Xbox Series X', 'Switch'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/632470/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/',
      description: 'Disco Elysium - The Final Cut is a groundbreaking role playing game. You’re a detective with a unique skill system at your disposal and a whole city block to carve your path across.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core 2 Duo', 'Memory: 2 GB RAM', 'Graphics: DirectX 11 compatible card'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'civilization-vi',
      title: 'Sid Meier’s Civilization VI',
      genre: 'Strategy',
      platform: ['PC', 'PS4', 'Xbox One', 'Switch'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289070/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/',
      description: 'Civilization VI offers new ways to interact with your world, expand your empire across the map, advance your culture, and compete against history’s greatest leaders.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i3 2.5 Ghz', 'Memory: 4 GB RAM', 'Graphics: 1 GB DirectX 11 Video Card'],
          recommended: ['OS: Windows 10', 'Processor: Fourth Generation Intel Core i5 2.5 Ghz', 'Memory: 8 GB RAM', 'Graphics: 2 GB nVidia 770']
      }
  },
  {
      id: 'divinity-original-sin-2',
      title: 'Divinity: Original Sin 2 - Definitive Edition',
      genre: 'RPG',
      platform: ['PC', 'PS4', 'Xbox One', 'Switch'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/435150/capsule_617x353.jpg',
      price: '$44.99',
      steamUrl: 'https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/',
      description: 'The eagerly anticipated sequel to the award-winning RPG. Gather your party. Master deep, tactical combat. Venture as a party of up to four.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i5', 'Memory: 4 GB RAM', 'Graphics: NVIDIA® GeForce® GTX 550'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7', 'Memory: 8 GB RAM', 'Graphics: NVIDIA® GeForce® GTX 770']
      }
  },
  {
      id: 'mass-effect-legendary-edition',
      title: 'Mass Effect Legendary Edition',
      genre: 'RPG',
      platform: ['PC', 'PS4', 'Xbox One'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1328670/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1328670/Mass_Effect_Legendary_Edition/',
      description: 'One person is all that stands between humanity and the greatest threat it’s ever faced. Relive the legend of Commander Shepard in the highly acclaimed Mass Effect trilogy.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5 3570', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 760'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-7700', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GTX 1070']
      }
  },
  {
      id: 'persona-5-royal',
      title: 'Persona 5 Royal',
      genre: 'RPG',
      platform: ['PC', 'PS5', 'Xbox Series X', 'Switch'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1687950/Persona_5_Royal/',
      description: 'Prepare for the award-winning RPG experience in this definitive edition of Persona 5 Royal, featuring a treasure trove of downloadable content included!',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i7-4790', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 650 Ti'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-4790', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 760']
      }
  },
  {
      id: 'monster-hunter-world',
      title: 'Monster Hunter: World',
      genre: 'Action RPG',
      platform: ['PC', 'PS4', 'Xbox One'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/582010/capsule_617x353.jpg',
      price: '$29.99',
      steamUrl: 'https://store.steampowered.com/app/582010/Monster_Hunter_World/',
      description: 'Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i5-4460', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 760'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7 3770', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'assassins-creed-valhalla',
      title: 'Assassin’s Creed Valhalla',
      genre: 'Action RPG',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2208920/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/',
      description: 'Become Eivor, a legendary Viking warrior on a quest for glory. Explore England’s Dark Ages as you raid your enemies, grow your settlement, and build your political power.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Ryzen 3 1200', 'Memory: 8 GB RAM', 'Graphics: AMD Radeon R9 380'],
          recommended: ['OS: Windows 10', 'Processor: Ryzen 5 1600', 'Memory: 8 GB RAM', 'Graphics: AMD Radeon RX 570']
      }
  },
  {
      id: 'it-takes-two',
      title: 'It Takes Two',
      genre: 'Platformer',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1426210/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/1426210/It_Takes_Two/',
      description: 'Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op.',
      requirements: {
          minimum: ['OS: Windows 8.1', 'Processor: Intel Core i3-2100T', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 660'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-3570K', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 980']
      }
  },
  {
      id: 'outer-worlds',
      title: 'The Outer Worlds',
      genre: 'RPG',
      platform: ['PC', 'PS4', 'Xbox One'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578650/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/578650/The_Outer_Worlds/',
      description: 'The Outer Worlds is an award-winning single-player first-person sci-fi RPG from Obsidian Entertainment and Private Division.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i3-3225', 'Memory: 4 GB RAM', 'Graphics: Nvidia GTX 650 Ti'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-7700K', 'Memory: 8 GB RAM', 'Graphics: Nvidia GTX 1060']
      }
  },
  {
      id: 'sea-of-thieves',
      title: 'Sea of Thieves',
      genre: 'Action Adventure',
      platform: ['PC', 'Xbox One'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172620/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/1172620/Sea_of_Thieves_2024_Edition/',
      description: 'Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Q9450 @ 2.6GHz', 'Memory: 4 GB RAM', 'Graphics: Nvidia GeForce GTX 650'],
          recommended: ['OS: Windows 10', 'Processor: Intel i5 4690 @ 3.5GHz', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 770']
      }
  },
  {
      id: 'warhammer-40k-darktide',
      title: 'Warhammer 40,000: Darktide',
      genre: 'Action',
      platform: ['PC', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1361210/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/1361210/Warhammer_40000_Darktide/',
      description: 'Take back the city of Tertium from hordes of bloodthirsty foes in this intense and brutal action shooter. Warhammer 40,000: Darktide is the new co-op focused experience from the award-winning team behind the Vermintide series.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel i5-6600', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 970'],
          recommended: ['OS: Windows 10', 'Processor: Intel i7-9700K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 3060']
      }
  },
  {
      id: 'overwatch-2',
      title: 'Overwatch 2',
      genre: 'Hero Shooter',
      platform: ['PC', 'PS5', 'Xbox Series X', 'Switch'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      description: 'Overwatch 2 is a critically acclaimed, team-based shooter game set in an optimistic future with an evolving roster of heroes.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i3', 'Memory: 6 GB RAM', 'Graphics: NVIDIA GeForce GTX 600'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'valorant',
      title: 'VALORANT',
      genre: 'Tactical Shooter',
      platform: ['PC'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: '',
      description: 'VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core 2 Duo', 'Memory: 4 GB RAM', 'Graphics: Intel HD 3000'],
          recommended: ['OS: Windows 10', 'Processor: Intel i3-4150', 'Memory: 4 GB RAM', 'Graphics: Geforce GT 730']
      }
  },
  {
      id: 'league-of-legends',
      title: 'League of Legends',
      genre: 'MOBA',
      platform: ['PC', 'Mac'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: '',
      description: 'League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy each other’s base.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: 3.0 GHz', 'Memory: 4 GB RAM', 'Graphics: DirectX 9.0c'],
          recommended: ['OS: Windows 10', 'Processor: 3.0 GHz Dual Core', 'Memory: 8 GB RAM', 'Graphics: GeForce 560+']
      }
  },
  {
      id: 'dota-2',
      title: 'Dota 2',
      genre: 'MOBA',
      platform: ['PC'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: 'https://store.steampowered.com/app/570/Dota_2/',
      description: 'Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it\'s their 10th hour of play or 1,000th, there\'s always something new to discover.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Dual core from Intel or AMD at 2.8 GHz', 'Memory: 4 GB RAM', 'Graphics: nVidia GeForce 8600/9600GT'],
          recommended: ['OS: Windows 10', 'Processor: Quad core from Intel or AMD', 'Memory: 8 GB RAM', 'Graphics: nVidia GeForce GTX 960']
      }
  },
  {
      id: 'call-of-duty-warzone',
      title: 'Call of Duty: Warzone',
      genre: 'Battle Royale',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1962660/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: 'https://store.steampowered.com/app/1962660/Call_of_Duty/',
      description: 'Welcome to Warzone, the massive free-to-play combat arena which now features Urzikstan, Vondel, and Ashika Island.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel i3-6100', 'Memory: 8 GB RAM', 'Graphics: GeForce GTX 670'],
          recommended: ['OS: Windows 10', 'Processor: Intel i5-2500K', 'Memory: 12 GB RAM', 'Graphics: GeForce GTX 970']
      }
  },
  {
      id: 'apex-legends',
      title: 'Apex Legends',
      genre: 'Battle Royale',
      platform: ['PC', 'PS5', 'Xbox Series X', 'Switch'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: 'https://store.steampowered.com/app/1172470/Apex_Legends/',
      description: 'Conquer with character in Apex Legends, a free-to-play Battle Royale shooter where legendary characters with powerful abilities team up to battle for fortune & glory on the fringes of the Frontier.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i3-6300', 'Memory: 6 GB RAM', 'Graphics: NVIDIA GeForce GT 640'],
          recommended: ['OS: Windows 10', 'Processor: Intel i5 3570K', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 970']
      }
  },
  {
      id: 'fortnite',
      title: 'Fortnite',
      genre: 'Battle Royale',
      platform: ['PC', 'PS5', 'Xbox Series X', 'Switch', 'Mobile'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: '',
      description: 'The Battle is Building! Drop into the Battle Royale, creative, and more in Fortnite.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i3-3225', 'Memory: 8 GB RAM', 'Graphics: Intel HD 4000'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-7300U', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 960']
      }
  },
  {
      id: 'destiny-2',
      title: 'Destiny 2',
      genre: 'FPS RPG',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1085660/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: 'https://store.steampowered.com/app/1085660/Destiny_2/',
      description: 'Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i3-3250', 'Memory: 6 GB RAM', 'Graphics: NVIDIA GeForce GTX 660'],
          recommended: ['OS: Windows 11', 'Processor: Intel Core i5-2400', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 970']
      }
  },
  {
      id: 'warframe',
      title: 'Warframe',
      genre: 'Action RPG',
      platform: ['PC', 'PS5', 'Xbox Series X', 'Switch'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/230410/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: 'https://store.steampowered.com/app/230410/Warframe/',
      description: 'Warframe is a cooperative free-to-play third person online action game set in an evolving sci-fi world.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core 2 Duo e6400', 'Memory: 4 GB RAM', 'Graphics: DirectX 11 compatible video card'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'genshin-impact',
      title: 'Genshin Impact',
      genre: 'Action RPG',
      platform: ['PC', 'PS5', 'PS4', 'Mobile'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: '',
      description: 'Genshin Impact is an open-world action RPG where you embark on a journey across Teyvat to find your lost sibling.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i5', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GT 1030'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'honkai-star-rail',
      title: 'Honkai: Star Rail',
      genre: 'Turn-Based RPG',
      platform: ['PC', 'PS5', 'Mobile'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2933150/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: '',
      description: 'Honkai: Star Rail is a new HoYoverse space fantasy RPG. Hop aboard the Astral Express and experience the galaxy\'s infinite wonders.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i3', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 650'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7', 'Memory: 12 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'rust',
      title: 'Rust',
      genre: 'Survival',
      platform: ['PC', 'PS4', 'Xbox One'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/252490/Rust/',
      description: 'The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i7-3770', 'Memory: 10 GB RAM', 'Graphics: NVIDIA GeForce GTX 670'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-4790K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 980']
      }
  },
  {
      id: 'dayz',
      title: 'DayZ',
      genre: 'Survival',
      platform: ['PC', 'PS4', 'Xbox One'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/221100/capsule_617x353.jpg',
      price: '$44.99',
      steamUrl: 'https://store.steampowered.com/app/221100/DayZ/',
      description: 'How long can you survive a post-apocalyptic world? A land overrun with an infected "zombie" population, where you compete with other survivors for limited resources.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i5-4430', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 760'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-6600K', 'Memory: 12 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'project-zomboid',
      title: 'Project Zomboid',
      genre: 'Survival',
      platform: ['PC'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/108600/capsule_617x353.jpg',
      price: '$19.99',
      steamUrl: 'https://store.steampowered.com/app/108600/Project_Zomboid/',
      description: 'Project Zomboid is the ultimate in zombie survival. Alone or in MP: you loot, build, craft, fight, farm and fish in a struggle to survive. A hardcore RPG skillset, a vast map, hugely customisable sandbox and a heroic tutorial await. So how did you die?',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Quad-core 2.70Ghz', 'Memory: 8 GB RAM', 'Graphics: 2GB VRAM'],
          recommended: ['OS: Windows 10', 'Processor: Quad-core 3.00Ghz', 'Memory: 16 GB RAM', 'Graphics: 4GB VRAM']
      }
  },
  {
      id: 'the-forest',
      title: 'The Forest',
      genre: 'Survival',
      platform: ['PC', 'PS4'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/242760/capsule_617x353.jpg',
      price: '$19.99',
      steamUrl: 'https://store.steampowered.com/app/242760/The_Forest/',
      description: 'As the lone survivor of a passenger jet crash, you find yourself in a mysterious forest battling to stay alive against a society of cannibalistic mutants.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Dual-Core 2.4 GHz', 'Memory: 4 GB RAM', 'Graphics: NVIDIA GeForce 8800GT'],
          recommended: ['OS: Windows 10', 'Processor: Quad Core', 'Memory: 4 GB RAM', 'Graphics: NVIDIA GeForce GTX 560']
      }
  },
  {
      id: 'sons-of-the-forest',
      title: 'Sons of the Forest',
      genre: 'Survival',
      platform: ['PC'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1326420/capsule_617x353.jpg',
      price: '$29.99',
      steamUrl: 'https://store.steampowered.com/app/1326420/Sons_Of_The_Forest/',
      description: 'Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: INTEL CORE I5-8400', 'Memory: 12 GB RAM', 'Graphics: NVIDIA GEFORCE GTX 1060'],
          recommended: ['OS: Windows 10', 'Processor: INTEL CORE I7-8700K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GEFORCE RTX 2070']
      }
  },
  {
      id: 'subnautica',
      title: 'Subnautica',
      genre: 'Survival',
      platform: ['PC', 'PS4', 'Xbox One', 'Switch'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/264710/capsule_617x353.jpg',
      price: '$29.99',
      steamUrl: 'https://store.steampowered.com/app/264710/Subnautica/',
      description: 'Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more.',
      requirements: {
          minimum: ['OS: Windows Vista', 'Processor: Intel Haswell 2 cores / 4 threads @ 2.5Ghz', 'Memory: 4 GB RAM', 'Graphics: Intel HD 4600'],
          recommended: ['OS: Windows 10', 'Processor: Intel Haswell 4 cores / 8 threads @ 3.2Ghz', 'Memory: 8 GB RAM', 'Graphics: Nvidia GTX 550 Ti']
      }
  },
  {
      id: 'ark-survival-evolved',
      title: 'ARK: Survival Evolved',
      genre: 'Survival',
      platform: ['PC', 'PS4', 'Xbox One', 'Switch'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/346110/capsule_617x353.jpg',
      price: '$14.99',
      steamUrl: 'https://store.steampowered.com/app/346110/ARK_Survival_Evolved/',
      description: 'Stranded on the shores of a mysterious island, you must learn to survive. Use your cunning to kill or tame the primeval creatures roaming the land, and encounter other players to survive, dominate... and escape!',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i5-2400', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 670'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GTX 1060']
      }
  },
  {
      id: 'terraria',
      title: 'Terraria',
      genre: 'Sandbox',
      platform: ['PC', 'PS4', 'Xbox One', 'Switch', 'Mobile'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/capsule_617x353.jpg',
      price: '$9.99',
      steamUrl: 'https://store.steampowered.com/app/105600/Terraria/',
      description: 'Dig, Fight, Explore, Build: The very world is at your fingertips as you fight for survival, fortune, and glory.',
      requirements: {
          minimum: ['OS: Windows XP', 'Processor: 2.0 GHz', 'Memory: 2.5 GB RAM', 'Graphics: 128mb Video Memory'],
          recommended: ['OS: Windows 10', 'Processor: Dual Core 3.0 Ghz', 'Memory: 4 GB RAM', 'Graphics: 256mb Video Memory']
      }
  },
  {
      id: 'minecraft',
      title: 'Minecraft',
      genre: 'Sandbox',
      platform: ['PC', 'Console', 'Mobile'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$26.95',
      steamUrl: '',
      description: 'Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i3-3210', 'Memory: 4 GB RAM', 'Graphics: Intel HD Graphics 4000'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-4690', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce 700 Series']
      }
  },
  {
      id: 'roblox',
      title: 'Roblox',
      genre: 'Game Creation System',
      platform: ['PC', 'Console', 'Mobile'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: '',
      description: 'Roblox is the ultimate virtual universe that lets you create, share experiences with friends, and be anything you can imagine.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: 1.6 GHz', 'Memory: 1 GB RAM', 'Graphics: DirectX 10'],
          recommended: ['OS: Windows 10', 'Processor: 2.0 GHz+', 'Memory: 4 GB RAM', 'Graphics: Dedicated Video Card']
      }
  },
  {
      id: 'among-us',
      title: 'Among Us',
      genre: 'Party',
      platform: ['PC', 'Console', 'Mobile'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/945360/capsule_617x353.jpg',
      price: '$4.99',
      steamUrl: 'https://store.steampowered.com/app/945360/Among_Us/',
      description: 'Play with 4-15 player online or via local WiFi as you attempt to prep your spaceship for departure, but beware as one or more random players among the Crew are Impostors bent on killing everyone!',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: SSE2 instruction set support', 'Memory: 1 GB RAM', 'Graphics: DirectX 10'],
          recommended: ['OS: Windows 10', 'Processor: SSE2 instruction set support', 'Memory: 2 GB RAM', 'Graphics: DirectX 11']
      }
  },
  {
      id: 'phasmophobia',
      title: 'Phasmophobia',
      genre: 'Horror',
      platform: ['PC'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/739630/capsule_617x353.jpg',
      price: '$13.99',
      steamUrl: 'https://store.steampowered.com/app/739630/Phasmophobia/',
      description: 'Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost hunting equipment at your disposal in order to gather as much evidence as you can.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-4590', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 970'],
          recommended: ['OS: Windows 10', 'Processor: Intel i5-10600', 'Memory: 16 GB RAM', 'Graphics: NVIDIA RTX 2060']
      }
  },
  {
      id: 'lethal-company',
      title: 'Lethal Company',
      genre: 'Horror',
      platform: ['PC'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/capsule_617x353.jpg',
      price: '$9.99',
      steamUrl: 'https://store.steampowered.com/app/1966720/Lethal_Company/',
      description: 'A co-op horror about scavenging at abandoned moons to sell scrap to the Company.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-7400', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1050'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-7700', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 1070']
      }
  },
  {
      id: 'left-4-dead-2',
      title: 'Left 4 Dead 2',
      genre: 'FPS',
      platform: ['PC', 'Xbox 360'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/550/capsule_617x353.jpg',
      price: '$9.99',
      steamUrl: 'https://store.steampowered.com/app/550/Left_4_Dead_2/',
      description: 'Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Pentium 4 3.0GHz', 'Memory: 2 GB RAM', 'Graphics: Video card with 128 MB'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core 2 Duo 2.4GHz', 'Memory: 4 GB RAM', 'Graphics: Video card with 512 MB']
      }
  },
  {
      id: 'portal-2',
      title: 'Portal 2',
      genre: 'Puzzle',
      platform: ['PC', 'PS3', 'Xbox 360', 'Switch'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620/capsule_617x353.jpg',
      price: '$9.99',
      steamUrl: 'https://store.steampowered.com/app/620/Portal_2/',
      description: 'The "Perpetual Testing Initiative" has been expanded to allow you to design co-op puzzles for you and your friends!',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: 3.0 GHz P4', 'Memory: 2 GB RAM', 'Graphics: Video card with 128 MB'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core 2 Duo 2.4GHz', 'Memory: 4 GB RAM', 'Graphics: Video card with 512 MB']
      }
  },
  {
      id: 'half-life-alyx',
      title: 'Half-Life: Alyx',
      genre: 'VR FPS',
      platform: ['PC (VR Only)'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/546560/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/546560/HalfLife_Alyx/',
      description: 'Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Core i5-7500', 'Memory: 12 GB RAM', 'Graphics: GTX 1060 / RX 580 - 6GB VRAM'],
          recommended: ['OS: Windows 10', 'Processor: Core i7-9700K', 'Memory: 16 GB RAM', 'Graphics: RTX 2070']
      }
  },
  {
      id: 'cities-skylines-ii',
      title: 'Cities: Skylines II',
      genre: 'Simulation',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/949230/capsule_617x353.jpg',
      price: '$49.99',
      steamUrl: 'https://store.steampowered.com/app/949230/Cities_Skylines_II/',
      description: 'Raise a city from the ground up and transform it into a thriving metropolis with the most realistic city builder ever. Push your creativity and problem-solving to build on a scale you’ve never experienced.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i7-6700K', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 970'],
          recommended: ['OS: Windows 11', 'Processor: Intel Core i5-12600K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 3080']
      }
  },
  {
      id: 'the-sims-4',
      title: 'The Sims 4',
      genre: 'Simulation',
      platform: ['PC', 'PS4', 'Xbox One'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222670/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: 'https://store.steampowered.com/app/1222670/The_Sims_4/',
      description: 'Play with life and discover the possibilities. Unleash your imagination and create a world of Sims that’s wholly unique. Explore and customize every detail from Sims to homes, and much more.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i3-3220', 'Memory: 4 GB RAM', 'Graphics: NVIDIA GeForce 6600'],
          recommended: ['OS: Windows 11', 'Processor: Intel Core i5-7400', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'farming-simulator-22',
      title: 'Farming Simulator 22',
      genre: 'Simulation',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1248130/capsule_617x353.jpg',
      price: '$29.99',
      steamUrl: 'https://store.steampowered.com/app/1248130/Farming_Simulator_22/',
      description: 'Create your farm and let the good times grow! Harvest crops, tend to animals, manage productions, and take on seasonal challenges.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-3330', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 660'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-5675C', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 1060']
      }
  },
  {
      id: 'euro-truck-simulator-2',
      title: 'Euro Truck Simulator 2',
      genre: 'Simulation',
      platform: ['PC'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/227300/capsule_617x353.jpg',
      price: '$19.99',
      steamUrl: 'https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/',
      description: 'Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances!',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Dual core CPU 2.4 GHz', 'Memory: 4 GB RAM', 'Graphics: GeForce GTS 450-class'],
          recommended: ['OS: Windows 10', 'Processor: Quad core CPU 3.0 GHz', 'Memory: 6 GB RAM', 'Graphics: GeForce GTX 760-class']
      }
  },
  {
      id: 'american-truck-simulator',
      title: 'American Truck Simulator',
      genre: 'Simulation',
      platform: ['PC'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/270880/capsule_617x353.jpg',
      price: '$19.99',
      steamUrl: 'https://store.steampowered.com/app/270880/American_Truck_Simulator/',
      description: 'Experience legendary American trucks and deliver various cargoes across sunny California, sandy Nevada, and the Grand Canyon State of Arizona.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Dual core CPU 2.4 GHz', 'Memory: 4 GB RAM', 'Graphics: GeForce GTS 450-class'],
          recommended: ['OS: Windows 10', 'Processor: Quad core CPU 3.0 GHz', 'Memory: 6 GB RAM', 'Graphics: GeForce GTX 760-class']
      }
  },
  {
      id: 'snowrunner',
      title: 'SnowRunner',
      genre: 'Simulation',
      platform: ['PC', 'PS5', 'Xbox Series X', 'Switch'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1465360/capsule_617x353.jpg',
      price: '$29.99',
      steamUrl: 'https://store.steampowered.com/app/1465360/SnowRunner/',
      description: 'Get ready for the next-generation off-road experience! SnowRunner puts you in the driver’s seat of powerful vehicles as you conquer extreme open environments with the most advanced terrain simulation ever.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel i3-4130', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 660'],
          recommended: ['OS: Windows 10', 'Processor: Intel i7-8700', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 970']
      }
  },
  {
      id: 'beamng-drive',
      title: 'BeamNG.drive',
      genre: 'Simulation',
      platform: ['PC'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/284160/capsule_617x353.jpg',
      price: '$24.99',
      steamUrl: 'https://store.steampowered.com/app/284160/BeamNGdrive/',
      description: 'A dynamic soft-body physics vehicle simulator capable of doing just about anything.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i3', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 550 Ti'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 970']
      }
  },
  {
      id: 'assetto-corsa',
      title: 'Assetto Corsa',
      genre: 'Racing',
      platform: ['PC', 'PS4', 'Xbox One'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/244210/capsule_617x353.jpg',
      price: '$19.99',
      steamUrl: 'https://store.steampowered.com/app/244210/Assetto_Corsa/',
      description: 'Assetto Corsa features an advanced DirectX 11 graphics engine that recreates an immersive environment, dynamic lighting and realistic materials and surfaces.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: AMD Athlon X2 2.8 GHZ', 'Memory: 2 GB RAM', 'Graphics: DirectX 10.1'],
          recommended: ['OS: Windows 10', 'Processor: AMD 六核 CPU', 'Memory: 6 GB RAM', 'Graphics: DirectX 11']
      }
  },
  {
      id: 'i-racing',
      title: 'iRacing',
      genre: 'Racing',
      platform: ['PC'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/266410/capsule_617x353.jpg',
      price: 'Subscription',
      steamUrl: 'https://store.steampowered.com/app/266410/iRacing/',
      description: 'We are the world’s premier online racing simulation. We provide a complete and realistic racing experience from the comfort of your own home.',
      requirements: {
          minimum: ['OS: Windows 8.1', 'Processor: 4 cores', 'Memory: 16 GB RAM', 'Graphics: 2GB VRAM'],
          recommended: ['OS: Windows 10', 'Processor: 6 cores', 'Memory: 32 GB RAM', 'Graphics: 6GB VRAM']
      }
  },
  {
      id: 'dirt-rally-2',
      title: 'DiRT Rally 2.0',
      genre: 'Racing',
      platform: ['PC', 'PS4', 'Xbox One'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/680420/capsule_617x353.jpg',
      price: '$19.99',
      steamUrl: 'https://store.steampowered.com/app/680420/DiRT_Rally_20/',
      description: 'DiRT Rally 2.0 dares you to carve your way through a selection of iconic rally locations from across the globe, in the most powerful off-road vehicles ever made.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: AMD FX4300', 'Memory: 8 GB RAM', 'Graphics: AMD HD7750'],
          recommended: ['OS: Windows 10', 'Processor: AMD Ryzen 5 2600X', 'Memory: 8 GB RAM', 'Graphics: AMD RX 580']
      }
  },
  {
      id: 'f1-23',
      title: 'F1® 23',
      genre: 'Racing',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2108330/capsule_617x353.jpg',
      price: '$69.99',
      steamUrl: 'https://store.steampowered.com/app/2108330/F1_23/',
      description: 'Be the last to brake in EA SPORTS™ F1® 23, the official videogame of the 2023 FIA Formula One World Championship™.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i3-2130', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 1050 Ti'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5 9600K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GTX 1660 Ti']
      }
  },
  {
      id: 'rocket-league',
      title: 'Rocket League',
      genre: 'Sports',
      platform: ['PC', 'Console'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: '',
      description: 'Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: 2.5 GHz Dual core', 'Memory: 4 GB RAM', 'Graphics: NVIDIA GeForce 760'],
          recommended: ['OS: Windows 10', 'Processor: 3.0+ GHz Quad core', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1060']
      }
  },
  {
      id: 'fifa-23',
      title: 'EA SPORTS™ FIFA 23',
      genre: 'Sports',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1811260/capsule_617x353.jpg',
      price: '$69.99',
      steamUrl: 'https://store.steampowered.com/app/1811260/EA_SPORTS_FIFA_23/',
      description: 'Experience the pinnacle of women’s international football in EA SPORTS™ FIFA 23 with the FIFA Women’s World Cup Australia and New Zealand 2023™.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5 6600K', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1050 Ti'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7 6700', 'Memory: 12 GB RAM', 'Graphics: NVIDIA GeForce GTX 1660']
      }
  },
  {
      id: 'nba-2k24',
      title: 'NBA 2K24',
      genre: 'Sports',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2338770/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/2338770/NBA_2K24/',
      description: 'Experience hoops culture in NBA 2K24. Enjoy loads of action and limitless personalized MyPLAYER options in MyCAREER.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i3-2100', 'Memory: 4 GB RAM', 'Graphics: NVIDIA GeForce GT 450'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-4430', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 770']
      }
  },
  {
      id: 'madden-24',
      title: 'Madden NFL 24',
      genre: 'Sports',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2140330/capsule_617x353.jpg',
      price: '$69.99',
      steamUrl: 'https://store.steampowered.com/app/2140330/Madden_NFL_24/',
      description: 'Experience the newest iteration of FieldSENSE™ in Madden NFL 24. More realistic character movement and smarter AI gives you control to play out your gameplay strategy with the confidence to dominate any opponent.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5 6700K', 'Memory: 10 GB RAM', 'Graphics: NVIDIA GeForce GTX 1050 Ti'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7 8700', 'Memory: 12 GB RAM', 'Graphics: NVIDIA GeForce GTX 1660']
      }
  },
  {
      id: 'pga-tour-2k23',
      title: 'PGA TOUR 2K23',
      genre: 'Sports',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1588010/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1588010/PGA_TOUR_2K23/',
      description: 'Hit the links with more swagger in PGA TOUR 2K23. Now featuring playable male and female pros, including Tiger Woods, new licensed courses, and more.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i5-4670', 'Memory: 6 GB RAM', 'Graphics: NVIDIA GeForce GTX 660'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-6700', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 970']
      }
  },
  {
      id: 'the-last-of-us-part-i',
      title: 'The Last of Us™ Part I',
      genre: 'Action Adventure',
      platform: ['PC', 'PS5'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888590/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1888590/The_Last_of_Us_Part_I/',
      description: 'Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: AMD Ryzen 5 1500X', 'Memory: 16 GB RAM', 'Graphics: AMD Radeon RX 470'],
          recommended: ['OS: Windows 10', 'Processor: AMD Ryzen 5 3600X', 'Memory: 16 GB RAM', 'Graphics: AMD Radeon RX 5700 XT']
      }
  },
  {
      id: 'uncharted-legacy-of-thieves',
      title: 'UNCHARTED™: Legacy of Thieves Collection',
      genre: 'Action Adventure',
      platform: ['PC', 'PS5'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1659420/capsule_617x353.jpg',
      price: '$49.99',
      steamUrl: 'https://store.steampowered.com/app/1659420/UNCHARTED_Legacy_of_Thieves_Collection/',
      description: 'Are you ready to seek your fortune? Seek your legacy and leave your mark on the map in UNCHARTED: Legacy of Thieves Collection.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel i5-4430', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 960'],
          recommended: ['OS: Windows 10', 'Processor: Intel i7-4770', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GTX 1060']
      }
  },
  {
      id: 'ratchet-and-clank-rift-apart',
      title: 'Ratchet & Clank: Rift Apart',
      genre: 'Action Adventure',
      platform: ['PC', 'PS5'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1895880/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1895880/Ratchet__Clank_Rift_Apart/',
      description: 'Blast your way through an interdimensional adventure with Ratchet and Clank – now on PC! Help them take on an evil emperor from another reality.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i3-8100', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 960'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-8400', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2060']
      }
  },
  {
      id: 'star-wars-jedi-survivor',
      title: 'STAR WARS Jedi: Survivor™',
      genre: 'Action Adventure',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1774580/capsule_617x353.jpg',
      price: '$69.99',
      steamUrl: 'https://store.steampowered.com/app/1774580/STAR_WARS_Jedi_Survivor/',
      description: 'The story of Cal Kestis continues in STAR WARS Jedi: Survivor™, a third-person galaxy-spanning action-adventure game from Respawn Entertainment.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: 4 core / 8 threads', 'Memory: 8 GB RAM', 'Graphics: 8GB VRAM'],
          recommended: ['OS: Windows 10', 'Processor: 4 core / 8 threads', 'Memory: 16 GB RAM', 'Graphics: 8GB VRAM']
      }
  },
  {
      id: 'dead-space-remake',
      title: 'Dead Space',
      genre: 'Survival Horror',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1693980/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1693980/Dead_Space/',
      description: 'The sci-fi survival-horror classic Dead Space returns, completely rebuilt from the ground up to offer a deeper, more immersive experience.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Ryzen 5 2600X', 'Memory: 16 GB RAM', 'Graphics: AMD Radeon RX 5700'],
          recommended: ['OS: Windows 10', 'Processor: Ryzen 5 5600X', 'Memory: 16 GB RAM', 'Graphics: AMD Radeon RX 6700 XT']
      }
  },
  {
      id: 'hogwarts-legacy',
      title: 'Hogwarts Legacy',
      genre: 'Action RPG',
      platform: ['PC', 'PS5', 'Xbox Series X', 'Switch'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1549280/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1549280/Hogwarts_Legacy/',
      description: 'Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Now you can take control of the action and be at the center of your own adventure in the wizarding world.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-6600', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 960'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-8700', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 1080 Ti']
      }
  },
  {
      id: 'call-of-duty-modern-warfare-iii',
      title: 'Call of Duty®: Modern Warfare® III',
      genre: 'Action',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2140330/capsule_617x353.jpg',
      price: '$69.99',
      steamUrl: 'https://store.steampowered.com/app/2519060/Call_of_Duty_Modern_Warfare_III/',
      description: 'Adapt or die in a fight against the ultimate threat. In the direct sequel to the record-breaking Call of Duty®: Modern Warfare® II, Captain Price and Task Force 141 face off against the ultimate threat.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-6600K', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 960'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-6700K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce GTX 1080']
      }
  },
  {
      id: 'battlefield-2042',
      title: 'Battlefield™ 2042',
      genre: 'Action',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1517290/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1517290/Battlefield_2042/',
      description: 'Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: AMD Ryzen 5 1600', 'Memory: 8 GB RAM', 'Graphics: AMD Radeon RX 560'],
          recommended: ['OS: Windows 10', 'Processor: AMD Ryzen 7 2700X', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 3060']
      }
  },
  {
      id: 'rainbow-six-siege',
      title: 'Tom Clancy\'s Rainbow Six® Siege',
      genre: 'Action',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/capsule_617x353.jpg',
      price: '$19.99',
      steamUrl: 'https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/',
      description: 'Master the art of destruction and gadgetry in Tom Clancy’s Rainbow Six Siege. Face intense close quarters combat, high lethality, tactical decision making, team play and explosive action within every moment.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i3 530', 'Memory: 6 GB RAM', 'Graphics: NVIDIA GeForce GTX 460'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-2500K', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 670']
      }
  },
  {
      id: 'cs-2',
      title: 'Counter-Strike 2',
      genre: 'Action',
      platform: ['PC'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: 'https://store.steampowered.com/app/730/CounterStrike_2/',
      description: 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by the millions of players from across the globe. And now the next chapter in the CS saga is about to begin. This is Counter-Strike 2.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: 4 hardware threads CPU', 'Memory: 8 GB RAM', 'Graphics: 1GB VRAM'],
          recommended: ['OS: Windows 10', 'Processor: 4 hardware threads CPU', 'Memory: 16 GB RAM', 'Graphics: 2GB VRAM']
      }
  },
  {
      id: 'team-fortress-2',
      title: 'Team Fortress 2',
      genre: 'Action',
      platform: ['PC'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/440/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: 'https://store.steampowered.com/app/440/Team_Fortress_2/',
      description: 'Nine distinct classes provide a broad range of tactical abilities and personalities. Constantly updated with new game modes, maps, equipment and, most importantly, hats!',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: 1.7 GHz Processor', 'Memory: 512 MB RAM', 'Graphics: DirectX 8.1 level Graphics Card'],
          recommended: ['OS: Windows 10', 'Processor: Pentium 4 processor', 'Memory: 1 GB RAM', 'Graphics: DirectX 9 level Graphics Card']
      }
  },
  {
      id: 'payday-3',
      title: 'PAYDAY 3',
      genre: 'Action',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1272080/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/1272080/PAYDAY_3/',
      description: 'PAYDAY 3 is the much-anticipated sequel to one of the most popular co-op shooters ever. Step out of retirement back into the life of crime in the shoes of the Payday Gang.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-9400F', 'Memory: 16 GB RAM', 'Graphics: Nvidia GTX 1650'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i7-9700K', 'Memory: 16 GB RAM', 'Graphics: Nvidia GTX 1080']
      }
  },
  {
      id: 'back-4-blood',
      title: 'Back 4 Blood',
      genre: 'Action',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/924970/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/924970/Back_4_Blood/',
      description: 'Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Core i5-6600', 'Memory: 8 GB RAM', 'Graphics: GeForce GTX 1050 Ti'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-8400', 'Memory: 12 GB RAM', 'Graphics: GeForce GTX 1070']
      }
  },
  {
      id: 'dying-light-2',
      title: 'Dying Light 2 Stay Human',
      genre: 'Action',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/534380/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/534380/Dying_Light_2_Stay_Human/',
      description: 'Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again. The City, one of the last large human settlements, is torn by conflict. Civilization has fallen back into the Dark Ages.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i3-9100', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GTX 1050 Ti'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-8600K', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2060']
      }
  },
  {
      id: 'dead-island-2',
      title: 'Dead Island 2',
      genre: 'Action',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: '',
      description: 'Dead Island 2 is a thrilling First-Person Action RPG, stylish, vibrant and flooded with zombie infection. Explore iconic, gore-drenched Los Angeles.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: AMD FX-9590', 'Memory: 10 GB RAM', 'Graphics: AMD Radeon RX 480'],
          recommended: ['OS: Windows 10', 'Processor: AMD Ryzen 5 5600X', 'Memory: 16 GB RAM', 'Graphics: AMD Radeon RX 6600 XT']
      }
  },
  {
      id: 'sifu',
      title: 'Sifu',
      genre: 'Action',
      platform: ['PC', 'PS5', 'Xbox Series X', 'Switch'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2138710/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/2138710/Sifu/',
      description: 'Sifu is a realistic third-person brawler with tight Kung Fu combat mechanics and cinematic martial arts action embarking you on a path for revenge.',
      requirements: {
          minimum: ['OS: Windows 8.1', 'Processor: Core i5-3470', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GeForce GT 640'],
          recommended: ['OS: Windows 10', 'Processor: Core i7-6700K', 'Memory: 10 GB RAM', 'Graphics: NVIDIA GeForce GTX 970']
      }
  },
  {
      id: 'ghostrunner-2',
      title: 'Ghostrunner 2',
      genre: 'Action',
      platform: ['PC', 'PS5', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2144740/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/2144740/Ghostrunner_2/',
      description: 'Ghostrunner 2 is a hardcore FPP slasher set in a post-apocalyptic, cyberpunk future. Become the ultimate cyber ninja and prepare for epic boss fights, improved skills, an interactive story, new game modes, and captivating synthwave soundtrack.',
      requirements: {
          minimum: ['OS: Windows 10 x64', 'Processor: Intel Core i5-4590', 'Memory: 8 GB RAM', 'Graphics: GeForce GTX 960'],
          recommended: ['OS: Windows 10 x64', 'Processor: Intel Core i9-9900k', 'Memory: 16 GB RAM', 'Graphics: GeForce RTX 2070 Super']
      }
  },
  {
      id: 'katana-zero',
      title: 'Katana ZERO',
      genre: 'Action',
      platform: ['PC', 'Switch'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/460950/capsule_617x353.jpg',
      price: '$14.99',
      steamUrl: 'https://store.steampowered.com/app/460950/Katana_ZERO/',
      description: 'Katana ZERO is a stylish neo-noir, action-platformer featuring breakneck action and instant-death combat. Slash, dash, and manipulate time to unravel your past in a beautifully brutal acrobatic display.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Pentium E2180', 'Memory: 1 GB RAM', 'Graphics: GeForce 7600 GT'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i3-3240', 'Memory: 2 GB RAM', 'Graphics: GeForce 8800 GTS']
      }
  },
  {
      id: 'hotline-miami',
      title: 'Hotline Miami',
      genre: 'Action',
      platform: ['PC', 'Console'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/219150/capsule_617x353.jpg',
      price: '$9.99',
      steamUrl: 'https://store.steampowered.com/app/219150/Hotline_Miami/',
      description: 'Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat.',
      requirements: {
          minimum: ['OS: Windows XP', 'Processor: 1.2 GHz', 'Memory: 512 MB RAM', 'Graphics: DirectX 8-compatible'],
          recommended: ['OS: Windows 10', 'Processor: 1.4 GHz+', 'Memory: 1 GB RAM', 'Graphics: DirectX 9-compatible']
      }
  },
  {
      id: 'risk-of-rain-2',
      title: 'Risk of Rain 2',
      genre: 'Roguelike',
      platform: ['PC', 'Console'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/632360/capsule_617x353.jpg',
      price: '$24.99',
      steamUrl: 'https://store.steampowered.com/app/632360/Risk_of_Rain_2/',
      description: 'Escape a chaotic alien planet by fighting through hordes of crazed monsters – with your friends, or on your own. Combine loot in surprising ways and master each character until you become the havoc you feared upon your first crashed landing.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core i3-6100', 'Memory: 4 GB RAM', 'Graphics: NVIDIA GTX 580'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5-4670K', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 660']
      }
  },
  {
      id: 'slay-the-spire',
      title: 'Slay the Spire',
      genre: 'Roguelike',
      platform: ['PC', 'Console', 'Mobile'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/646570/capsule_617x353.jpg',
      price: '$24.99',
      steamUrl: 'https://store.steampowered.com/app/646570/Slay_the_Spire/',
      description: 'We fused card games and roguelikes together to make the best single-player deckbuilder we could. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and Slay the Spire!',
      requirements: {
          minimum: ['OS: Windows XP', 'Processor: 2.0 Ghz', 'Memory: 2 GB RAM', 'Graphics: 1Gb Video Memory'],
          recommended: ['OS: Windows 10', 'Processor: 2.0 Ghz+', 'Memory: 4 GB RAM', 'Graphics: 2Gb Video Memory']
      }
  },
  {
      id: 'vampire-survivors',
      title: 'Vampire Survivors',
      genre: 'Roguelike',
      platform: ['PC', 'Console', 'Mobile'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1794680/capsule_617x353.jpg',
      price: '$4.99',
      steamUrl: 'https://store.steampowered.com/app/1794680/Vampire_Survivors/',
      description: 'Mow down thousands of night creatures and survive until dawn! Vampire Survivors is a gothic horror casual game with rogue-lite elements, where your choices can allow you to quickly snowball against the hundreds of monsters that get thrown at you.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Pentium 4', 'Memory: 1 GB RAM', 'Graphics: DX11 compatible'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i3', 'Memory: 4 GB RAM', 'Graphics: DX12 compatible']
      }
  },
  {
      id: 'dead-cells',
      title: 'Dead Cells',
      genre: 'Roguelike',
      platform: ['PC', 'Console', 'Mobile'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/588650/capsule_617x353.jpg',
      price: '$24.99',
      steamUrl: 'https://store.steampowered.com/app/588650/Dead_Cells/',
      description: 'Dead Cells is a rogue-lite, metroidvania-inspired action-platformer. You\'ll explore a sprawling, ever-changing castle... assuming you\'re able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel i5', 'Memory: 2 GB RAM', 'Graphics: Nvidia 450 GTS'],
          recommended: ['OS: Windows 10', 'Processor: Intel i5', 'Memory: 4 GB RAM', 'Graphics: Nvidia GTX 460']
      }
  },
  {
      id: 'enter-the-gungeon',
      title: 'Enter the Gungeon',
      genre: 'Roguelike',
      platform: ['PC', 'Console'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/311690/capsule_617x353.jpg',
      price: '$14.99',
      steamUrl: 'https://store.steampowered.com/app/311690/Enter_the_Gungeon/',
      description: 'Enter the Gungeon is a gunfight dungeon crawler following a band of misfits seeking to shoot, loot, dodge roll and table-flip their way to personal absolution by reaching the legendary Gungeon’s ultimate treasure: the gun that can kill the past.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core 2 Duo E6320', 'Memory: 2 GB RAM', 'Graphics: GeForce 7600 GS'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i3', 'Memory: 4 GB RAM', 'Graphics: GeForce GTX 460']
      }
  },
  {
      id: 'hollow-knight',
      title: 'Hollow Knight',
      genre: 'Metroidvania',
      platform: ['PC', 'Console'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/capsule_617x353.jpg',
      price: '$14.99',
      steamUrl: 'https://store.steampowered.com/app/367520/Hollow_Knight/',
      description: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: Intel Core 2 Duo E4600', 'Memory: 4 GB RAM', 'Graphics: GeForce 9800GTX+'],
          recommended: ['OS: Windows 10', 'Processor: Intel Core i5', 'Memory: 8 GB RAM', 'Graphics: GeForce GTX 560']
      }
  },
  {
      id: 'ori-and-the-will-of-the-wisps',
      title: 'Ori and the Will of the Wisps',
      genre: 'Metroidvania',
      platform: ['PC', 'Xbox One', 'Switch'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1057090/capsule_617x353.jpg',
      price: '$29.99',
      steamUrl: 'https://store.steampowered.com/app/1057090/Ori_and_the_Will_of_the_Wisps/',
      description: 'Play the critically acclaimed masterpiece. Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles on your quest to unravel Ori’s destiny.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: AMD Athlon X4', 'Memory: 8 GB RAM', 'Graphics: AMD Radeon R7 260'],
          recommended: ['OS: Windows 10', 'Processor: AMD Ryzen 3', 'Memory: 8 GB RAM', 'Graphics: AMD Radeon RX 570']
      }
  },
  {
      id: 'stardew-valley',
      title: 'Stardew Valley',
      genre: 'Simulation',
      platform: ['PC', 'Console', 'Mobile'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/capsule_617x353.jpg',
      price: '$14.99',
      steamUrl: 'https://store.steampowered.com/app/413150/Stardew_Valley/',
      description: 'You\'ve inherited your grandfather\'s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?',
      requirements: {
          minimum: ['OS: Windows 7', 'Processor: 2 Ghz', 'Memory: 2 GB RAM', 'Graphics: 256mb video memory'],
          recommended: ['OS: Windows 10', 'Processor: 2.2 Ghz+', 'Memory: 4 GB RAM', 'Graphics: 512mb video memory']
      }
  },
  {
      id: 'animal-crossing-new-horizons',
      title: 'Animal Crossing: New Horizons',
      genre: 'Simulation',
      platform: ['Switch'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: '',
      description: 'Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game.',
      requirements: {
          minimum: ['N/A (Nintendo Switch Exclusive)'],
          recommended: ['N/A (Nintendo Switch Exclusive)']
      }
  },
  {
      id: 'the-legend-of-zelda-breath-of-the-wild',
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Action Adventure',
      platform: ['Switch', 'Wii U'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: '',
      description: 'Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.',
      requirements: {
          minimum: ['N/A (Nintendo Switch Exclusive)'],
          recommended: ['N/A (Nintendo Switch Exclusive)']
      }
  },
  {
      id: 'the-legend-of-zelda-tears-of-the-kingdom',
      title: 'The Legend of Zelda: Tears of the Kingdom',
      genre: 'Action Adventure',
      platform: ['Switch'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$69.99',
      steamUrl: '',
      description: 'An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda: Tears of the Kingdom for Nintendo Switch.',
      requirements: {
          minimum: ['N/A (Nintendo Switch Exclusive)'],
          recommended: ['N/A (Nintendo Switch Exclusive)']
      }
  },
  {
      id: 'super-mario-odyssey',
      title: 'Super Mario Odyssey',
      genre: 'Platformer',
      platform: ['Switch'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: '',
      description: 'Explore incredible places far from the Mushroom Kingdom as you join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure.',
      requirements: {
          minimum: ['N/A (Nintendo Switch Exclusive)'],
          recommended: ['N/A (Nintendo Switch Exclusive)']
      }
  },
  {
      id: 'super-smash-bros-ultimate',
      title: 'Super Smash Bros. Ultimate',
      genre: 'Fighting',
      platform: ['Switch'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: '',
      description: 'Legendary game worlds and fighters collide in the ultimate showdown—a new entry in the Super Smash Bros. series for the Nintendo Switch system!',
      requirements: {
          minimum: ['N/A (Nintendo Switch Exclusive)'],
          recommended: ['N/A (Nintendo Switch Exclusive)']
      }
  },
  {
      id: 'mario-kart-8-deluxe',
      title: 'Mario Kart 8 Deluxe',
      genre: 'Racing',
      platform: ['Switch'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: '',
      description: 'Race and battle your friends in the definitive version of Mario Kart 8.',
      requirements: {
          minimum: ['N/A (Nintendo Switch Exclusive)'],
          recommended: ['N/A (Nintendo Switch Exclusive)']
      }
  },
  {
      id: 'splatoon-3',
      title: 'Splatoon 3',
      genre: 'Third-Person Shooter',
      platform: ['Switch'],
      rating: 'E10+',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: '',
      description: 'Enter the Splatlands, a sun-scorched desert inhabited by battle-hardened Inklings and Octolings.',
      requirements: {
          minimum: ['N/A (Nintendo Switch Exclusive)'],
          recommended: ['N/A (Nintendo Switch Exclusive)']
      }
  },
  {
      id: 'metroid-dread',
      title: 'Metroid Dread',
      genre: 'Metroidvania',
      platform: ['Switch'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: '',
      description: 'Join intergalactic bounty hunter Samus Aran in her first new 2D Metroid™ story in 19 years.',
      requirements: {
          minimum: ['N/A (Nintendo Switch Exclusive)'],
          recommended: ['N/A (Nintendo Switch Exclusive)']
      }
  },
  {
      id: 'pokemon-scarlet',
      title: 'Pokémon Scarlet',
      genre: 'RPG',
      platform: ['Switch'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: '',
      description: 'Catch, battle, and train Pokémon in the Paldea Region, a vast land filled with lakes, towering peaks, wastelands, small towns, and sprawling cities.',
      requirements: {
          minimum: ['N/A (Nintendo Switch Exclusive)'],
          recommended: ['N/A (Nintendo Switch Exclusive)']
      }
  },
  {
      id: 'pokemon-violet',
      title: 'Pokémon Violet',
      genre: 'RPG',
      platform: ['Switch'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: '',
      description: 'Catch, battle, and train Pokémon in the Paldea Region, a vast land filled with lakes, towering peaks, wastelands, small towns, and sprawling cities.',
      requirements: {
          minimum: ['N/A (Nintendo Switch Exclusive)'],
          recommended: ['N/A (Nintendo Switch Exclusive)']
      }
  },
  {
      id: 'sea-of-thieves',
      title: 'Sea of Thieves',
      genre: 'Action Adventure',
      platform: ['PC', 'Xbox Series X', 'PS5'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172620/capsule_617x353.jpg',
      price: '$39.99',
      steamUrl: 'https://store.steampowered.com/app/1172620/Sea_of_Thieves_2024_Edition/',
      description: 'Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel Q9450', 'Memory: 4 GB RAM', 'Graphics: Nvidia GeForce GTX 650'],
          recommended: ['OS: Windows 10', 'Processor: Intel i5 4690', 'Memory: 8 GB RAM', 'Graphics: Nvidia GeForce GTX 770']
      }
  },
  {
      id: 'halo-infinite',
      title: 'Halo Infinite',
      genre: 'FPS',
      platform: ['PC', 'Xbox Series X'],
      rating: 'T',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1240440/capsule_617x353.jpg',
      price: 'Free to Play',
      steamUrl: 'https://store.steampowered.com/app/1240440/Halo_Infinite/',
      description: 'The legendary Halo series returns with the most expansive Master Chief campaign yet and a ground-breaking free to play multiplayer experience.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: AMD Ryzen 5 1600', 'Memory: 8 GB RAM', 'Graphics: AMD Radeon RX 570'],
          recommended: ['OS: Windows 10', 'Processor: AMD Ryzen 7 3700X', 'Memory: 16 GB RAM', 'Graphics: AMD Radeon RX 5700 XT']
      }
  },
  {
      id: 'forza-horizon-5',
      title: 'Forza Horizon 5',
      genre: 'Racing',
      platform: ['PC', 'Xbox Series X'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1551360/Forza_Horizon_5/',
      description: 'Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel i5-4460', 'Memory: 8 GB RAM', 'Graphics: NVidia GTX 760'],
          recommended: ['OS: Windows 10', 'Processor: Intel i5-8400', 'Memory: 16 GB RAM', 'Graphics: NVidia GTX 1070']
      }
  },
  {
      id: 'starfield',
      title: 'Starfield',
      genre: 'Action RPG',
      platform: ['PC', 'Xbox Series X'],
      rating: 'M',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_617x353.jpg',
      price: '$69.99',
      steamUrl: 'https://store.steampowered.com/app/1716740/Starfield/',
      description: 'Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: AMD Ryzen 5 2600X', 'Memory: 16 GB RAM', 'Graphics: AMD Radeon RX 5700'],
          recommended: ['OS: Windows 10', 'Processor: AMD Ryzen 5 3600X', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GeForce RTX 2080']
      }
  },
  {
      id: 'ms-flight-simulator',
      title: 'Microsoft Flight Simulator 40th Anniversary Edition',
      genre: 'Simulation',
      platform: ['PC', 'Xbox Series X'],
      rating: 'E',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1250410/capsule_617x353.jpg',
      price: '$59.99',
      steamUrl: 'https://store.steampowered.com/app/1250410/Microsoft_Flight_Simulator_40th_Anniversary_Edition/',
      description: 'From light planes to wide-body jets, fly highly detailed and accurate aircraft in the Microsoft Flight Simulator 40th Anniversary Edition. The world is at your fingertips.',
      requirements: {
          minimum: ['OS: Windows 10', 'Processor: Intel i5-4460', 'Memory: 8 GB RAM', 'Graphics: NVIDIA GTX 770'],
          recommended: ['OS: Windows 10', 'Processor: Intel i5-8400', 'Memory: 16 GB RAM', 'Graphics: NVIDIA GTX 970']
      }
  }
  // ... Adding more games in subsequent steps to reach 100+
];
