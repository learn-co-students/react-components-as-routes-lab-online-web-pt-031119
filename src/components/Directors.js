import React from 'react';
import { directors } from '../data';

const directorStyle = {
  border: '1px solid black',
  width: '500px',
  margin: '1em',
  padding: '1em'
}

const Directors = () => {
  return (
    <div>
      <h1>
        Directors Page
      </h1>
      {directors.map(({name, movies}) =>
        <div 
        className='director'
        style={directorStyle}
        >
          <h2>
            {name}
          </h2>
          <ul>
            {movies.map(movie => 
              <li>
                {movie}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Directors