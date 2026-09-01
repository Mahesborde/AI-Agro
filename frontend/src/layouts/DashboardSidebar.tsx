import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Tractor, 
  Sprout, 
  TrendingUp, 
  Bug, 
  DollarSign, 
  Droplets, 
  BarChart3, 
  Bell, 
  Settings, 
  X,
  ShieldAlert
} from 'lucide-react';

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const DashboardSidebar: React.FC<SidebarProps> = ({ mobileOpen, setMobileOpen }) => {
  const menuItems = [
    { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { name: 'My Farms', path: '/dashboard/farms', icon: Tractor },
    { name: 'Crop Recommendation', path: '/dashboard/crop-recommendation', icon: Sprout },
    { name: 'Yield Prediction', path: '/dashboard/yield-prediction', icon: TrendingUp },
    { name: 'Disease Detection', path: '/dashboard/disease-detection', icon: Bug },
    { name: 'Market Intelligence', path: '/dashboard/market-intelligence', icon: DollarSign },
    { name: 'Smart Irrigation', path: '/dashboard/smart-irrigation', icon: Droplets },
    { name: 'Farm Analytics', path: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Notifications', path: '/dashboard/notifications', icon: Bell, badge: '3' },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800/80 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-slate-800/60">
          <NavLink to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-agro-500 to-emerald-700 flex items-center justify-center shadow-md shadow-agro-500/20">
              <Sprout className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              AgroMind <span className="gradient-text">AI</span>
            </span>
          </NavLink>
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Mode Notice */}
        <div className="mx-4 my-3 p-3 rounded-xl bg-agro-950/60 border border-agro-800/40 text-[11px] text-agro-300 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0 text-agro-400" />
          <span>Phase 2 Preview (Demo Mode Active)</span>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/dashboard'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  isActive
                    ? 'bg-agro-500/15 text-agro-400 border border-agro-500/30'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-agro-500 text-slate-950">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer Profile Snippet */}
        <div className="p-4 border-t border-slate-800/60">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-950/50 border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
              FM
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-white truncate">Demo Farmer</p>
              <p className="text-[10px] text-slate-400 truncate">Green Valley Farm</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
