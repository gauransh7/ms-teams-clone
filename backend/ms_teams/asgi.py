import os

import django
from channels.routing import get_default_application

# Set the Django environment with the settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', "ms_teams.settings")

# Since this is not the Django-backed WSGI spec, we need to configure Django
django.setup()

# Return the ASGI application
application = get_default_application()