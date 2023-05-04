interface Props {
  src: string;
  alt: string;
  gameName: string;
  characters: {
    waldoSrc: string;
    odlawSrc: string;
    wizardSrc: string;
  };
}

const GameSelector = ({ src, alt, gameName, characters }: Props) => {
  return (
    <>
      <li className="flex w-56 cursor-pointer flex-col gap-1 rounded-2xl shadow-custom-2 transition duration-300 ease-in hover:scale-105 md:w-96">
        <img
          className="h-44 w-auto rounded-t-2xl md:h-56"
          src={src}
          alt={alt}
        />
        <div className="flex h-14 w-auto flex-row items-center justify-between px-3 py-3">
          <div className="flex h-full w-auto items-center justify-center text-xl">
            {gameName}
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
    </>
  );
};

export default GameSelector;
