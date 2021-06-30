from django.conf.urls import url
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from call import call_socket

websocket_urlpatterns = [
    # url(r'^ws/chat/(?P<room_name>[^/]+)/(?P<user_id>[^/]+)$', call_socket.ChatConsumer.as_asgi()),
    url(r'^ws/chat/(?P<room_name>[^/]+)$', call_socket.ChatConsumer.as_asgi()),
]

application = ProtocolTypeRouter({
    # http -> Django views is added by default
    'websocket': AuthMiddlewareStack(
        URLRouter(websocket_urlpatterns)
    ),
})