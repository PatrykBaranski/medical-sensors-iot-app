from django.db import models
# Create your models here.

class Ecg(models.Model):
    id = models.AutoField(primary_key=True)
    ecg_list = models.TextField(null=True)

class EcgFourierTransofrmed(models.Model):
    ecg_transformed_list = models.TextField(null=True)
