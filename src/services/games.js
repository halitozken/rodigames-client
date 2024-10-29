const url = "http://api.rodigames.com/api/games";

export const fetchGamesApi = async (query) => {
  const response = await fetch(`${url}${query}`);
  const games = await response.json();
  return games;
};

export const getAllGames = async () => {
  const response = await fetch(`${url}`, { cache: "no-store" });
  const games = await response.json();
  return games;
};

export const getGamesByPageAndAmount = async (page, amount) => {
  return await fetchGamesApi(`?page=${page}&amount=${amount}`);
};

export const getGamesByCategory = async (category, page, amount) => {
  let categoryName;

  if (category === undefined) {
    categoryName = "all";
  } else {
    categoryName = category;
  }

  return await fetchGamesApi(
    `?category=${categoryName}&page=${page}&amount=${amount}`
  );
};

export const getSingleGame = async (slug) => {
  return await fetchGamesApi(`?slug=${slug}`);
};
