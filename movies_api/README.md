# Movie API

Django REST API for managing movie data in a PostgreSQL database.

By running the docker-compose file you are using my database image, which already has the data (film records)




### Get a list of all movies (GET):
```
curl http://localhost:8000/api/movies/
```

```json
  {
        "id": 1,
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "year": 1994
    }
```


### Get detailed information about a specific movie (GET):
```
curl http://localhost:8000/api/movies/1/
```


## How to run

```
docker compose up -d

```