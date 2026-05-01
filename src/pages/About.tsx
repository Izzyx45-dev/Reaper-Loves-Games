import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="pt-24 pb-32 px-4 max-w-7xl mx-auto border-x border-zinc-800">
        <div className="max-w-3xl border-b-4 border-accent-red pb-8 mb-12">
          <h1 className="text-6xl sm:text-8xl font-black italic tracking-tighter uppercase mb-6">
            WHO WE <span className="text-accent-red">ARE.</span>
          </h1>
          <p className="text-xl font-serif italic text-zinc-400">
            Founded in the digital deep by a collective of hardware enthusiasts and narrative junkies, Reaper Love Games is more than a review site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-black italic tracking-tighter uppercase">The Mission</h2>
            <p className="text-zinc-400 leading-relaxed">
              In an era of bloated scores and corporate-friendly reviews, we choose the dark path of honesty. We test games on real-world hardware, analyzing everything from frame-time stability to the atmospheric density of world design.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Our content is augmented by proprietary AI intelligence via Google AI Studio, ensuring that our technical data is always the most precise in the nexus.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-center">
            <div className="editorial-meta mb-4">Established // 2026</div>
            <div className="text-4xl font-black italic tracking-tighter uppercase mb-4">REAPER<br/>CERTIFIED</div>
            <p className="text-xs text-zinc-500 font-mono">Ensuring every piece of intel is vetted for the hardcore collective.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
