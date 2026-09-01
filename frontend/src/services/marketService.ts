import { apiClient } from './api';
import { MarketData } from '../types';

export const getMarketIntelligence = async (
  crop: string,
  market: string
): Promise<MarketData> => {
  try {
    return await apiClient.get<MarketData>(`/market-price/forecast?crop=${crop}&market=${market}`);
  } catch (err) {
    await new Promise((res) => setTimeout(res, 400));
    return {
      cropName: crop,
      marketName: market,
      currentPricePerTon: 340,
      currency: 'USD',
      change7dPercent: 4.8,
      trend: 'up',
      history: [
        { date: '2026-08-01', pricePerTon: 315, volumeTons: 1200 },
        { date: '2026-08-07', pricePerTon: 322, volumeTons: 1450 },
        { date: '2026-08-14', pricePerTon: 328, volumeTons: 1300 },
        { date: '2026-08-21', pricePerTon: 335, volumeTons: 1600 },
        { date: '2026-08-28', pricePerTon: 340, volumeTons: 1850 },
      ],
      isDemo: true,
    };
  }
};
