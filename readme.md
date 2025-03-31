# Team Arjun - HackNUthon

## Image processing and AI/ML for disease detection

This project focuses on developing an AI-driven, non-invasive cancer diagnostic system that implements spectral analysis and deep learning to detect skin cancer and breast cancer with high accuracy. By analyzing biomarkers and spectral signatures, our system enhances traditional diagnostic methods, reducing reliance on biopsies while improving speed, reliability, and early detection. Using spectroscopy data, dermoscopic images, and mammograms, our AI models classify anomalies, providing real-time insights for medical professionals. This solution aims to revolutionize cancer diagnostics by integrating computer vision, spectral feature extraction, and deep learning algorithms, making early-stage cancer detection more accessible and efficient.

## Prerequisites
- Python 3.9+
- Node.js 18+
- FastAPI and Flask
- Virtual Environment (Recommended)

---


## Running the Backend Servers

### 1. FastAPI Backend (Skin, Throat, Breast Mammography)

**Steps:**
1. Navigate to the `Backend/FastAPI` directory.
2. Create and activate a virtual environment:
```
bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\\Scripts\\activate
```
3. Install the dependencies:

```
bash
pip install -r requirements.txt
```
4. Start the FastAPI server:
```
bash
uvicorn main:app --reload
```
Server will run at: http://localhost:8000

### 2. Flask Backend (Histopathology)

**Steps:**
1. Navigate to the HistopathBackend/Flask directory.
2. Create and activate a virtual environment:
```
bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\\Scripts\\activate
```
3. Install the dependencies:
```
bash
pip install -r requirements.txt
```
4. Start the Flask server:
```
bash
python app.py
```
Server will run at: http://localhost:5000

## Running the Frontend

### 1. Arjun's AI Frontned
**Steps:**
1. Navigate to the Frontend/ArjunAI directory.
2. Install dependencies:
```
bash
npm install
```
3. Run the development server:

```
npm run dev
```
Frontend will be available at: http://localhost:3000

### 2. Histopathology WebApp
**Steps:**
1. Navigate to the Frontend/HistopathologyWebApp directory.
2. Install dependencies:
```
bash
npm install
```
3. Run the development server:

```
npm run dev
```
Frontend will be available at: http://localhost:3001

