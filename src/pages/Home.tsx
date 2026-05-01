import Layout from '../components/Layout';
import { useGames } from '../context/GamesContext';
import { POSTS } from '../constants';
import GameCard from '../components/GameCard';
import AdBanner from '../components/AdBanner';
import GamingPulse from '../components/GamingPulse';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TrendingUp, Newspaper, ChevronRight, Skull, Sparkles, RefreshCw } from 'lucide-react';

export default function Home() {
  const { games, likedIds, refreshDiscovery, isDiscovering } = useGames();

  // Get trending games based on score or featured
  const trendingGames = [...games]
    .sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0))
    .slice(0, 4);

  // Recommendation algorithm: based on genre of liked games
  const likedGenres = games
    .filter(g => likedIds.includes(g.id))
    .map(g => g.genre);

  const recommendedGames = games
    .filter(g => !likedIds.includes(g.id))
    .filter(g => likedGenres.includes(g.genre) || g.isFeatured)
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex flex-col border-b border-zinc-800">
        <div className="flex-1 flex px-4 max-w-7xl mx-auto w-full">
          <div className="flex-1 flex flex-col justify-center border-r border-zinc-800 pr-12 lg:pr-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="w-2 h-2 bg-accent-red rounded-full"></div>
              <span className="editorial-meta uppercase tracking-widest">{isDiscovering ? 'Analyzing Trends...' : 'Neural Archives Verified'}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl sm:text-8xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase mb-8 italic"
            >
              DYNAMIC<br />
              <span className="text-accent-red">DATA.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl sm:text-2xl font-serif italic text-zinc-400 max-w-lg mb-12"
            >
              The industry shifts, games emerge, and the Reaper tracks every byte. Auto-discovery enabled.
            </motion.h2>

            <div className="flex flex-wrap gap-4">
              <Link to="/directory" className="bg-accent-red text-white font-black uppercase tracking-tighter italic px-8 py-4 hover:bg-accent-bright transition-all">
                Directory
              </Link>
              <button 
                onClick={() => refreshDiscovery()}
                disabled={isDiscovering}
                className="bg-zinc-800 text-white font-black uppercase tracking-tighter italic px-8 py-4 hover:bg-zinc-700 transition-all flex items-center gap-2"
              >
                {isDiscovering ? 'Scanning...' : 'Sync Archives'}
                <RefreshCw className={`w-4 h-4 ${isDiscovering ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
          
          <div className="hidden lg:flex w-[400px] flex-col justify-center p-12 italic text-zinc-500 font-serif">
            <GamingPulse />
            <div className="mt-8 space-y-12">
              <div>
                <p className="editorial-meta mb-2">Algorithm Status</p>
                <p className="text-sm font-mono uppercase tracking-tighter text-accent-red">Monitoring User Sentiment</p>
              </div>
              <div className="pt-12 border-t border-zinc-800">
                <p className="editorial-meta mb-2">Total Intel</p>
                <p className="text-4xl font-black italic tracking-tighter text-white">{games.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nexus Slider */}
        <div className="h-32 border-t border-zinc-800 flex bg-zinc-900/30">
          {trendingGames.map((game, i) => (
            <Link key={game.id} to={`/game/${game.id}`} className="flex-1 border-r border-zinc-800 p-6 flex flex-col justify-center hover:bg-zinc-900 transition-colors cursor-pointer group">
              <p className="editorial-meta mb-1">0{i+1} // Trending Hits</p>
              <p className="text-[10px] font-bold group-hover:text-accent-red transition-colors truncate">{game.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Banner Top */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <AdBanner network="adsterra" zoneId="ADSTERRA_ZONE_HOME_TOP" format="728x90" />
      </div>

      {/* Recommended Section */}
      {recommendedGames.length > 0 && (
        <section className="py-24 px-4 max-w-7xl mx-auto border-x border-zinc-800 bg-zinc-900/10">
          <div className="mb-16 border-b-4 border-violet-500 pb-4 inline-block w-full flex items-center justify-between">
             <div>
               <span className="editorial-tag mb-4 inline-block bg-violet-600">Genetic Matches</span>
               <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter italic">FOR <span className="text-zinc-600">YOU.</span></h2>
             </div>
             <Sparkles className="w-12 h-12 text-violet-500 animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-800">
            {recommendedGames.map((game) => (
              <div key={game.id} className="border-r last:border-r-0 border-zinc-800">
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Feature Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-x border-zinc-800">
        <div className="mb-16 border-b-4 border-accent-red pb-4 inline-block w-full">
           <span className="editorial-tag mb-4 inline-block">Trending Report</span>
           <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter italic">REAPER'S <span className="text-zinc-600">CRITICAL HITS.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-zinc-800">
          {games.slice(0, 9).map((game) => (
            <div key={game.id} className="border-r border-b last:border-r-0 border-zinc-800">
              <GameCard game={game} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/directory" className="inline-flex items-center gap-2 text-accent-red font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
            Browse All Manifests <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Ad Banner Mid */}
      <div className="max-w-7xl mx-auto px-4">
        <AdBanner network="propeller" zoneId="PROPELLER_ZONE_HOME_MID" />
      </div>

      {/* Newsletter / CTA */}
      <section className="bg-accent-red py-24 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] mb-4">The Collective Hub</p>
          <h2 className="text-6xl sm:text-8xl font-black leading-none uppercase tracking-tighter italic mb-8">JOIN THE<br />HORDE.</h2>
          <p className="text-white/80 font-serif italic text-lg mb-12">Receive weekly reports on hardware stability and secret game mechanics directly in your terminal.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 p-2 bg-black/10 backdrop-blur-md border border-white/20">
            <input
              type="email"
              placeholder="ENTER_EMAIL_ARCHIVE"
              className="flex-grow bg-transparent border-none px-6 py-4 text-white placeholder:text-white/50 focus:outline-none font-mono text-sm"
            />
            <button className="bg-white text-accent-red font-black uppercase tracking-tighter italic px-10 py-4 hover:bg-zinc-100 transition-all">
              Initialize
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
