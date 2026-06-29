import { useState } from "react";
import "../styles/Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>React Counter</h1>
        <p className="subtitle">My First React Mini Project</p>
        <h2>{count}</h2>

        <div className="buttons">
          <button className="increase" onClick={increase}>
            Increase
          </button>
          <button className="decrease" onClick={decrease}>
            Decrease
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
