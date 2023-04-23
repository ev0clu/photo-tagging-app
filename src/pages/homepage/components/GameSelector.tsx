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
      <li className="flex flex-col gap-1 rounded-t-2xl shadow-custom-2 transition duration-300 ease-in hover:scale-105">
        <img
          className="h-56 w-auto rounded-t-2xl"
          src={src}
          alt={alt}
        />
        <div className="flex h-14 w-auto flex-row items-center justify-between px-4 py-2">
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
