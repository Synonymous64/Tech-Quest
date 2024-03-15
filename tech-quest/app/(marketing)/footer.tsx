import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <h1 className="text-2xl font-extrabold text-purple-600 tracking-wide">
          TECHNOVANZA
        </h1>
      </div>
    </footer>
  );
};
