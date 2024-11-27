from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.pagination import PageNumberPagination
from .models import Ecg, EcgFourierTransofrmed
from .serializers import EcgSerializer, EcgFourierTransofrmedSerializer, EcgIdListSerializer

class ECGPagination(PageNumberPagination):
    page_size = 1
    page_size_query_param = 'page_size'
    max_page_size = 10

class EcgIdListPagination(PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'
    max_page_size = 100


class EcgSet(viewsets.ModelViewSet):
    queryset = Ecg.objects.all()
    serializer_class = EcgSerializer
    permission_classes = [AllowAny]
    pagination_class = ECGPagination

class EcgIdListSet(viewsets.ModelViewSet):
    queryset = Ecg.objects.all()
    serializer_class = EcgIdListSerializer
    permission_classes = [AllowAny]
    pagination_class = EcgIdListPagination

class EcgFourierTransofrmedSet(viewsets.ModelViewSet):
    queryset = EcgFourierTransofrmed.objects.all()
    serializer_class = EcgFourierTransofrmedSerializer
    permission_classes = [AllowAny]
    pagination_class = ECGPagination