# AgroMind AI — System Architecture Specification

## Architectural Principles

1. **Separation of Concerns**: Frontend UI, REST API backend, ML pipeline scripts, and dataset storage remain strictly isolated.
2. **Data Immutability**: Original raw datasets are never modified or overwritten. Processed versions are saved in isolated `processed/` subdirectories.
3. **Stateless API Services**: FastAPI services interact with database models via SQLAlchemy sessions and query ML model inference wrappers statelessly.
4. **Scalable ML Pipelines**: Modular structure (`data_loader`, `preprocessing`, `train`, `evaluate`) per module allows independent development and model iteration.

---

## Component Breakdown

```text
AgroMind-AI/
├── frontend/             # React + TypeScript + Tailwind CSS (Vite SPA)
├── backend/              # FastAPI Application Layer
│   ├── app/              # Core API, DB, Pydantic Schemas, and Service logic
│   └── tests/            # Pytest suite
├── ml/                   # Machine Learning Pipelines (6 modules)
├── datasets/             # Dataset repository (Original & Processed pairs)
├── models/               # Serialized Model Artifacts (.pkl, .pt, .onnx)
├── notebooks/            # Exploratory Data Analysis & Prototyping
└── docs/                 # System Documentation & Specs
```
