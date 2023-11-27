import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <img
            key={index}
            src={index < rating ? 'social-proof-section/images/icon-star.svg' : 'social-proof-section/images/icon-star-none.svg'}
            alt="star"
            style={{ width: '25px', height: '25px' }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;