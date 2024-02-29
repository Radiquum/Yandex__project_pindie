import { data_caregory } from "@/app/data/data";
import { CardsList } from "../../components/CardsList/CardsList";
import { getGamesByCategory } from "../../data/data-utils";

export default function Home(props) {
  return (
    <main className="main">
      <CardsList
        title={data_caregory[props.params.category]}
        id={props.params.category}
        data={getGamesByCategory(props.params.category)}
      ></CardsList>
    </main>
  );
}

