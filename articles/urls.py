from django.urls import path

from . import views

urlpatterns = [
    path('feed', views.feed, name='feed'),
    path('save', views.save, name='save'),
    path('saved', views.saved, name='saved'),
    path('<article_path>', views.detail, name='detail')
]
