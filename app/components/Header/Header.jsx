"use client";

import Link from "next/link";
import Styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false);
  function handlePopUp() {
    setPopupIsOpened(!popupIsOpened);
  }
  const pathname = usePathname();
  return (
    <header className={Styles.header}>
      <Link
        href="/"
        className={Styles.logo}
        Style={pathname == "/" ? "pointer-events: none" : ""}
        aria-disabled={pathname == "/"}
        tabIndex={pathname == "/" ? -1 : undefined}
      >
        <img
          className={Styles.logo__image}
          src="/images/logo.svg"
          alt="Логотип Pindie"
        />
      </Link>
      <nav className={Styles.menu}>
        <ul className={Styles.menu__list}>
          <li className={Styles.menu__item}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]} ${
                pathname === "/new" ? Styles["menu__link_active"] : ""
              }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles.menu__item}>
            <Link
              href="/popular"
              className={`${Styles["menu__link"]} ${
                pathname === "/popular" ? Styles["menu__link_active"] : ""
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles.menu__item}>
            <Link
              href="/shooters"
              className={`${Styles["menu__link"]} ${
                pathname === "/shooters" ? Styles["menu__link_active"] : ""
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles.menu__item}>
            <Link
              href="/runners"
              className={`${Styles["menu__link"]} ${
                pathname === "/runners" ? Styles["menu__link_active"] : ""
              }`}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles.menu__item}>
            <Link
              href="/pixel-games"
              className={`${Styles["menu__link"]} ${
                pathname === "/pixel-games" ? Styles["menu__link_active"] : ""
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles.menu__item}>
            <Link
              href="/tds"
              className={`${Styles["menu__link"]} ${
                pathname === "/tds" ? Styles["menu__link_active"] : ""
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles.auth}>
          <button className={Styles.auth__button} onClick={handlePopUp}>
            Войти
          </button>
        </div>
      </nav>
      <Overlay isOpened={popupIsOpened} handlePopUp={handlePopUp} />
      <Popup isOpened={popupIsOpened} handlePopUp={handlePopUp}>
        <AuthForm />
      </Popup>
    </header>
  );
};
