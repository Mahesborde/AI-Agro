// AgroMind AI - Domain Types and Interfaces

export interface Farm {
  id: string;
  name: string;
  location: string;
  sizeHectares: number;
  primaryCrop: string;
  soilType: string;
  irrigationType: string;
  createdAt: string;
}

export interface CropRecord {
  id: string;
  farmId: string;
  cropName: string;
  stage: 'Planted' | 'Vegetative' | 'Flowering' | 'Harvest Ready' | 'Harvested';
  plantingDate: string;
  expectedHarvestDate: string;
}

export interface FertilizerRecord {
  id: string;
  farmId: string;
  type: string;
  amountKg: number;
  dateApplied: string;
}

export interface ExpenseRecord {
  id: string;
  farmId: string;
  category: 'Seeds' | 'Fertilizer' | 'Pesticides' | 'Labor' | 'Equipment' | 'Irrigation' | 'Other';
  amount: number;
  date: string;
  notes?: string;
}

export interface CropRecommendationInput {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  ph: number;
  temperature: number;
  humidity: number;
  rainfall: number;
  soilType: string;
  location: string;
}

export interface CropRecommendationResult {
  recommendedCrop: string;
  confidenceScore: number;
  alternativeCrops: { crop: string; score: number }[];
  soilSuitability: string;
  isDemo: boolean;
}

export interface YieldPredictionInput {
  crop: string;
  areaHectares: number;
  rainfall: number;
  temperature: number;
  fertilizerKg: number;
  irrigationType: string;
}

export interface YieldPredictionResult {
  expectedYieldTons: number;
  yieldPerHectare: number;
  historicalComparisonPercent: number;
  riskFactor: 'Low' | 'Moderate' | 'High';
  isDemo: boolean;
}

export interface DiseaseDetectionResult {
  diseaseName: string;
  confidence: number;
  severity: 'Mild' | 'Moderate' | 'Severe' | 'Healthy';
  treatments: string[];
  preventativeMeasures: string[];
  imageUrl: string;
  isDemo: boolean;
}

export interface MarketPricePoint {
  date: string;
  pricePerTon: number;
  volumeTons: number;
}

export interface MarketData {
  cropName: string;
  marketName: string;
  currentPricePerTon: number;
  currency: string;
  change7dPercent: number;
  trend: 'up' | 'down' | 'stable';
  history: MarketPricePoint[];
  isDemo: boolean;
}

export interface IrrigationState {
  soilMoisturePercent: number;
  temperatureCelsius: number;
  humidityPercent: number;
  rainProbabilityPercent: number;
  growthStage: string;
  recommendedAction: 'NO_IRRIGATION' | 'LOW' | 'MEDIUM' | 'HIGH';
  qValueConfidence: number;
  waterSavedLitersMonth: number;
  isDemo: boolean;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  category: 'Irrigation' | 'Disease' | 'Weather' | 'Market' | 'Farm Activity';
  priority: 'low' | 'medium' | 'high';
  read: boolean;
  timestamp: string;
}
