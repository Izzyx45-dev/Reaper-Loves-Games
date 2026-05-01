import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingCart, ExternalLink } from 'lucide-react';

interface FloatingCTAProps {
  steamUrl: string;
  epicUrl: string;
  title: string;
}

export default function FloatingCTA({ steamUrl, epicUrl, title }: FloatingCTAProps) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.05, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0.05, 0.1], [100, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4"
    >
      <div className="bg-zinc-950/95 backdrop-blur-md border border-zinc-800 p-2 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="hidden sm:flex pl-4 items-center gap-3">
          <div className="editorial-meta italic">Target: {title}</div>
        </div>

        <div className="flex gap-4 w-full sm:w-auto p-1">
          <a
            href={epicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center p-3 bg-zinc-900 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-all skew-x-[-10deg]"
          >
            <span className="skew-x-[10deg]">Epic Store</span>
          </a>
          <a
            href={steamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex flex-col items-center justify-center px-8 py-3 bg-accent-red text-white transition-all skew-x-[-10deg] hover:bg-accent-bright"
          >
            <div className="skew-x-[10deg] flex flex-col items-center leading-none">
              <span className="text-[8px] font-mono uppercase mb-0.5 tracking-[0.2em]">Deploy on</span>
              <span className="text-xl font-black italic uppercase tracking-tighter">STEAM</span>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
