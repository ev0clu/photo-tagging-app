import React, { useState, useEffect } from 'react';

import Button from '../../../elements/Button';
import Input from '../../../elements/Input';

interface GameoverModalProps {
  minute: number;
  second: number;
}

interface PlayerProps {
  inputValue: string;
  minute: number;
  second: number;
}

const GameoverModal = ({ minute, second }: GameoverModalProps) => {
  const [inputValue, setInputValue] = useState('');
  const [player, setPlayer] = useState<PlayerProps[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const playerArray = player.map((element) => {
      return element;
    });
    playerArray.push({ inputValue, minute, second });

    setPlayer(playerArray);
  };

  return (
    <div className="fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-10 rounded-2xl  bg-white px-10 py-10 shadow-custom-1">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-2xl">
          You completed this level in {minute}:
          {second.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          })}
        </div>
        <Input
          className="rounded-lg border border-solid border-neutral-400 bg-neutral-50 px-4 py-2 text-lg text-neutral-900"
          type="text"
          placeholder="Name"
          value={inputValue}
          handleChange={handleChange}
        />
      </div>
      <Button
        className="flex cursor-pointer flex-row items-center justify-center rounded-lg border border-solid border-amber-600 bg-amber-500 px-10 py-3 text-lg text-white hover:bg-orange-500 hover:opacity-90"
        text="Submit your score"
        handleClick={handleSubmit}
      />
    </div>
  );
};

export default GameoverModal;
