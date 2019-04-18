from django.shortcuts import render
from app.models import Post

def index(request):
  return render(request, 'index.html')

def post_list(request):
    posts = Post.objects.all()
    return render(request, 'index.html', {"post_list": posts})
