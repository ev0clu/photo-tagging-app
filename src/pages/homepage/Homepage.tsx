import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

const Home = ({ characters, gameboards }: Props) => {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ul className="flex flex-row gap-4">
          <Link to="/game1">
            <li className="h-80 w-auto">
              <img
                className="h-full w-auto"
                src={gameboards.game_1_src}
                alt="game-1"
              />
            </li>
          </Link>
          <Link to="/game2">
            <li className="h-80 w-auto">
              <img
                className="h-full w-auto"
                src={gameboards.game_2_src}
                alt="game-2"
              />
            </li>
          </Link>
          <Link to="/game3">
            <li className="h-80 w-auto">
              <img
                className="h-full w-auto"
                src={gameboards.game_3_src}
                alt="game-3"
              />
            </li>
          </Link>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Home;
