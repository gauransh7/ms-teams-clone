from django.urls import path, include
from rest_framework.routers import DefaultRouter
from call.views import ChatRoomViewSet

router = DefaultRouter()
router.register(r'room', ChatRoomViewSet)

urlpatterns = [
    path('', include(router.urls)),
]