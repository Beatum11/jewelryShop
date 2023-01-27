import React from 'react';
import '../cssFiles/benefit-list.css';
import Benefit from './Benefit';
import shipping from '../img/shipping.png';
import hand from '../img/hand.png';
import support from '../img/24-7.png';
import card from '../img/credit-card.png';

const BenefitList = () => {

  return (
    <ul className='benefits-container'>
        <Benefit source={shipping} mainText={'Free shipping'} 
                 descrip={'Free shipping for all orders'}/>

        <Benefit source={support} mainText={'Support 24/7'} 
                 descrip={'Support 24 hours a week'}/>

        <Benefit source={hand} mainText={'Money return'} 
                 descrip={'30 days for free return'}/>
                 
        <Benefit source={card} mainText={'100% payment secure'} 
                 descrip={'We ensure secure payment'}/>
    </ul>
  );
}

export default BenefitList;