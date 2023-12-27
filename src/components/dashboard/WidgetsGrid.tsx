'use client'

import { IoCart } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p2 justify-center items-center">
      <SimpleWidget
        label="Cart"
        title={`${count}`}
        subTitle="Products"
        href="/dashboard/counter"
        icon={<IoCart size={45} className="text-blue-500" />}
      />
    </div>
  );
};
