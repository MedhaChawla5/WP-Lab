from django.urls import path
from . import views

urlpatterns = [
    path('', views.ques1, name='ques1'),
]
