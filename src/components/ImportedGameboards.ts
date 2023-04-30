import game_1 from '../assets/images/game_1.jpg';
import game_2 from '../assets/images/game_2.jpg';
import game_3 from '../assets/images/game_3.jpg';

interface ImportedImagesObject {
  game_1_src: string;
  game_2_src: string;
  game_3_src: string;
}

const ImportedImages = (): ImportedImagesObject => {
  return {
    game_1_src: game_1,
    game_2_src: game_2,
    game_3_src: game_3
  };
};

export default ImportedImages;
