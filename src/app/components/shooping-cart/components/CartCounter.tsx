"use client";

import { useState } from "react";

interface Props {
    value?: number
}

export function CartCounter({value = 0}: Props) {
  const [count, setCount] = useState(value);

  const addCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const subCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <span className="text-8xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-full bg-gray-900 text-white hover:bg-gray-600 transition-all w-[40px] mr-2"
          onClick={addCounter}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-full bg-gray-900 text-white hover:bg-gray-600 transition-all w-[40px] mr-2"
          onClick={subCounter}
        >
          -1
        </button>
      </div>
    </>
  );
}
