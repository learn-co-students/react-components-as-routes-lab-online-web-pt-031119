import React from 'react';
import { movies } from '../data';

const movieStyle = {
  border: '1px solid black',
  width: '500px',
  margin: '1em',
  padding: '1em'
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(({title, time, genres, metascore}) => 
          <div 
            style={movieStyle}>
            <h2>
              {title}
            </h2>
            <ul>
              {genres.map(genre => <li>{genre}</li>)}
            </ul>
            {metascore ? <h4>Rating: {metascore}</h4> : null}
            <p>
              {time} min
            </p>
          </div>
        )}
    </div>
  );
};

export default Movies;