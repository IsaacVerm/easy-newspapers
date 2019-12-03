from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField()
    description = models.TextField()

    def __str__(self):
        return self.title
