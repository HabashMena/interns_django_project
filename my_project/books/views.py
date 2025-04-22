from django.shortcuts import render, redirect
from django.views import View
from django.views.generic import ListView
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from .models import Book

# ------------------------
# Function-Based Views
# ------------------------

def book_list_fbv(request):
    books = Book.objects.all()
    return render(request, 'library/book_list.html', {'books': books})

def add_book_fbv(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        author = request.POST.get('author')
        if title and author:
            Book.objects.create(title=title, author=author)
            return redirect('book_list_fbv')
    return render(request, 'library/signup.html', {'view_type': 'fbv'})


# ------------------------
# Generic-Based Views
# ------------------------

class BookListGBV(ListView):
    model = Book
    template_name = 'library/book_list.html'
    context_object_name = 'books'

class AddBookGBV(CreateView):
    model = Book
    fields = ['title', 'author']
    template_name = 'library/signup.html'

    def get_success_url(self):
        return reverse_lazy('book_list_gbv')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['view_type'] = 'gbv'
        return context


# ------------------------
# Class-Based Views
# ------------------------

class BookListCBV(View):
    def get(self, request):
        books = Book.objects.all()
        return render(request, 'library/book_list.html', {'books': books})

class AddBookCBV(View):
    def get(self, request):
        return render(request, 'library/signup.html', {'view_type': 'cbv'})

    def post(self, request):
        title = request.POST.get('title')
        author = request.POST.get('author')
        if title and author:
            Book.objects.create(title=title, author=author)
            return redirect('book_list_cbv')
        return render(request, 'library/signup.html', {'view_type': 'cbv'})