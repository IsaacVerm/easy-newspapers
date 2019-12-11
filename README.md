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

## models

Update models in Django shell:

```
python manage.py makemigrations
python manage.py migrate
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

## testing

By default the Cypress `baseUrl` is set to the deployed version of the application. To override this you have to set an environment variable:

```
export CYPRESS_baseUrl=http://127.0.0.1:8000
```

Url above is the default one used by the Django local web server.

## secrets

Secrets are handled with environment variables. The following environment variables have to be set:

```
export EMAIL_HOST_PASSWORD=gmail app password
```

Locally you do this with `export ENV_VAR="blablabla"`. On [Heroku](https://devcenter.heroku.com/articles/config-vars) use the `heroku config` command.
