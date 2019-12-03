from django.shortcuts import render


def index(request):
    return HttpResponse("Hello, world. You're at the articles index.")


def detail(request, article_id):
    return render(request, 'articles/detail.html')
