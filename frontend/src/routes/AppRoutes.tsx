import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { DashboardPage } from '../pages/DashboardPage';
import { FarmManagementPage } from '../pages/FarmManagementPage';
import { CropRecommendationPage } from '../pages/CropRecommendationPage';
import { YieldPredictionPage } from '../pages/YieldPredictionPage';
import { DiseaseDetectionPage } from '../pages/DiseaseDetectionPage';
import { MarketIntelligencePage } from '../pages/MarketIntelligencePage';
import { SmartIrrigationPage } from '../pages/SmartIrrigationPage';
import { AnalyticsPage } from '../pages/AnalyticsPage';
import { NotificationsPage } from '../pages/NotificationsPage';
import { SettingsPage } from '../pages/SettingsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Dashboard App Layout & Nested Sub-pages */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="farms" element={<FarmManagementPage />} />
        <Route path="crop-recommendation" element={<CropRecommendationPage />} />
        <Route path="yield-prediction" element={<YieldPredictionPage />} />
        <Route path="disease-detection" element={<DiseaseDetectionPage />} />
        <Route path="market-intelligence" element={<MarketIntelligencePage />} />
        <Route path="smart-irrigation" element={<SmartIrrigationPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Fallback 404 Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
