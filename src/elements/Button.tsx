import React from 'react';

interface ButtonProps {
  className: string;
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  text,
  handleClick
}) => {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
