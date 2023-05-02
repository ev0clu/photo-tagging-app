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
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (inputValue) {
      setSubmit(true);
      await submitScore(inputValue);
      navigate('/leaderboard');
    }
  };

  const loading = () => {
    return (
      <svg
        className="-ml-1 mr-3 h-14 w-14 animate-spin text-amber-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  };

  return (
    <div className="fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-10 rounded-2xl  bg-white px-10 py-10 shadow-custom-1">
      <div className="flex h-28 w-96 flex-col items-center justify-center gap-4">
        {submit ? (
          loading()
        ) : (
          <>
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
          </>
        )}
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
