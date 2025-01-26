"use client";
import { color } from "chart.js/helpers";
import { useEffect, useMemo, useState } from "react";

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
  const colors = useMemo(
    () => ({
      blue: {
        solid: "#3a7df4",
        transparent: {
          rgba: "rgba(58, 125, 244, 0.2)",
          hex: "#3a7df433",
        },
      },
      orange: {
        solid: "#ff823b",
        transparent: {
          rgba: "rgba(255, 130, 59, 0.2)",
          hex: "#ff823b33",
        },
      },
      red: {
        solid: "#fa5352",
        transparent: {
          rgba: "rgba(250, 83, 82, 0.2)",
          hex: "#fa535233",
        },
      },
      green: {
        solid: "#28c064",
        transparent: {
          rgba: "rgba(40, 192, 100, 0.2)",
          hex: "#28c06433",
        },
      },
    }),
    []
  );
  console.log(colors.blue);

  const [currentColor, setCurrentColor] = useState<{
    solid: string;
    transparent: {
      rgba: string;
      hex: string;
    };
  }>();

  useEffect(() => {
    if (color === "blue") {
      setCurrentColor(colors.blue);
    }
    if (color === "red") {
      setCurrentColor(colors.red);
    }
    if (color === "orange") {
      setCurrentColor(colors.orange);
    }
    if (color === "green") {
      setCurrentColor(colors.green);
    }
  });
  console.log(color);

  return (
    <div className="flex w-full flex-col gap-4 ">
      <div className="flex w-full">
        <span className="text-text font-medium text-[0.875rem]">{text}</span>
      </div>

      <div className={`flex justify-between gap-4`}>
        <div
          style={{
            backgroundColor: currentColor?.transparent?.rgba,
          }}
          className={`flex w-full h-2 rounded-2xl my-auto`}
        >
          <div
            style={{
              width: `${percentile}%`,
              backgroundColor: currentColor?.solid,
            }}
            className={`flex transition-[width] delay-150 duration-[1.5s] ease-in-out h-full rounded-2xl`}
          ></div>
        </div>
        <div>
          <span
            style={{ color: currentColor?.solid }}
            className={`flex font-semibold text-[0.875rem]`}
          >
            {percentile}%
          </span>
        </div>
      </div>
    </div>
  );
};
