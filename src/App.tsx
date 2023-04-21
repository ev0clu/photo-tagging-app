import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import Home from './components/homepage/Homepage';
import Game from './components/game/Game';
import Leaderboard from './pages/Leaderboard';

const App: React.FC = () => {
  /*
  const handleGameStartClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const index = Number(
      e.target.parentNode.parentNode.getAttribute('data-index')
    );

    if (cartItems[index].quantity < 10) {
      const newQuantity = [...cartItems];
      newQuantity[index].quantity = newQuantity[index].quantity + 1;
      setCartItems(newQuantity);
    }
  };*/

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
