from django.shortcuts import render
from django.http import HttpResponse
from .models import Article
import requests
import atoma


def index(request):
    return HttpResponse("Hello, world. You're at the articles index.")


def feed(request):
    # get feed
    feed = requests.get(
        'https://www.standaard.be/rss/section/1f2838d4-99ea-49f0-9102-138784c7ea7c')
    articles = atoma.parse_rss_bytes(feed.content).items

    # get article path for each article
    for article in articles:
        article.path = article.guid.replace(
            "https://www.standaard.be/cnt/", "")

    # pass context to template
    return render(request, 'articles/feed.html', {'articles': articles})


def detail(request, article_path):
    # get feed again
    feed = requests.get(
        'https://www.standaard.be/rss/section/1f2838d4-99ea-49f0-9102-138784c7ea7c')
    articles = atoma.parse_rss_bytes(feed.content).items

    # find article with corresponding article path
    for index, article in enumerate(articles):
        article.path = article.guid.replace(
            "https://www.standaard.be/cnt/", "")
        if article_path == article.path:
            lookup_article_index = index

    # get description article found
    lookup_article = articles[lookup_article_index]

    # pass context to template
    return render(request, 'articles/detail.html', {'article': lookup_article})
