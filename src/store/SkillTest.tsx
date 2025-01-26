import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SkillTestState {
  rank: number;
  percentile: number;
  score: number;
  chartdata: { x: number; y: number }[];

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
        chartdata: [
          { x: 0, y: 3 },
          { x: 1, y: 5 },
          { x: 2, y: 7 },
          { x: 3, y: 10 },
          { x: 4, y: 4 },
          { x: 5, y: 7 },
          { x: 6, y: 10 },
          { x: 7, y: 14 },
          { x: 8, y: 13 },
          { x: 9, y: 4 },
          { x: 10, y: 9 },
          { x: 11, y: 12 },
          { x: 12, y: 13 },
          { x: 13, y: 8 },
          { x: 14, y: 5 },
          { x: 15, y: 1 },
        ],

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
