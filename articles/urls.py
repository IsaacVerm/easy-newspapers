from django.urls import path

from . import views

urlpatterns = [
    path('ds/latest', views.latest_articles, name='latest_articles'),
    path('<int:article_id>/', views.detail, name='detail')
]
