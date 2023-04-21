import React, { useState, useEffect } from 'react';

import ImportedImages from '../../../components/ImportedGameboards';

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

const Gameboards: React.FC = () => {
  const [images, setImages] = useState<ImportedImagesObject[]>([
    {
      characters: {
        waldoSrc: '',
        odlawSrc: '',
        wizardSrc: ''
      },
      gameboard: {
        game_1_src: '',
        game_2_src: '',
        game_3_src: ''
      }
    }
  ]);

  useEffect(() => {
    setImages(ImportedImages());
  }, []);

  return (
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
  );
};

export default Gameboards;
