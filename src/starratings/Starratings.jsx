import React from 'react'
import './starratings.css'
import StarRating from './stars';
import data from './data'

const listratings = data.map(data =>
  <div className='box2_rating_card' key={data.info}>
        <StarRating rating={data.stars} />
        <p>{data.info}</p>
  </div>
);

const Starratings = () => {
  return (
    <div className="box box2">
       {listratings}
    </div>
  )
}

export default Starratings