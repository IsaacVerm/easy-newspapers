#!/bin/bash 

# create virtual environment
python3 -m venv venv

# activate virtual environment
source venv/bin/activate

# install packages into it
pip install

# serve Django web server
cd newspapers
python manage.py runserver

