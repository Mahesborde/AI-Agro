import { apiClient } from './api';
import { CropRecommendationInput, CropRecommendationResult } from '../types';

export const getCropRecommendation = async (
  input: CropRecommendationInput
): Promise<CropRecommendationResult> => {
  try {
    // Phase 3 Endpoint connection point:
    return await apiClient.post<CropRecommendationResult>('/crop-recommendation/predict', input);
  } catch (err) {
    console.info('[cropService] Phase 2 Demo mode active - returning structured sample response');
    // Simulated structured sample response for Phase 2 UI preview
    await new Promise((res) => setTimeout(res, 800)); // Simulate async network latency
    return {
      recommendedCrop: 'Maize (Zea mays)',
      confidenceScore: 94.2,
      alternativeCrops: [
        { crop: 'Chickpea (Cicer arietinum)', score: 88.5 },
        { crop: 'Kidney Beans (Phaseolus vulgaris)', score: 81.0 },
        { crop: 'Cotton (Gossypium)', score: 76.4 },
      ],
      soilSuitability: 'Optimal N-P-K balance with suitable pH range for high grain filling efficiency.',
      isDemo: true,
    };
  }
};
