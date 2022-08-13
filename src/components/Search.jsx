import React from 'react';
import '../app.scss';
import close from '../assets/image/close.png';
import {SearchContext} from '../App.js'
function Search() {
  const {searchValue, setSearchValue} = React.useContext(SearchContext)
  return (
    <div className="search_block">
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className="search"
        placeholder="поиск...."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className="close_img"
          width={20}
          height={20}
          src={close}
          alt="close"
        />
      )}
    </div>
  );
}

export default Search;
