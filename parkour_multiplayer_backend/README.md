# Polyblock Multiplayer Django Backend

This is a Django REST API backend for multiplayer, ready for Render deployment.

## Features
- Player and Room models
- REST endpoints for player join, position sync, room creation/join
- CORS enabled for Unity/Web clients

## Deployment (Render)
1. Push this folder to GitHub.
2. On Render, create a new Web Service, connect your repo, and set the root to this folder.
3. Build command:
   ```
   pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate
   ```
4. Start command:
   ```
   gunicorn parkour_demo.wsgi
   ```
5. Add environment variables:
   - `SECRET_KEY` (your Django secret)
   - `DEBUG` = `False`
   - `ALLOWED_HOSTS` = `your-service-name.onrender.com`

## API Endpoints
- `/api/join/` - Join as a player
- `/api/players/` - List/update player positions
- `/api/rooms/` - Create/join rooms

---
