import React, { useState, useEffect } from 'react';

import Images from '../game/components/Characters';

import Header from '../Header';
import Footer from '../Footer';

interface CharacterImages {
  waldoSrc: string;
  odlawSrc: string;
  wizardSrc: string;
}

interface GameboardImages {
  game_1_src: string;
  game_2_src: string;
  game_3_src: string;
}

interface ImportedImagesObject {
  characters: CharacterImages;
  gameboard: GameboardImages;
}

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
