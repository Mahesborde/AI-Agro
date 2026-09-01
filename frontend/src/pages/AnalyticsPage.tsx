import React, { useState } from 'react';
import { Calendar, Filter } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

export const AnalyticsPage: React.FC = () => {
  const [dateFilter, setDateFilter] = useState('2026-Season');
  const [cropFilter, setCropFilter] = useState('All');

  const financialData = [
    { month: 'Apr', revenue: 14200, expense: 6200, profit: 8000 },
    { month: 'May', revenue: 15800, expense: 6800, profit: 9000 },
    { month: 'Jun', revenue: 18200, expense: 7100, profit: 11100 },
    { month: 'Jul', revenue: 21000, expense: 8400, profit: 12600 },
    { month: 'Aug', revenue: 24500, expense: 9100, profit: 15400 },
  ];

  const resourceData = [
    { month: 'Apr', waterLiters: 14500, fertilizerKg: 420 },
    { month: 'May', waterLiters: 16200, fertilizerKg: 480 },
    { month: 'Jun', waterLiters: 18000, fertilizerKg: 510 },
    { month: 'Jul', waterLiters: 15400, fertilizerKg: 430 },
    { month: 'Aug', waterLiters: 13800, fertilizerKg: 390 },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Farm Analytics & Financial Intelligence</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-agro-950 border border-agro-500/40 text-[10px] font-mono text-agro-400">
              DEMO VISUALIZER
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Analyze historical crop yield rates, revenue margins, water usage efficiency, and input costs.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="glass-card p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-agro-400" />
            <span className="text-xs font-semibold text-slate-300">Season:</span>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
            >
              <option value="2026-Season">2026 Growing Season</option>
              <option value="2025-Season">2025 Historical</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold text-slate-300">Filter Crop:</span>
            <select
              value={cropFilter}
              onChange={(e) => setCropFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
            >
              <option value="All">All Crops Combined</option>
              <option value="Maize">Maize Only</option>
              <option value="Wheat">Wheat Only</option>
            </select>
          </div>
        </div>

        <div className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
          Status: Sample Dataset View
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400">Total Season Revenue</span>
          <h3 className="text-2xl font-extrabold text-white mt-1">$93,700</h3>
          <p className="text-[11px] text-emerald-400 mt-0.5">+18.4% vs 2025</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400">Total Input Expenses</span>
          <h3 className="text-2xl font-extrabold text-slate-300 mt-1">$37,600</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">Seeds, Fertilizer & Fuel</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400">Net Farm Profit</span>
          <h3 className="text-2xl font-extrabold text-emerald-400 mt-1">$56,100</h3>
          <p className="text-[11px] text-emerald-400 mt-0.5">59.8% Profit Margin</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400">Water Conservation</span>
          <h3 className="text-2xl font-extrabold text-sky-400 mt-1">42,500 L</h3>
          <p className="text-[11px] text-sky-400 mt-0.5">Saved via RL Irrigation</p>
        </div>
      </div>

      {/* Financial Bar Chart & Resource Line Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Revenue vs Expense Breakdown (USD)</h3>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">Recharts</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financialData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '11px' }} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Bar dataKey="revenue" fill="#22c55e" radius={[4, 4, 0, 0]} name="Revenue ($)" />
                <Bar dataKey="expense" fill="#f43f5e" radius={[4, 4, 0, 0]} name="Expenses ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Resource Consumption Trends</h3>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">Recharts</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={resourceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '11px' }} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Line type="monotone" dataKey="waterLiters" stroke="#38bdf8" strokeWidth={2} name="Water (Liters)" />
                <Line type="monotone" dataKey="fertilizerKg" stroke="#eab308" strokeWidth={2} name="Fertilizer (kg)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
