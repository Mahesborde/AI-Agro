import React, { useState } from 'react';
import { DollarSign, TrendingUp, Calendar, MapPin, ShieldAlert } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const MarketIntelligencePage: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState('Maize');
  const [selectedMarket, setSelectedMarket] = useState('Central Agricultural Market');
  const [dateRange, setDateRange] = useState('30d');

  const historyData = [
    { date: 'Aug 01', price: 315, volume: 1200 },
    { date: 'Aug 07', price: 322, volume: 1450 },
    { date: 'Aug 14', price: 328, volume: 1300 },
    { date: 'Aug 21', price: 335, volume: 1600 },
    { date: 'Aug 28', price: 340, volume: 1850 },
  ];

  const marketComparisons = [
    { market: 'Central Wholesale Market', price: '$340 / Ton', trend: '+4.8%' },
    { market: 'Northern Regional Hub', price: '$332 / Ton', trend: '+2.1%' },
    { market: 'Eastern Grain Exchange', price: '$345 / Ton', trend: '+5.4%' },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Market Intelligence & Price Forecasting</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-agro-950 border border-agro-500/40 text-[10px] font-mono text-agro-400">
              TIME SERIES DEMO
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Track commodity prices, forecast market trends, and identify optimal sales windows.
          </p>
        </div>
      </div>

      {/* Selector Filters */}
      <div className="glass-card p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-agro-400" />
          <span className="text-xs font-semibold text-slate-300">Crop:</span>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
          >
            <option value="Maize">Maize (Corn)</option>
            <option value="Wheat">Wheat</option>
            <option value="Rice">Rice</option>
            <option value="Soybeans">Soybeans</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-semibold text-slate-300">Market:</span>
          <select
            value={selectedMarket}
            onChange={(e) => setSelectedMarket(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
          >
            <option value="Central Agricultural Market">Central Agricultural Market</option>
            <option value="Northern Regional Hub">Northern Regional Hub</option>
            <option value="Eastern Grain Exchange">Eastern Grain Exchange</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold text-slate-300">Range:</span>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
        </div>
      </div>

      {/* Cards & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <span className="text-xs font-semibold text-slate-400">Current Market Price</span>
            <div className="flex items-baseline justify-between">
              <h2 className="text-3xl font-extrabold text-white">$340.00</h2>
              <span className="px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-xs font-bold text-emerald-400 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+4.8%</span>
              </span>
            </div>
            <p className="text-xs text-slate-400">Per Metric Ton USD ({selectedMarket})</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Regional Market Comparison</h3>
            <div className="space-y-3">
              {marketComparisons.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-white">{m.market}</h4>
                    <p className="text-slate-400 font-mono mt-0.5">{m.price}</p>
                  </div>
                  <span className="text-emerald-400 font-mono font-bold">{m.trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Historical Price Trajectory ({selectedCrop})</h3>
              <p className="text-xs text-slate-400">Time-series trend analysis</p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              Sample Chart
            </span>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={historyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
                <Line type="monotone" dataKey="price" stroke="#22c55e" strokeWidth={3} dot={{ fill: '#22c55e' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Phase 2 Demo Output. ARIMA / Prophet time-series price forecasting will be connected in Phase 3.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
