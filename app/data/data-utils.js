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

export const getGameByName = (name) => {
  return data.find((game) => game.title === name.replace("%20", " "));
};