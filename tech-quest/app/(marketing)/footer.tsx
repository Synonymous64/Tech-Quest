import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
        <h1 className="text-2xl font-extrabold text-purple-600 tracking-wide">
          🪄 TECHNOVANZA 🪄
        </h1>
        <h1 className="text-gray-800 font-semibold">
          © 2024 All rights reserved | Build with ❤️ by{" "}
          <Link
            href="https://praj-portfolio.vercel.app/"
            target="_blank"
            className="underline"
          >
            Prajwal Urkude
          </Link>
        </h1>
      </div>
    </footer>
  );
};
