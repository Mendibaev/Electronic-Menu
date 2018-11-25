from django.shortcuts import render
app_name = 'frontend'
def index(request):
    return render(request, 'frontend/index.html')