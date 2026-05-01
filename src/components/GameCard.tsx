import { Link } from 'react-router-dom';
import { Game } from '../types';
import { Monitor, Cpu, Star } from 'lucide-react';

interface GameCardProps {
  game: Game;
  key?: string;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link
      to={`/game/${game.id}`}
      className="group relative bg-zinc-900/30 border border-zinc-800 hover:border-accent-red transition-all duration-300"
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        {game.isFeatured && (
          <div className="absolute top-4 left-4 z-10">
            <span className="editorial-tag bg-accent-red text-white border-none shadow-lg">Reaper's Choice</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-black uppercase tracking-tighter italic transition-colors group-hover:text-accent-red">
            {game.title}
          </h3>
          <span className="editorial-meta pt-1">{game.price}</span>
        </div>

        <p className="text-xs text-zinc-400 font-serif italic mb-6 line-clamp-2">
          {game.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <div className="flex gap-2">
            {game.platform.slice(0, 2).map(p => (
              <span key={p} className="bg-zinc-800 px-2 py-0.5 text-[9px] font-mono uppercase text-zinc-400">
                {p}
              </span>
            ))}
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-accent-red border-b border-accent-red pb-0.5 group-hover:translate-x-1 transition-transform">
            Read Intel →
          </span>
        </div>
      </div>
    </Link>
  );
}
