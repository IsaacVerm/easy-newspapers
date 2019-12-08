# easy-newspapers

## virtual environment

Activate [environment](https://docs.python.org/3/tutorial/venv.html):

```
source venv/bin/activate
```

Update package list:

```
pip freeze > requirements.txt
```

Install packages:

```
pip install -r requirements.txt
```

## run server

```
python manage.py runserver
```

## deploy to Heroku

To deploy push the latests changes to Heroku.

```
git heroku push master
```

If you also want to to push at the same time run the deploy script.

```
./deploy.sh
```
