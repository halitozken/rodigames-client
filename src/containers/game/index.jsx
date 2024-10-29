import React from "react";
import PlaySection from "@/components/play-section";

export default function GameContainer({ game }) {
  return (
    <div>
      <PlaySection game={game} />
    </div>
  );
}
