import React from 'react';
import '../cssFiles/main-part.css';

//This module is responsible for an image and text on the first page.

const MainPart = () => {

  return (
    <div className='mainPart-container'>
            <h1>Jewellery for everyone.</h1>
            <p>Find something and it's going to be completely yours.</p>
            <button>Shop</button>
    </div>
  )
}

export default MainPart;