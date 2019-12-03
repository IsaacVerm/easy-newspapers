from django.shortcuts import render
from django.http import HttpResponse
from .models import Article


def index(request):
    return HttpResponse("Hello, world. You're at the articles index.")


def latest_articles(request):
    latest_articles = [
        article for article in Article.objects.all() if article.published_today()]
    context = {'articles': latest_articles}
    return render(request, 'articles/overview.html', context)


def detail(request, article_id):
    return render(request, 'articles/detail.html')
