import React, {useState} from 'react';
import heartIcon from '../../img/heart.png';
import shopIcon from '../../img/shoppingI.png';
import openBag from '../../img/openBag.png';
import redHeart from '../../img/redHeart.png';
import '../../cssFiles/menuCss/menu-images.css';

const Menu_Images = () => {

  const [currHeart, setHeart] = useState(heartIcon);
  const [currBag, setBag] = useState(shopIcon);


  // ON-ENTER HANDLERS
  function onEnterHeartHandler(){
    setHeart(redHeart);
  }

  function onEnterBagHandler(){
    setBag(openBag);
  }

  // ON-LEAVE HANDLERS
  function onLeaveHeartHandler(){
    setHeart(heartIcon);
  }

  function onLeaveBagHandler(){
    setBag(shopIcon);
  }

  return (
        <ul className='menuImages-container'>
            <li onMouseEnter={onEnterHeartHandler} onMouseLeave={onLeaveHeartHandler}>
              <img src={currHeart}/>
            </li>
            <li onMouseEnter={onEnterBagHandler} onMouseLeave={onLeaveBagHandler}>
              <img src={currBag}/>
            </li>
        </ul>
  );
}

export default Menu_Images;