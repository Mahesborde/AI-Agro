import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  TrendingUp, 
  Bug, 
  DollarSign, 
  Droplets, 
  Users, 
  ArrowRight, 
  Zap, 
  BarChart3
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const features = [
    {
      icon: Sprout,
      title: 'Crop Recommendation',
      desc: 'Supervised multi-class classification analyzing N-P-K soil nutrients, pH, and climate to match optimal crops.',
    },
    {
      icon: TrendingUp,
      title: 'Crop Yield Prediction',
      desc: 'Supervised regression modeling historical rainfall, temperature, and pesticide metrics to forecast harvest tons.',
    },
    {
      icon: DollarSign,
      title: 'Market Price Forecasting',
      desc: 'Time-series predictive models identifying optimal sell windows and market trend movements.',
    },
    {
      icon: Bug,
      title: 'Plant Disease Detection',
      desc: 'Deep Learning Convolutional Neural Networks (CNNs) diagnosing foliar pathogens from leaf photos.',
    },
    {
      icon: Users,
      title: 'Farmer & Crop Segmentation',
      desc: 'Unsupervised K-Means clustering grouping agricultural zones for customized regional advisory.',
    },
    {
      icon: Droplets,
      title: 'Smart Irrigation Optimization',
      desc: 'Reinforcement Learning Q-Learning agent adjusting dynamic water release policies based on soil state.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Public Navbar */}
      <nav className="sticky top-0 z-50 glass-nav border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agro-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-agro-500/20">
              <Sprout className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              AgroMind <span className="gradient-text">AI</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-xl bg-agro-500 hover:bg-agro-400 text-slate-950 text-xs font-bold transition-colors shadow-lg shadow-agro-500/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute top-10 right-1/2 translate-x-1/2 w-[600px] h-[350px] bg-agro-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-agro-500/10 border border-agro-500/20 text-agro-400 text-xs font-semibold tracking-wide">
            <Zap className="w-4 h-4" />
            <span>Next-Gen Agricultural Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            AI-Powered Decisions for <span className="gradient-text">Smarter Farming</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            AgroMind AI integrates supervised machine learning, deep neural vision, and reinforcement learning 
            to provide real-time, data-driven agricultural decision support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-agro-500 hover:bg-agro-400 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-agro-500/25 flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/dashboard"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-4 h-4 text-agro-400" />
              <span>Explore AI</span>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              6 Dedicated AI & ML Modules
            </h2>
            <p className="text-slate-400 text-sm">
              Comprehensive decision-support tools engineered for precision agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-agro-500/40 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-agro-950/80 border border-agro-800/50 flex items-center justify-center text-agro-400">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{f.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How AgroMind AI Works</h2>
            <p className="text-slate-400 text-sm">From raw field data to actionable intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-agro-500/20 text-agro-400 font-bold font-mono text-base flex items-center justify-center mx-auto">
                1
              </div>
              <h4 className="font-bold text-white text-base">Input Soil & Farm Data</h4>
              <p className="text-xs text-slate-300">
                Enter N-P-K nutrient readings, climate metrics, or upload plant leaf images.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-agro-500/20 text-agro-400 font-bold font-mono text-base flex items-center justify-center mx-auto">
                2
              </div>
              <h4 className="font-bold text-white text-base">FastAPI & ML Inference</h4>
              <p className="text-xs text-slate-300">
                Trained models evaluate parameters statelessly and return predictions in milliseconds.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-agro-500/20 text-agro-400 font-bold font-mono text-base flex items-center justify-center mx-auto">
                3
              </div>
              <h4 className="font-bold text-white text-base">Receive Advisory</h4>
              <p className="text-xs text-slate-300">
                Get clear, actionable recommendations for crop selection, irrigation, and disease mitigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Enterprise Technology Architecture</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-mono text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">React + TS</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">FastAPI</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">PyTorch</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">Scikit-Learn</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">PostgreSQL</span>
          </div>
        </div>
      </section>

      {/* Public Footer */}
      <footer className="border-t border-slate-800 py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 AgroMind AI. All rights reserved. Phase 2 Interactive UI Platform.</p>
          <div className="flex gap-6">
            <Link to="/login" className="hover:text-white">Sign In</Link>
            <Link to="/register" className="hover:text-white">Register</Link>
            <Link to="/dashboard" className="hover:text-white">Dashboard</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
