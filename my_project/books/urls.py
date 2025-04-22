from django.urls import path
from . import views

urlpatterns = [
    # Book List Views
    path('functionbasedview/', views.book_list_fbv, name='book_list_fbv'),
    path('genericbasedview/', views.BookListGBV.as_view(), name='book_list_gbv'),
    path('classbasedview/', views.BookListCBV.as_view(), name='book_list_cbv'),

    # Add Book Views
    path('fbv/add/', views.add_book_fbv, name='add_book_fbv'),
    path('cbv/add/', views.AddBookCBV.as_view(), name='add_book_cbv'),
    path('gbv/add/', views.AddBookGBV.as_view(), name='add_book_gbv'),
    
]
