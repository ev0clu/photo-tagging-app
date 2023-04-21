import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ImportedImages from './others/Images';

interface HeaderProps {
  isGamePage: boolean;
}

interface CharacterImages {
  waldoSrc: string;
  odlawSrc: string;
  wizardSrc: string;
}

interface GameboardImages {
  level_1_src: string;
  level_2_src: string;
  level_3_src: string;
}

interface ImportedImagesObject {
  characters: CharacterImages;
  gameboard: GameboardImages;
}

const Header: React.FC<HeaderProps> = ({ isGamePage }) => {
  const [images, setImages] = useState<ImportedImagesObject[]>([
    {
      characters: {
        waldoSrc: '',
        odlawSrc: '',
        wizardSrc: ''
      },
      gameboard: {
        level_1_src: '',
        level_2_src: '',
        level_3_src: ''
      }
    }
  ]);

  const [second, setSecond] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);

  useEffect(() => {
    if (isGamePage) {
      setImages(ImportedImages());
    }
  }, []);

  useEffect(() => {
    let timer: number = 0;
    if (second < 60) {
      timer = setInterval(() => setSecond(second + 1), 1000);
    }
    if (second === 60) {
      setSecond(0);
      setMinute(minute + 1);
    }
    return () => clearInterval(timer);
  }, [second]);

  return (
    <header className="shadow-custom-1">
      {!isGamePage ? (
        <Link to="/">
          <div className="flex h-24 cursor-pointer flex-row items-center justify-center gap-5 px-4 py-4 text-5xl">
            <h1 className=" text-sky-500">Where's</h1>
            <h1 className=" text-red-600">Waldo?</h1>
          </div>
        </Link>
      ) : (
        <div className="flex h-24 flex-row items-center justify-between px-4 py-4">
          <Link to="/">
            <div className="flex w-96 cursor-pointer flex-row items-center justify-center gap-5 text-5xl">
              <h1 className=" text-sky-500">Where's</h1>
              <h1 className=" text-red-600">Waldo?</h1>
            </div>
          </Link>
          <div className="w-96 text-center text-2xl">
            {minute}:
            {second.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false
            })}
          </div>
          <div className="flex h-full w-96 flex-row items-center justify-center gap-5">
            <img
              className="h-full w-auto"
              src={images[0].characters.waldoSrc}
              alt="waldo"
            />
            <img
              className="h-full w-auto"
              src={images[0].characters.odlawSrc}
              alt="odlaw"
            />
            <img
              className="h-full w-auto"
              src={images[0].characters.wizardSrc}
              alt="wizard"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
