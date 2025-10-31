import os
from django.conf import settings
from django.core.management import execute_from_command_line
from django.http import HttpResponse, FileResponse, Http404
from django.urls import path
from django.core.wsgi import get_wsgi_application
from django.core.asgi import get_asgi_application

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


settings.configure(
    DEBUG=True,
    ROOT_URLCONF=__name__,
    ALLOWED_HOSTS=['*'],
    SECRET_KEY='polyblocks-demo-key',
    MIDDLEWARE=[
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
    ],
    TEMPLATES=[
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [os.path.join(BASE_DIR, 'public_website')],
            'APP_DIRS': True,
        },
    ],
    STATIC_URL='/static/',
    STATICFILES_DIRS=[os.path.join(BASE_DIR, 'public_website')],
)

def index(request):
    with open(os.path.join(BASE_DIR, 'public_website', 'index.html'), encoding='utf-8') as f:
        return HttpResponse(f.read())

def download_demogame(request):
    import zipfile
    from io import BytesIO
    demogame_dir = os.path.join(BASE_DIR, 'DEMOGAME')
    if not os.path.isdir(demogame_dir):
        raise Http404('DEMOGAME folder not found')
    buffer = BytesIO()
    with zipfile.ZipFile(buffer, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(demogame_dir):
            for file in files:
                abs_path = os.path.join(root, file)
                rel_path = os.path.relpath(abs_path, demogame_dir)
                zipf.write(abs_path, rel_path)
    buffer.seek(0)
    response = FileResponse(buffer, as_attachment=True, filename='DEMOGAME.zip')
    return response

urlpatterns = [
    path('', index),
    path('download/', download_demogame),
]


# WSGI and ASGI application objects for deployment
application = get_wsgi_application()
asgi_application = get_asgi_application()

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', '__main__')
    execute_from_command_line(['manage.py', 'runserver', '0.0.0.0:8000'])
