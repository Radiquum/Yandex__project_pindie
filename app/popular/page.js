import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data-utils";

export default function Home() {
  return (
    <main className="main">
      <CardsList
        title={"Популярные"}
        id={"popular"}
        data={getGamesByCategory("popular")}
      ></CardsList>
    </main>
  );
}

