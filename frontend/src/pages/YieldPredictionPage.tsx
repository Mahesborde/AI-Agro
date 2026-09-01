import React, { useState } from 'react';
import { TrendingUp, BarChart, Sparkles, ShieldAlert } from 'lucide-react';
import { getYieldPrediction } from '../services/yieldService';
import { YieldPredictionInput, YieldPredictionResult } from '../types';
import { useToast } from '../context/ToastContext';
import { ResponsiveContainer, BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const YieldPredictionPage: React.FC = () => {
  const [formData, setFormData] = useState<YieldPredictionInput>({
    crop: 'Maize',
    areaHectares: 10,
    rainfall: 1100,
    temperature: 26.0,
    fertilizerKg: 150,
    irrigationType: 'Drip Irrigation',
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<YieldPredictionResult | null>(null);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await getYieldPrediction(formData);
      setResult(res);
      showToast('Yield Forecast Generated', `Estimated ${res.expectedYieldTons} Tons for ${formData.areaHectares} Hectares.`, 'success');
    } catch (err) {
      showToast('Execution Error', 'Unable to calculate yield prediction.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const chartComparisonData = [
    { label: 'Regional Avg', yield: 3.4 },
    { label: 'Historical Farm', yield: 3.7 },
    { label: 'Predicted Yield', yield: result ? result.yieldPerHectare : 4.2 },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Crop Yield Prediction Engine</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-agro-950 border border-agro-500/40 text-[10px] font-mono text-agro-400">
              REGRESSION MODEL DEMO
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Forecast harvest tonnage based on farm area, historical rainfall, ambient temperature, and fertilizer rates.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Container */}
        <div className="lg:col-span-6 glass-card p-6 rounded-2xl border border-slate-800 space-y-5">
          <h3 className="text-base font-bold text-white border-b border-slate-800/80 pb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-agro-400" />
            <span>Yield Prediction Input Parameters</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300">Select Crop</label>
              <select
                value={formData.crop}
                onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
              >
                <option value="Maize">Maize (Corn)</option>
                <option value="Wheat">Wheat</option>
                <option value="Rice">Rice (Paddy)</option>
                <option value="Soybeans">Soybeans</option>
                <option value="Cotton">Cotton</option>
                <option value="Potatoes">Potatoes</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300">Farm Area (Hectares)</label>
                <input
                  type="number"
                  step="0.5"
                  value={formData.areaHectares}
                  onChange={(e) => setFormData({ ...formData, areaHectares: Number(e.target.value) })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">Fertilizer Applied (kg/ha)</label>
                <input
                  type="number"
                  value={formData.fertilizerKg}
                  onChange={(e) => setFormData({ ...formData, fertilizerKg: Number(e.target.value) })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300">Seasonal Rainfall (mm)</label>
                <input
                  type="number"
                  value={formData.rainfall}
                  onChange={(e) => setFormData({ ...formData, rainfall: Number(e.target.value) })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">Avg Temperature (°C)</label>
                <input
                  type="number"
                  step="0.5"
                  value={formData.temperature}
                  onChange={(e) => setFormData({ ...formData, temperature: Number(e.target.value) })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300">Irrigation Infrastructure</label>
              <select
                value={formData.irrigationType}
                onChange={(e) => setFormData({ ...formData, irrigationType: e.target.value })}
                className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
              >
                <option value="Drip Irrigation">Precision Drip Irrigation</option>
                <option value="Sprinkler">Center Pivot Sprinkler</option>
                <option value="Rain-fed">Rain-fed (No artificial irrigation)</option>
                <option value="Canal / Surface">Canal Surface Flooding</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-agro-500 hover:bg-agro-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-agro-500/20 disabled:opacity-50 mt-2"
            >
              {loading ? (
                <span>Calculating Yield Regression Model...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Predict Harvest Tonnage</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Prediction Results & Recharts */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-5">
            <h3 className="text-base font-bold text-white border-b border-slate-800/80 pb-3 flex items-center justify-between">
              <span>Yield Prediction Output</span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                Phase 3 XGBoost Target
              </span>
            </h3>

            {loading && (
              <div className="py-12 flex flex-col items-center justify-center space-y-3">
                <div className="w-10 h-10 border-4 border-agro-500/30 border-t-agro-500 rounded-full animate-spin"></div>
                <p className="text-xs text-slate-400 font-mono">Evaluating XGBoost regression tree ensembles...</p>
              </div>
            )}

            {!loading && !result && (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
                  <BarChart className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-slate-300">Ready for Yield Parameters</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Provide crop type and field size metrics to compute projected yield tonnage.
                </p>
              </div>
            )}

            {!loading && result && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-agro-950/60 border border-agro-500/40">
                    <span className="text-[10px] font-mono font-bold text-agro-400 uppercase">Total Predicted Yield</span>
                    <h2 className="text-2xl font-extrabold text-white mt-1">{result.expectedYieldTons} Tons</h2>
                    <p className="text-[11px] text-slate-400 mt-1">Total output for {formData.areaHectares} hectares</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Yield Rate per Hectare</span>
                    <h2 className="text-2xl font-extrabold text-emerald-400 mt-1">{result.yieldPerHectare} Tons/ha</h2>
                    <p className="text-[11px] text-emerald-400 mt-1">+{result.historicalComparisonPercent}% vs regional baseline</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Yield Comparison (Tons / Hectare)</h4>
                  <div className="h-44">
                    <ResponsiveContainer width="100%" height="100%">
                      <ReBarChart data={chartComparisonData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                        <XAxis dataKey="label" stroke="#64748b" fontSize={11} />
                        <YAxis stroke="#64748b" fontSize={11} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '11px' }} />
                        <Bar dataKey="yield" fill="#22c55e" radius={[6, 6, 0, 0]} />
                      </ReBarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Phase 2 Demo Output. XGBoost regression pipeline will be connected in Phase 3.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
