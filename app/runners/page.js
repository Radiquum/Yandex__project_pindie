import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data-utils";

export default function Home() {
  return (
    <main className="main">
      <CardsList
        title={"Раннеры"}
        id={"runner"}
        data={getGamesByCategory("runner")}
      ></CardsList>
    </main>
  );
}

