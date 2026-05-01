import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Skull, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Directory', path: '/directory' },
    { name: 'Grave News', path: '/blog' },
    { name: 'Hardware Hub', path: '/hardware' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-reaper-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-baseline space-x-1 group">
            <span className="text-xl font-black tracking-tighter text-accent-red uppercase group-hover:text-accent-bright transition-colors">
              REAPER LOVE
            </span>
            <span className="hidden sm:inline text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-1">
              GAMES // NEXUS
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors h-16 flex items-center border-b-2 ${
                    location.pathname === link.path 
                      ? 'text-accent-red border-accent-red' 
                      : 'text-zinc-400 border-transparent hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="w-48 h-8 bg-zinc-900 rounded-full border border-zinc-800 flex items-center px-3 group focus-within:border-accent-red transition-all">
              <div className="w-2 h-2 rounded-full bg-accent-red mr-2 group-hover:animate-pulse"></div>
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">Search Archives...</span>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-reaper-dark border-b border-zinc-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-accent-red hover:bg-white/5 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
