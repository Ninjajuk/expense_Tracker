import React, { useState } from "react";

import ExpenseModal from "../Components/Modal/ExpenseModal";
import IncomeModal from "../Components/Modal/IncomeModal";
import ExpenseTable from "../Components/Table/ExpenseTable";
import IncomeTable from "../Components/Table/IncomeTable";
import Layout3 from "../Components/Layout/Layout3";

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
      <Layout3>
        <div
          className="w-full   bg-white "
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <div className="w-full max-h-full md:h-full flex flex-col w-full gap-2 ">
            <div
              className="flex flex-col w-full md:flex-row  gap-2   md:px-4 py-2"
              style={{ height: "30%" }}
            >
              {cardSales.map((item, index) => (
                <div
                  key={index}
                  className={`w-full h-full bg-white p-4  rounded-md shadow ${
                    awesomeBackgroundColors[
                      index % awesomeBackgroundColors.length
                    ]
                  } transform hover:shadow-xl transition-transform`}
                >
                  <h2 className="text-l font-semibold">{item.title}</h2>
                  <p className="text-black-500 text-center font-medium text-xl">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full   md:px-4  " style={{ height: "70%" }}>
              <div className="flex flex-col md:flex-row gap-4 w-full max-h-full py-2">
                <div className="w-full md:w-1/2  overflow-x-auto rounded-md">
                  <IncomeTable
                    className="px-2"
                    detail="Income Details"
                    button1="Add Income"
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    openModal={openIncomeModal}
                    formData={formData}
                    updateFormData={updateFormData}
                  />
                </div>
                <div className="w-full md:w-1/2 bg-purple-400 px-2 overflow-x-auto rounded-md">
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
