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
import { data_category } from "@/app/data/data";
import { useAuthStore } from "@/app/store";

export const Header = () => {
  const isAuthorized = useAuthStore((state) => state.isAuthorized);
  const setIsAuthorized = useAuthStore((state) => state.setIsAuthorized);

  const [popupIsOpened, setPopupIsOpened] = useState(false);
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
        style={pathname == "/" ? { pointerEvents: "none" } : {}}
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
          {Object.entries(data_category).map(([key, value]) => {
            return (
              <li className={Styles.menu__item} key={key}>
                <Link
                  href={`/category/${key}`}
                  className={`${Styles["menu__link"]} ${
                    pathname === `/category/${key}` &&
                    Styles["menu__link_active"]
                  }`}
                >
                  {`${value}`}
                </Link>
              </li>
            );
          })}
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
