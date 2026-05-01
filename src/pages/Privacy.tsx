import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout>
      <section className="pt-24 pb-32 px-4 max-w-4xl mx-auto border-x border-zinc-800">
        <div className="border-b-4 border-accent-red pb-8 mb-12">
          <h1 className="text-6xl font-black italic tracking-tighter uppercase mb-6">
            PRIVACY <span className="text-accent-red">DECREE.</span>
          </h1>
          <p className="editorial-meta">Last Decrypted: May 1, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 italic font-serif text-zinc-400">
          <section>
            <h2 className="text-white font-black uppercase tracking-tighter not-italic text-2xl mb-4">1. Data Ingestion</h2>
            <p>At Reaper Love Games, we believe in minimal tracking for maximum safety. We collect only what is necessary to deliver your daily dose of gaming cosmic dread.</p>
          </section>

          <section>
            <h2 className="text-white font-black uppercase tracking-tighter not-italic text-2xl mb-4">2. Cookies</h2>
            <p>We use essential cookies to maintain your connection to the Nexus and temporary trackers to help our AI understand which games are trending in your sector.</p>
          </section>

          <section>
            <h2 className="text-white font-black uppercase tracking-tighter not-italic text-2xl mb-4">3. Ad Transparency</h2>
            <p>We serve ads through reputable networks including Google AdSense. These networks may use data about your visits to this and other websites to provide relevant advertisements about goods and services of interest to you.</p>
          </section>

          <section>
            <h2 className="text-white font-black uppercase tracking-tighter not-italic text-2xl mb-4">4. Affiliate Disclosure</h2>
            <p>Some links in the Nexus are affiliate links. If you purchase hardware or games through these links, the Reaper receives a small commission at no extra cost to you, which helps keep the servers running in the void.</p>
          </section>
        </div>
      </section>
    </Layout>
  );
}
