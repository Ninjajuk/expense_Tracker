import React from "react";
import DoughnutChart from "./DoughnutChart";
import { PieChart } from "@mui/icons-material";
import BarChart from "./Chart";

const BarChart1 = () => {
  return (
    <div className="flex flex-col items-center w-full h-full py-2">
      <h1>MY Chart</h1>
      <DoughnutChart />
      {/* <PieChart/> */}
      <BarChart />
    </div>
  );
};

export default BarChart1;
