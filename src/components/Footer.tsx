import { Skull, Github, Twitter, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="h-8 border-t border-zinc-800 bg-zinc-950 px-6 mt-auto flex items-center justify-between text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
      <div className="flex space-x-6">
        <span className="flex items-center">
          Status: <span className="text-green-500 ml-1">Online</span>
        </span>
        <span className="hidden sm:inline">Antigravity 3.1 Pro Engine Active</span>
      </div>
      <div className="flex space-x-6">
        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        <span>&copy; 2026 Reaper Love Games</span>
      </div>
    </footer>
  );
}
