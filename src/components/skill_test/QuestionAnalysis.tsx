"use client";
import { Suspense } from "react";
import Loading from "../Loading";
import { lazy } from "react";
import { useSkillTestStore } from "@/store/SkillTest";

const DonutChart = lazy(() => import("./charts/DonutChart"));

export default function QuestionAnalysis() {
  const { score } = useSkillTestStore((state) => state);

  return (
    <div className="flex w-full flex-col px-4 py-6 gap-6 border border-text/15 rounded-md">
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full justify-between font-semibold text-[0.875rem]">
          <h3 className="flex my-auto">Question Analysis</h3>
          <span className="flex text-secondary my-auto">{score}/15</span>
        </div>
        <div className="w-full text-text text-[0.875rem]">
          <span className="font-semibold">
            You scored {score} questions correct out of 15.
          </span>{" "}
          <span>
            {score !== 15
              ? "However it still needs some improvements"
              : "You did grate!!"}
          </span>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <Suspense fallback={<Loading />}>
          <DonutChart />
        </Suspense>
      </div>
    </div>
  );
}
