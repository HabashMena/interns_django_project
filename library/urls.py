from django.urls import path
from django.contrib.auth import views as auth_views



from . import views
urlpatterns = [
    path('functionbasedview/', views.book_list_fbv, name='book_list_fbv'),
    path('genericbasedview/', views.BookListGBV.as_view(), name='book_list_gbv'),
    path('classbasedview/', views.BookListCBV.as_view(), name='book_list_cbv'),
   
    path('signup/fbv/', views.signup_fbv, name='signup_fbv'),
    path('signup/cbv/', views.BookListCBV.SignupCBV.as_view(), name='signup_cbv'),
    path('signup/gbv/', views.SignupGBV.as_view(), name='signup_gbv'),
]