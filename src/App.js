import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './app.scss';
import Cart from './pages/Cart';
import Home from './pages/Home';
export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/sneaker-shop" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
