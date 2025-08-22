from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MappingViewSet  # adjust based on your view name

router = DefaultRouter()
router.register(r'', MappingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
