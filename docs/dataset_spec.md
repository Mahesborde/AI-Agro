# AgroMind AI — Dataset Inventory & Organization Spec

## Dataset Allocation Matrix

The following dataset files have been organized into the Phase 1 dataset repository. In accordance with Rule 8, all original files remain unaltered.

| Original File / Directory | Target Module Path | Intended Purpose |
| :--- | :--- | :--- |
| `Crop_Recommendation.csv` | `datasets/crop_recommendation/original/` | Multi-class crop recommendation based on soil and weather metrics |
| `yield.csv` | `datasets/yield_prediction/original/` | Historical crop yield data |
| `yield_df.csv` | `datasets/yield_prediction/original/` | Combined yield dataframe with country/year factors |
| `pesticides.csv` | `datasets/yield_prediction/original/` | Pesticide usage metrics per crop/region |
| `temp.csv` | `datasets/yield_prediction/original/` | Temperature metrics for yield modeling |
| `rainfall.csv` | `datasets/yield_prediction/original/` | Rainfall metrics for yield modeling |
| `Agriculture_price_dataset.csv` | `datasets/price_prediction/original/` | Historical market price data for commodity price forecasting |
| `plantvillage dataset/` | `datasets/disease_detection/original/` | Leaf image repository for CNN disease classification |
| `irrigation_prediction.csv` | `datasets/irrigation/original/` | Soil moisture and irrigation parameters for Q-Learning state modeling |
| `agriculture_dataset.csv` | `datasets/farmer_clustering/original/` | General agricultural profile data for farmer/crop segmentation |

---

## Directory Organization Rule

```text
datasets/
├── crop_recommendation/
│   ├── original/    <-- Raw, unmodified files
│   └── processed/   <-- Cleaned, imputed, scaled data generated in Phase 2
├── yield_prediction/
│   ├── original/
│   └── processed/
├── price_prediction/
│   ├── original/
│   └── processed/
├── disease_detection/
│   ├── original/
│   └── processed/
├── farmer_clustering/
│   ├── original/
│   └── processed/
└── irrigation/
    ├── original/
    └── processed/
```
