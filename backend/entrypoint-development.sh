#!/bin/sh

# Apply migrations
python manage.py makemigrations
python manage.py migrate

# Run tests
python manage.py test

# Start the Django application
python manage.py runserver "0.0.0.0:8000"