interface Props {
  minute: number;
  second: number;
}

const Counter = ({ minute, second }: Props) => {
  return (
    <div className="w-96 text-center text-2xl">
      {minute}:
      {second.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })}
    </div>
  );
};

export default Counter;
