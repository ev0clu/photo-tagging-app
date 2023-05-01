import React from 'react';
interface Props {
  src: string;
  alt: string;
  gameName: string;
  handleSelectorClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const LeaderboardSelector = ({
  src,
  alt,
  gameName,
  handleSelectorClick
}: Props) => {
  return (
    <>
      <li
        onClick={handleSelectorClick}
        className="flex cursor-pointer flex-col gap-1 rounded-2xl shadow-custom-2 transition duration-300 ease-in hover:scale-105"
        data-game={gameName.toLowerCase()}
      >
        <img
          className="h-56 w-auto rounded-t-2xl"
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
