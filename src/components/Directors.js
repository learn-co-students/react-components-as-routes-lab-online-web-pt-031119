import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => { 
    return <div>
      <p><strong>Name: {director.name}</strong></p>
      <p>Movies:</p>
      <ul>
      {director.movies.map(m =>{
        return <li>{m}</li>
      })}
      </ul>
    </div>})}
    </div>
  );
}

export default Directors
