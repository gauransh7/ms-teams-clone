import uuid
from django.db import models
from accounts.models import User

class ChatRoom(models.Model):
    created_by = models.ForeignKey(
        User,
        related_name='room_creater',
        on_delete=models.CASCADE
    )

    room_name = models.CharField(
        max_length=255,
        blank = True,
        null=True
    )

    sharing_id = models.UUIDField(
        default=uuid.uuid4,
        editable=False,
        db_index=True
    )

    all_users = models.ManyToManyField(
        User,
        related_name='all_users',
        blank=True
    )

    created_on = models.DateTimeField(auto_now_add=True)

    def all_users_count(self):
        count = self.all_users.all().count()
        return count

    def __str__(self):
        id = self.id
        created_by_person = self.created_by
        return f"ChatRoom {id} created by {created_by_person}"

    class Meta:
        ordering = ['-created_on']

class Message(models.Model):
    user = models.ForeignKey(
        User,
        related_name='message_user',
        on_delete=models.CASCADE
    )

    room = models.ForeignKey(
        ChatRoom,
        related_name='message_user',
        on_delete=models.CASCADE
    )

    message = models.TextField()

    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        id = self.id
        message_user = self.user
        return f"Message {id} created by {message_user}"

    class Meta:
        ordering = ['created_on']
