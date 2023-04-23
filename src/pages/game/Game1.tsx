import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Characters from './components/Characters';
import Counter from './components/Counter';

interface Props {
  gameboards: {
    game_1_src: string;
    game_2_src: string;
    game_3_src: string;
  };
}

const Game = ({ gameboards }: Props) => {
  return (
    <>
      <Header>
        <Counter />
        <Characters />
      </Header>
      <main className="flex-1">
        <img src={gameboards.game_1_src} alt="game-1" />
      </main>
      <Footer />
    </>
  );
};

export default Game;
