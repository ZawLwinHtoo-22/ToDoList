import React, { useState } from "react";
import './Button.css'

const MyButton = ({ btnClassName, btnLabel, onbtnClick }) => {
  return (
    <button className={`btn ${btnClassName}`} onClick={onbtnClick}>{btnLabel}</button>
  )
}

export const Button = () => {
  const [count, setCount] = useState(0);
  const increaaseHandler = () => setCount(count + 1)
  const decreaaseHandler = () => {

    setCount(count - 1)

    if (count === 0) {
      setCount(0);
    }
  }
  return (
    <div>
      <p>My count {count}</p>
      {/* <button className="btn increase">Increment</button>
      <button className="btn decrease">Decrement</button> */}
      <MyButton btnClassName="increase" btnLabel="Increment" onbtnClick={increaaseHandler} />
      <MyButton btnClassName="decrease" btnLabel="Decrement" onbtnClick={decreaaseHandler} />
    </div>
  );
};

// State => Q1. set count value 0 when decrease count is equal to 0 (in Button.jsx)
