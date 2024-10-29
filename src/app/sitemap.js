import { getAllGames } from "@/services/games";

export default async function sitemap() {
  const games = await getAllGames();

  const gamesUrls = games?.games?.map((game) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/game/${game.slug}`,
    };
  });

  return gamesUrls;
}
