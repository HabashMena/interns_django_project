from django.urls import path
from . import views
urlpatterns = [
    path('fbv/', views.book_list_fbv, name='book_list_fbv'),
    path('cbv/', views.BookListCBV.as_view(), name='book_list_cbv'),
    path('gbv/', views.BookListGBV.as_view(), name='book_list_gbv'),
]
