import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import  './app.scss';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
<div className='wrapper'>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>

</div>
  );
}

export default App;
