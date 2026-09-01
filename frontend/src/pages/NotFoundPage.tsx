import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center">
      <h1 className="text-6xl font-extrabold text-agro-400 font-mono">404</h1>
      <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
      <p className="text-slate-400 max-w-md text-sm">
        The requested module route does not exist or is planned for a future release phase.
      </p>
      <Link 
        to="/" 
        className="px-5 py-2.5 rounded-xl bg-agro-600 hover:bg-agro-500 text-slate-950 font-semibold text-sm transition-colors"
      >
        Return to Overview
      </Link>
    </div>
  );
};
