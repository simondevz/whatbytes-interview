"use client";
import { useEffect, useState } from "react";

export default function SyllabusAnalysis() {
  const [percentiles, setPercentiles] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setPercentiles([80, 60, 24, 96]);
  }, []);

  return (
    <div className="flex w-full flex-col gap-6 border border-text/15 rounded-md px-6 py-8">
      <div className="flex w-full">
        <h3 className="font-bold text-[0.875rem]">Syllabus Wise Analysis</h3>
      </div>

      <div className="flex flex-col w-full gap-6">
        {[
          {
            text: "HTML Tools, Forms, History",
            percentile: percentiles[0],
            color: "blue",
          },
          {
            text: "Tags & References in HTML",
            percentile: percentiles[1],
            color: "orange",
          },
          {
            text: "Tables & References in HTML",
            percentile: percentiles[2],
            color: "red",
          },
          {
            text: "Tags & CSS basics",
            percentile: percentiles[3],
            color: "green",
          },
        ].map((data) => (
          <Analysis key={data.text} {...data} />
        ))}
      </div>
    </div>
  );
}

const Analysis = ({
  text,
  percentile,
  color,
}: {
  text: string;
  percentile: number;
  color: string;
}) => {
  return (
    <div className="flex w-full flex-col gap-4 ">
      <div className="flex w-full">
        <span className="text-text font-medium text-[0.875rem]">{text}</span>
      </div>

      <div className={`flex justify-between gap-4`}>
        <div className={`flex w-full h-2 rounded-2xl bg-${color}/20 my-auto`}>
          <div
            style={{
              width: `${percentile}%`,
            }}
            className={`flex transition-[width] delay-150 duration-[1.5s] ease-in-out h-full rounded-2xl bg-${color}`.toString()}
          ></div>
        </div>
        <div>
          <span className={`flex font-semibold text-[0.875rem] text-${color}`}>
            {percentile}%
          </span>
        </div>
      </div>
    </div>
  );
};
