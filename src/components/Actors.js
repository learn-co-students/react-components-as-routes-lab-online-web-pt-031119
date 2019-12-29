import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a => {
        return <div>
      <p><strong>Name: {a.name}</strong></p>
      <p>Movies:</p>
      <ul>
        {a.movies.map(m => {
        return <li>{m}</li>
        })}
      </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
