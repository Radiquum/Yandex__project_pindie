"use client";
import Styles from "./Game.module.css";
import { useRouter } from 'next/navigation'

export const GamePage = (props) => {
  const router = useRouter()
  return (
    <>
      <section className={Styles["game"]}>
        <iframe className={Styles["game__iframe"]} src={props.link}></iframe>
      </section>
      <section className={Styles["about"]}>
        <h2 className={Styles["about__title"]}>{props.title}</h2>
        <div className={Styles["about__content"]}>
          <p className={Styles["about__description"]}>{props.description}</p>
          <div className={Styles["about__author"]}>
            <p>
              Автор:{" "}
              <span className={Styles["about__accent"]}>{props.developer}</span>
            </p>
          </div>
        </div>
        <div className={Styles["about__vote"]}>
          <p className={Styles["about__vote-amount"]}>
            За игру уже проголосовали:{" "}
            <span className={Styles["about__accent"]}>{props.users.length}</span>
          </p>
          <button
            onClick={() => {router.push('/login')}}
            className={`button ${Styles["about__vote-button"]}`}
          >
            Голосовать
          </button>
        </div>
      </section>
    </>
  );
};
