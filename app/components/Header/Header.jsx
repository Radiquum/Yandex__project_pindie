"use client";

import Link from "next/link";
import Styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getMe, getJWT, isResponseOk, removeJWT } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  function handlePopUp() {
    setPopupIsOpened(!popupIsOpened);
  }

  function logout() {
    setIsAuthorized(false);
    removeJWT();
  }

  useEffect(() => {
    async function checkAuth() {
      let jwt = getJWT();
      let user = await getMe(endpoints.me, jwt);
      if (isResponseOk(user)) {
        setIsAuthorized(true);
      } else {
        logout();
      }
    }
    checkAuth();
  }, []);

  const pathname = usePathname();
  return (
    <header className={Styles.header}>
      <Link
        href="/"
        className={Styles.logo}
        style={pathname == "/" ? {pointerEvents: "none"} : {}}
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
              href="/category/new"
              className={`${Styles["menu__link"]} ${
                pathname === "/category/new" && Styles["menu__link_active"]
              }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles.menu__item}>
            <Link
              href="/category/popular"
              className={`${Styles["menu__link"]} ${
                pathname === "/category/popular" && Styles["menu__link_active"]
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles.menu__item}>
            <Link
              href="/category/shooter"
              className={`${Styles["menu__link"]} ${
                pathname === "/category/shooter" && Styles["menu__link_active"]
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles.menu__item}>
            <Link
              href="/category/runner"
              className={`${Styles["menu__link"]} ${
                pathname === "/category/runner" && Styles["menu__link_active"]
              }`}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles.menu__item}>
            <Link
              href="/category/pixel"
              className={`${Styles["menu__link"]} ${
                pathname === "/category/pixel" && Styles["menu__link_active"]
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles.menu__item}>
            <Link
              href="/category/TDS"
              className={`${Styles["menu__link"]} ${
                pathname === "/category/TDS" && Styles["menu__link_active"]
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles.auth}>
          <button
            className={Styles.auth__button}
            onClick={isAuthorized ? logout : handlePopUp}
          >
            {isAuthorized ? "Выйти" : "Войти"}
          </button>
        </div>
      </nav>
      {popupIsOpened && (
        <>
          <Overlay handlePopUp={handlePopUp} />
          <Popup handlePopUp={handlePopUp}>
            <AuthForm handlePopUp={handlePopUp} setAuth={setIsAuthorized} />
          </Popup>
        </>
      )}
    </header>
  );
};
