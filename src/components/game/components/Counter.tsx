import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
  const [second, setSecond] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);

  useEffect(() => {
    let timer: number = 0;
    if (second < 60) {
      timer = setInterval(() => setSecond(second + 1), 1000);
    }
    if (second === 60) {
      setSecond(0);
      setMinute(minute + 1);
    }
    return () => clearInterval(timer);
  }, [second]);

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
