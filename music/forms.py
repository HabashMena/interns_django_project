from django import forms
from .models import instrument

class InstrumentForm(forms.ModelForm):
    class Meta:
        model = instrument
        fields = ['name', 'type']
