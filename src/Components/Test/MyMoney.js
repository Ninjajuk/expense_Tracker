import React, { useState } from "react";
import { Layout3 } from "../Components/Layout/Layout3";
import ExpenseModal from "../Components/Modal/ExpenseModal";

import IncomeModal from "../Components/Modal/IncomeModal";
import ExpenseTable from "../Components/Table/ExpenseTable";

import IncomeTable from "../Components/Table/IncomeTable";
const cardSales = [
  { title: "Total Earnings", price: "₹124500", path: "" },
  { title: "Total Expense", price: "85000", path: "" },
  { title: "Total Savings", price: "85", path: "" }
];
const awesomeBackgroundColors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-purple-200"
];
const awesomeBackgroundColorsHover = [
  "hover:bg-blue-600",
  "hover:bg-green-600",
  "hover:bg-purple-600"
];
function MyMoney() {
  const [formData, setFormData] = useState([]);
  const updateFormData = (newFormData) => {
    setFormData([...formData, newFormData]);
  };
  // const [open, setOpen] = useState(true);

  // // Function to toggle the sidebar
  // const toggleSidebar = () => {
  //   setOpen(!open);
  // };
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [expenseModalOpen, setExpenseModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const [open, setOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseModalOpen, setExpenseModalOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const openIncomeModal = () => {
    setIsModalOpen(true);
  };

  const openExpenseModal = () => {
    setExpenseModalOpen(true);
  };

  const closeIncomeModal = () => {
    setIsModalOpen(false);
  };

  const closeExpenseModal = () => {
    setExpenseModalOpen(false);
  };

  return (
    <>
      {/* <div className="w-full bg-gray-400 md:w-1/4 overflow-y-auto">
          <Sidebar3
            open={open}
            siebaropen={toggleSidebar}
            className="overflow-y-auto"
          />
        </div>
        <main
          className={`${
            open ? "ml-250" : "ml-0"
          } min-h-screen bg-white flex-grow  transition-all duration-300  hide-scrollbar`}
          style={{
            width: open ? "calc(100% - 250px)" : "100%",
            height: "calc(100% - 4rem)"
          }}
        >
          <Navbar4
            className="sticky top-0 z-10 md:fixed"
            open={open}
            siebaropen={toggleSidebar}
          /> */}
      {/* Your main content goes here */}
      <Layout3>
        {/* <div
            className="w-full md:w-2/5 md:p-4 h-full bg-green-400 overflow-y-auto overflow-x-auto"
            style={{ height: "calc(100vh - 4rem)" }}
          >
            
            <div><IncomeTable /></div>
            <div><IncomeTable /></div>
          </div>
        */}

        <div
          className="flex flex-col w-full  gap-2 overflow-y-auto"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          {/* First Row */}
          <div className=" flex flex-col w-full h-1/4 md:flex-row gap-2 py-4 px-4 bg-red-400">
            {cardSales.map((item, index) => (
              <div
                key={index}
                className={`w-full h-1/5 bg-white p-4 rounded-md shadow ${
                  awesomeBackgroundColors[
                    index % awesomeBackgroundColors.length
                  ]
                } hover:${
                  awesomeBackgroundColorsHover[
                    index % awesomeBackgroundColorsHover.length
                  ]
                } transform hover:scale-105 hover:shadow-xl transition-transform duration-300`}
              >
                <h2 className="text-l font-semibold">{item.title}</h2>
                <p className="text-black-500 text-center font-medium text-xl">
                  {item.price}
                </p>
              </div>
            ))}
            {/* <div className="row-span-1  bg-blue-300  h-full">
  
   
              
        </div> */}
            {/* <div className="row-span-1 col-span-1 bg-black  h-full">
          Column 2 (33%)
        </div>
        <div className="row-span-1 col-span-1 bg-purple-300  h-full">
          Column 3 (33%)
        </div> */}
          </div>

          {/* Second Row (With Increased Height) */}
          {/* <div className="grid grid-cols md:grid-cols-3">
        <div className="row-span-2 col-span-2 bg-pink-300 w-full">
          2nd row 1st column
        </div>
        <div className="row-span-2 col-span-1 bg-gray-300 w-full">
          2nd row 2nd column
        </div>
      </div> */}

          {/* Third Row */}
          <div className=" flex-grow w-full h-3/4 gap-2 md:gap-4 pb-4 px-4 overflow-y-auto bg-green-400">
            <div className="flex flex-col md:flex-row gap-2 h-full w-full ">
              <div className=" w-full md:w-1/2 bg-gray-300  overflow-x-auto rounded-md ">
                <IncomeTable
                  className=""
                  detail="Income Details"
                  button1="Add Income"
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  openModal={openIncomeModal}
                  formData={formData}
                  updateFormData={updateFormData}
                />
              </div>
              <div className="w-full md:w-1/2 bg-white overflow-y-auto overflow-x-auto  rounded-md">
                <ExpenseTable
                  className=""
                  detail="Expense Details"
                  button1="Add Expense"
                  isModalOpen={expenseModalOpen}
                  setIsModalOpen={setExpenseModalOpen}
                  openModal={openExpenseModal}
                />
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <IncomeModal
            updateFormData={updateFormData}
            isOpen={isModalOpen}
            onClose={closeIncomeModal}
          />
        )}

        {expenseModalOpen && (
          <ExpenseModal isOpen={expenseModalOpen} onClose={closeExpenseModal} />
        )}
      </Layout3>
    </>
  );
}

export default MyMoney;

import React, { useState } from "react";
import { Layout3 } from "../Components/Layout/Layout3";
import ExpenseModal from "../Components/Modal/ExpenseModal";

import IncomeModal from "../Components/Modal/IncomeModal";
import ExpenseTable from "../Components/Table/ExpenseTable";

import IncomeTable from "../Components/Table/IncomeTable";
const cardSales = [
  { title: "Total Earnings", price: "₹124500", path: "" },
  { title: "Total Expense", price: "85000", path: "" },
  { title: "Total Savings", price: "85", path: "" }
];
const awesomeBackgroundColors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-purple-200"
];
const awesomeBackgroundColorsHover = [
  "hover:bg-blue-600",
  "hover:bg-green-600",
  "hover:bg-purple-600"
];
function MyMoney() {
  const [formData, setFormData] = useState([]);
  const updateFormData = (newFormData) => {
    setFormData([...formData, newFormData]);
  };
  // const [open, setOpen] = useState(true);

  // // Function to toggle the sidebar
  // const toggleSidebar = () => {
  //   setOpen(!open);
  // };
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [expenseModalOpen, setExpenseModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const [open, setOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseModalOpen, setExpenseModalOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const openIncomeModal = () => {
    setIsModalOpen(true);
  };

  const openExpenseModal = () => {
    setExpenseModalOpen(true);
  };

  const closeIncomeModal = () => {
    setIsModalOpen(false);
  };

  const closeExpenseModal = () => {
    setExpenseModalOpen(false);
  };

  return (
    <>
      {/* <div className="w-full bg-gray-400 md:w-1/4 overflow-y-auto">
          <Sidebar3
            open={open}
            siebaropen={toggleSidebar}
            className="overflow-y-auto"
          />
        </div>
        <main
          className={`${
            open ? "ml-250" : "ml-0"
          } min-h-screen bg-white flex-grow  transition-all duration-300  hide-scrollbar`}
          style={{
            width: open ? "calc(100% - 250px)" : "100%",
            height: "calc(100% - 4rem)"
          }}
        >
          <Navbar4
            className="sticky top-0 z-10 md:fixed"
            open={open}
            siebaropen={toggleSidebar}
          /> */}
      {/* Your main content goes here */}
      <Layout3>
        {/* <div
            className="w-full md:w-2/5 md:p-4 h-full bg-green-400 overflow-y-auto overflow-x-auto"
            style={{ height: "calc(100vh - 4rem)" }}
          >
            
            <div><IncomeTable /></div>
            <div><IncomeTable /></div>
          </div>
        */}

        <div
          className="grid grid-rows-3 gap-2 overflow-y-auto"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          {/* First Row */}
          <div className=" grid grid-cols md:grid-cols-3 gap-2 py-4 px-4">
            {cardSales.map((item, index) => (
              <div
                key={index}
                className={`row-span-1 bg-white p-4 rounded-md shadow ${
                  awesomeBackgroundColors[
                    index % awesomeBackgroundColors.length
                  ]
                } hover:${
                  awesomeBackgroundColorsHover[
                    index % awesomeBackgroundColorsHover.length
                  ]
                } transform hover:scale-105 hover:shadow-xl transition-transform duration-300`}
              >
                <h2 className="text-l font-semibold">{item.title}</h2>
                <p className="text-black-500 text-center font-medium text-xl">
                  {item.price}
                </p>
              </div>
            ))}
            {/* <div className="row-span-1  bg-blue-300  h-full">
  
   
              
        </div> */}
            {/* <div className="row-span-1 col-span-1 bg-black  h-full">
          Column 2 (33%)
        </div>
        <div className="row-span-1 col-span-1 bg-purple-300  h-full">
          Column 3 (33%)
        </div> */}
          </div>

          {/* Second Row (With Increased Height) */}
          {/* <div className="grid grid-cols md:grid-cols-3">
        <div className="row-span-2 col-span-2 bg-pink-300 w-full">
          2nd row 1st column
        </div>
        <div className="row-span-2 col-span-1 bg-gray-300 w-full">
          2nd row 2nd column
        </div>
      </div> */}

          {/* Third Row */}
          <div className="row-span-2 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 pb-4 px-4 overflow-y-auto">
            <div className=" col-span-2 bg-gray-300  overflow-x-auto rounded-md">
              <IncomeTable
                className=""
                detail="Income Details"
                button1="Add Income"
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                openModal={openIncomeModal}
                formData={formData}
                updateFormData={updateFormData}
              />
            </div>
            <div className="row-span-1 col-span-2 bg-white overflow-y-auto overflow-x-auto  rounded-md">
              <ExpenseTable
                className=""
                detail="Expense Details"
                button1="Add Expense"
                isModalOpen={expenseModalOpen}
                setIsModalOpen={setExpenseModalOpen}
                openModal={openExpenseModal}
              />
            </div>
          </div>
        </div>

        {isModalOpen && (
          <IncomeModal
            updateFormData={updateFormData}
            isOpen={isModalOpen}
            onClose={closeIncomeModal}
          />
        )}

        {expenseModalOpen && (
          <ExpenseModal isOpen={expenseModalOpen} onClose={closeExpenseModal} />
        )}
      </Layout3>
    </>
  );
}

export default MyMoney;
