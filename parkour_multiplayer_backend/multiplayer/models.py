from django.db import models

class Room(models.Model):
    code = models.CharField(max_length=16, unique=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.code

class Player(models.Model):
    username = models.CharField(max_length=32)
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='players', null=True, blank=True)
    x = models.FloatField(default=0)
    y = models.FloatField(default=0)
    z = models.FloatField(default=0)
    last_active = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username
