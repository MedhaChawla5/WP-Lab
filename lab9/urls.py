# directory/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.directory_home, name='directory_home'),
    path('add/category/', views.add_category, name='add_category'),
    path('add/page/', views.add_page, name='add_page'),
]
