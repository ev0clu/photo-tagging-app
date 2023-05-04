import React from 'react';
interface Props {
  src: string;
  alt: string;
  gameName: string;
  selection: string;
  handleSelectorClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const LeaderboardSelector = ({
  src,
  alt,
  gameName,
  selection,
  handleSelectorClick
}: Props) => {
  return (
    <>
      <li
        onClick={handleSelectorClick}
        className={`${
          selection === gameName ? 'scale-105 shadow-amber-600' : ''
        } flex w-56 cursor-pointer flex-col gap-1 rounded-2xl shadow-custom-2 transition duration-300 ease-in hover:scale-105 md:w-96`}
        data-game={gameName}
      >
        <img
          className="h-44 w-auto rounded-t-2xl md:h-56"
          src={src}
          alt={alt}
        />
        <div className="flex h-full w-auto items-center justify-center px-3 py-3 text-xl">
          {gameName}
        </div>
      </li>
    </>
  );
};

export default LeaderboardSelector;
