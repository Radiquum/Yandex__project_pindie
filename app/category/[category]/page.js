import { CardsList } from "../../components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import { data_category } from "@/app/data/data";

export default async function Home(props) {
  return (
    <main className="main">
      <CardsList
        title={data_category[props.params.category]}
        id={props.params.category}
        data={await getNormalizedGamesDataByCategory(
          endpoints.games,
          props.params.category
        )}
      ></CardsList>
    </main>
  );
}
