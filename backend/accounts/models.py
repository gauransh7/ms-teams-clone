from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

# # Create your models here.
# class UserAccountManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('Users must have an email address')

#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)

#         user.set_password(password)
#         user.save()

#         return user
    
#     def create_superuser(self, email, password=None, **extra_fields):
#         """
#         Creates and saves a superuser with the given credentials
#         """
#         user = self.create_user(email,
#             password=password,
#             **extra_fields
#         )
#         user.is_superuser = True
#         user.is_staff = True
#         user.save(using=self._db)
#         return user

class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    profile_picture = models.ImageField(
        upload_to='profile_pictures',
        max_length = 255,
        null = True,
        blank = True,
    )
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username',]

    def get_full_name(self):
        return self.first_name + " " + self.last_name

    def get_short_name(self):
        return self.first_name
    
    def __str__(self):
        return self.email