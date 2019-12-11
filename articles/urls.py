from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('feed', views.feed, name='feed'),
    path('save', views.save, name='save'),
    path('saved', views.saved, name='saved'),
    path('mail', views.mail, name='mail'),
    path('<article_path>', views.detail, name='detail')
]
