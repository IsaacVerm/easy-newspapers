#!/bin/bash 

# push to heroku
git push -f heroku master

# migrate database
heroku run python manage.py makemigrations
heroku run python manage.py migrate

# push to github
git push