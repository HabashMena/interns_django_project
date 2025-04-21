from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views import View
from django.shortcuts import render, redirect
from django.shortcuts import redirect
from .models import Book

def book_list_fbv(request):
    books=Book.objects.all()
    return render(request,'library/book_list.html',{'books': books})

def signup_fbv(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')  
    else:
        form = UserCreationForm()
    return render(request, 'library/signup.html', {'form': form, 'view_type': 'FBV Signup'})

#gbv:

from django.views.generic.list import ListView
from .models import Book

class BookListGBV(ListView):
 model = Book
 template_name='library/book_list.html'
 context_object_name = 'books'

from django.views.generic.edit import CreateView
from django.contrib.auth.models import User
from django.urls import reverse_lazy

class SignupGBV(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')  # or wherever you want
    template_name = 'signup.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['view_type'] = 'GBV Signup'
        return context





#cbv:

from django.views import View
from .models import Book
from django.shortcuts import render
class BookListCBV(View):
    def get(self,request):
      books = Book.objects.all()
      return render(request,'library/book_list.html',{'books':books})
    class SignupCBV(View):
     def get(self, request):
        form = UserCreationForm()
        return render(request, 'library/signup.html', {'form': form, 'view_type': 'CBV Signup'})

    def post(self, request):
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
        return render(request, 'library/signup.html', {'form': form, 'view_type': 'CBV Signup'})


