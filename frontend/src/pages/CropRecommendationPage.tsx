import React, { useState } from 'react';
import { Sprout, RotateCcw, Sparkles, ShieldAlert } from 'lucide-react';
import { getCropRecommendation } from '../services/cropService';
import { CropRecommendationInput, CropRecommendationResult } from '../types';
import { useToast } from '../context/ToastContext';

export const CropRecommendationPage: React.FC = () => {
  const [formData, setFormData] = useState<CropRecommendationInput>({
    nitrogen: 90,
    phosphorus: 42,
    potassium: 43,
    ph: 6.5,
    temperature: 25.5,
    humidity: 78.0,
    rainfall: 200.0,
    soilType: 'Loamy',
    location: 'North Zone',
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CropRecommendationResult | null>(null);
  const { showToast } = useToast();

  const handleReset = () => {
    setFormData({
      nitrogen: 90,
      phosphorus: 42,
      potassium: 43,
      ph: 6.5,
      temperature: 25.5,
      humidity: 78.0,
      rainfall: 200.0,
      soilType: 'Loamy',
      location: 'North Zone',
    });
    setResult(null);
    showToast('Form Reset', 'Parameters restored to defaults.', 'info');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await getCropRecommendation(formData);
      setResult(res);
      showToast('Analysis Complete', 'Generated sample crop recommendation.', 'success');
    } catch (err) {
      showToast('Execution Error', 'Unable to complete crop recommendation.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Crop Recommendation Engine</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-agro-950 border border-agro-500/40 text-[10px] font-mono text-agro-400">
              ML CLASSIFICATION DEMO
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Input soil nutrient concentrations and climatic variables to analyze crop suitability.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Container */}
        <div className="lg:col-span-7 glass-card p-6 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sprout className="w-5 h-5 text-agro-400" />
              <span>Soil & Climate Parameters</span>
            </h3>
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300">Nitrogen (N) kg/ha</label>
                <input
                  type="number"
                  value={formData.nitrogen}
                  onChange={(e) => setFormData({ ...formData, nitrogen: Number(e.target.value) })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">Phosphorus (P) kg/ha</label>
                <input
                  type="number"
                  value={formData.phosphorus}
                  onChange={(e) => setFormData({ ...formData, phosphorus: Number(e.target.value) })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">Potassium (K) kg/ha</label>
                <input
                  type="number"
                  value={formData.potassium}
                  onChange={(e) => setFormData({ ...formData, potassium: Number(e.target.value) })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300">Soil pH (0.0 - 14.0)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.ph}
                  onChange={(e) => setFormData({ ...formData, ph: Number(e.target.value) })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">Temperature (°C)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.temperature}
                  onChange={(e) => setFormData({ ...formData, temperature: Number(e.target.value) })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300">Relative Humidity (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.humidity}
                  onChange={(e) => setFormData({ ...formData, humidity: Number(e.target.value) })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">Annual Rainfall (mm)</label>
                <input
                  type="number"
                  step="1"
                  value={formData.rainfall}
                  onChange={(e) => setFormData({ ...formData, rainfall: Number(e.target.value) })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300">Soil Type</label>
                <select
                  value={formData.soilType}
                  onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                >
                  <option value="Loamy">Loamy Soil</option>
                  <option value="Clay">Clay Soil</option>
                  <option value="Sandy">Sandy Soil</option>
                  <option value="Silt">Silt Soil</option>
                  <option value="Black Soil">Black Soil</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">Region / Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-agro-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-agro-500 hover:bg-agro-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-agro-500/20 disabled:opacity-50 mt-4"
            >
              {loading ? (
                <span>Running ML Analysis Model...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Analyze Crop Suitability</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results Container */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <h3 className="text-base font-bold text-white">Analysis Output Area</h3>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                Phase 3 Endpoint Target
              </span>
            </div>

            {loading && (
              <div className="py-12 flex flex-col items-center justify-center space-y-3">
                <div className="w-10 h-10 border-4 border-agro-500/30 border-t-agro-500 rounded-full animate-spin"></div>
                <p className="text-xs text-slate-400 font-mono">Evaluating Random Forest classifier parameters...</p>
              </div>
            )}

            {!loading && !result && (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
                  <Sprout className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-slate-300">Ready for Soil Parameter Submission</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Fill in the N-P-K nutrient values and climate metrics on the left to view recommended crops.
                </p>
              </div>
            )}

            {!loading && result && (
              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-agro-950/60 border border-agro-500/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-agro-400 uppercase tracking-wider">Top Recommended Crop</span>
                    <span className="text-xs font-mono font-semibold text-emerald-400">{result.confidenceScore}% Match</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">{result.recommendedCrop}</h2>
                  <p className="text-xs text-slate-300 leading-relaxed">{result.soilSuitability}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Alternative High-Match Crops</h4>
                  {result.alternativeCrops.map((alt, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">{alt.crop}</span>
                      <span className="font-mono text-slate-400">{alt.score}% Score</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Phase 2 Demo Output. In Phase 3, this area will render predictions from the trained Scikit-learn FastAPI model.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
