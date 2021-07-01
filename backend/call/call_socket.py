from channels.generic.websocket import WebsocketConsumer
from call.models import ChatRoom
from accounts.models import User
from asgiref.sync import async_to_sync
import json

class ChatConsumer(WebsocketConsumer):
    # groups = ["broadcast"]
    users = []
    socket_to_room = {}

    def connect(self):
        print(self.socket_to_room)
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
            print("before users")
            print(self.socket_to_room.get(room.id))
            if room.id in self.socket_to_room:
                if self.scope['user'] not in self.socket_to_room.get(room.id):
                    self.socket_to_room.get(room.id).append(self.scope['user'])
            else:
                self.socket_to_room[room.id] = [self.scope['user']]
            print("connect")
            print(room.id)
            print(self.scope['user'].id)
            # user = User.objects.get(id = self.scope['user'].id)
            # print(user.id)
            # if user not in room.all_users.all():
            #     room.all_users.add(user)
            #     room.save()
            print("after users")
            print(self.socket_to_room.get(room.id))
            # Called on connection.
            # To accept the connection call:
            print(self.socket_to_room)
            self.accept()
        except:
            self.accept()
            self.disconnect()
            return

    def receive(self, text_data):
        print("received signal")
        # print(text_data)
        content = json.loads(text_data)
        """
        Called when we get a text frame. Channels will JSON-decode the payload
        for us and pass it as the first argument.
        """
        # Messages will have a "command" key we can switch on
        command = content.get("action", None)
        try:
            if command == "join room":
                print("joining room")
                # Make them join the room
                # user = self.scope['user']
                all_user = [[x.id, x.first_name] for x in self.socket_to_room.get(self.room.id)]
                # val = [x.get("id") for x in all_user_ids]
                # print(val)
                self.createSDP("all users", all_user)
                # if users[roomId]
                # await self.join_room(content["room"])
            elif command == "sending signal":
                print("send signal backend")
                thisUser = self.scope["user"]
                # print(thisUser.id)
                print(content["message"]["callerID"])
                callerObj = User.objects.get(id = content["message"]["callerID"])
                caller = [callerObj.id, callerObj.first_name]
                print(caller)
                self.createSDP("user joined", { "signal": content["message"]["signal"], "caller": caller, "userID": content["message"]["userToSignal"]})
            elif command == "returning signal":
                print("return signal backend")
                thisUser = self.scope["user"]
                print(thisUser.id)
                self.createSDP("receiving returned signal", { "signal": content["message"]["signal"], "id": thisUser.id, "userID": content["message"]["callerID"]})
                print("return done")

            elif command == "send_message":
                print(content["message"])
                thisUser = self.scope["user"]
                self.createSDP("message received", { "user": thisUser.first_name, "message": content["message"]})
        except ClientError as e:
            # Catch any errors and send it back
            self.send_json({"error": e.code})


    def createSDP(self, action, data):
        print("create sdp")
        print(data)
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                "type": 'send.sdp',
                "action": action,
                "data" : data
            }
        )
        print("create done")

    def send_sdp(self, sdp):
        print("send sdp")
        jsonData = json.dumps({"action": sdp['action'], "message": sdp['data']})

        self.send(text_data = jsonData)
        print("send sdp done")

    def disconnect(self, close_code):
        print("disconnecting")
        # Called when the socket closes
        thisUser = self.scope['user']
        print(thisUser.id)
        if thisUser in self.socket_to_room.get(self.room.id):
                self.socket_to_room.get(self.room.id).remove(thisUser)

        self.createSDP("user left", thisUser.id)

        print("Disconnected")
        # if(len(self.users)==0):
        #     async_to_sync(self.channel_layer.group_discard)(
        #         self.room_group_name,
        #         self.channel_name
        #     )

















# import asyncio
# import json
# import io
# from json.decoder import JSONDecodeError
# from asgiref.sync import async_to_sync
# from channels.generic.websocket import WebsocketConsumer
# from fanclub import models, serializers
# from rest_framework.renderers import JSONRenderer
# from rest_framework.parsers import JSONParser
# from fanclub import serializers

# class ChatConsumer(WebsocketConsumer):
#     def connect(self):
#         self.room_name = self.scope['url_route']['kwargs']['room_name']
#         self.room_group_name = 'chat_%s' % self.room_name
#         self.group_id = int(self.room_name)
#         group = models.Chatroom.objects.get(pk = self.group_id)
#         self.access = []
#         for user in group.members.all():
#             self.access.append(user)
#         for user in group.admins.all():
#             self.access.append(user)
#         self.access.append(group.creater)
#         self.user_id = self.scope['url_route']['kwargs']['user_id']
#         # Join room group
#         async_to_sync(self.channel_layer.group_add)(
#             self.room_group_name,
#             self.channel_name
#         )

#         self.accept()

#     def disconnect(self, close_code=None):
#         # Leave room group
#         self.send(json.dumps({"end_message": close_code}))
#         async_to_sync(self.channel_layer.group_discard)(
#             self.room_group_name,
#             self.channel_name
#         )
#         self.close()

#     # def init_chat(self, data):
#     #     user_id = data['userid']
#     #     user = models.User.objects.get(pk = user_id)
#     #     content = {
#     #            'command': 'init_chat',
#     #     }
#     #     if user in self.access:
#     #         content['error'] = 'sorry, Your request is not processed right now. Please try again later!'
#     #         self.send_message(content)
#     #     else:
#     #         print('false')
#     #         self.disconnect('Sorry, this user is not allowed to acces this chat')


#     # def fetch_messages(self, data2):
#     #     group = None
#     #     try:
#     #         group = models.Chatroom.objects.get(pk = self.group_id)
#     #     except:
#     #         self.disconnect('Group does not exist')

#     #     messages = group.room_chat.all()
#     #     serialized_messages = serializers.MessageSerializers(messages, many=True).data
#     #     info = JSONRenderer().render(serialized_messages)
#     #     stream = io.BytesIO(info)
#     #     data = JSONParser().parse(stream)
#     #     content = {
#     #         'command': 'messages',
#     #         'messages': data
#     #     }
#     #     user_id = data2['userid']
#     #     user = models.User.objects.get(pk = user_id)
#     #     if user in self.access:
#     #         self.send_message(content)
#     #     else:
#     #         self.disconnect('sorry, you are not allowed to access the chat')

#     # def new_message(self, data):
#     #     text = data['text']
#     #     group = models.Chatroom.objects.get(pk = self.group_id)
#     #     creater_user = models.User.objects.get(pk = data['userid'])
#     #     if creater_user in self.access:
#     #         message = models.Messages.objects.create(writer = creater_user, message = text, room=group)
#     #         serializer = serializers.MessageSerializers(message)
#     #         data = serializer.data
#     #         content = {
#     #             'command': 'new_message',
#     #             'message': data
#     #         }
#     #         self.send_chat_message(content)
#     #     else:
#     #         self.disconnect('Sorry, you are not allowed to send msg in this group')

#     # def new_image_message(self, data):
#     #     id  = data['id']
#     #     try:
#     #         message = models.Messages.objects.get(pk = id)
#     #     except:
#     #         self.disconnect('sorry, some error occurs')
#     #     creater_user = models.User.objects.get(pk = data['userid'])
#     #     if creater_user in self.access:
#     #         serializer = serializers.MessageSerializers(message)
#     #         data = serializer.data
#     #         content = {
#     #             'command': 'new_image_message',
#     #             'message': data
#     #         }
#     #         self.send_chat_message(content)
#     #     else:
#     #         self.disconnect('Sorry, some error occurs')

#     # def messages_to_json(self, messages):
#     #     result = []
#     #     for message in messages:
#     #         result.append(self.message_to_json(message))
#     #     return result

#     # def message_to_json(self, message): 
#     #     return {
#     #         'id': str(message.id),
#     #         'creater': message.writer.id,
#     #         'message': message.message, 
#     #         'group': message.room.id,
#     #     }

#     # commands = {
#     #     'init_chat': init_chat,
#     #     'fetch_messages': fetch_messages,
#     #     'new_message': new_message,
#     #     'new_image_message': new_image_message
#     # }

#     # # Receive message from WebSocket

#     # def receive(self, text_data):
#     #     data = json.loads(text_data)
#     #     self.commands[data['command']](self, data)

#     # def send_message(self, content):
#     #     self.send(text_data=json.dumps(content))

#     # def send_chat_message(self, message):
#     #     async_to_sync(self.channel_layer.group_send)(
#     #         self.room_group_name,
#     #         {
#     #             'type': 'chat_message',
#     #             'message': message,
#     #         }
#     #     )

#     # # Receive message from room group
#     # def chat_message(self, event):
#     #     message = event['message']

#     #     # Send message to WebSocket
#     #     self.send(text_data=json.dumps({
#     #         'message': message
#     #     }))