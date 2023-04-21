import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Props {
  characters: {
    waldoSrc: string;
    odlawSrc: string;
    wizardSrc: string;
  };
  gameboards: {
    game_1_src: string;
    game_2_src: string;
    game_3_src: string;
  };
}

const Game = ({ characters, gameboards }: Props) => {
  return (
    <>
      <Header />
      <main className="flex-1">
        <img src={gameboards.game_1_src} alt="game-1" />
      </main>
      <Footer />
    </>
  );
};

export default Game;
