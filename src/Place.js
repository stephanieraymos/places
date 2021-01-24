import React, { useState } from 'react';

const Place = ({ id, image, info, price, city, address, link, removePlace }) => {

  const [readMore, setReadMore] = useState(false);

  return <article className="single-tour">
    <img src={image} alt={address} />
    <footer>
      <div className="tour-info">
        <h4>{city}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <h5>{address}</h5>
      <h5><a href={link} target="_blank">View</a></h5>
      <p>{readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => {
          setReadMore(!readMore)
        }}>
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <button className="delete-btn" onClick={() => removePlace(id)}>Delete</button>
    </footer>
  </article>;
};

export default Place;