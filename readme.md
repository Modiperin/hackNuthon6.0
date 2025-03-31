# Team Arjun - Hacknuthon

Team Arjun's project consists of AI-based diagnostic tools for detecting skin diseases, throat infections, and breast abnormalities through mammography, along with a histopathology analysis system. The project contains two backend servers and one frontend server.

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

