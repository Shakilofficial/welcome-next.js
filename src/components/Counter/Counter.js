"use client";
import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Counter : {counter}</h3>
      <div className="space-x-4">
        <button
          className="bg-sky-400 px-4 py-2"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
        <button
          className="bg-red-400 px-4 py-2"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
