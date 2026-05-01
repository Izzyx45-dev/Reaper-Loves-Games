import { Game } from '../types';
import { CheckCircle2, ChevronRight, Skull } from 'lucide-react';

interface QuickSpecSidebarProps {
  game: Game;
}

export default function QuickSpecSidebar({ game }: QuickSpecSidebarProps) {
  return (
    <aside className="sticky top-24 w-full h-fit flex flex-col gap-6">
      <div className="border-t-4 border-accent-red bg-zinc-900 overflow-hidden relative">
        <div className="p-6 border-x border-b border-zinc-800">
          <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-6 flex items-center">
            <span className="w-2 h-2 bg-accent-red rounded-full mr-2"></span> Quick Spec v3.1
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2 italic">Minimum Intel</p>
              <div className="space-y-2">
                {game.requirements.minimum.slice(1, 4).map((req, i) => (
                  <div key={i} className="p-3 bg-zinc-950 border-l-2 border-accent-red">
                    <p className="text-[10px] font-mono text-zinc-400 leading-tight">{req}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2 italic">Recommended Intel</p>
              <div className="space-y-2">
                {game.requirements.recommended.slice(1, 4).map((req, i) => (
                  <div key={i} className="p-3 bg-zinc-950 border-l-2 border-accent-red">
                    <p className="text-[10px] font-mono text-zinc-400 leading-tight">{req}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aspect-square w-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 p-6 flex flex-col items-center justify-center relative">
        <div className="absolute top-3 left-3 text-[8px] font-mono text-zinc-500">AD_SPACE_01</div>
        <Skull className="w-12 h-12 text-zinc-700 mb-4" />
        <span className="text-xs text-center font-serif italic text-zinc-400">
          "The best hardware for late night raids." — Reaper Gear
        </span>
      </div>
    </aside>
  );
}
