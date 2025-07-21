
📄 README.md
# 🌸 NoorKala AI — Cultural Commerce Assistant

NoorKala AI is an AI-powered cultural commerce platform that enhances product images and generates contextual captions based on region, style, gender, occasion, and theme. It’s designed to help small businesses and local artisans showcase their products beautifully online using modern AI tools.

---

## 🏗️ Tech Stack

**Frontend**:  
- Next.js (React Framework)  
- Tailwind CSS  
- TypeScript  

**Backend**:  
- FastAPI (Python)  
- Uvicorn (ASGI server)  
- Replicate API (for AI image enhancement)  
- Gemini Pro API (for AI caption generation)  
- Python libraries: `requests`, `dotenv`, `Pillow`, `google-generativeai`

---

## 🚀 Live Demo 

- Frontend: https://noorkala-ai-frontend-rezl.vercel.app/
- Backend: https://fast-api-render-qkmb.onrender.com 

---

## 📦 Folder Structure

noorkalaa/
├── frontend/ # Next.js frontend
├── backend/ # FastAPI backend
├── .gitignore

---

## 🧑‍💻 Getting Started Locally

### 🔧 1. Clone the repository

mkdir frontend 
cd frontend 
git clone https://github.com/NehaKaler/noorkala-ai-frontend.git
cd..
mkdir backend
cd backend 
git clone https://github.com/NehaKaler/fast-api-render.git

### 🧠 2. Set up the backend (FastAPI)

<!-- make sure you in backend folder -->
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
pip install -r requirements.txt

 #### 🔐 Create a .env file
Inside backend/, create a file named .env and add:

REPLICATE_API_TOKEN=your_replicate_api_key
GOOGLE_API_KEY=your_google_gemini_api_key
IMGBB_API_KEY=your_google_imgbb_api_key
GEMINI_API_KEY=your_google_gemini_api_key

<!-- we have already added API keys for the evaluation running purpose -->

 #### ▶️ Start the backend server

uvicorn main:app --reload --port 8000

<!-- Backend runs at: http://localhost:8000 -->

### 🌐 3. Set up the frontend (Next.js)

cd ../frontend
npm install

#### 🔐 Create a .env.local file

Inside frontend/, add:

NEXT_PUBLIC_API_URL=http://localhost:8000

#### ▶️ Start the frontend dev server 

npm run dev

<!-- Frontend runs at: http://localhost:3000 -->

 ## ✨ ✨ Features
✅ Upload a product image

✅ Select theme, region, occasion, gender, and style

✅ AI-enhanced image via Replicate API

✅ Contextual caption via Gemini Pro API

✅ Product Insight Generator via Gemini Flash API

If the user provides: Product Name, Category, Price, and Units Sold, NoorKala AI analyzes sales performance and provides insightful business tips.

✅ Business tutorial videos for small sellers (multilingual)

 ## 🧪 Example Workflow
Upload a photo (e.g., kurta)

Select:

Occasion: Wedding

Region: Rajasthan

Style: Ethnic

Gender: Female

🔹 Output Image: Enhanced for e-commerce use
🔹 Output Caption:

"Gracefully embroidered Rajasthani kurta perfect for festive weddings."

 ## 📊 Product Insight Demo
User inputs:

Product Name:  Kurta

Category: Fashion and Clothing

Price: ₹1499

Units Sold: 35

🔎 Gemini Flash analyzes this and provides insights like:

“Kurtas in this price range perform better with bundling offers. You can target festive campaigns in northern regions.”

🎓 Business Tutorial Feature
NoorKala AI includes short video tutorials to guide sellers on growing their business online.
These tutorials are concise and tailored for beginners in regional languages.

 ## 🛠️ Troubleshooting
If backend fails to start, ensure .env and REPLICATE_API_TOKEN are correct.

If image doesn't generate, check:
    The uploaded image is publicly accessible (ImgBB)
    Prompt format is valid

If caption fails, make sure your Google Gemini API key is valid.

 ## 📜 License
This project is open-source under the MIT License.
Made with ❤️ by Neha Kaler and Nandini Shekhar
