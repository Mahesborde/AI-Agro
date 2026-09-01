import React, { useState } from 'react';
import { User, Bell, Sliders, Check } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const SettingsPage: React.FC = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [units, setUnits] = useState('Metric (Hectares, Kg, °C)');

  const { showToast } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Preferences Saved', 'Your farm settings have been updated.', 'success');
  };

  return (
    <div className="space-y-8 font-sans max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Account & Platform Settings</h1>
        <p className="text-xs text-slate-400 mt-1">Configure profile preferences, alert channels, measurement units, and API parameters.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Details */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <User className="w-4 h-4 text-agro-400" />
            <span>Profile & Farm Identity</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300">Farmer Name</label>
              <input
                type="text"
                defaultValue="Demo Farmer"
                className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-agro-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300">Email Address</label>
              <input
                type="email"
                defaultValue="farmer@agromind.ai"
                className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-agro-500"
              />
            </div>
          </div>
        </div>

        {/* Preference Settings */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Sliders className="w-4 h-4 text-agro-400" />
            <span>Regional & Unit Preferences</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300">Display Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300">Measurement System</label>
              <select
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
              >
                <option value="Metric (Hectares, Kg, °C)">Metric (Hectares, Kg, °C)</option>
                <option value="Imperial (Acres, Lbs, °F)">Imperial (Acres, Lbs, °F)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Channels */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Bell className="w-4 h-4 text-agro-400" />
            <span>Notification Delivery Channels</span>
          </h3>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800/80 cursor-pointer">
              <span className="text-xs font-semibold text-slate-300">Email Alerts (Disease warnings & market price shifts)</span>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={(e) => setEmailAlerts(e.target.checked)}
                className="rounded bg-slate-900 border-slate-800 text-agro-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800/80 cursor-pointer">
              <span className="text-xs font-semibold text-slate-300">SMS Advisory Notifications (Critical irrigation alerts)</span>
              <input
                type="checkbox"
                checked={smsAlerts}
                onChange={(e) => setSmsAlerts(e.target.checked)}
                className="rounded bg-slate-900 border-slate-800 text-agro-500"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-agro-500 hover:bg-agro-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-agro-500/20"
        >
          <Check className="w-4 h-4" />
          <span>Save Preferences</span>
        </button>
      </form>
    </div>
  );
};
