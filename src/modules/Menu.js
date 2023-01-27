import React, { useState } from 'react';
import MenuText from './menu-items/MenuText';
import Menu_Images from './menu-items/Menu_Images';
import '../cssFiles/menuCss/menu.css';

const Menu = () => {

  return (
    <div className='menu-container'>
        <MenuText/>
        {/* <h1>A-Ring</h1> */}
        <Menu_Images/>
    </div>
  );
}

export default Menu;