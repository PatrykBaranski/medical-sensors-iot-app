from rest_framework import serializers

from .models import Ecg

class EcgSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ecg
        fields =['ecg_list'] 