import React, { useState } from 'react';
import { Zap, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const SmartIrrigationPage: React.FC = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<'NO_IRRIGATION' | 'LOW' | 'MEDIUM' | 'HIGH'>('MEDIUM');

  const policies = [
    { id: 'NO_IRRIGATION', title: 'No Irrigation', flow: '0 mm', desc: 'Hold water application. Rain expected or soil moisture sufficient.' },
    { id: 'LOW', title: 'Low Irrigation', flow: '5 mm', desc: 'Light trickle for surface moisture maintenance.' },
    { id: 'MEDIUM', title: 'Medium Irrigation', flow: '12 mm', desc: 'Optimal root zone saturation. Recommended by RL Agent.' },
    { id: 'HIGH', title: 'High Irrigation', flow: '25 mm', desc: 'Deep soil soaking for high evapotranspiration days.' },
  ];

  const waterUsageData = [
    { day: 'Mon', liters: 1200 },
    { day: 'Tue', liters: 1400 },
    { day: 'Wed', liters: 1100 },
    { day: 'Thu', liters: 950 },
    { day: 'Fri', liters: 1300 },
    { day: 'Sat', liters: 1250 },
    { day: 'Sun', liters: 1050 },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Smart Irrigation Optimization Engine</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-agro-950 border border-agro-500/40 text-[10px] font-mono text-agro-400">
              REINFORCEMENT LEARNING DEMO
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Q-Learning reinforcement agent optimizing water release policies based on soil moisture and climate transitions.
          </p>
        </div>
      </div>

      {/* Current Environmental State Panel */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Soil State Vector</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 font-mono">Soil Moisture</span>
            <p className="text-lg font-bold text-agro-400">38.4%</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 font-mono">Temperature</span>
            <p className="text-lg font-bold text-white">28.5 °C</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 font-mono">Relative Humidity</span>
            <p className="text-lg font-bold text-white">62.0%</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 font-mono">Rain Probability</span>
            <p className="text-lg font-bold text-sky-400">15.0%</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 font-mono">Growth Stage</span>
            <p className="text-sm font-bold text-white mt-1">Vegetative</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 font-mono">Water Reservoir</span>
            <p className="text-sm font-bold text-emerald-400 mt-1">Abundant</p>
          </div>
        </div>
      </div>

      {/* AI Recommendation & Action Cards */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Zap className="w-5 h-5 text-agro-400" />
          <span>RL Q-Learning Policy Recommendations</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {policies.map((p) => {
            const isSelected = selectedPolicy === p.id;
            return (
              <div
                key={p.id}
                onClick={() => setSelectedPolicy(p.id as any)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 space-y-3 ${
                  isSelected
                    ? 'bg-agro-950/80 border-agro-500 shadow-lg shadow-agro-500/20'
                    : 'glass-card border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-300">{p.flow}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-agro-400" />}
                </div>
                <h4 className="text-base font-bold text-white">{p.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Water Usage Chart & Log */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Weekly Water Consumption (Liters)</h3>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              Sample Chart
            </span>
          </div>

          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={waterUsageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
                <Bar dataKey="liters" fill="#38bdf8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-5 glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Irrigation Action History</h3>
          <div className="space-y-3">
            {[
              { time: 'Today, 06:00 AM', policy: 'Medium Flow (12mm)', reward: '+0.88 Q-Val' },
              { time: 'Yesterday, 06:00 AM', policy: 'Low Flow (5mm)', reward: '+0.76 Q-Val' },
              { time: 'Aug 26, 06:00 AM', policy: 'No Irrigation (Rain)', reward: '+0.95 Q-Val' },
            ].map((log, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-white">{log.policy}</h4>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">{log.time}</p>
                </div>
                <span className="font-mono text-agro-400 font-bold">{log.reward}</span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Phase 2 Demo Output. Custom Q-Learning agent environment will be connected in Phase 3.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
