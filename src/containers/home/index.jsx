import React from "react";
import GamesSection from "@/components/games-section";
import Buttons from "@/components/buttons";


export default function HomeContainer({ games, params, searchParams }) {
  return (
    <div>
      <GamesSection games={games} />
      <Buttons searchParams={searchParams} params={params} />
    </div>
  );
}
