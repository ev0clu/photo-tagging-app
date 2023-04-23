import React from 'react';

interface Props {
  className: string;
  text: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ className, text, handleClick }: Props) => {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
