"use client";
import Image from "next/image";
import chart from "@/assets/svg/chart-with-upwards-trend.svg";
import { lazy, Suspense } from "react";
import Loading from "../Loading";

const LineChart = lazy(() => import("./charts/LineChart"));

export default function ComparisonGraph() {
  return (
    <div className="flex w-full flex-col gap-6 px-4 py-6 border border-text/15 rounded-md">
      <div className="flex w-full gap-2 flex-col">
        <h3 className="flex text-[0.875rem] font-bold">Comparison Graph</h3>
        <div className="flex justify-between text-[0.875rem]">
          <div className="text-text">
            <span className="font-semibold">You scored 30% percentile</span>{" "}
            <span>
              Which is lower than the average percentile 72% of all the
              engineers who took this assessment
            </span>
          </div>
          <div className="relative bottom-3 p-3 bg-text/5 rounded-full my-auto">
            <Image src={chart} className="object-fit w-8" alt={"chart"} />
          </div>
        </div>
      </div>

      <div className="flex mx-auto">
        <Suspense fallback={<Loading />}>
          <LineChart />
        </Suspense>
      </div>
    </div>
  );
}
