import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const usePreference = create(
  persist(
    (set, get) => ({
      mode: "light",
      toggleMode: () =>
        set({ mode: get().mode === "light" ? "dark" : "light" }),
      isLightMode: () => get().mode === "light",
    }),
    {
      name: "preference-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
