import React, { useState } from 'react';
import { Bug, Upload, X, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import { analyzePlantDiseaseImage } from '../services/diseaseService';
import { DiseaseDetectionResult } from '../types';
import { useToast } from '../context/ToastContext';

export const DiseaseDetectionPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiseaseDetectionResult | null>(null);
  const { showToast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
    showToast('Image Removed', 'Foliar upload cleared.', 'info');
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      showToast('Image Required', 'Please drag & drop or select a leaf image file first.', 'warning');
      return;
    }

    setLoading(true);
    try {
      const res = await analyzePlantDiseaseImage(selectedFile);
      setResult(res);
      showToast('Vision Analysis Complete', `Identified: ${res.diseaseName}`, 'success');
    } catch (err) {
      showToast('Analysis Error', 'Unable to complete deep learning diagnosis.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Plant Disease Diagnosis Engine</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-agro-950 border border-agro-500/40 text-[10px] font-mono text-agro-400">
              DEEP LEARNING CNN DEMO
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Upload leaf photographs to diagnose foliar pathogens, leaf blights, and pest infestations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Upload Container */}
        <div className="lg:col-span-6 glass-card p-6 rounded-2xl border border-slate-800 space-y-5">
          <h3 className="text-base font-bold text-white border-b border-slate-800/80 pb-3 flex items-center gap-2">
            <Bug className="w-5 h-5 text-agro-400" />
            <span>Foliar Leaf Image Upload</span>
          </h3>

          {!previewUrl ? (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="border-2 border-dashed border-slate-800 hover:border-agro-500/60 bg-slate-950/60 rounded-2xl p-8 text-center space-y-4 transition-colors cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-agro-400">
                <Upload className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">Drag & drop leaf photo here</p>
                <p className="text-xs text-slate-400">Supports JPG, PNG, WEBP (Max 10MB)</p>
              </div>
              <div>
                <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-white hover:bg-slate-800 cursor-pointer transition-colors">
                  <span>Browse File</span>
                  <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </label>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 max-h-72 bg-slate-950 flex items-center justify-center">
                <img src={previewUrl} alt="Leaf preview" className="max-h-72 w-auto object-contain" />
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-rose-950 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-agro-500 hover:bg-agro-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-agro-500/20 disabled:opacity-50"
              >
                {loading ? (
                  <span>Executing CNN Feature Classifier...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Diagnose Plant Disease</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Diagnosis Result Container */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-5">
            <h3 className="text-base font-bold text-white border-b border-slate-800/80 pb-3 flex items-center justify-between">
              <span>Pathogen Diagnostic Results</span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                Phase 3 PyTorch CNN Target
              </span>
            </h3>

            {loading && (
              <div className="py-12 flex flex-col items-center justify-center space-y-3">
                <div className="w-10 h-10 border-4 border-agro-500/30 border-t-agro-500 rounded-full animate-spin"></div>
                <p className="text-xs text-slate-400 font-mono">Running ResNet-50 deep CNN inference...</p>
              </div>
            )}

            {!loading && !result && (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
                  <Bug className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-slate-300">No Leaf Image Analyzed</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Upload a crop leaf image to receive automated disease classification and fungicide recommendations.
                </p>
              </div>
            )}

            {!loading && result && (
              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-rose-400 uppercase">Detected Pathogen</span>
                    <span className="text-xs font-mono font-semibold text-emerald-400">{result.confidence}% Confidence</span>
                  </div>
                  <h2 className="text-xl font-extrabold text-white">{result.diseaseName}</h2>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-xs text-slate-400">Severity Level:</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-amber-800 text-[10px] font-bold text-amber-300">
                      {result.severity}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Recommended Treatment Actions</h4>
                  <ul className="space-y-2">
                    {result.treatments.map((t, idx) => (
                      <li key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Phase 2 Demo Output. PyTorch CNN inference model will be connected in Phase 3.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
