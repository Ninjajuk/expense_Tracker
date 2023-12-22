import React from "react";

import { data } from "./data";
import { FaAngleRight, FaChartLine, FaRegHeart } from "react-icons/fa";
import BarChart from "./BarChart";
import {
  MdOutlineShowChart,
  MdOutlineBarChart,
  MdOutlineAdd,
  MdMoreHoriz,
  MdNorthEast,
  MdSouthEast
} from "react-icons/md";
import CreditCard from "./CreditCard";
import { Layout3 } from "../Layout/Layout3";
import DoughnutChart from "../Chart/DoughnutChart";

const cardSales = [
  {
    title: "Total Income",
    price: "₹124500",
    icon: <MdNorthEast />,
    color: "green"
  },
  {
    title: "Total Expenses",
    price: "₹147",
    icon: <MdSouthEast />,
    color: "red"
  },
  { title: "Total Savings", price: "₹85", icon: <MdSouthEast />, color: "red" }
];
const awesomeBackgroundColors = ["bg-purple-200", "bg-red-700", "bg-green-200"];
const awesomeBackgroundColorsHover = [
  "hover:bg-blue-600",
  "hover:bg-green-600",
  "hover:bg-purple-600"
];

function AdminMainContent() {
  return (
    <Layout3>
      <div
        className=" w-full   bg-black overflow-y-auto   "
        style={{ height: "calc(100vh - 4rem)" }}
      >
        {/* Your main content goes here */}

        {/* Two-column layout */}
        <div className="h-full w-full flex flex-col md:flex-row md:px-12 py-4  gap-2 ">
          {/* Left column */}
          <div className="w-full    md:w-3/5 flex flex-col gap-2 bg-green-400 md:pr-2 rounded-md shadow-md">
            <div className="px-2 py-2  rounded-md md:w-1-/4">
              <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-3 4 gap-2 -z-100">
                {cardSales.map((item, index) => (
                  <div
                    key={index}
                    className={`min-h-full flex flex-col justify-between bg-white p-4 rounded-md shadow ${
                      awesomeBackgroundColors[
                        index % awesomeBackgroundColors.length
                      ]
                    } hover:${
                      awesomeBackgroundColorsHover[
                        index % awesomeBackgroundColorsHover.length
                      ]
                    } transform hover:scale-105 hover:shadow-xl transition-transform duration-300`}
                  >
                    <h2 className="flex justify-between text-black font-medium text-lg font-semibold">
                      <span> {item.title}</span>
                      <button title="View details" className="w-6 h-6">
                        <MdMoreHoriz />
                      </button>
                      <p className="hidden ">View details</p>
                    </h2>
                    <p className="pt-4 text-black-500 text-center font-medium text-xl ">
                      {item.price}
                    </p>
                    <p className="flex">
                      <span key={index} className={`text-xl px-2`}>
                        {" "}
                        {item.icon}
                      </span>
                      <span>Vs Last 30 Days</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Table Starts here */}
            <div className=" flex-grow bg-blue-200 mx-2 my-2 pt-2 rounded-md  overflow-y-auto overflow-x-auto">
              <div className="flex items-center justify-between mb-4 px-2">
                <h2 className="text-xl font-semibold">Borrowed Money</h2>
                <button className=" flex items-center bg-blue-400 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  <span>
                    <MdOutlineAdd />
                  </span>
                  <span>Add</span>
                </button>
              </div>

              <div className="overflow-x-auto overflow-y-auto ">
                <table className="w-full border-collapse">
                  <thead className=" md:table-header-group">
                    <tr>
                      <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                        Store Name
                      </th>
                      <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                        Location
                      </th>
                      <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                        Sell
                      </th>
                      <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                        }
                      >
                        <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                          {item.name}
                        </td>
                        <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                          {item.location}
                        </td>
                        <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                          {item.sell}
                        </td>
                        <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                          {item.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Table Ends here */}
            {/* <div className='flex-grow bg-white'>
  <p>3rd dicv</p>
</div> */}
          </div>

          {/* Right column */}
          <div className="md:w-2/5 px-2 flex flex-col bg-indigo-500 md:pl-2 rounded-md shadow-md">
            <div className="p-2 mb-2 ">
              <CreditCard className="md:w-full" />
            </div>
            <div className="flex-grow p-2 mb-2 ">
              {/* transactions  */}
              <div className=" bg-yellow-600 rounded-md shadow-md p-2 overflow-y-auto hover:bg-yellow-800 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <h1 className="px-4 text-xl font-medium">My Transactions</h1>
                <div className="grid gap-2 mt-2 px-4 py-2">
                  <div className=" bg-gray-200 flex items-center rounded-md shadow-md   p-1 hover:bg-gray-400">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      alt=""
                    />
                    <div className="flex flex-col pl-4 hover:bg-gray-400">
                      <p className="text-sm font-medium text-slate-900">
                        Monthly House Rent
                      </p>
                      <p className="flex  justify-between text-sm text-slate-500 truncate">
                        <span>4 Aug</span>
                        <span>1500</span>
                      </p>
                    </div>
                    <FaAngleRight className="ml-auto h-6 w-6" />
                  </div>

                  <div className="bg-gray-200  flex items-center rounded-md shadow-md   p-1">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      alt=""
                    />
                    <div className="pl-4">
                      <p className="text-sm font-medium text-slate-900">
                        amazon Purchasing
                      </p>
                      <p className="flex  justify-between text-sm text-slate-500 truncate">
                        <span>14 Aug</span>
                        <span>1500</span>
                      </p>
                    </div>
                    <FaAngleRight className="ml-auto h-6 w-6" />
                  </div>
                  <div className=" bg-gray-200  flex items-center cursor-pointer rounded-md shadow-md  p-1">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      alt=""
                    />
                    <div className="pl-4">
                      <p className="text-sm font-medium text-slate-900">Home</p>
                      <p className="flex justify-between text-sm text-slate-500 truncate">
                        <span>25 Aug</span>
                        <span>10000</span>
                      </p>
                    </div>
                    <FaAngleRight className="ml-auto h-6 w-6" />
                  </div>
                </div>
              </div>
              {/* transactions ends here  */}
            </div>
            {/* Right column ends here */}
          </div>
        </div>
      </div>
    </Layout3>
  );
}

export default AdminMainContent;

import React from "react";

import { data } from "./data";
import { FaAngleRight, FaChartLine, FaRegHeart } from "react-icons/fa";
import BarChart from "./BarChart";
import {
  MdOutlineShowChart,
  MdOutlineBarChart,
  MdOutlineAdd,
  MdMoreHoriz,
  MdNorthEast,
  MdSouthEast
} from "react-icons/md";
import CreditCard from "./CreditCard";
import { Layout3 } from "../Layout/Layout3";
import DoughnutChart from "../Chart/DoughnutChart";

const cardSales = [
  {
    title: "Total Income",
    price: "₹124500",
    icon: <MdNorthEast />,
    color: "green"
  },
  {
    title: "Total Expenses",
    price: "₹147",
    icon: <MdSouthEast />,
    color: "red"
  },
  { title: "Total Savings", price: "₹85", icon: <MdSouthEast />, color: "red" }
];
const awesomeBackgroundColors = ["bg-purple-200", "bg-red-700", "bg-green-200"];
const awesomeBackgroundColorsHover = [
  "hover:bg-blue-600",
  "hover:bg-green-600",
  "hover:bg-purple-600"
];

function AdminMainContent() {
  return (
    <Layout3>
      <div
        className=" w-full max-h-screen flex-grow bg-black overflow-y-auto   "
        style={{ height: "calc(100vh - 4rem)" }}
      >
        {/* Your main content goes here */}

        {/* Two-column layout */}
        <div className="max-h-screen flex flex-col md:flex-row md:px-12 py-4 overflow-y-auto hide-scrollbar">
          {/* Left column */}
          <div className="w-full  flex flex-col md:w-3/5 ">
            <div className="flex-grow bg-white px-2 py-2 rounded-md overflow-y-auto">
              <div className="relative h-full grid grid-cols-1 md:grid-cols-3 4 gap-2 -z-100">
                {cardSales.map((item, index) => (
                  <div
                    key={index}
                    className={`min-h-full flex flex-col justify-between bg-white p-4 rounded-md shadow ${
                      awesomeBackgroundColors[
                        index % awesomeBackgroundColors.length
                      ]
                    } hover:${
                      awesomeBackgroundColorsHover[
                        index % awesomeBackgroundColorsHover.length
                      ]
                    } transform hover:scale-105 hover:shadow-xl transition-transform duration-300`}
                  >
                    <h2 className="flex justify-between text-black font-medium text-lg font-semibold">
                      <span> {item.title}</span>
                      <button title="View details" className="w-6 h-6">
                        <MdMoreHoriz />
                      </button>
                      <p className="hidden ">View details</p>
                    </h2>
                    <p className="pt-4 text-black-500 text-center font-medium text-xl ">
                      {item.price}
                    </p>
                    <p className="flex">
                      <span key={index} className={`text-xl px-2`}>
                        {" "}
                        {item.icon}
                      </span>
                      <span>Vs Last 30 Days</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* <DoughnutChart /> */}
            {/* Table Starts here */}
            <div
              style={{ height: "250px" }}
              className=" flex-grow bg-blue-200 px-2 pt-2 rounded-md my-2 overflow-y-auto overflow-x-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Borrowed Money</h2>
                <button className=" flex items-center bg-blue-400 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  <span>
                    <MdOutlineAdd />
                  </span>
                  <span>Add</span>
                </button>
              </div>

              <div className="overflow-x-auto overflow-y-auto ">
                <table className="w-full border-collapse">
                  <thead className=" md:table-header-group">
                    <tr>
                      <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                        Store Name
                      </th>
                      <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                        Location
                      </th>
                      <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                        Sell
                      </th>
                      <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-300 text-left">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                        }
                      >
                        <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                          {item.name}
                        </td>
                        <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                          {item.location}
                        </td>
                        <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                          {item.sell}
                        </td>
                        <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">
                          {item.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Table Ends here */}
            {/* <div className='flex-grow bg-white'>
  <p>3rd dicv</p>
</div> */}
          </div>

          {/* Right column */}
          <div className="md:w-2/5 px-2" style={{ height: "100vh" }}>
            <div className="  bg-yellow-200 p-2 mb-2 rounded-md shadow-md">
              <CreditCard className="md:w-full" />
            </div>

            {/* transactions  */}
            <div
              // style={{ height: "60%" }}
              className="flex-grow bg-white rounded-md shadow-md p-2 overflow-y-auto hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <h1 className="px-4 text-xl font-medium">My Transactions</h1>
              <div className="grid gap-2 mt-2 px-4 py-2">
                <div className=" bg-gray-200 flex items-center rounded-md shadow-md   p-1 hover:bg-gray-400">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    alt=""
                  />
                  <div className="flex flex-col pl-4 hover:bg-gray-400">
                    <p className="text-sm font-medium text-slate-900">
                      Monthly House Rent
                    </p>
                    <p className="flex  justify-between text-sm text-slate-500 truncate">
                      <span>4 Aug</span>
                      <span>1500</span>
                    </p>
                  </div>
                  <FaAngleRight className="ml-auto h-6 w-6" />
                </div>

                <div className="bg-gray-200  flex items-center rounded-md shadow-md   p-1">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    alt=""
                  />
                  <div className="pl-4">
                    <p className="text-sm font-medium text-slate-900">
                      amazon Purchasing
                    </p>
                    <p className="flex  justify-between text-sm text-slate-500 truncate">
                      <span>14 Aug</span>
                      <span>1500</span>
                    </p>
                  </div>
                  <FaAngleRight className="ml-auto h-6 w-6" />
                </div>
                <div className=" bg-gray-200  flex items-center cursor-pointer rounded-md shadow-md  p-1">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    alt=""
                  />
                  <div className="pl-4">
                    <p className="text-sm font-medium text-slate-900">Home</p>
                    <p className="flex justify-between text-sm text-slate-500 truncate">
                      <span>25 Aug</span>
                      <span>10000</span>
                    </p>
                  </div>
                  <FaAngleRight className="ml-auto h-6 w-6" />
                </div>
              </div>
            </div>
            {/* transactions ends here  */}
          </div>
          {/* Right column ends here */}
        </div>
      </div>
    </Layout3>
  );
}

export default AdminMainContent;
