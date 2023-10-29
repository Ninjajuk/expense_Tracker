import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Store the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: ["Income", "Expense", "Saving"],
      datasets: [
        {
          label: "August",
          data: [120000, 80000, 40000],
          backgroundColor: [
            "rgba(0, 0, 255, 0.5)",
            "rgba(255, 0, 0, 0.5)", // Red with 50% opacity
            "rgba(0, 128, 0, 0.5)" // Green with 50% opacity
          ],
          hoverOffset: 4
        }
      ]
    };

    // Destroy any existing chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: data
    });
  }, []);

  return (
    <div
      className="w-52 h-52 bg-gray-400 mx-auto"
      style={{ width: "100%", height: "100%" }}
    >
      <h2 className="text-center text-gray-600 font-medium">
        Pie Chart for September
      </h2>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default DoughnutChart;
