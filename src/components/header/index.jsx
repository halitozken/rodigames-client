import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full h-16 flex justify-around items-center bg-slate-700 bg-opacity-50">
      <Link href={"/"}>
        <h1 className="text-2xl text-white font-bold cursor-pointer md:text-4xl">
          Rodi Games
        </h1>
      </Link>

      <h2 className="text-white text-sm md:text-lg">
        Explore Endless Gaming Adventures
      </h2>
    </header>
  );
}
