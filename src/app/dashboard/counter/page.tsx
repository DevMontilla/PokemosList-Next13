import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Simple Counter",
};

export default function CounterPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl font-medium">Counter</h1>
      <span className="text-sm font-light">Global State - Redux Toolkit</span>
      <div className="flex flex-col items-center justify-center w-full">
        <span>Cart Products</span>
        <CartCounter value={20} />
      </div>
    </div>
  );
}
