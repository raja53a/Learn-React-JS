import { useState } from "react";
export const IncrementCount = () => {
  const [count, setCount] = useState(2);
  const IncrementValue = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncrementValue}>Increment</button>
    </>
  );
};
