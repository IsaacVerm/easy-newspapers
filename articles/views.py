from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Article
import requests
import atoma

from django.utils import timezone


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

    # clean description article
    lookup_article.description = lookup_article.description.replace(
        "<P>", "").replace("</P>", "")

    # pass context to template
    return render(request, 'articles/detail.html', {'article': lookup_article})


def save(request):
    # get all saved articles
    articles = Article.objects.all()

    # check if article submitted for save exists already
    submitted_title = request.POST['title']
    submitted_description = request.POST['description']

    existing_titles = list(
        map(lambda article: article.title, Article.objects.all()))

    # save article if it doesn't exist yet
    if submitted_title not in existing_titles:
        article = Article(title=submitted_title,
                          description=submitted_description,
                          pub_date=timezone.now())
        article.save()

    # display saved articles
    return HttpResponseRedirect('/articles/saved', articles)


def saved(request):
    # get all saved articles
    articles = Article.objects.all()

    # display saved articles
    return render(request, 'articles/saved.html', {'articles': articles})
