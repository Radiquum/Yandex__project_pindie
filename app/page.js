import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export default async function Home() {
  return (
    <main className="main">
      <Banner />
      <CardsList
        title={"Популярное"}
        id={"popular"}
        data={await getNormalizedGamesDataByCategory(
          endpoints.games,
          "popular"
        )}
      ></CardsList>
      <CardsList
        title={"Новинки"}
        id={"new"}
        data={await getNormalizedGamesDataByCategory(endpoints.games, "new")}
      ></CardsList>
      <Promo />
    </main>
  );
}
