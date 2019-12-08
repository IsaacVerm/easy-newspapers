from django.shortcuts import render
from django.http import HttpResponse
from .models import Article
import requests
import atoma


def index(request):
    return HttpResponse("Hello, world. You're at the articles index.")


def latest_articles(request):
    feed = requests.get(
        'https://www.standaard.be/rss/section/1f2838d4-99ea-49f0-9102-138784c7ea7c')
    latest_articles = atoma.parse_rss_bytes(feed.content).items
    print(latest_articles)
    context = {'articles': latest_articles}
    return render(request, 'articles/overview.html', context)


def detail(request, article_id):
    return render(request, 'articles/detail.html')
