import Layout from '../components/Layout';
import { Mail, Shield, AlertTriangle } from 'lucide-react';

export default function Contact() {
  return (
    <Layout>
      <section className="pt-24 pb-32 px-4 max-w-7xl mx-auto border-x border-zinc-800">
        <div className="max-w-3xl border-b-4 border-accent-red pb-8 mb-12">
          <h1 className="text-6xl sm:text-8xl font-black italic tracking-tighter uppercase mb-6">
            SECURE <span className="text-accent-red">LINK.</span>
          </h1>
          <p className="text-xl font-serif italic text-zinc-400">
            Need to report a bug in the code or a leak in the lore? Use the channels below to reach the collective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-zinc-800 bg-zinc-900/30">
            <Mail className="w-8 h-8 text-accent-red mb-6" />
            <h3 className="text-xl font-black italic tracking-tighter uppercase mb-4">Intel Reports</h3>
            <p className="text-sm text-zinc-500 font-mono mb-4 uppercase">intel@reaperlove.games</p>
            <p className="text-xs text-zinc-400">For news tips, corrections, and review requests.</p>
          </div>

          <div className="p-8 border border-zinc-800 bg-zinc-900/30">
            <Shield className="w-8 h-8 text-accent-red mb-6" />
            <h3 className="text-xl font-black italic tracking-tighter uppercase mb-4">Business</h3>
            <p className="text-sm text-zinc-500 font-mono mb-4 uppercase">nexus@reaperlove.games</p>
            <p className="text-xs text-zinc-400">For advertising inquiries and partner integration.</p>
          </div>

          <div className="p-8 border border-zinc-800 bg-zinc-900/30">
            <AlertTriangle className="w-8 h-8 text-accent-red mb-6" />
            <h3 className="text-xl font-black italic tracking-tighter uppercase mb-4">Emergency</h3>
            <p className="text-sm text-zinc-500 font-mono mb-4 uppercase">ops@reaperlove.games</p>
            <p className="text-xs text-zinc-400">For hardware malfunctions or system-critical failures.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
