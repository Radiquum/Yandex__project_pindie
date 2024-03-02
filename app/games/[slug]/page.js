"use client";

import { GamePage } from "@/app/components/GamePage/GamePage";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { usePathname } from "next/navigation";
import { endpoints } from "@/app/api/config";
import { getNormalizedGameDataById, isResponseOk } from "@/app/api/api-utils";
import { useState, useEffect } from "react";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Home(props) {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [game, setGame] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    async function fetchData() {
      const request = await getNormalizedGameDataById(
        endpoints.games,
        props.params.slug.match(/\d*$/).toString()
      );
      if (isResponseOk(request)) {
        setGame(request);
        const gameTitle = `${request.title.replace(/\W/gm, "-")}-${request.id}`;
        const newUrl = `${window.location.origin}/games/${gameTitle}`;
        pathname != `/games/${gameTitle}` &&
          window.history.replaceState(
            { ...window.history.state, as: newUrl, url: newUrl },
            "",
            newUrl
          );
      }
      setPreloaderVisible(false);
    }
    fetchData();
  }, []);

  return (
    <main className="main">
      {game ? (
        <GamePage {...game} />
      ) : preloaderVisible ? (
        <Preloader />
      ) : (
        <GameNotFound />
      )}
    </main>
  );
}
