import uuid
from django.db import models
from accounts.models import User

class ChatRoom(models.Model):
    created_by = models.ForeignKey(
        User,
        related_name='needy_person',
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
