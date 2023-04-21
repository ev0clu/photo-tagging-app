import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Counter from './components/Counter';
import Characters from './components/Characters';

const Game: React.FC = () => {
  return (
    <>
      <Header>
        <Counter />
        <Characters />
      </Header>
      <main className="flex-1">
        <div>testing game</div>
      </main>
      <Footer />
    </>
  );
};

export default Game;
