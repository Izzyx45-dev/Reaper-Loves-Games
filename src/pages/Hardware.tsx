import Layout from '../components/Layout';
import { Cpu, Monitor, Keyboard, MousePointer2, Zap, ShieldCheck } from 'lucide-react';

export default function Hardware() {
  const categories = [
    {
      title: 'CPUs & Cooling',
      icon: Cpu,
      items: ['Intel Core i9-14900K', 'AMD Ryzen 9 7950X3D', 'Noctua NH-D15', 'Corsair iCUE H150i'],
      color: 'text-neon-cyan'
    },
    {
      title: 'GPUs & Displays',
      icon: Monitor,
      items: ['NVIDIA RTX 4090', 'AMD Radeon RX 7900 XTX', 'Alienware AW3423DW', 'LG C3 OLED'],
      color: 'text-neon-magenta'
    },
    {
      title: 'Peripherals',
      icon: Keyboard,
      items: ['Wooting 60HE', 'Razer Viper V3 Pro', 'Artisan Hien Mousepad', 'SteelSeries Arctis Nova Pro'],
      color: 'text-neon-yellow'
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-32 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tighter">
            HARDWARE <span className="text-neon-yellow">HUB.</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl">
            Optimized configurations for top-tier performance. Hand-picked components vetted by the Reapers for stability and frames.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {categories.map((cat, i) => (
            <div key={i} className="bg-reaper-dark border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-all">
              <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-8 ${cat.color}`}>
                <cat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-400 group cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-neon-yellow transition-colors" />
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-gradient-to-br from-reaper-dark to-reaper-black rounded-3xl p-12 lg:p-20 border border-white/5 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-neon-cyan mb-6">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em]">Vetted Integration</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tighter leading-tight">
              NEURAL SYNC<br />
              <span className="text-neon-cyan">FRAME BOOST.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Our hardware hub isn't just about the specs. It's about how they talk to each other. We benchmark every combination for 1% low stability.
            </p>
            <button className="bg-neon-cyan text-reaper-black font-display font-bold uppercase tracking-widest px-10 py-5 rounded-2xl hover:opacity-80 transition-all">
              View Benchmarks
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-neon-cyan opacity-20 blur-[120px]" />
            <img
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
              alt="Hardware High Performance"
              className="relative z-10 rounded-2xl border border-white/10 shadow-2xl skew-y-3"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
