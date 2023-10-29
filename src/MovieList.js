import React, { useState, useEffect } from 'react';
import { API_URL } from './config'; // Import the API URL from config

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL) // Use the API URL from the config
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Year: {movie.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;