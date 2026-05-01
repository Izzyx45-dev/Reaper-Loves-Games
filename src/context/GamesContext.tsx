import React, { createContext, useContext, useState, useEffect } from 'react';
import { Game } from '../types';
import { GAMES as STATIC_GAMES } from '../constants';
import { DiscoveryService } from '../services/discoveryService';

interface GamesContextType {
  games: Game[];
  likedIds: string[];
  toggleLike: (id: string) => void;
  isDiscovering: boolean;
  refreshDiscovery: () => Promise<void>;
}

const GamesContext = createContext<GamesContextType | undefined>(undefined);

export function GamesProvider({ children }: { children: React.ReactNode }) {
  const [games, setGames] = useState<Game[]>(() => {
    const discovered = DiscoveryService.getDiscoveredGames();
    return [...STATIC_GAMES, ...discovered];
  });
  const [likedIds, setLikedIds] = useState<string[]>(() => DiscoveryService.getUserLikes());
  const [isDiscovering, setIsDiscovering] = useState(false);

  const toggleLike = (id: string) => {
    const newLikes = DiscoveryService.toggleLike(id);
    setLikedIds(newLikes);
  };

  const refreshDiscovery = async () => {
    setIsDiscovering(true);
    const existingTitles = games.map(g => g.title);
    const newGames = await DiscoveryService.discoverNewGames(existingTitles);
    
    if (newGames.length > 0) {
      newGames.forEach(g => DiscoveryService.saveDiscoveredGame(g));
      setGames(prev => [...prev, ...newGames]);
    }
    setIsDiscovering(false);
  };

  // Simulate auto-updating algorithm in background
  useEffect(() => {
    const interval = setInterval(() => {
      // Small chance to auto-discover
      if (Math.random() > 0.8) {
        refreshDiscovery();
      }
    }, 120000); // Check every 2 mins

    return () => clearInterval(interval);
  }, [games]);

  return (
    <GamesContext.Provider value={{ games, likedIds, toggleLike, isDiscovering, refreshDiscovery }}>
      {children}
    </GamesContext.Provider>
  );
}

export function useGames() {
  const context = useContext(GamesContext);
  if (context === undefined) {
    throw new Error('useGames must be used within a GamesProvider');
  }
  return context;
}
