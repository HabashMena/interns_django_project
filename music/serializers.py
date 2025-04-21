from rest_framework import serializers
from .models import instrument

class Instrument_Seri(serializers.ModelSerializer):
    class Meta:
        model=instrument
        fields='__all__'
        # عشان يعمل الاشي لكل الفيلدز الي عنا 

'''
class Artist_Seri(serializers.ModelSerializer):
    class Meta:
        model=artist
        fields=all
'''
