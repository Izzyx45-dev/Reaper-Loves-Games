import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout>
      <section className="pt-24 pb-32 px-4 max-w-4xl mx-auto border-x border-zinc-800">
        <div className="border-b-4 border-accent-red pb-8 mb-12">
          <h1 className="text-6xl font-black italic tracking-tighter uppercase mb-6">
            TERMS OF <span className="text-accent-red">SERVICE.</span>
          </h1>
          <p className="editorial-meta">Effective Date: May 1, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 italic font-serif text-zinc-400">
          <section>
            <h2 className="text-white font-black uppercase tracking-tighter not-italic text-2xl mb-4">1. Acceptance of Terms</h2>
            <p>By accessing the Reaper Love Games Nexus, you agree to bound by these terms. If you do not agree with any part of these terms, you must disconnect from the server immediately.</p>
          </section>

          <section>
            <h2 className="text-white font-black uppercase tracking-tighter not-italic text-2xl mb-4">2. Intellectual Property</h2>
            <p>All content, including but not limited to text, graphics, and AI-generated intel, is the property of Reaper Love Games or its respective game publishers. Unauthorized reproduction is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-white font-black uppercase tracking-tighter not-italic text-2xl mb-4">3. User Conduct</h2>
            <p>Users must not attempt to hack, scrape, or otherwise disrupt the stable operation of the site. Any violation of system integrity will result in permanent archive locks.</p>
          </section>

          <section>
            <h2 className="text-white font-black uppercase tracking-tighter not-italic text-2xl mb-4">4. Limitation of Liability</h2>
            <p>Reaper Love Games provides intel "as is". We are not responsible for any hardware failures, corrupted save files, or cosmic existential dread resulting from the use of our site.</p>
          </section>
        </div>
      </section>
    </Layout>
  );
}
