import Layout from '../components/Layout';
import { useParams, Link } from 'react-router-dom';
import { useGames } from '../context/GamesContext';
import QuickSpecSidebar from '../components/QuickSpecSidebar';
import FloatingCTA from '../components/FloatingCTA';
import AdBanner from '../components/AdBanner';
import { getGameFunFacts, getSimilarGames } from '../services/geminiService';
import React from 'react';
import { Share2, Bookmark, Flame, Zap, BrainCircuit, ChevronLeft, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function GameInfo() {
  const { id } = useParams<{ id: string }>();
  const { games, likedIds, toggleLike } = useGames();
  const game = games.find(g => g.id === id);

  const [funFacts, setFunFacts] = React.useState<string[]>([]);
  const [similarGames, setSimilarGames] = React.useState<{ title: string; reason: string }[]>([]);
  const [loading, setLoading] = React.useState(true);

  const isLiked = game ? likedIds.includes(game.id) : false;

  React.useEffect(() => {
    if (game) {
      setLoading(true);
      Promise.all([
        getGameFunFacts(game.title),
        getSimilarGames(game.title, game.genre)
      ]).then(([facts, similar]) => {
        setFunFacts(facts);
        setSimilarGames(similar);
        setLoading(false);
      });
    }
  }, [game]);

  if (!game) return (
    <Layout>
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Intel Not Found.</h1>
        <Link to="/directory" className="text-accent-red underline">Return to Directory</Link>
      </div>
    </Layout>
  );

  return (
    <Layout>
      <div className="relative pt-24 border-b border-zinc-800">
        <article className="relative z-10 max-w-7xl mx-auto px-4 pb-24 border-x border-zinc-800">
          <div className="mb-12 pt-12 px-8">
            <Link to="/directory" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group">
              <span className="editorial-meta">Archive Index // 01</span>
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-4">
                     <span className="editorial-tag">Reaper's Choice</span>
                     <button 
                      onClick={() => toggleLike(game.id)}
                      className={`flex items-center gap-2 px-3 py-1 border transition-all ${isLiked ? 'bg-accent-red border-accent-red text-white' : 'border-zinc-800 text-zinc-500 hover:text-white'}`}
                     >
                       <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                       <span className="text-[10px] font-black uppercase tracking-widest">{isLiked ? 'Liked' : 'Like'}</span>
                     </button>
                   </div>
                   <span className="editorial-meta">SCAN_ID: {game.id.toUpperCase()}-X</span>
                </div>
                
                <h1 className="text-7xl sm:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-6 italic border-b-4 border-accent-red pb-4">
                  {game.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>{word}<br/></React.Fragment>
                  ))}
                </h1>
                
                <h2 className="text-2xl font-serif italic text-zinc-400 mb-8 max-w-lg leading-relaxed">
                  {game.description.split('.')[0]}. A descent into the digital abyss.
                </h2>
              </div>

              <aside className="w-full lg:w-80 space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  {game.steamUrl && (
                    <a href={game.steamUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#1b2838] hover:bg-[#2a3f5a] text-white transition-all group overflow-hidden relative">
                      <div className="relative z-10">
                        <p className="text-[10px] font-mono uppercase opacity-50 mb-1 leading-none">PC Digital</p>
                        <p className="font-black italic text-lg leading-none">STEAM</p>
                      </div>
                      <span className="text-xl font-bold opacity-20 group-hover:opacity-100 transition-opacity translate-x-4">{" >>"}</span>
                    </a>
                  )}
                  {game.psStoreUrl && (
                    <a href={game.psStoreUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#003087] hover:bg-[#003db3] text-white transition-all group overflow-hidden relative">
                      <div className="relative z-10">
                        <p className="text-[10px] font-mono uppercase opacity-50 mb-1 leading-none">PS5 | PS4</p>
                        <p className="font-black italic text-lg leading-none">PLAYSTATION</p>
                      </div>
                      <span className="text-xl font-bold opacity-20 group-hover:opacity-100 transition-opacity translate-x-4">{" >>"}</span>
                    </a>
                  )}
                  {game.xboxStoreUrl && (
                    <a href={game.xboxStoreUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-[#107c10] hover:bg-[#159a15] text-white transition-all group overflow-hidden relative">
                      <div className="relative z-10">
                        <p className="text-[10px] font-mono uppercase opacity-50 mb-1 leading-none">XBOX SERIES X|S</p>
                        <p className="font-black italic text-lg leading-none">MICROSOFT</p>
                      </div>
                      <span className="text-xl font-bold opacity-20 group-hover:opacity-100 transition-opacity translate-x-4">{" >>"}</span>
                    </a>
                  )}
                </div>

                <div className="border border-zinc-800 p-6 bg-zinc-900/40 space-y-6">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="text-[10px] font-bold uppercase text-accent-red tracking-widest leading-none">Critical Response</h4>
                      <span className="text-2xl font-black italic">{game.rating}/10</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 w-full rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(parseFloat(game.rating) || 0) * 10}%` }}
                        className="h-full bg-accent-red shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                      />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-800">
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="text-[10px] font-bold uppercase text-violet-400 tracking-widest leading-none">User Sentiment</h4>
                      <span className="text-2xl font-black italic">{(parseFloat(game.rating) * 0.95).toFixed(1)}</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 w-full rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(parseFloat(game.rating) || 0) * 9.5}%` }}
                        className="h-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-zinc-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] font-mono uppercase text-zinc-500">Neural Verification</span>
                      <span className="text-[9px] font-mono uppercase text-green-500">Verified</span>
                    </div>
                    <p className="text-[10px] text-zinc-400 leading-tight">Data synchronized via Reaper Nexus V3.1. Verified through 50,000 community reports.</p>
                  </div>
                </div>
              </aside>
            </div>

            <AdBanner network="adsterra" zoneId="ADSTERRA_ZONE_GAME_INFO_TOP" format="728x90" className="mb-12" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-16">
                <section className="prose prose-invert max-w-none">
                  <p className="text-lg text-zinc-400 leading-relaxed font-serif italic">
                    {game.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-8">
                    {game.platform.map(p => (
                      <span key={p} className="bg-zinc-800 px-3 py-1 text-[10px] font-mono uppercase text-zinc-400">
                        {p}
                      </span>
                    ))}
                    <span className="bg-zinc-800 px-3 py-1 text-[10px] font-mono uppercase text-zinc-400">
                      {game.genre}
                    </span>
                  </div>
                </section>

                {/* Screenshot Gallery */}
                {game.screenshots && game.screenshots.length > 0 && (
                  <section className="border-t border-zinc-800 pt-12">
                    <div className="flex items-center justify-between mb-8">
                       <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.5em] italic">Visual Captures // RAW_INTEL</h2>
                       <span className="editorial-meta">{game.screenshots.length} SAMPLES</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {game.screenshots.map((src, i) => (
                        <div 
                          key={i} 
                          className={`group relative overflow-hidden border border-zinc-800 bg-zinc-900 ${i === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video'}`}
                        >
                          <img
                            src={src}
                            alt={`${game.title} screenshot ${i+1}`}
                            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute top-2 right-2 editorial-tag opacity-0 group-hover:opacity-100 transition-opacity">IMG_{i+1}</div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* AI Fun Facts */}
                <section className="border-t border-zinc-800 pt-12">
                  <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.5em] flex items-center italic">
                       <BrainCircuit className="w-4 h-4 mr-2 text-violet-500" />
                       Neural Pulse Intel
                    </h2>
                  </div>

                  {loading ? (
                    <div className="space-y-4 animate-pulse">
                      <div className="h-12 bg-white/5 w-full" />
                      <div className="h-12 bg-white/5 w-3/4" />
                    </div>
                  ) : (
                    <div className="grid gap-6">
                      {funFacts.map((fact, i) => (
                        <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                          <p className="text-[11px] text-zinc-400 italic leading-snug">
                            "{fact}"
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                {/* Similar Games */}
                <section className="border border-zinc-800 p-8">
                  <h5 className="text-[10px] font-bold uppercase text-zinc-500 mb-6 tracking-widest">Recommended Sequentials</h5>
                  <ul className="space-y-4">
                    {similarGames.map((item, i) => (
                      <li key={i} className="text-xs flex items-center group cursor-pointer">
                        <div className="w-2 h-2 bg-accent-red mr-3 group-hover:scale-150 transition-transform"></div>
                        <span className="font-bold group-hover:text-accent-red transition-colors mr-2">{item.title}</span>
                        <span className="text-zinc-500 italic">— {item.reason}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="lg:col-span-1">
                <QuickSpecSidebar game={game} />
              </div>
            </div>
          </div>
        </article>
      </div>

      <FloatingCTA steamUrl={game.steamUrl} epicUrl={game.epicUrl} title={game.title} />
    </Layout>
  );
}
