import waldo from '../assets/images/waldo.png';
import odlaw from '../assets/images/odlaw.png';
import wizard from '../assets/images/wizard.png';

interface ImportedImagesObject {
  waldoSrc: string;
  odlawSrc: string;
  wizardSrc: string;
}

const ImportedImages: Function = (): ImportedImagesObject => {
  return {
    waldoSrc: waldo,
    odlawSrc: odlaw,
    wizardSrc: wizard
  };
};

export default ImportedImages;
