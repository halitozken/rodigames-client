import React from "react";
import GameContainer from "@/containers/game";
import { getSingleGame } from "@/services/games";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const slug = (await params).slug
  const game = await getSingleGame(slug);



  if (game.games.length === 0) {
    notFound();
  }

  return {
    title: game.games[0].title,
    description: game.games[0].description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/game/${game.games[0].slug}`
    },
    openGraph: {
      images: [{
        url: game.games[0].thumb
      }]
    }
  }
}

async function GamePage({ params }) {
  const game = await getSingleGame(params.slug);

  if (game.success === false) {
    notFound();
  }

  return (
    <div>
      <GameContainer game={game.games} />
    </div>
  );
}

export default GamePage;
