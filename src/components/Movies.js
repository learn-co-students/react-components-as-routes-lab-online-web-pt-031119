import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
  {movies.map(movie => { 
    return <div>
      <p><strong>Name: {movie.title}</strong></p>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
      {movie.genres.map(g =>{
        return <li>{g}</li>
      })}
      </ul>
    </div>})}
    </div>
  );
};

export default Movies;
