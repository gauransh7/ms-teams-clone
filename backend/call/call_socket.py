from channels.generic.websocket import WebsocketConsumer
from call.models import ChatRoom, Message
from call.serializers import MessageSerializer
from accounts.models import User
from asgiref.sync import async_to_sync
import json

class ChatConsumer(WebsocketConsumer):
    users = []
    socket_to_room = {}

    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'ws_%s' % self.room_name
        self.group_id = self.room_name
        self.room = None

        try:
            room = ChatRoom.objects.get(sharing_id = self.group_id)
            self.room = room

            async_to_sync(self.channel_layer.group_add)(
                self.room_group_name,
                self.channel_name
            )

            if room.id in self.socket_to_room:
                if not any(x['user'] ==self.scope['user'] for x in self.socket_to_room.get(room.id)):
                    self.socket_to_room.get(room.id).append({"user" : self.scope['user'], "video": True, "audio": True, 'onlyChat': False})
            else:
                self.socket_to_room[room.id] = [{"user" : self.scope['user'], "video": True, "audio": True, 'onlyChat':False}]

            self.accept()
        except:
            self.accept()
            self.disconnect()
            return

    def receive(self, text_data):
        content = json.loads(text_data)
        """
        Called when we get a text frame. Channels will JSON-decode the payload
        for us and pass it as the first argument.
        """
        # Messages will have a "command" key we can switch on
        command = content.get("action", None)
        try:
            if command == "join room":
                thisUser = self.scope["user"]
                media = content["message"]
                for x in self.socket_to_room.get(self.room.id):
                    if x['user'] == self.scope["user"]:
                        x['video'] = media["video"]
                        x['audio'] = media["audio"]
                        x['onlyChat'] = media['onlyChat']
                        break
                if not media['onlyChat']:
                    self.createSDP("request invite", {"email" : thisUser.email, "id" : thisUser.id, "name": thisUser.first_name})
            elif command == "reject invite":
                user_rejected_id = content["message"]
                user_rejected = User.objects.get(id=user_rejected_id)
                if user_rejected in self.socket_to_room.get(self.room.id):
                    self.socket_to_room.get(self.room.id).remove(user_rejected)
                if user_rejected in self.room.all_users.all():
                    self.room.all_users.remove(user_rejected)
                self.createSDP("invite was rejected", { "id" : user_rejected_id})
            elif command == "accept invite":
                thisUser = User.objects.get(id=content["message"])
                if thisUser not in self.room.all_users.all():
                    self.room.all_users.add(thisUser)
                    self.room.save()
                all_user = [[x['user'].id, x['user'].first_name, x['video'], x['audio']] for x in self.socket_to_room.get(self.room.id) if not x['onlyChat']]
                self.createSDP("all users", { "users": all_user, "id": content["message"]})

            elif command == "sending signal":
                thisUser = self.scope["user"]
                callerObj = User.objects.get(id = content["message"]["callerID"])
                for x in self.socket_to_room.get(self.room.id):
                    if x['user'] == callerObj:
                        caller = [x['user'].id, x['user'].first_name, x['video'], x['audio']]
                        self.createSDP("user joined", { "signal": content["message"]["signal"], "caller": caller, "userID": content["message"]["userToSignal"]})
            
            elif command == "returning signal":
                thisUser = self.scope["user"]
                self.createSDP("receiving returned signal", { "signal": content["message"]["signal"], "id": thisUser.id, "userID": content["message"]["callerID"]})

            elif command == "send_message":
                thisUser = self.scope["user"]
                msg = Message.objects.create(room=self.room, user=thisUser, message=content['message'])
                msg.save()
                serializer = MessageSerializer(msg)
                data = serializer.data
                data['user'] = json.dumps(data['user'])
                self.createSDP("message received", data)
            
            elif command == "toggle video":
                thisUser = self.scope["user"]
                for x in self.socket_to_room.get(self.room.id):
                    if x['user'] == thisUser:
                        x['video'] = not x['video']
                        self.createSDP("toggle video", {"id" : thisUser.id, "value": x['video']})

            elif command == "toggle audio":
                thisUser = self.scope["user"]
                for x in self.socket_to_room.get(self.room.id):
                    if x['user'] == thisUser:
                        x['audio'] = not x['audio']
                        self.createSDP("toggle audio", {"id" : thisUser.id, "value": x['audio']})

        except ClientError as e:
            # Catch any errors and send it back
            self.send_json({"error": e.code})


    def createSDP(self, action, data):
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                "type": 'send.sdp',
                "action": action,
                "data" : data
            }
        )

    def send_sdp(self, sdp):
        jsonData = json.dumps({"action": sdp['action'], "message": sdp['data']})
        self.send(text_data = jsonData)

    def disconnect(self, close_code):
        # Called when the socket closes
        thisUser = self.scope['user']
        for x in self.socket_to_room.get(self.room.id):
            if x['user'] == thisUser:
                self.socket_to_room.get(self.room.id).remove(x)
                
        self.createSDP("user left", thisUser.id)
