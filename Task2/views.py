from django.shortcuts import render, redirect
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken

class Home(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        content = {'message': f'Hello, World! {request.user.username}!'}
        return Response(content)

class RegisterView(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request):
        return render(request, 'Task2/MyRegister.html')

    def post(self, request):
        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")
        repeat_password = request.POST.get("repeat_password")

        if not all([username, email, password, repeat_password]):
            return render(request, 'Task2/MyRegister.html', {"error": "All fields are required."})

        if password != repeat_password:
            return render(request, 'Task2/MyRegister.html', {"error": "Passwords do not match."})

        if User.objects.filter(username=username).exists():
            return render(request, 'Task2/MyRegister.html', {"error": "Username already taken."})

        User.objects.create_user(username=username, email=email, password=password)
        return redirect('login')

class LoginView(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request):
        return render(request, 'Task2/MyLogin.html')

    def post(self, request):
        username = request.POST.get("username")
        password = request.POST.get("password")

        if not all([username, password]):
            return render(request, 'Task2/MyLogin.html', {'error': 'Username and password are required.'})

        user = authenticate(username=username, password=password)
        if user is None:
            return render(request, 'Task2/MyLogin.html', {'error': 'Invalid credentials'})

        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
