from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse 

def index(request):
    return render(request, 'base.html')

def ques1(request):
    return render(request, "ques1.html")

def ques2(request):
    return render(request , "ques2.html")
