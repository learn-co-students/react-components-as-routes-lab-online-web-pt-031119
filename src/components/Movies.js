import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return(<div>
          <p>{movie.title}</p>
          <p>{movie.time}</p>
          {movie.genres.map(genre => {
            return(<ul>
              <li>{genre}</li>
            </ul>)
          })}
        </div>)
      })}
    </div>
  );
};

export default Movies;