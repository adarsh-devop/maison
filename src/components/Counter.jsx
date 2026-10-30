import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };

  const dicrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  const zreo = () => {
    setCount(0);
  };
  return (
    <div className="flex gap-3">
        <p>{count}</p>
      <button onClick={increment}>add</button>
      <button onClick={dicrement}>sub</button>
      <button onClick={zreo}>zero</button>
    </div>
  );
};

export default Counter;
