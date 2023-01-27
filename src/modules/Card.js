import React from 'react';
import '../cssFiles/card.css';

//This part is responsible for the specific card in list of items.

const Card = ({img, name, descr, price}) => {

  return (
    <li className='card-container'>
        <img src={img}/>
        <p className='card-name'>{name}</p>
        <p className='card-description'>{descr}</p>
        <p className='card-price'>{price} $</p>
        <button>More</button>
    </li>
  )
}

export default Card;