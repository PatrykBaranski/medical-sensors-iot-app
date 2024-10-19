from rest_framework import routers
from main_app.viewsets import EcgSet

router = routers.SimpleRouter()

router.register(r'ecgs', EcgSet, basename="ecgs")

urlpatterns = router.urls