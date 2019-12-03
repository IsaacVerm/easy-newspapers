from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the articles index.")


def detail(request, article_id):
    return HttpResponse("This is the article with id %s." % article_id)
