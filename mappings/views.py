from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Mapping
from .serializers import MappingSerializer

class MappingViewSet(viewsets.ModelViewSet):
    queryset = Mapping.objects.all()
    serializer_class = MappingSerializer

