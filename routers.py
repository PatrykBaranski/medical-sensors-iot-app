from rest_framework import routers
from main_app.viewsets import EcgSet, EcgFourierTransofrmedSet

router = routers.SimpleRouter()

router.register(r'ecgs', EcgSet, basename="ecgs")
router.register(r'ecgs-fourier', EcgFourierTransofrmedSet, basename='ecgs_fourier')

urlpatterns = router.urls