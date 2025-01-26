"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";
import { Doughnut } from "react-chartjs-2";
import target from "@/assets/svg/direct-hit.svg";
import { useSkillTestStore } from "@/store/SkillTest";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
  const { score } = useSkillTestStore((state) => state);

  return (
    <div className="flex w-48 relative">
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Image
          src={target}
          className="w-10 object-fit"
          alt="Question Analysis - Target Image"
        />
      </div>

      <Doughnut
        data={{
          labels: ["Questions Failed", "Questions Passed"],
          datasets: [
            {
              label: "Question Analysis",
              data: [15 - score, score],
              backgroundColor: ["#eaf2fe", "#3a7df4"],
              hoverOffset: 4,
              spacing: 0,
            },
          ],
        }}
        options={{
          cutout: "65%",
          radius: "100%",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
