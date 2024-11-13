from django.contrib import admin
from .models import Ecg, EcgFourierTransofrmed
# Register your models here.

admin.site.register(Ecg)
admin.site.register(EcgFourierTransofrmed)