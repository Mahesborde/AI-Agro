import React from 'react';
import { 
  Cpu, 
  Database, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Server
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const modules = [
    {
      id: 'crop-rec',
      title: '1. Crop Recommendation',
      tech: 'Supervised Learning (Multi-Class Classification)',
      desc: 'Recommends optimal crop types based on soil parameters (N, P, K, pH) and environmental metrics.',
      status: 'Phase 1 Structure Ready',
    },
    {
      id: 'yield-pred',
      title: '2. Crop Yield Prediction',
      tech: 'Supervised Learning (Regression)',
      desc: 'Predicts expected yield per hectare incorporating rainfall, temperature, and pesticide variables.',
      status: 'Phase 1 Structure Ready',
    },
    {
      id: 'price-pred',
      title: '3. Market Price Prediction',
      tech: 'Time Series / Supervised Learning',
      desc: 'Forecasts agricultural market prices to enable smart harvesting and sales timing decisions.',
      status: 'Phase 1 Structure Ready',
    },
    {
      id: 'disease-det',
      title: '4. Plant Disease Detection',
      tech: 'Deep Learning (Convolutional Neural Networks)',
      desc: 'Identifies crop foliar diseases from leaf imagery using CNN image classification architectures.',
      status: 'Phase 1 Structure Ready',
    },
    {
      id: 'farmer-seg',
      title: '5. Farmer/Crop Segmentation',
      tech: 'Unsupervised Learning (Clustering)',
      desc: 'Groups farming profiles and regional land patterns for localized agricultural advisory.',
      status: 'Phase 1 Structure Ready',
    },
    {
      id: 'irrigation-rl',
      title: '6. Smart Irrigation Optimization',
      tech: 'Reinforcement Learning (Q-Learning)',
      desc: 'Optimizes water distribution policies using Q-Learning state-action-reward interactions.',
      status: 'Phase 1 Architecture Designed',
    },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 md:p-12">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-agro-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agro-500/10 border border-agro-500/20 text-agro-400 text-xs font-semibold tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            <span>Phase 1 Foundation Complete</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight" id="hero-title">
            AgroMind <span className="gradient-text">AI Platform</span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed">
            An intelligent, production-scale agricultural decision-support engine. 
            Phase 1 establishes a modular, decoupled foundation uniting a React frontend, 
            FastAPI micro-backend, and dedicated machine learning pipeline structures.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-800">
              <Server className="w-4 h-4 text-emerald-400" />
              <span>Backend: FastAPI + SQLAlchemy</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-800">
              <Database className="w-4 h-4 text-blue-400" />
              <span>Database: PostgreSQL Ready</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-800">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>ML: PyTorch / Scikit-Learn</span>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Modules Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Integrated AI/ML Modules Blueprint</h2>
          <p className="text-slate-400 text-sm mt-1">
            Structured roadmap for upcoming model training, evaluation, and endpoint integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div 
              key={mod.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-agro-500/30 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-agro-400 bg-agro-950/60 px-2.5 py-1 rounded-md border border-agro-800/40">
                    {mod.tech}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{mod.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{mod.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{mod.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phase Roadmap Overview */}
      <section className="glass-card rounded-3xl p-8 space-y-6 border border-slate-800">
        <h2 className="text-2xl font-bold text-white">Development Phase Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-agro-950/40 border border-agro-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-agro-400">PHASE 1</span>
              <CheckCircle2 className="w-4 h-4 text-agro-400" />
            </div>
            <h4 className="font-semibold text-white text-sm">Project Foundation</h4>
            <p className="text-xs text-slate-300">Structure, dataset classification, frontend/backend scaffold & git specs.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2 opacity-70">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-slate-400">PHASE 2</span>
              <Clock className="w-4 h-4 text-slate-400" />
            </div>
            <h4 className="font-semibold text-white text-sm">Data Cleaning & EDA</h4>
            <p className="text-xs text-slate-400">Dataset inspection, missing value handling, feature analysis & stats.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2 opacity-70">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-slate-400">PHASE 3</span>
              <Clock className="w-4 h-4 text-slate-400" />
            </div>
            <h4 className="font-semibold text-white text-sm">Model Training</h4>
            <p className="text-xs text-slate-400">Supervised, Deep Learning & RL training pipelines & serialization.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2 opacity-70">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-slate-400">PHASE 4</span>
              <Clock className="w-4 h-4 text-slate-400" />
            </div>
            <h4 className="font-semibold text-white text-sm">API & UI Integration</h4>
            <p className="text-xs text-slate-400">FastAPI inference endpoints connected to interactive React UI.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
