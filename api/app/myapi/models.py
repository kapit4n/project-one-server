from django.db import models
from datetime import datetime
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin)


class Task(models.Model):
    description = models.CharField(max_length=250)
    status = models.CharField(max_length=150, default='pending')
    priority = models.IntegerField(default=0)
    time = models.IntegerField()
    estimated_time = models.IntegerField()
    create_date = models.DateTimeField(default=datetime.now, blank=False)
    update_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.description
