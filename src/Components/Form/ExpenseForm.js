import React, { useState } from "react";

const ExpenseForm = () => {
  const incomeCategory = [
    "Select Expense",
    "Savings",
    "Investments",
    "EMI",
    "Food",
    "Rent",
    "Fuel",
    "Electricity",
    "Phone",
    "HouseHold",
    "Medical",
    "Clothing",
    "Personal Care",
    "Transport",
    "Education",
    "Entertainment",
    "Travel/Holidays",
    "Hobbies",
    "Mutual Fund",
    "Equity",
    "Other"

    // Add more options here
  ];
  const initialState = {
    amount: "",
    type: "Expense",
    category: "Select Income",
    date: "",
    description: ""
  };
  const [expenseDetails, setExpenseDetails] = useState(initialState);

  const handleChange = (e) => {
    setExpenseDetails({ ...expenseDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)

    const newExpense = {
      amount: expenseDetails.amount,
      type: expenseDetails.type,
      category: expenseDetails.category,
      date: expenseDetails.date,
      description: expenseDetails.description
    };

    try {
      const response = await fetch("http://localhost:3030/expensetable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newExpense)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Reset the form fields
      setExpenseDetails(initialState);

      console.log("Income added successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md max-h-full mx-auto bg-gray-400 p-8  rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Add Expense Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-600 font-medium mb-2"
          >
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            value={expenseDetails.amount}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-gray-600 font-medium mb-2"
          >
            Type
          </label>
          <select
            id="type"
            name="type"
            value={expenseDetails.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          >
            <option value="Expense">Expense</option>
            {/* <option value="Income">Income</option> */}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-600 font-medium mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={expenseDetails.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          >
            {incomeCategory.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-600 font-medium mb-2"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={expenseDetails.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-600 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            value={expenseDetails.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:ring focus:ring-blue-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
