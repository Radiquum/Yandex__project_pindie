import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardsList/CardsList";
import { getGamesByCategory } from "./data/data-utils";

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <CardsList title={"Популярное"} id={"popular"} data={getGamesByCategory('popular')}></CardsList>
      <CardsList title={"Новинки"} id={"new"} data={getGamesByCategory('new')}></CardsList>
      <Promo />
    </main>
  );
}
