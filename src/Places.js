
import React from 'react';
import Place from './Place';
const Places = ({ places, removePlace }) => {
  return <section>
    <div className="title">
      <h2>Places</h2>
      <div className="underline"></div>
      <div>
        {places.map((place) => {
          return <Place key={places.id} {...place} removePlace={removePlace}></Place>
        })}
      </div>
    </div>
  </section>;
};

export default Places;
