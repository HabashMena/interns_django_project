from django.urls import path
from . import views
urlpatterns=[
    path('',views.CreateUser.as_view(),name="create"),
    path('Users/',views.GetUsers,name="get"),
    path('Update/<int:pk>/', views.UpdateUser.as_view(), name='update'),
]