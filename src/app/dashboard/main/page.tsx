import { WidgetsGrid } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin Dashboard",
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl font-medium">Dashboard</h1>
      <span className="text-sm font-light">General info</span>
      <WidgetsGrid />
    </div>
  );
}
