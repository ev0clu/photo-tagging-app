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
      <main className="flex-1 px-4 py-10">
        <ul className="flex flex-row justify-center gap-7">
          <Link to="/game1">
            <li className="flex flex-col gap-1 rounded-2xl shadow-custom-2 transition duration-300 ease-in hover:scale-105">
              <img
                className="h-56 w-auto rounded-2xl"
                src={gameboards.game_1_src}
                alt="game-1"
              />
              <div className="flex h-14 w-auto flex-row items-center justify-between px-4 py-2">
                <div className="flex h-full w-auto items-center justify-center text-xl">
                  Game 1
                </div>
                <div className="flex h-full w-auto flex-row gap-2">
                  <img
                    className="h-full w-auto"
                    src={characters.waldoSrc}
                    alt="waldo"
                  />
                  <img
                    className="h-full w-auto"
                    src={characters.odlawSrc}
                    alt="odlaw"
                  />
                  <img
                    className="h-full w-auto"
                    src={characters.wizardSrc}
                    alt="wizard"
                  />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/game2">
            <li className="flex flex-col gap-1 rounded-2xl shadow-custom-2 transition duration-300 ease-in hover:scale-105">
              <img
                className="h-56 w-auto rounded-2xl"
                src={gameboards.game_2_src}
                alt="game-2"
              />
              <div className="flex h-14 w-auto flex-row items-center justify-between px-4 py-2">
                <div className="flex h-full w-auto items-center justify-center text-xl">
                  Game 2
                </div>
                <div className="flex h-full w-auto flex-row gap-2">
                  <img
                    className="h-full w-auto"
                    src={characters.waldoSrc}
                    alt="waldo"
                  />
                  <img
                    className="h-full w-auto"
                    src={characters.odlawSrc}
                    alt="odlaw"
                  />
                  <img
                    className="h-full w-auto"
                    src={characters.wizardSrc}
                    alt="wizard"
                  />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/game3">
            <li className="flex flex-col gap-1 rounded-2xl shadow-custom-2 transition duration-300 ease-in hover:scale-105">
              <img
                className="h-56 w-auto rounded-2xl"
                src={gameboards.game_3_src}
                alt="game-3"
              />
              <div className="flex h-14 w-auto flex-row items-center justify-between px-4 py-2">
                <div className="flex h-full w-auto items-center justify-center text-xl">
                  Game 3
                </div>
                <div className="flex h-full w-auto flex-row gap-2">
                  <img
                    className="h-full w-auto"
                    src={characters.waldoSrc}
                    alt="waldo"
                  />
                  <img
                    className="h-full w-auto"
                    src={characters.odlawSrc}
                    alt="odlaw"
                  />
                  <img
                    className="h-full w-auto"
                    src={characters.wizardSrc}
                    alt="wizard"
                  />
                </div>
              </div>
            </li>
          </Link>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Home;
