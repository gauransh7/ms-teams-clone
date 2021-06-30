# """
# ASGI config for ms_teams project.

# It exposes the ASGI callable as a module-level variable named ``application``.

# For more information on this file, see
# https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
# """

# import os
# import django
# django.setup()
# from channels.auth import AuthMiddlewareStack
# from django.urls import re_path
# # from . import tokenAuthMiddleware
# from channels.routing import ProtocolTypeRouter, URLRouter
# from django.core.asgi import get_asgi_application
# import call.routing

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ms_teams.settings")
# django_asgi_app = get_asgi_application()

# application = ProtocolTypeRouter({
# #   "http": django_asgi_app,
#   "websocket": AuthMiddlewareStack(
#         URLRouter(
#             # call.routing.websocket_urlpatterns
#             [
#                 # url(r'^ws/chat/(?P<room_name>[^/]+)/(?P<user_id>[^/]+)$', call_socket.ChatConsumer.as_asgi()),
#                 re_path(r'^ws/chat/(?P<room_name>[^/]+)$', call.call_socket.ChatConsumer.as_asgi()),
#             ]
#         )
#     ),
# })

import os

import django
from channels.routing import get_default_application

# Set the Django environment with the settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', "ms_teams.settings")

# Since this is not the Django-backed WSGI spec, we need to configure Django
django.setup()

# Return the ASGI application
application = get_default_application()