from rest_framework import routers
from django.urls import path
from main_app.viewsets import EcgSet, EcgFourierTransofrmedSet, EcgIdListSet

router = routers.SimpleRouter()

router.register(r'ecgs', EcgSet, basename="ecgs")
router.register(r'ecgs-list', EcgIdListSet, basename="ecgs-list")
router.register(r'ecgs-fourier', EcgFourierTransofrmedSet, basename='ecgs_fourier')

urlpatterns = router.urls