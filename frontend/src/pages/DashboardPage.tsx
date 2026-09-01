import React from 'react';
import { 
  Sprout, 
  Droplets, 
  Thermometer, 
  Wind, 
  TrendingUp, 
  Bug, 
  DollarSign, 
  Zap,
  Clock
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  LineChart, 
  Line 
} from 'recharts';

export const DashboardPage: React.FC = () => {
  const yieldData = [
    { month: 'Apr', yield: 3.1, target: 3.5 },
    { month: 'May', yield: 3.4, target: 3.5 },
    { month: 'Jun', yield: 3.8, target: 3.8 },
    { month: 'Jul', yield: 4.0, target: 4.0 },
    { month: 'Aug', yield: 4.2, target: 4.1 },
  ];

  const priceTrendData = [
    { date: 'Aug 01', price: 315 },
    { date: 'Aug 07', price: 322 },
    { date: 'Aug 14', price: 328 },
    { date: 'Aug 21', price: 335 },
    { date: 'Aug 28', price: 340 },
  ];

  const cards = [
    { title: 'Current Crop', val: 'Maize (Zea mays)', sub: 'Vegetative Stage (Day 42)', icon: Sprout, color: 'emerald' },
    { title: 'Soil Moisture', val: '38.4%', sub: 'Optimal (Target: 35-45%)', icon: Droplets, color: 'blue' },
    { title: 'Temperature', val: '28.5 °C', sub: 'Climate: Fair', icon: Thermometer, color: 'amber' },
    { title: 'Humidity', val: '62.0%', sub: 'Moderate Evapotranspiration', icon: Wind, color: 'indigo' },
    { title: 'Expected Yield', val: '4.2 Tons/ha', sub: '+12.8% vs Regional Avg', icon: TrendingUp, color: 'teal' },
    { title: 'Disease Risk', val: 'Moderate', sub: 'Early Blight Alert', icon: Bug, color: 'rose' },
    { title: 'Market Price', val: '$340 / Ton', sub: '+4.8% (7-day trend)', icon: DollarSign, color: 'emerald' },
    { title: 'Irrigation Policy', val: 'Medium Flow', sub: 'Q-Learning RL Agent', icon: Zap, color: 'purple' },
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Farm Decision Overview</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-agro-950 border border-agro-500/40 text-[10px] font-mono text-agro-400">
              DEMO DATA
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">Real-time agricultural metrics & AI decision intelligence preview</p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
          <Clock className="w-4 h-4 text-emerald-400" />
          <span>Last Sync: Just now</span>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c, i) => (
          <div key={i} className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">{c.title}</span>
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-agro-400">
                <c.icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{c.val}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">{c.sub}</p>
            </div>
            <div className="pt-2 border-t border-slate-800/40 flex justify-between items-center text-[10px] text-slate-400 font-mono">
              <span>Status: Active</span>
              <span className="text-agro-400 font-semibold">Sample Data</span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendation Banner */}
      <div className="glass-card p-6 rounded-2xl border border-agro-500/30 bg-gradient-to-r from-agro-950/60 via-slate-900 to-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-agro-400" />
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-agro-400">AI Decision Engine Advisory</span>
          </div>
          <h3 className="text-base font-bold text-white">Apply Medium Irrigation Policy within next 4 hours</h3>
          <p className="text-xs text-slate-300">
            Soil moisture is at 38.4%. Rain probability for the next 24 hours is 15%. Applying 12mm medium flow optimizes root absorption.
          </p>
        </div>
        <button 
          onClick={() => alert('Phase 3 action execution will be logged to database.')}
          className="px-4 py-2.5 rounded-xl bg-agro-500 hover:bg-agro-400 text-slate-950 font-bold text-xs shrink-0 transition-colors"
        >
          Acknowledge Advisory
        </button>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Yield Forecast Chart */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Crop Yield History vs Target (Tons/ha)</h3>
              <p className="text-xs text-slate-400">Monthly yield trend trajectory</p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              Sample Chart
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={yieldData}>
                <defs>
                  <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="yield" stroke="#22c55e" fillOpacity={1} fill="url(#colorYield)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Market Price Chart */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Market Price Trend (USD / Ton)</h3>
              <p className="text-xs text-slate-400">7-Day commodity market trajectory</p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              Sample Chart
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                />
                <Line type="monotone" dataKey="price" stroke="#38bdf8" strokeWidth={2.5} dot={{ fill: '#38bdf8' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity & Soil Visualizer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Recent Farm Logs & Activity</h3>
          <div className="space-y-3">
            {[
              { title: 'Irrigation Cycle Completed', desc: '12mm water applied to Sector 2 (Maize field)', time: '2 hours ago', type: 'info' },
              { title: 'Foliar Inspection Uploaded', desc: 'Leaf sample uploaded for disease analysis', time: '5 hours ago', type: 'warning' },
              { title: 'Market Price Alert', desc: 'Maize market price increased by +4.8% ($340/Ton)', time: '1 day ago', type: 'success' },
            ].map((act, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start justify-between gap-3 text-xs">
                <div>
                  <h4 className="font-semibold text-white">{act.title}</h4>
                  <p className="text-slate-400 mt-0.5">{act.desc}</p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 shrink-0">{act.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Soil Condition Gauge</h3>
          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span className="text-slate-300">Nitrogen (N)</span>
                <span className="text-agro-400">90 kg/ha (Optimal)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                <div className="h-full bg-agro-500" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span className="text-slate-300">Phosphorus (P)</span>
                <span className="text-amber-400">42 kg/ha (Moderate)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                <div className="h-full bg-amber-500" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span className="text-slate-300">Potassium (K)</span>
                <span className="text-agro-400">45 kg/ha (Optimal)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                <div className="h-full bg-agro-500" style={{ width: '78%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span className="text-slate-300">pH Level</span>
                <span className="text-sky-400">6.5 (Neutral)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                <div className="h-full bg-sky-500" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
