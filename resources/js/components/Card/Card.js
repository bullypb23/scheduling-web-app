import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = props => {

  return (
    <div className="card">
      <h3>{props.username}</h3>
      <p>{props.message}</p>
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  )
}

export default Card;