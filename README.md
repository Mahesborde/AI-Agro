# AgroMind AI — Intelligent Agriculture Decision-Support Platform

![AgroMind AI Architecture](https://img.shields.io/badge/Phase-1%20Project%20Setup-emerald?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-React%20%7C%20FastAPI%20%7C%20PyTorch%20%7C%20PostgreSQL-blue?style=for-the-badge)

AgroMind AI is a modern, modular, production-oriented agricultural decision-support platform designed to provide data-driven recommendations and predictive insights for modern farming.

---

## 🎯 Project Objective

AgroMind AI aims to empower farmers, agronomists, and agricultural stakeholders by synthesizing machine learning, deep learning, time-series forecasting, and reinforcement learning into an integrated, user-friendly decision support system.

---

## 🧩 Main Features & AI/ML Modules Blueprint

> [!IMPORTANT]
> **Phase 1 Implementation Notice**: All AI/ML models listed below are architected for integration. Phase 1 completes the foundational project layout, backend micro-services setup, dataset classification, and frontend scaffolding. Model training and inference APIs are scheduled for upcoming development phases.

### 1. Crop Recommendation `[Planned - Supervised Learning]`
- **Model Type**: Multi-Class Classification (Random Forest / XGBoost)
- **Objective**: Recommend optimal crops based on soil nutrients ($N, P, K, \text{pH}$) and ambient climate metrics (temperature, humidity, rainfall).

### 2. Crop Yield Prediction `[Planned - Supervised Learning]`
- **Model Type**: Regression (Random Forest Regressor / XGBoost Regressor)
- **Objective**: Estimate expected crop yields per hectare incorporating historical weather, rainfall, and pesticide application data.

### 3. Market Price Prediction `[Planned - Time Series Forecasting]`
- **Model Type**: Time-Series Analysis (ARIMA / Prophet / LSTM)
- **Objective**: Forecast commodity market prices to assist farmers in timing harvests and sales for optimal profitability.

### 4. Plant Disease Detection `[Planned - Deep Learning]`
- **Model Type**: Convolutional Neural Networks (CNNs / ResNet)
- **Objective**: Classify plant diseases and foliar lesions from leaf image uploads.

### 5. Farmer & Crop Segmentation `[Planned - Unsupervised Learning]`
- **Model Type**: Clustering (K-Means / Hierarchical Clustering)
- **Objective**: Segment farming profiles and regional land blocks to provide targeted advisory services.

### 6. Smart Irrigation Optimization `[Planned - Reinforcement Learning]`
- **Model Type**: Q-Learning / Deep Q-Networks (DQN)
- **Objective**: Optimize dynamic water delivery schedules based on soil moisture state transitions, minimizing water waste.

### 7. Farm Management & Analytics `[Planned]`
- Dashboard for monitoring farm metrics, historical logs, and alert feeds.

---

## 🛠️ Technology Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React (v18), TypeScript, Tailwind CSS, React Router (v6) | Interactive, responsive UI with custom glassmorphism design. |
| **Backend** | Python 3.13+, FastAPI, Pydantic v2, Uvicorn | High-performance asynchronous REST API framework. |
| **Database** | PostgreSQL, SQLAlchemy 2.0 ORM, Alembic | Relational storage for user, farm, and prediction records. |
| **Machine Learning** | NumPy, Pandas, Scikit-learn, XGBoost, Joblib | Data processing, feature engineering, and tabular ML modeling. |
| **Deep Learning** | PyTorch, Torchvision, Pillow | Image classification pipelines for plant disease diagnosis. |
| **Reinforcement Learning** | Custom Q-Learning Environment | Markov Decision Process (MDP) for adaptive irrigation control. |

---

## 🏗️ Project Architecture

### 1. Enterprise System Flow

```text
React Frontend (Vite + TypeScript)
       │
       ▼ (HTTP / JSON API)
FastAPI Backend Services Layer
       │
       ├──► Database (PostgreSQL via SQLAlchemy)
       │
       └──► ML Model Inference Engine (PyTorch / Joblib / XGBoost)
```

### 2. Future Machine Learning Lifecycle Pipeline

```text
Dataset (Raw Immutable)
   │
   ▼
Data Cleaning & Missing Value Imputation
   │
   ▼
Exploratory Data Analysis (EDA)
   │
   ▼
Feature Engineering & Scaling
   │
   ▼
Model Training & Hyperparameter Tuning
   │
   ▼
Evaluation (Metrics & Validation)
   │
   ▼
Model Artifact Serialization (.pkl / .pt / .onnx)
   │
   ▼
FastAPI Inference Wrapper Services
   │
   ▼
React Frontend Presentation Layer
```

---

## 📅 Project Development Roadmap

- [x] **Phase 1: Project Setup & Foundation Architecture** (Current)
  - Modular project hierarchy
  - FastAPI application structure & CORS middleware
  - React + TypeScript + Tailwind CSS application setup
  - Strict dataset directory immutability rules (`original/` vs `processed/`)
  - Environment templates (`.env.example`) and Git configuration (`.gitignore`)
- [ ] **Phase 2: Data Cleaning, Inspection & Exploratory Data Analysis (EDA)**
- [ ] **Phase 3: Supervised & Deep Learning Pipeline Development**
- [ ] **Phase 4: Q-Learning Environment & Reinforcement Learning Agent**
- [ ] **Phase 5: FastAPI REST Endpoint Implementation & Database Integration**
- [ ] **Phase 6: Interactive Frontend Integration & End-to-End Testing**

---

## 💻 Local Environment Setup Instructions

### 1. Prerequisites
- **Python**: 3.10+ (Python 3.13 recommended)
- **Node.js**: 18+ (Node 20+ recommended)
- **Git**: Installed

### 2. Python Virtual Environment Setup

From the repository root directory:

```bash
# Create virtual environment
python -m venv .venv

# Activate virtual environment (Windows PowerShell)
\.venv\Scripts\Activate.ps1

# Activate virtual environment (macOS / Linux)
source .venv/bin/activate

# Upgrade pip & install backend + ML dependencies
pip install --upgrade pip
pip install -r requirements.txt
```

### 3. Backend Execution

```bash
# Copy environment configuration template
cp .env.example .env

# Run FastAPI backend with auto-reload
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
- API Documentation (Swagger UI): `http://localhost:8000/docs`
- Health Check: `http://localhost:8000/health`

### 4. Frontend Execution

```bash
# Navigate to frontend directory
cd frontend

# Install Node dependencies
npm install

# Start local Vite development server
npm run dev
```
- Frontend UI: `http://localhost:5173`

---

## 📁 Dataset Organization Rules

Original dataset files are strictly preserved inside `datasets/<category>/original/`. 
All data transformation, imputation, and processing scripts in Phase 2+ output clean datasets exclusively to `datasets/<category>/processed/` without altering original raw files.
