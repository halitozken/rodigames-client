import React from "react";
import HomeContainer from "@/containers/home";
import { getGamesByCategory, getGamesByPageAndAmount } from "@/services/games";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }) {

  let category = searchParams.category;
  let page = searchParams.page;

  if (category === undefined) {
    category = "All"
  }

  return {
    title: category.charAt(0).toUpperCase() + category.slice(1) + " Games",
    description: "Unlock the exciting universe of free online games! Explore the most popular free online games. Create your own gaming experience and find your place in this fun world.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/games?category=${category}&page=${page}`
    },
  }
}

async function HomePage({ params, searchParams }) {


  const games = await getGamesByCategory(
    searchParams.category,
    parseInt(searchParams.page) || 1,
    "50"
  );

  if (games.success === false) {
    notFound();
  }

  return (
    <HomeContainer
      games={games.games}
      searchParams={searchParams}
      params={params}
    />
  );
}

export default HomePage;
