"use client";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthorized: false,
  setIsAuthorized: (boolean) => set(() => ({ isAuthorized: boolean })),
}));
