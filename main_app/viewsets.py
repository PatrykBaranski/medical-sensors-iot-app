from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.pagination import PageNumberPagination
from .models import Ecg
from .serializers import EcgSerializer

class ECGPagination(PageNumberPagination):
    page_size = 1
    page_size_query_param = 'page_size'
    max_page_size = 10


class EcgSet(viewsets.ModelViewSet):
    queryset = Ecg.objects.all()
    serializer_class = EcgSerializer
    permission_classes = [AllowAny]
    pagination_class = ECGPagination