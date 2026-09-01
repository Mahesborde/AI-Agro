import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Layers } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" id="nav-brand-logo">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agro-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-agro-500/20 group-hover:scale-105 transition-transform duration-200">
            <Sprout className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-agro-400 transition-colors">
              AgroMind <span className="gradient-text">AI</span>
            </span>
            <span className="block text-[10px] text-slate-400 font-mono tracking-wider uppercase">
              Phase 1 Platform Setup
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>FastAPI: Active</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-xs font-mono text-emerald-300">
            <Layers className="w-3.5 h-3.5" />
            <span>Phase 1 Architecture</span>
          </div>
        </nav>
      </div>
    </header>
  );
};
