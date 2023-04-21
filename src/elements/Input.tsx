import React from 'react';

interface InputProps {
  className: string;
  type: string;
  name: string;
  placeholder: string;
  key: number;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  name,
  placeholder,
  key,
  value,
  handleChange
}) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      key={key}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
