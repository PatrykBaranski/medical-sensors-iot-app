from django.db import models
# Create your models here.

class Ecg(models.Model):
    ecg_list = models.TextField(null=True)
