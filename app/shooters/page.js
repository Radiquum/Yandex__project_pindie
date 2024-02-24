import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data-utils";

export default function Home() {
  return (
    <main className="main">
      <CardsList
        title={"Шутеры"}
        id={"shooter"}
        data={getGamesByCategory("shooter")}
      ></CardsList>
    </main>
  );
}

