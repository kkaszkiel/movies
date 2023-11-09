#!/bin/sh

gunicorn movies_api.wsgi:application --bind 0.0.0.0:8000