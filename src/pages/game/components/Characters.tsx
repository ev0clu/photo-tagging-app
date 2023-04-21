import { useState, useEffect } from 'react';

import ImportedCharacters from '../../../components/ImportedCharacters';

const Characters = () => {
  const [images, setImages] = useState({
    waldoSrc: '',
    odlawSrc: '',
    wizardSrc: ''
  });

  useEffect(() => {
    setImages(ImportedCharacters());
  }, []);

  return (
    <div className="flex h-full w-96 flex-row items-center justify-center gap-5">
      <img
        className="h-full w-auto"
        src={images.waldoSrc}
        alt="waldo"
      />
      <img
        className="h-full w-auto"
        src={images.odlawSrc}
        alt="odlaw"
      />
      <img
        className="h-full w-auto"
        src={images.wizardSrc}
        alt="wizard"
      />
    </div>
  );
};

export default Characters;
