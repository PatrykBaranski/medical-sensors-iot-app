from rest_framework import routers
from django.urls import path
from main_app.viewsets import EcgSet, EcgFourierTransofrmedSet
from main_app.views import EcgFourierPlotView

router = routers.SimpleRouter()

router.register(r'ecgs', EcgSet, basename="ecgs")
router.register(r'ecgs-fourier', EcgFourierTransofrmedSet, basename='ecgs_fourier')

urlpatterns = router.urls