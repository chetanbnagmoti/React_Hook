import React, { useState } from "react";

function HookCounter() {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <main>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Count +</button>
        <button onClick={() => setCount(count - 1)}>Count -</button>
        <button onClick={() => setCount(intialCount)}>Reset</button>
        <button onClick={incrementByFive}>Count+5</button>
      </div>
    </main>
  );
}

export default HookCounter;
