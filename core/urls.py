from django.contrib import admin
from django.urls import path, include
from routers import router
from main_app.views import EcgFourierPlotView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include((router.urls, 'core_api'), namespace='core_api')),
    path('api/ecg-fourier-plot/', EcgFourierPlotView.as_view(), name='ecg-fourier-plot'),
]
