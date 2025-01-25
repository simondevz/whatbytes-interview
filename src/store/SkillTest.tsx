import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SkillTestState {
  rank: number;
  percentile: number;
  score: number;

  updateRank: (rank: number) => void;
  updatePercentile: (percentile: number) => void;
  updateScore: (score: number) => void;
}

export const useSkillTestStore = create<SkillTestState>()(
  devtools(
    persist(
      (set) => ({
        rank: 1,
        percentile: 30,
        score: 10,

        updateRank: (rank) => set(() => ({ rank })),
        updatePercentile: (percentile) => set(() => ({ percentile })),
        updateScore: (score) => set(() => ({ score })),
      }),
      {
        name: "skillTest-storage",
      }
    )
  )
);
