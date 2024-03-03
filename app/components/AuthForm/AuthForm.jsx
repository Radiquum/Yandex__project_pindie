"use client";

import Styles from "./AuthForm.module.css";
import { useState, useEffect } from "react";
import { endpoints } from "@/app/api/config";
import { authorize, isResponseOk, setJWT } from "@/app/api/api-utils";

export const AuthForm = (props) => {
  const [authData, setAuthData] = useState({ identifier: "", password: "" });
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState({ status: null, text: null });

  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await authorize(endpoints.auth, authData);
    if (isResponseOk(userData)) {
      setUserData(userData);
      props.setAuth(true);
      setJWT(userData.jwt)
      setMessage({ status: "success", text: "Вы авторизовались!" });
    } else {
      setMessage({ status: "error", text: "Неверные почта или пароль" });
    }
  };

  useEffect(() => {
    let timer; 
    if (userData) {
      timer = setTimeout(() => {
        props.handlePopUp();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [userData]); 

  return (
    <form className={Styles["form"]} onSubmit={handleSubmit}>
      <h2 className={Styles["form__title"]}>Авторизация</h2>
      <div className={Styles["form__fields"]}>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Email</span>
          <input
            className={Styles["form__field-input"]}
            name="identifier"
            type="email"
            placeholder="hello@world.com"
            onInput={handleInput}
          />
        </label>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Пароль</span>
          <input
            className={Styles["form__field-input"]}
            name="password"
            type="password"
            placeholder="***********"
            onInput={handleInput}
          />
        </label>
      </div>
      <div className={Styles["form__actions"]}>
        <button className={Styles["form__reset"]} type="reset">
          Очистить
        </button>
        <button className={Styles["form__submit"]} type="submit">
          Войти
        </button>
      </div>
      {message.status && (
          <p className={Styles["form__message"]}>{message.text}</p>
        )}
    </form>
  );
};
