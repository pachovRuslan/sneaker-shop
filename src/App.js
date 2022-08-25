import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './app.scss';
import Cart from './pages/Cart';
import Home from './pages/Home';
import FullSneaker from './pages/FullSneaker';


function App() {
 

  return (
    <div className="wrapper">
    
        <Header />
        <Routes>
          <Route path="/sneaker-shop" element={<Home />} />
          <Route path="/sneaker/:id" element={<FullSneaker />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

    </div>
  );
}

export default App;
