import React, { useState } from 'react';
import Menu from './modules/Menu';
import MainPart from './modules/MainPart';
import BenefitList from './modules/BenefitList';
import SearchPart from './modules/search-items/SearchPart';
import CardList from './modules/CardList';
import { necklaces } from './data/necklaces';
import { rings } from './data/rings';
import { earrings } from './data/earrings';
import { bracelets } from './data/bracelets';

const WholePage = () => {

  const [items, setItems] = useState(necklaces);
  const [search, setSearch] = useState('');


  function onClickHandler(newArr){
    setItems(newArr);
  }

  function searchHandler(e){
    setSearch(e.target.value);
  }

  function findHandler(){
    const newArr = items.filter(it => {
       if(it.name.includes(search))
          return it;
    });

    setItems(newArr);
  }

  return (
    <div>
      <Menu/>
      <MainPart/>
      <BenefitList/>
      <SearchPart ringsH={() => onClickHandler(rings)} 
                  necklacesH={() => onClickHandler(necklaces)}
                  earringsH={() => onClickHandler(earrings)}
                  braceletesH={() => onClickHandler(bracelets)}
                  searchH={searchHandler}
                  findH={findHandler}
                  />
      <CardList arr={items}/>
    </div>
  );
  
}

export default WholePage;