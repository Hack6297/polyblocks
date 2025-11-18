# Render deployment instructions for NESA 95 React + Django

## Project Structure
```
/
├── nesa-react-frontend/    # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── ...
│   └── package.json
├── django_app.py           # Django backend (serves React + APIs)
├── requirements.txt        # Python dependencies
├── build.sh               # Build script
└── README.md
```

## Local Development

### Run React (development mode):
```bash
cd nesa-react-frontend
npm start
```
Opens at http://localhost:3000

### Run Django (after building React):
```bash
cd nesa-react-frontend
npm run build
cd ..
gunicorn django_app:application
```

## Render Deployment

### Step 1: Update your GitHub repo
Push all these files to your repo: `Hack6297/nesa`

### Step 2: Configure Render Web Service
1. Go to Render dashboard
2. Select your existing service or create new Web Service
3. Connect to `Hack6297/nesa` repo
4. **Build Command:**
   ```
   chmod +x build.sh && ./build.sh
   ```
5. **Start Command:**
   ```
   gunicorn django_app:application
   ```
6. **Environment Variables:** (Add if needed)
   - `PYTHON_VERSION`: `3.13.4`

### Step 3: Deploy
- Push changes to GitHub
- Render will automatically build and deploy

## How it works

1. **Build Process:**
   - Installs Node.js packages
   - Builds React app to `nesa-react-frontend/build/`
   - Installs Python packages

2. **Runtime:**
   - Django serves the React build files
   - `/ping` endpoint keeps server awake
   - `/api/news` endpoint for future Unity integration
   - All other routes serve React app (for React Router)

## Endpoints

- `GET /` - React app homepage
- `GET /ping` - Health check (returns `{"status": "pong"}`)
- `GET /api/news` - News data API (JSON)

## Notes

- React app includes auto-ping every 10 minutes to keep server awake
- Free tier still sleeps after 15 min without external requests
- For Unity multiplayer, consider upgrading to paid tier ($7/mo)
