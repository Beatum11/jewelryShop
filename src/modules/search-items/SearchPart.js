import React from 'react';
import '../../cssFiles/searchCss/search-part.css';
import SearchTextList from './SearchTextList';

//This part is responsible for the whole search section. 
//Input + some filter words.

const SearchPart = ({ringsH, necklacesH,
                     earringsH, braceletesH, searchH, findH}) => {

  return (
    <div className='searchPart-container'>
        <div>
            <input onChange={searchH} type='text'/>
            <button onClick={findH} type='submit'>Find</button>
        </div>
        <SearchTextList ringsHandler={ringsH}
                        necklaceHandler={necklacesH}
                        earringsHandler={earringsH}
                        braceletsHandler={braceletesH}/>
    </div>
  );
}

export default SearchPart;