from django.db.models import Q
from rest_framework.decorators import action
from accounts.models import User
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

# from call.permissions import ReadOnly
from call.models import ChatRoom, Message
from call.serializers import ChatRoomSerializer, MessageSerializer, ChatRoomCreateSerializer


class ChatRoomViewSet(viewsets.ModelViewSet):

    queryset = ChatRoom.objects.all()

    def get_serializer_class(self):
        if self.action == 'GET':
            return ChatRoomSerializer
        if self.action == 'create':
            return ChatRoomCreateSerializer
        return ChatRoomSerializer

    @action(detail=True, methods=['PATCH'], url_name='update_room_users',
            url_path='update_room_users')
    def update_room_users(self, request, pk):
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response('The requested email is not registered.', 400)
        request_user = self.request.user
        try:
            instance = self.get_object()
        except ChatRoom.DoesNotExist:
            return Response('ChatRoom does not exist', 404)
        if not request_user.id==instance.created_by.id:
            return Response('User do not have Permission', 400)        
        if user in instance.all_users.all():
            return Response('User already invited', 400)
        instance.all_users.add(user)
        instance.save()
        serializer = ChatRoomSerializer(instance)
        return Response(serializer.data)

    @action(detail=True, methods=['GET'], url_name='all_messages',
            url_path='all_messages')
    def all_messages(self, request, pk):
        try:
            instance = self.get_object()
        except ChatRoom.DoesNotExist:
            return Response('ChatRoom does not exist', 400)
        messages = Message.objects.filter(room=instance)
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

class MyChatRooms(APIView):

    def get(self, request, *args, **kwargs):
        user = self.request.user
        my_room = ChatRoom.objects.filter(created_by=user)
        my_invites = ChatRoom.objects.filter(all_users=user).filter(~Q(created_by=user))
        created = ChatRoomSerializer(
            my_room, many=True
        )                                          
        invited = ChatRoomSerializer(
            my_invites, many=True
        )
        serializer = {
            'created': created.data,
            'invited': invited.data,
        }
        return Response(serializer)

