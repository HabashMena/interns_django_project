from django.shortcuts import render
from django.http import HttpResponse
from .models import Book
def book_list_fbv(request):
    books=Book.objects.all()
    return render(request,'library/book_list.html',{'books': books})
#gbv:

from django.views.generic.list import ListView
from .models import Book
class BookListGBV(ListView):
   model = Book
template_name='library/book_list.html'
context_object_name='books'




#cbv:

from django.views import View
from .models import Book
from django.shortcuts import render
class BookListCBV(View):
    def get(self,request):
      books = Book.objects.all()
      return render(request,'library/book_list.html',{'books':books})


