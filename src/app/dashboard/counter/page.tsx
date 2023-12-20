import { CartCounter } from "@/app/components/shooping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Simple Counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Cart Products</span>
      <CartCounter />
    </div>
  );
}
