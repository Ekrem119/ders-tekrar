import React, { useState } from "react";

function IdrButton() {
  const [count, setCount] = useState(0);

function Increment() {
    return (
        setCount(count +1)
    )
}

function Decrement() {
    return (
        setCount(count -1)
    )
}

function Reset() {
    return (
        setCount(0)
    )
}

  return (
    <>
      {count} <br />
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
}

export default IdrButton;
