from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.views.generic import View
from django.urls import path, re_path
from django.views.static import serve
import os

# Minimal Django settings
if not settings.configured:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    
    settings.configure(
        DEBUG=False,
        ALLOWED_HOSTS=['*'],
        ROOT_URLCONF=__name__,
        SECRET_KEY='django-insecure-key-change-in-production',
        STATIC_URL='/static/',
        STATIC_ROOT=os.path.join(BASE_DIR, 'staticfiles'),
        MIDDLEWARE=[
            'django.middleware.security.SecurityMiddleware',
            'django.middleware.common.CommonMiddleware',
        ],
    )

# Path to React build folder
REACT_BUILD_DIR = os.path.join(os.path.dirname(__file__), 'nesa-react-frontend', 'build')


def serve_react(request, path=''):
    """Serve React app"""
    if path and os.path.exists(os.path.join(REACT_BUILD_DIR, path)):
        return serve(request, path, document_root=REACT_BUILD_DIR)
    else:
        # Serve index.html for all other routes (React Router support)
        index_path = os.path.join(REACT_BUILD_DIR, 'index.html')
        if os.path.exists(index_path):
            with open(index_path, 'r', encoding='utf-8') as f:
                return HttpResponse(f.read(), content_type='text/html')
        else:
            return HttpResponse(
                'React app not built yet. Run: cd nesa-react-frontend && npm run build',
                status=503
            )


def ping_view(request):
    """Endpoint to keep server awake"""
    return JsonResponse({'status': 'pong'})


def api_news(request):
    """API endpoint for news (for future use with Unity)"""
    news_data = [
        {
            'id': 1,
            'date': 'December 1995 (2025)',
            'title': 'Nesa Explorer Coming Soon! 🌐',
            'content': 'We\'re excited to announce that Nesa Explorer is currently in development!',
        },
        {
            'id': 2,
            'date': 'November 1995 (2025)',
            'title': 'Polyblocks Pre-test 0.5 Released! 🧊',
            'content': 'Game has a basic gameplay mechanic where players can fight, and build structures using blocks.',
        }
    ]
    return JsonResponse({'news': news_data})


# URL patterns
urlpatterns = [
    path('ping', ping_view, name='ping'),
    path('api/news', api_news, name='api_news'),
    # Serve React static files
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': os.path.join(REACT_BUILD_DIR, 'static')}),
    # Catch-all for React Router
    re_path(r'^(?P<path>.*)$', serve_react, name='react'),
]

# WSGI application for Gunicorn
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
