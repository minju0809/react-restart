import { useState } from "react";

function Counter({initialCount}) {
  initialCount = 0; 
  const [count, setCount] = useState(initialCount);
  console.log(count);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button> 
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button> 
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> 
    </>
  );
}

export default Counter;