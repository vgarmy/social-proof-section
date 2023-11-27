import React from 'react';
import StarStar from '../images/icon-star.svg'
import NonStar from '../images/icon-star-none.svg'

const StarRating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <img
            key={index}
            src={index < rating ? StarStar : NonStar }
            alt="star"
            style={{ width: '25px', height: '25px' }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;