from django.db.models import Q
from rest_framework.decorators import action
from accounts.models import User
from rest_framework import viewsets
from rest_framework.response import Response

# from call.permissions import ReadOnly
from call.models import ChatRoom
from call.serializers import ChatRoomSerializer


class ChatRoomViewSet(viewsets.ModelViewSet):
    # permission_classes = [ReadOnly]
    queryset = ChatRoom.objects.all()
    serializer_class = ChatRoomSerializer
    def get_queryset(self):
        print(self.request)
        queryset = self.queryset
        query_set = queryset.filter(Q(created_by=self.request.user))
        return query_set

    @action(detail=True, methods=['PATCH'], url_name='update_room_users',
            url_path='update_room_users')
    def update_room_users(self, request, pk):
        print(request.data.get('sharing_id'))
        user = User.objects.get(id=request.user.id)
        instance = ChatRoom.objects.get(sharing_id=request.data.get('sharing_id'))
        if user not in instance.all_users.all():
            instance.all_users.add(user)
            instance.save()
        serializer = ChatRoomSerializer(instance)
        return Response(serializer.data)
