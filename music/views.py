from django.shortcuts import render, redirect
from django import forms
from .models import instrument


from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import mixins, generics
from django.views.decorators.csrf import csrf_exempt

#من نفس المجلد الي فيه الفايلات انا اخدتها ف لازم نحدد
from .models import instrument
from .serializers import Instrument_Seri


# Create your views here.

#if request.method=='GET':
# بدي اخد الداتا كلها بعدين ابعتها ل serializers بحيث يحولها لجيسن فايل وبعدين يطلع الريسبونس

#function

from django.shortcuts import render, redirect
from .models import instrument
from .forms import InstrumentForm  # Assume form is defined

def instrument_function_view(request):
    if request.method == 'POST':
        form = InstrumentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('function_view')  # name in urls.py
    else:
        form = InstrumentForm()

    instruments = instrument.objects.all()
    return render(request, 'music/function_view.html', {'form': form, 'instruments': instruments})

'''
def instrument_function_view(request):
    instruments = instrument.objects.all()
    return render(request, 'music/function_view.html', {'instruments': instruments})
'''


#class based 

from django.views import View

class InstrumentClassView(View):
    def get(self, request):
        form = InstrumentForm()
        instruments = instrument.objects.all()
        return render(request, 'music/class_view.html', {'form': form, 'instruments': instruments})

    def post(self, request):
        form = InstrumentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('class_view')
        instruments = instrument.objects.all()
        return render(request, 'music/class_view.html', {'form': form, 'instruments': instruments})


'''
from django.views import View

class InstrumentClassView(View):
    def get(self, request):
        instruments = instrument.objects.all()
        return render(request, 'music/class_view.html', {'instruments': instruments})
'''

#generic
from django.views.generic import View

class InstrumentGenericView(View):
    def get(self, request):
        form = InstrumentForm()
        instruments = instrument.objects.all()
        return render(request, 'music/generic_view.html', {'form': form, 'instruments': instruments})

    def post(self, request):
        form = InstrumentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('generic_view')
        instruments = instrument.objects.all()
        return render(request, 'music/generic_view.html', {'form': form, 'instruments': instruments})


'''
from django.views.generic import ListView

class InstrumentGenericView(ListView):
    model = instrument
    template_name = 'music/generic_view.html'
    context_object_name = 'instruments'
'''


'''
class MyInsturments(ListAPIView):
    queryset = instrument.objects.all()
    serializer_class = Instrument_Seri

    
    @api_view(['GET','POST'])
def Instrument_listing(request):
     if request.method == 'GET':
          instruments=instrument.objects.all()
          serilizer=Instrument_Seri(instruments,many=True)
          return Response(serilizer.data)
     
          

          class List_MyInsturments(APIView):
     def get (self, request):
          instruments=instrument.objects.all()
          serilizer=Instrument_Seri(instruments,many=True)
          return Response(serilizer.data)
     

''' 



'''
def  Home_Page(request):
    if request.method == 'POST':
        form = InstrumentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')  
    else:
        form = InstrumentForm()

    instruments = MyInsturments
    return render(request, 'music/home.html', {'form': form, 'instruments': instruments})


class InstrumentForm(forms.ModelForm):
    class Meta:
        model = instrument
        fields = ['name', 'type']  
'''