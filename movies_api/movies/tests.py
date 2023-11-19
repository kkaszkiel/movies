from django.test import TestCase
from django.urls import reverse

from .models import Movie

class MoviesAPITestCase(TestCase):

 

    def setUp(self):
        # Create some sample movies for testing
        self.movie1 = Movie.objects.create(title='My film 1',director='Joe Doe',year=2020)
        self.movie2 = Movie.objects.create(title='My film 2',director='Doe Joe',year=2021)

    def test_movies_list_view(self):
        url = reverse('movie-list')
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response['content-type'], 'application/json')

        data = response.json()
        self.assertEqual(len(data), 2)