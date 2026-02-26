import { useState } from 'react'

// Counter Component - demonstrates multiple events
export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleDoubleClick() {
    setCount(count * 2);
  }

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="button-group">
        <button onClick={handleDecrement} className="counter-btn">-</button>
        <button onClick={handleReset} className="counter-btn reset">Reset</button>
        <button onClick={handleIncrement} className="counter-btn">+</button>
      </div>
      <button onDoubleClick={handleDoubleClick} className="double-click-btn">
        Double Click to Multiply by 2
      </button>
    </div>
  );
}
