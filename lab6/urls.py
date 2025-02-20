# magazine_app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('generate_cover/', views.generate_cover, name='generate_cover'),
]
