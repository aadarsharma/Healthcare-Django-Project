# D:\healthcare\healthcare\urls.py
from django.contrib import admin
from django.urls import path, include
from .views import home

urlpatterns = [
    path("", home),
    path("admin/", admin.site.urls),
    path("api/patients/", include("patients.urls")),
    path("api/doctors/", include("doctors.urls")),
    path("api/mappings/", include("mappings.urls")),
    path("api/accounts/", include("accounts.urls")),
]
