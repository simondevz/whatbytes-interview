"use client";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

// Register the required components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

export default function LineChart() {
  return (
    <div>
      <Line
        data={{
          labels: Array.from({ length: 11 }, (_, i) => i * 10), // X-axis: Percentiles (0 to 100)
          datasets: [
            {
              label: "Distribution Curve",
              data: [2, 5, 8, 15, 25, 40, 25, 15, 8, 5, 2], // Example frequency data
              borderColor: "rgba(75, 192, 192, 1)", // Line color
              backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the curve
              pointRadius: 5, // Size of points on the curve
              tension: 0.4, // Smooth the line
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false }, // Remove legend
            tooltip: { enabled: true }, // Enable tooltips
          },
          scales: {
            x: {
              title: { display: true, text: "Percentiles" },
            },
            y: {
              display: false,
              title: { display: false, text: "Number of Students" },
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
