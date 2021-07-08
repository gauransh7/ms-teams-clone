from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer

from call.models import ChatRoom, Message


class ChatRoomCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = ChatRoom
        fields = '__all__'

class ChatRoomSerializer(serializers.ModelSerializer):

    created_by = UserDetailsSerializer(read_only=True)
    all_users = UserDetailsSerializer(read_only=True, many=True)

    class Meta:
        model = ChatRoom
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):

    user = UserDetailsSerializer(read_only=True)

    class Meta:
        model = Message
        fields = '__all__'