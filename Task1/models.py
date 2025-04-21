from django.db import models

class User(models.Model):
    FullName=models.CharField(max_length=60)
    Age=models.IntegerField()
    password=models.CharField(max_length=20)

    def __str__(self):
        return self.FullName
