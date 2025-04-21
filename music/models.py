from django.db import models

# Create your models here.

class instrument(models.Model):
    name= models.CharField(max_length=70)
    type =models.CharField(max_length=70)

    def __str__(self):
        return f"{self.name} ({self.type})"


'''
class artist(models.Model):
    name= models.CharField(max_length=70)
    country =models.CharField(max_length=70)

    def __str__(self):
        return self.name

'''