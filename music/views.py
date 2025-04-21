from django.shortcuts import render, redirect
from django.views import View
from django.views.generic.edit import CreateView
from .models import Instrument
from .forms import InstrumentForm



def instrument_function_view(request):
    if request.method == 'POST':
        form = InstrumentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('instrument_function')
    else:
        form = InstrumentForm()

    instruments = Instrument.objects.all()
    return render(request, 'music/home.html', {
        'form': form,
        'instruments': instruments,
        'view_type': 'Functional View'
    })



class InstrumentClassView(View):
    def get(self, request):
        form = InstrumentForm()
        instruments = Instrument.objects.all()
        return render(request, 'music/home.html', {
            'form': form,
            'instruments': instruments,
            'view_type': 'Class-Based View'
        })

    def post(self, request):
        form = InstrumentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('instrument_class')
        instruments = Instrument.objects.all()
        return render(request, 'music/home.html', {
            'form': form,
            'instruments': instruments,
            'view_type': 'Class-Based View'
        })



class InstrumentCreateView(CreateView):
    model = Instrument
    fields = ['name', 'type']
    template_name = 'music/home.html'
    success_url = '/generic/'  

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['instruments'] = Instrument.objects.all()
        context['view_type'] = 'CreateView (Generic)'
        return context
    



def home(request):
    # i Choose 
    selected_view = 'generic'  

    if selected_view == 'function':
        return instrument_function_view(request)

    elif selected_view == 'class':
        return InstrumentClassView.as_view()(request)

    elif selected_view == 'generic':
        return InstrumentCreateView.as_view()(request)


