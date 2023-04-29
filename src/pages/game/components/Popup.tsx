import React, { useState, useEffect } from 'react';

interface Props {
  clickedPositionX: number;
  clickedPositionY: number;
  characters: { name: string; isFound: boolean; src: string }[];
  handleClick: (e: React.MouseEvent) => void;
}

const Popup = ({
  clickedPositionX,
  clickedPositionY,
  characters,
  handleClick
}: Props) => {
  return (
    <ul
      style={{
        left: `${clickedPositionX}` + 'px',
        top: `${clickedPositionY}` + 'px'
      }}
      className="absolute flex flex-col gap-1 rounded-xl bg-slate-100 shadow-custom-1"
    >
      {characters.map((character, index) => {
        {
          if (!character.isFound) {
            return (
              <li
                onClick={handleClick}
                className="flex h-10 cursor-pointer flex-row items-center justify-center gap-2 rounded-xl px-10 py-2 text-lg delay-100 hover:bg-stone-200 hover:text-amber-500"
                key={index}
              >
                <img
                  className="h-full w-auto"
                  src={character.src}
                  alt={character.name}
                />
                {character.name}
              </li>
            );
          }
        }
      })}
    </ul>
  );
};

export default Popup;
