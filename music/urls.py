from django.urls import path
from . import views

urlpatterns = [
    path('function/', views.instrument_function_view, name='instrument_function'),
    path('class/', views.InstrumentClassView.as_view(), name='instrument_class'),
    path('generic/', views.InstrumentCreateView.as_view(), name='instrument_generic'),
    path('home/', views.home, name='home')
]


