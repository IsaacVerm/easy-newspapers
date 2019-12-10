from django.urls import path

from . import views

urlpatterns = [
    path('feed', views.feed, name='feed'),
    path('<article_path>', views.detail, name='detail')
]
