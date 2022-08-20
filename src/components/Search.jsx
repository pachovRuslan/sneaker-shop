import React from 'react';
import debounce from 'lodash.debounce';
import '../app.scss';
import close from '../assets/image/close.png';
import { SearchContext } from '../App.js';

function Search() {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 550),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  
  return (
    <div className="search_block">
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className="search"
        placeholder="поиск...."
      />
      {value && (
        <img
          onClick={onClickClear}
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
