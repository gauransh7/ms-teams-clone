from django.conf.urls import url
from . import call_socket

websocket_urlpatterns = [
    # url(r'^ws/chat/(?P<room_name>[^/]+)/(?P<user_id>[^/]+)$', call_socket.ChatConsumer.as_asgi()),
    url(r'^ws/chat/(?P<room_name>[^/]+)$', call_socket.ChatConsumer.as_asgi()),
]