import { data } from "./data";

export const getGamesByCategory = (category) => {
  return data.filter((game) => {
    return game.category.find((item) => {
      return item.name === category;
    });
  });
};

export const getGameByID = (id) => {
  return data.find((game) => game.id === Number(id));
};