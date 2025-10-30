from django.urls import path
from . import views

urlpatterns = [
    path('join/', views.join_game),
    path('players/', views.player_positions),
    path('rooms/', views.room_list_create),
]
