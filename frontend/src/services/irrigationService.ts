import { apiClient } from './api';
import { IrrigationState } from '../types';

export const getIrrigationRecommendation = async (): Promise<IrrigationState> => {
  try {
    return await apiClient.get<IrrigationState>('/irrigation-rl/recommend');
  } catch (err) {
    await new Promise((res) => setTimeout(res, 500));
    return {
      soilMoisturePercent: 38.4,
      temperatureCelsius: 28.5,
      humidityPercent: 62.0,
      rainProbabilityPercent: 15.0,
      growthStage: 'Vegetative Stage',
      recommendedAction: 'MEDIUM',
      qValueConfidence: 0.92,
      waterSavedLitersMonth: 4250,
      isDemo: true,
    };
  }
};
