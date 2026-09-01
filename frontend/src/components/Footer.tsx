import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div>
          <p className="font-medium text-slate-300">AgroMind AI — Production Architecture (Phase 1 Foundation)</p>
          <p className="mt-1">Modular AI Decision-Support System for Modern Agriculture.</p>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px]">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">React + TS</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">FastAPI</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">PyTorch/Scikit</span>
        </div>
      </div>
    </footer>
  );
};
