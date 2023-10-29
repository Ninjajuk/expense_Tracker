import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My Money",
      data: [65, 59, 80, 81, 56, 55, 40, 20, 30, 60, 20, 23],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)"
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)"
      ],
      borderWidth: 1
    }
  ]
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    responsive: true // Enable responsiveness
    // maintainAspectRatio: false // Do not maintain aspect ratio
  }
};

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy any existing chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, config);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <canvas ref={chartRef} width="100%" height="100%"></canvas>
    </div>
  );
};

export default BarChart;
