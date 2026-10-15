import React, { useState } from 'react';

function Functional() {
  // State to hold the count value
  const [count, setCount] = useState(0);

  // Handlers
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>Decrement</button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
  );
}

export default Functional
