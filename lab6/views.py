from django.shortcuts import render

# Create your views here.
# magazine_app/views.py
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'magazine_app/index.html')

def generate_cover(request):
    if request.method == "POST":
        # Collect form data
        background_color = request.POST.get('background_color')
        font_size = request.POST.get('font_size') + 'px'
        font_color = request.POST.get('font_color')
        message = request.POST.get('message')

        # Here, handle the image upload if necessary (you can save it to your database or filesystem)

        return render(request, 'magazine_app/index.html', {
            'background_color': background_color,
            'font_size': font_size,
            'font_color': font_color,
            'message': message,
        })
    return HttpResponse("Invalid request", status=400)
