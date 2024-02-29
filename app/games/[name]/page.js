import { getGameByName } from "@/app/data/data-utils";
import { GamePage } from "@/app/components/GamePage/GamePage";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";

export default function Home(props) {
  const game = getGameByName(props.params.name)

  return (
    <main className="main">
      {game ? (
        <GamePage {...game}/>
      ) : (
          <GameNotFound/>
      )}
    </main>
  );
}
