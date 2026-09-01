import React, { useState } from 'react';
import { Tractor, Plus, Trash2, X } from 'lucide-react';
import { Farm } from '../types';
import { useToast } from '../context/ToastContext';

export const FarmManagementPage: React.FC = () => {
  const [farms, setFarms] = useState<Farm[]>([
    {
      id: 'f1',
      name: 'Green Valley Plot A',
      location: 'North Zone, Block 4',
      sizeHectares: 12.5,
      primaryCrop: 'Maize (Zea mays)',
      soilType: 'Loamy Soil',
      irrigationType: 'Drip Irrigation',
      createdAt: '2026-01-15',
    },
    {
      id: 'f2',
      name: 'Highland Farm Plot B',
      location: 'South Hills, Block 2',
      sizeHectares: 8.0,
      primaryCrop: 'Wheat',
      soilType: 'Clay Soil',
      irrigationType: 'Sprinkler',
      createdAt: '2026-03-10',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFarmName, setNewFarmName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newSize, setNewSize] = useState(10);
  const [newCrop, setNewCrop] = useState('Maize');
  const [newSoil] = useState('Loamy');

  const { showToast } = useToast();

  const handleAddFarm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFarmName || !newLocation) {
      showToast('Validation Error', 'Farm name and location are required.', 'error');
      return;
    }

    const farm: Farm = {
      id: `f_${Date.now()}`,
      name: newFarmName,
      location: newLocation,
      sizeHectares: newSize,
      primaryCrop: newCrop,
      soilType: newSoil,
      irrigationType: 'Drip Irrigation',
      createdAt: new Date().toISOString().split('T')[0],
    };

    setFarms([...farms, farm]);
    setIsModalOpen(false);
    setNewFarmName('');
    setNewLocation('');
    showToast('Farm Added', `Created ${farm.name} successfully.`, 'success');
  };

  const handleDeleteFarm = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      setFarms(farms.filter((f) => f.id !== id));
      showToast('Farm Deleted', `Removed ${name} from records.`, 'info');
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Farm & Crop Management</h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage registered farm plots, crop growth stages, fertilizer logs, and expense tracking.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-agro-500 hover:bg-agro-400 text-slate-950 font-bold text-xs flex items-center gap-2 shrink-0 transition-colors shadow-lg shadow-agro-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Farm Plot</span>
        </button>
      </div>

      {/* Farm List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {farms.map((f) => (
          <div key={f.id} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 relative">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-agro-950 border border-agro-800 flex items-center justify-center text-agro-400">
                  <Tractor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{f.name}</h3>
                  <p className="text-xs text-slate-400">{f.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDeleteFarm(f.id, f.name)}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-rose-900 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-slate-800/60">
              <div>
                <span className="text-[10px] text-slate-500 font-mono">Area Size</span>
                <p className="font-semibold text-white">{f.sizeHectares} Hectares</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-mono">Primary Crop</span>
                <p className="font-semibold text-white">{f.primaryCrop}</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-mono">Soil Classification</span>
                <p className="font-semibold text-slate-300">{f.soilType}</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-mono">Irrigation Method</span>
                <p className="font-semibold text-slate-300">{f.irrigationType}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-2">
              <button 
                onClick={() => showToast('Action Recorded', 'Logged fertilizer application.', 'success')}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-[11px] font-semibold text-slate-300 transition-colors"
              >
                + Record Fertilizer
              </button>
              <button 
                onClick={() => showToast('Action Recorded', 'Logged harvest batch.', 'success')}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-[11px] font-semibold text-slate-300 transition-colors"
              >
                + Record Harvest
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Farm Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card w-full max-w-md p-6 rounded-2xl border border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Register New Farm Plot</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddFarm} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300">Farm Plot Name</label>
                <input
                  type="text"
                  value={newFarmName}
                  onChange={(e) => setNewFarmName(e.target.value)}
                  placeholder="Green Valley Plot C"
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-agro-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">Location / Block Region</label>
                <input
                  type="text"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="East Sector, Block 1"
                  className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-agro-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300">Size (Hectares)</label>
                  <input
                    type="number"
                    value={newSize}
                    onChange={(e) => setNewSize(Number(e.target.value))}
                    className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-agro-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300">Primary Crop</label>
                  <input
                    type="text"
                    value={newCrop}
                    onChange={(e) => setNewCrop(e.target.value)}
                    className="mt-1 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-agro-500"
                    required
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 text-xs font-semibold hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-agro-500 text-slate-950 text-xs font-bold hover:bg-agro-400"
                >
                  Save Farm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
