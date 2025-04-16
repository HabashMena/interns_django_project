from django.contrib import admin
from django.urls import path, include
from polls import views
urlpatterns = [
    path("", views.index),
]