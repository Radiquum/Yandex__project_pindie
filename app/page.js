"use client";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardsList/CardsList";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "./api/api-hooks";

export default function Home() {
  const new_games = useGetDataByCategory(endpoints.games, 'new');
  const popular_games = useGetDataByCategory(endpoints.games, 'popular');

  return (
    <main className="main">
      <Banner />
      <CardsList
        title={"Популярное"}
        id={"popular"}
        data={popular_games}
      ></CardsList>
      <CardsList
        title={"Новинки"}
        id={"new"}
        data={new_games}
      ></CardsList>
      <Promo />
    </main>
  );
}
