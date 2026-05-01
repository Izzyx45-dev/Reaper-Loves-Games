import Layout from '../components/Layout';
import { useGames } from '../context/GamesContext';
import GameCard from '../components/GameCard';
import AdBanner from '../components/AdBanner';
import { Search, Filter, SlidersHorizontal, PackageOpen } from 'lucide-react';
import React from 'react';

export default function Directory() {
  const { games } = useGames();
  const [search, setSearch] = React.useState('');
  const [selectedPlatform, setSelectedPlatform] = React.useState<string>('All');
  const [selectedGenre, setSelectedGenre] = React.useState<string>('All');

  const platforms = ['All', 'PC', 'PlayStation', 'Xbox'];
  const genres = ['All', ...Array.from(new Set(games.map(g => g.genre)))];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase()) ||
                        game.genre.toLowerCase().includes(search.toLowerCase());
    const matchesPlatform = selectedPlatform === 'All' || game.platform.join(' ').toLowerCase().includes(selectedPlatform.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre;
    
    return matchesSearch && matchesPlatform && matchesGenre;
  });

  return (
    <Layout>
      <section className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tighter">
              GAMES <span className="text-neon-cyan">DATABASE.</span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl">
              Access the complete archive of gaming intel. Filter by genre, platform, or search for a specific title.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow min-w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search database..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-reaper-dark border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-neon-cyan transition-colors"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-reaper-dark border border-white/5 rounded-2xl px-6 py-4 text-slate-400 hover:text-white transition-colors">
              <SlidersHorizontal className="w-5 h-5" />
              <span className="font-display font-medium uppercase tracking-widest text-xs">Filter</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 py-6 border-y border-white/5">
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Platform //</span>
              <div className="flex gap-2">
                {platforms.map(p => (
                  <button 
                    key={p}
                    onClick={() => setSelectedPlatform(p)}
                    className={`px-3 py-1 text-[10px] font-bold uppercase transition-all rounded-md ${selectedPlatform === p ? 'bg-accent-red text-white' : 'text-zinc-500 hover:text-zinc-300 bg-white/5 border border-white/5'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Genre //</span>
              <select 
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="bg-zinc-900 border border-white/5 text-[10px] font-bold uppercase p-1.5 px-3 rounded-md text-zinc-400 outline-none focus:border-accent-red"
              >
                {genres.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
          </div>
          
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            {filteredGames.length} SAMPLES_LOCATED
          </div>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game, index) => (
              <React.Fragment key={game.id}>
                {index === 3 && (
                  <div className="md:col-span-2 lg:col-span-3">
                    <AdBanner network="adsterra" zoneId="ADSTERRA_ZONE_DIRECTORY_MID" format="728x90" />
                  </div>
                )}
                <GameCard game={game} />
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <Filter className="w-16 h-16 text-slate-800 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-600 mb-2">No Intel Found.</h2>
            <p className="text-slate-500">The shadows are empty for this search. Try a different query.</p>
          </div>
        )}

        <div className="mt-24 pt-12 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm mb-6">Showing {filteredGames.length} results from the Reaper's archive.</p>
          <button className="bg-white/5 hover:bg-white/10 text-white font-display font-bold uppercase tracking-widest px-10 py-5 rounded-2xl border border-white/10 transition-all">
            Load More Archives
          </button>
        </div>
      </section>
    </Layout>
  );
}
