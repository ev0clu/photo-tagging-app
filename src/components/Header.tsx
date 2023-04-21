import React, { useState, useEffect } from 'react';

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

const Header = ({ isGamePage }: HeaderProps) => {
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

  useEffect(() => {
    if (isGamePage) {
      setImages(ImportedImages());
    }
  }, []);

  return (
    <header>
      {!isGamePage ? (
        <div className="flex flex-row items-center justify-center gap-5 text-5xl">
          <h1 className=" text-sky-500">Where's</h1>
          <h1 className=" text-red-600">Waldo?</h1>
        </div>
      ) : (
        <div className="flex h-24 flex-row items-center px-12 py-4">
          <div className="flex flex-row items-center justify-center gap-5 text-5xl">
            <h1 className=" text-sky-500">Where's</h1>
            <h1 className=" text-red-600">Waldo?</h1>
          </div>
          <div className="text-2xl">00:03</div>
          <div className="flex h-full flex-row items-center justify-center gap-5">
            <img
              className="h-full w-full"
              src={images[0].characters.waldoSrc}
              alt="waldo"
            />
            <img
              className="h-full w-full"
              src={images[0].characters.odlawSrc}
              alt="odlaw"
            />
            <img
              className="h-full w-full"
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
