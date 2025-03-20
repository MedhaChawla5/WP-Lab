from django.shortcuts import render

# Create your views here.
# directory/views.py
from django.shortcuts import render, redirect
from .models import Category, Page
from .forms import CategoryForm, PageForm

# View to list categories and pages
def directory_home(request):
    categories = Category.objects.all()
    pages = Page.objects.all()
    return render(request, 'directory/directory_home.html', {'categories': categories, 'pages': pages})

# View to add a category
def add_category(request):
    if request.method == 'POST':
        form = CategoryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('directory_home')  # Redirect to home after saving
    else:
        form = CategoryForm()
    return render(request, 'directory/add_category.html', {'form': form})

# View to add a page
def add_page(request):
    if request.method == 'POST':
        form = PageForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('directory_home')  # Redirect to home after saving
    else:
        form = PageForm()
    return render(request, 'directory/add_page.html', {'form': form})
