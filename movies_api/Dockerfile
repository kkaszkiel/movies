FROM python:3.12-slim-bullseye

RUN apt-get update \
    && apt-get install -y libpq-dev gcc

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . /app
WORKDIR /app

COPY ./entrypoint.sh .
ENTRYPOINT ["sh", "/app/entrypoint.sh"]