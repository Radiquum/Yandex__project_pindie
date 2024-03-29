"use client";
import { create } from "zustand";
import { getJWT, setJWT, removeJWT, getMe } from "@/app/api/api-utils";
import { endpoints } from "../api/config";

export const useStore = create((set, get) => ({
  isAuth: false,
  user: null,
  token: null,
  userState: "loading",
  login: (user, token) => {
    set({ isAuth: true, user, token, userState: "login" });
    setJWT(token);
  },
  logout: () => {
    set({ isAuth: false, user: null, token: null, userState: "logout" });
    removeJWT();
  },
  checkAuth: async () => {
    const jwt = getJWT();
    if (jwt) {
      const me = await getMe(endpoints.me, jwt);
      if (me) {
        get().login(me, jwt);
      } else {
        get().logout();
      }
    } else {
      get().logout();
    }
  },
}));
