from django.urls import re_path
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from . import call_socket

websocket_urlpatterns = [
    # url(r'^ws/chat/(?P<room_name>[^/]+)/(?P<user_id>[^/]+)$', call_socket.ChatConsumer.as_asgi()),
    re_path(r'^ws/chat/(?P<room_name>[^/]+)$', call_socket.ChatConsumer.as_asgi()),
]

application = ProtocolTypeRouter({
    # http -> Django views is added by default
    'websocket': AuthMiddlewareStack(
        URLRouter(websocket_urlpatterns)
    ),
})