import React from 'react';
import '../../cssFiles/searchCss/search-text-list.css';

//This part is responsible for filter words in search section.

const SearchTextList = ({ringsHandler, necklaceHandler, 
                          earringsHandler, braceletsHandler}) => {

  return (
    <ul className='searchText-container'>
        <li onClick={ringsHandler}>rings</li>
        <li onClick={necklaceHandler}>necklaces</li>
        <li onClick={earringsHandler}>earrings</li>
        <li onClick={braceletsHandler}>bracelets</li>
    </ul>
  );
}

export default SearchTextList;