import React from 'react';
import '../cssFiles/benefit.css';

const Benefit = ({source, mainText, descrip}) => {

  return (
    <li className='benefit-container'>
        <img src={source}/>
        <div>
            <h3>{mainText}</h3>
            <p>{descrip}</p>
        </div>
    </li>
  );
}

export default Benefit;