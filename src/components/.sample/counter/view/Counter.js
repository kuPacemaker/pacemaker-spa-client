import React from 'react';
import './Counter.scss';

const Counter = ({ value, color, onIncrement, onDecrement, onTest }) => {
  return (
    <div className="Counter">
      <h1 style={{ color }}>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <br></br>
      <button onClick={onTest}>test</button>
    </div>
  );
};

export default Counter;
