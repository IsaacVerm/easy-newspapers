# Generated by Django 3.0 on 2019-12-11 08:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_article_article_path'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='article_path',
            new_name='path',
        ),
    ]
