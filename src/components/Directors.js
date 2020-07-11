import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((dir, index) => {
        return (
          <div className="director" key={index}>
            <h3>Name: {dir.name}</h3>
            <p>Movies:</p>
            <ul>
              {dir.movies.map((mov, index) => {
                return (
                  <li className="movie" key={index}>{mov}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
