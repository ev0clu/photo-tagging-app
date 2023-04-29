import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../elements/Button';
import Input from '../../../elements/Input';

interface Props {
  minute: number;
  second: number;
  submitScore: Function;
}

const GameoverModal = ({ minute, second, submitScore }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (inputValue) {
      await submitScore(inputValue);
      navigate('/leaderboard');
    }
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
