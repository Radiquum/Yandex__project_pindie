import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data-utils";

export default function Home() {
  return (
    <main className="main">
      <CardsList
        title={"Пиксельные"}
        id={"pixel"}
        data={getGamesByCategory("pixel")}
      ></CardsList>
    </main>
  );
}

