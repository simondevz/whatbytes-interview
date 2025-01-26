import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppState {
  openModal: boolean;
  toggleModal: () => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        openModal: false,

        toggleModal: () => set((state) => ({ openModal: !state.openModal })),
      }),
      {
        name: "app-storage",
      }
    )
  )
);
