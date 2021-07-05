from django.urls import path, include
from rest_framework.routers import DefaultRouter
from call.views import ChatRoomViewSet, MyChatRooms

router = DefaultRouter()
router.register(r'room', ChatRoomViewSet)

urlpatterns = [
    path(r'my_chat_rooms/', MyChatRooms.as_view(), name='my_chat_rooms'),
    # path('', include(router.urls)),
]

urlpatterns += router.urls