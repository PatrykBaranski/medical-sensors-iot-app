from rest_framework import serializers

from .models import Ecg, EcgFourierTransofrmed

class EcgSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ecg
        fields =['ecg_list'] 

class EcgFourierTransofrmedSerializer(serializers.ModelSerializer):

    class Meta:
        model = EcgFourierTransofrmed
        fields =['ecg_transformed_list'] 