interface InputProps {
  className: string;
  type: string;
  placeholder: string;
}

const Input = ({ className, type, placeholder }: InputProps) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
