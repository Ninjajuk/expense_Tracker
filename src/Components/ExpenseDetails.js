import React from "react";

function ExpenseDetails() {
  const expense = {
    id: 1,
    date: "2023-09-04",
    description: "Groceries",
    category: "Food",
    amount: 50.0
  };

  return (
    <div className=" w-full h-full rounded-md">
      <div className="  rounded-md shadow-md ">
        <div className=" p-6 mt-2 bg-purple-500 rounded-md">
          <h1 className="text-2xl font-semibold ">Expense Details</h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Date:</p>
              <p className="font-semibold">{expense.date}</p>
            </div>
            <div>
              <p className="text-gray-500">Description:</p>
              <p className="font-semibold">{expense.description}</p>
            </div>
            <div>
              <p className="text-gray-500">Category:</p>
              <p className="font-semibold">{expense.category}</p>
            </div>
            <div>
              <p className="text-gray-500">Amount:</p>
              <p className="font-semibold">${expense.amount}</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Edit Expense
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseDetails;
