from django.urls import path
from .views import instrument_function_view, InstrumentClassView, InstrumentGenericView

urlpatterns = [
    path('function/', instrument_function_view, name='function_view'),
    path('class/', InstrumentClassView.as_view(), name='class_view'),
    path('generic/', InstrumentGenericView.as_view(), name='generic_view'),
]






'''
from django.urls import path
from .views import Instrument_listing, List_MyInsturments, MyInsturments, Home_Page


urlpatterns = [
    path('fbv/', Instrument_listing, name='fbv'),
    path('cbv/', List_MyInsturments.as_view(), name='cbv'), 
    path('gv/', MyInsturments.as_view(), name='gv'),
    path('form/', Home_Page, name='home'),

]
'''