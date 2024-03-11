"use client";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { CardsList } from "@/app/components/CardsList/CardsList";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { data_category } from "@/app/data/data";
import { endpoints } from "@/app/api/config";

export default function Home(props) {
  const games = useGetDataByCategory(endpoints.games, props.params.category);
  return (
    <main className="main">
      <CardsList
        title={data_category[props.params.category]}
        id={props.params.category}
        data={games}
      ></CardsList>
    </main>
  );
}
