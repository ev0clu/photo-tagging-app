import waldo from '../../assets/images/waldo.png';
import odlaw from '../../assets/images/odlaw.png';
import wizard from '../../assets/images/wizard.png';
import level_1 from '../../assets/images/level_1.jpg';
import level_2 from '../../assets/images/level_2.jpg';
import level_3 from '../../assets/images/level_3.jpg';

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

const ImportedImages = (): ImportedImagesObject[] => {
  return [
    {
      characters: {
        waldoSrc: waldo,
        odlawSrc: odlaw,
        wizardSrc: wizard
      },
      gameboard: {
        level_1_src: level_1,
        level_2_src: level_2,
        level_3_src: level_3
      }
    }
  ];
};

export default ImportedImages;
