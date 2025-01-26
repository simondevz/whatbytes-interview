"use client";
import { useSkillTestStore } from "@/store/SkillTest";
import { findPercentileScore, getPercentile } from "@/util/percentile";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import React, { useEffect, useRef } from "react";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

export default function LineChart() {
  const percentileValue = useSkillTestStore((state) => state.percentile);
  const chartData = useSkillTestStore((state) => state.chartdata);
  const chartRef = useRef<any>(null);

  // Use useEffect to programmatically trigger tooltip after component mounts
  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;

      // Find the index of the percentile value in the dataset
      const percentileIndex = findPercentileScore(chartData, percentileValue);

      // Trigger a tooltip on that specific index (percentile)
      chart?.tooltip?.setActiveElements(
        [{ datasetIndex: 0, index: percentileIndex }],
        { x: percentileValue, y: percentileValue }
      );
      chart?.update(); // Re-render the chart with the active tooltip
    }
  }, [percentileValue]);

  return (
    <div className="flex w-full">
      <Line
        ref={chartRef}
        data={{
          labels: Array.from({ length: 16 }, (_, i) => i),
          datasets: [
            {
              label: "Distribution Curve",
              data: chartData,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              pointRadius: 5,
              tension: 0.4,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false }, // Remove legend
            tooltip: {
              callbacks: {
                // Custom tooltip title
                title: (tooltipItems) => {
                  const xValue = tooltipItems[0].label;
                  return `${Math.round(
                    getPercentile(chartData, Number(xValue) || 0)
                  )} Percentile, Score ${xValue}`;
                },
                // Custom tooltip label
                label: (tooltipItem) => {
                  const yValue = (tooltipItem?.raw as any)?.y;
                  return `Number of Students: ${yValue}`;
                },
              },
            }, // Enable tooltips
          },
          scales: {
            x: {
              title: { display: true, text: "Score" },
            },
            y: {
              display: false,
              title: { display: true, text: "Number of Students" },
            },
          },
          elements: {
            point: {
              radius: 5, // Control point size
              hoverRadius: 7, // Point size on hover
            },
          },
        }}
      />
    </div>
  );
}
