import datetime
from django.utils import timezone
from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=200)
    path = models.CharField(max_length=200)
    pub_date = models.DateTimeField()
    description = models.TextField()

    def __str__(self):
        return self.title

    def published_today(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
