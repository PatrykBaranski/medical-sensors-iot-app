from rest_framework import serializers

from .models import Ecg, EcgFourierTransofrmed

class EcgSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ecg
        fields =["id",'ecg_list']

class EcgIdListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ecg
        fields =["id"]

class EcgFourierTransofrmedSerializer(serializers.ModelSerializer):

    class Meta:
        model = EcgFourierTransofrmed
        fields =['ecg_transformed_list'] 