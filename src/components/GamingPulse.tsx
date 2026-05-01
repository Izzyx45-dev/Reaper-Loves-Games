import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Activity, Users, Zap, TrendingUp } from 'lucide-react';

interface PulseEvent {
  id: string;
  type: 'player_count' | 'deal' | 'update' | 'trending';
  message: string;
  time: string;
}

const INITIAL_EVENTS: PulseEvent[] = [
  { id: '1', type: 'player_count', message: 'Elden Ring players spiked by 40% in the last hour.', time: 'Now' },
  { id: '2', type: 'deal', message: 'Hades II is currently 15% off on Steam.', time: '2m' },
  { id: '3', type: 'trending', message: 'Starfield update 1.12.3 is being discussed by 50k users.', time: '5m' }
];

export default function GamingPulse() {
  const [events, setEvents] = useState<PulseEvent[]>(INITIAL_EVENTS);

  useEffect(() => {
    const messages = [
      "Cyberpunk 2077 hits 100k concurrent players on Steam.",
      "Sony confirms new State of Play for next month.",
      "Xbox Game Pass adds three new indie gems today.",
      "GTA VI rumors fuel 200% increase in social traffic.",
      "Minecraft server status: All systems operational.",
      "Dreadlands patch 1.2 is now live on PlayStation.",
      "The Witcher 4 enters full production phase."
    ];

    const interval = setInterval(() => {
      const newEvent: PulseEvent = {
        id: Math.random().toString(36).substr(2, 9),
        type: Math.random() > 0.5 ? 'trending' : 'player_count',
        message: messages[Math.floor(Math.random() * messages.length)],
        time: 'Now'
      };

      setEvents(prev => [newEvent, ...prev.slice(0, 4)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-lg backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent-red rounded-full animate-pulse"></div>
          <h3 className="text-xs font-black uppercase tracking-widest italic text-white flex items-center gap-2">
            <Activity className="w-4 h-4 text-accent-red" />
            Global Gaming Pulse
          </h3>
        </div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase">Live Nexus Feed</span>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex gap-4 group"
            >
              <div className="flex-shrink-0 mt-1">
                {event.type === 'player_count' && <Users className="w-3 h-3 text-violet-400" />}
                {event.type === 'deal' && <Zap className="w-3 h-3 text-yellow-400" />}
                {event.type === 'update' && <TrendingUp className="w-3 h-3 text-blue-400" />}
                {event.type === 'trending' && <TrendingUp className="w-3 h-3 text-accent-red" />}
              </div>
              <div>
                <p className="text-[11px] leading-relaxed text-zinc-300 font-medium group-hover:text-white transition-colors">
                  {event.message}
                </p>
                <p className="text-[9px] font-mono text-zinc-600 uppercase mt-1">{event.time} // PERSISTENCE_LOG</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button className="w-full mt-6 pt-4 border-t border-zinc-800 text-[10px] font-black uppercase tracking-tighter text-zinc-500 hover:text-accent-red transition-colors flex items-center justify-center gap-2">
        View Intelligence Report
      </button>
    </div>
  );
}
