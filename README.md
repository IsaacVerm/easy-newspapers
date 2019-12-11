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

Run server:

```
python manage.py runserver
```

Get rid of all the data:

```
python manage.py flush
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

Secrets are handled with environment variables. The following environment variables are defined:

- EMAIL_HOST_PASSWORD
- EMAIL_TO

EMAIL_HOST_PASSWORD is the app password of the email used to send mails. Notice [Gmail security](https://stackoverflow.com/questions/26697565/django-smtpauthenticationerror) has increased so the regular password of the mail account won't be enough. Just enabling less secure apps as an option will still result in refusal by the gmail server. An app password can only be created if two-factor authentication is activated.

EMAIL_TO is the email address you want to send mail to. There can only be one at a time.

Locally environment variables are set like this:

```
export ENV_VAR=blabla
```

On [Heroku](https://devcenter.heroku.com/articles/config-vars) use the `heroku config` command:

```
heroku config:set ENV_VAR=blabla
```
