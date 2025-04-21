from django.shortcuts import render, get_object_or_404,redirect
from django.views.generic.edit import CreateView
from .models import User
from django.views import View
from django.urls import reverse

class CreateUser(CreateView):
    model=User
    fields=['FullName','Age','password']
    template_name="Task1/CreateUser.html"
    def get_success_url(self):
        return reverse('create')

def GetUsers(request):
    dataset = User.objects.all()
    return render(request, "Task1/GetUsers.html", {'dataset': dataset})

class UpdateUser(View):
    def get(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        return render(request, 'Task1/UpdateUser.html', {'user': user})
    
    def post(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        user.FullName = request.POST.get('FullName')
        user.Age = request.POST.get('Age')
        user.save()
        return redirect('get')