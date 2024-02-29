"use client";

import { getGameByID } from "@/app/data/data-utils";
import { GamePage } from "@/app/components/GamePage/GamePage";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation";

export default function Home(props) {
  const router = useRouter()
  const pathname = usePathname();

  const game = getGameByID(props.params.slug[props.params.slug.search(/\d$/gm)])
  {pathname != `/games/${game.title.replace(/\W/gm, "-")}-${game.id}` && router.replace(`/games/${game.title.replace(/\W/gm, "-")}-${game.id}`)}

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
