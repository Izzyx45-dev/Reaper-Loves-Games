import Layout from '../components/Layout';
import { POSTS } from '../constants';
import { ChevronRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <Layout>
      <section className="pt-24 pb-32 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tighter">
            GRAVE <span className="text-neon-magenta">NEWS.</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl">
            Reports from the digital afterlife. From technical breakthroughs to deep-seated cosmic dread in gaming mechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {POSTS.map((post) => (
            <article key={post.id} className="group border-b border-white/5 pb-12">
              <Link to={`/blog/${post.id}`} className="block relative aspect-[16/9] rounded-3xl overflow-hidden mb-8 border border-white/5 group-hover:border-neon-magenta/50 transition-colors">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-reaper-black/80 backdrop-blur-md rounded-full text-[10px] font-mono font-bold text-neon-magenta uppercase tracking-widest border border-neon-magenta/30">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="space-y-4 px-2">
                <div className="flex items-center gap-6 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5" />
                    <span>Post by {post.author}</span>
                  </div>
                </div>

                <h2 className="text-4xl font-bold text-white group-hover:text-neon-magenta transition-colors tracking-tight">
                  {post.title}
                </h2>

                <p className="text-slate-400 text-lg leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neon-cyan group-hover:translate-x-2 transition-transform"
                >
                  Read Full Report <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 p-12 bg-reaper-dark border border-white/5 rounded-3xl text-center">
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Stay in the Loop</h3>
          <p className="text-slate-400 mb-8 max-w-sm mx-auto">Subscribe to our newsletter and never miss a critical intel update from the Reaper.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-reaper-black border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neon-magenta transition-colors"
            />
            <button className="bg-neon-magenta text-white font-display font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-neon-magenta/80 transition-all">
              Join Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
