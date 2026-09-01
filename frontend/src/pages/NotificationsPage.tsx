import React, { useState } from 'react';
import { Bell, AlertTriangle, Info, Check } from 'lucide-react';
import { NotificationItem } from '../types';
import { useToast } from '../context/ToastContext';

export const NotificationsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Unread' | 'Irrigation' | 'Disease' | 'Market'>('All');
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 'n1',
      title: 'Smart Irrigation Advisory',
      message: 'Soil moisture dropped to 38.4%. Q-Learning agent recommends Medium Irrigation flow (12mm) today.',
      category: 'Irrigation',
      priority: 'high',
      read: false,
      timestamp: '10 mins ago',
    },
    {
      id: 'n2',
      title: 'Early Blight Warning',
      message: 'Foliar image upload analysis flagged Tomato Early Blight (Alternaria solani) with 96.8% confidence.',
      category: 'Disease',
      priority: 'high',
      read: false,
      timestamp: '2 hours ago',
    },
    {
      id: 'n3',
      title: 'Maize Commodity Price Surge',
      message: 'Market prices for Maize increased +4.8% to $340/Ton at Central Wholesale Market.',
      category: 'Market',
      priority: 'medium',
      read: false,
      timestamp: '1 day ago',
    },
    {
      id: 'n4',
      title: 'Heavy Rainfall Forecast Alert',
      message: 'Meteorological advisory forecasts 45mm precipitation over the next 48 hours.',
      category: 'Weather',
      priority: 'medium',
      read: true,
      timestamp: '2 days ago',
    },
    {
      id: 'n5',
      title: 'Farm Log Summary Recorded',
      message: 'Logged 150kg N-P-K fertilizer application for Highland Farm Plot B.',
      category: 'Farm Activity',
      priority: 'low',
      read: true,
      timestamp: '3 days ago',
    },
  ]);

  const { showToast } = useToast();

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    showToast('Notifications Updated', 'All items marked as read.', 'success');
  };

  const toggleReadStatus = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === 'Unread') return !n.read;
    if (filter !== 'All') return n.category === filter;
    return true;
  });

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Notification & Advisory Center</h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time advisory alerts, disease warnings, market price movements, and weather notifications.
          </p>
        </div>

        <button
          onClick={handleMarkAllRead}
          className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 shrink-0 transition-colors"
        >
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Mark All as Read</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        {(['All', 'Unread', 'Irrigation', 'Disease', 'Market'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === tab
                ? 'bg-agro-500/15 text-agro-400 border border-agro-500/30'
                : 'text-slate-400 hover:bg-slate-900 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="glass-card p-12 text-center rounded-2xl border border-slate-800 space-y-3">
            <Bell className="w-8 h-8 text-slate-500 mx-auto" />
            <h4 className="text-sm font-semibold text-slate-300">No Notifications Found</h4>
            <p className="text-xs text-slate-500">There are no alerts matching the selected filter criteria.</p>
          </div>
        ) : (
          filteredNotifications.map((n) => (
            <div
              key={n.id}
              className={`p-4 rounded-2xl border transition-all duration-200 flex items-start justify-between gap-4 ${
                !n.read
                  ? 'glass-card border-agro-500/30 bg-gradient-to-r from-agro-950/30 to-slate-900'
                  : 'bg-slate-950/60 border-slate-800/80 opacity-80'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                    n.priority === 'high'
                      ? 'bg-rose-950/80 border-rose-800 text-rose-400'
                      : n.priority === 'medium'
                      ? 'bg-amber-950/80 border-amber-800 text-amber-400'
                      : 'bg-slate-900 border-slate-800 text-sky-400'
                  }`}
                >
                  {n.priority === 'high' ? (
                    <AlertTriangle className="w-5 h-5" />
                  ) : (
                    <Info className="w-5 h-5" />
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white">{n.title}</h4>
                    <span className="px-2 py-0.5 text-[9px] font-mono font-semibold rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {n.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{n.message}</p>
                  <p className="text-[10px] font-mono text-slate-500 pt-1">{n.timestamp}</p>
                </div>
              </div>

              <button
                onClick={() => toggleReadStatus(n.id)}
                className="text-xs text-slate-400 hover:text-agro-400 shrink-0 font-mono"
              >
                {n.read ? 'Mark Unread' : 'Mark Read'}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
