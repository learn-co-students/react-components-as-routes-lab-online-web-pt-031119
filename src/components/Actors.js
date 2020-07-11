import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((act, index) => {
        return (
          <div className="actor" key={index}>
            <h3>Name: {act.name}</h3>
            <p>Movies:</p>
            <ul>
              {act.movies.map((mov, index) => {
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
};

export default Actors;
