import React from 'react';
import { actors } from '../data';

const actorStyle = {
  border: '1px solid black',
  width: '500px',
  margin: '1em',
  padding: '1em'
}

const Actors = () => {
  return (
    <div>
      <h1>
        Actors Page
      </h1>
      {actors.map(({name, movies}) =>
      <div 
        className='actor'
        style={actorStyle}
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
};

export default Actors;
