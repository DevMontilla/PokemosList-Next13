"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  substractOne,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async () => {
  const data = await fetch("/api/counter").then((res) => res.json());
  return data as CounterResponse;
};

export function CartCounter({ value = 0 }: Props) {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, []);

  return (
    <>
      <span className="text-8xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-full bg-gray-900 text-white hover:bg-gray-600 transition-all w-[40px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-full bg-gray-900 text-white hover:bg-gray-600 transition-all w-[40px] mr-2"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
}
