import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function GamesSection({ games }) {
  return (
    <div className="w-3/4 h-full flex flex-row justify-around gap-5 m-auto flex-wrap md:w-2/3">
      {games &&
        games.map((game) => (
          <div key={game.id} className="relative w-2/5 h-fit rounded-xl md:w-1/6 shadow-2xl">
            <Link href={`/game/${game.slug}`}>
              <Image src={game.thumb} width={game.width} height={game.height} alt={game.title} className="rounded-2xl" />
              <h2 className=" w-full text-center text-sm absolute bottom-0 bg-slate-900 bg-opacity-50 rounded-b-2xl">
                {game.title}
              </h2>
            </Link>
          </div>
        ))}
    </div>
  );
}
