import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies && movies.map(movie => <div className="movies">{movie.title} {movie.time} <li>{movie.genres}</li></div>)}
    </div>
  );
};

export default Movies;
