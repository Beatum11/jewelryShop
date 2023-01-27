import React from 'react';
import '../cssFiles/card-list.css';
import Card from './Card';
import { necklaces } from '../data/necklaces';

const CardList = ({arr}) => {

    const finalArr = arr.map(n => <Card key={n.id}
                                              img={n.image}
                                              name={n.name}
                                              descr={n.description}
                                              price={n.price}/>);

  return (
    <ul className='cardList-container'>
        {finalArr}
    </ul>
  )
}

export default CardList;