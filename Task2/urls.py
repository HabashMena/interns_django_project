from django.urls import path
from .views import Home,RegisterView,LoginView

urlpatterns = [
    path('MyRegister/',RegisterView.as_view(),name="register"),
    path('MyLogin/',LoginView.as_view(),name="login"),
]