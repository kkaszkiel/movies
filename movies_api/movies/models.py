from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    director = models.CharField(max_length=100)
    year = models.IntegerField()

    class Meta:
        db_table = 'movies'  


class Meta:
    app_label = 'movies' 