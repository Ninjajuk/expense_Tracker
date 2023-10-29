import React, { useState } from "react";

const AddIncomeForm = () => {
  const incomeOptions = [
    "Select Income",
    "Salary",
    "Dividends",
    "Capital Gains",
    "Bonus",
    "Other"
  ];
  const initialState = {
    amount: "",
    type: "Income",
    category: "Select Income",
    date: "",
    description: ""
  };
  const [incomeDetails, setIncomeDetails] = useState(initialState);

  const handleChange = (e) => {
    setIncomeDetails({ ...incomeDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new income object with the form data
    const newIncome = {
      amount: incomeDetails.amount,
      type: incomeDetails.type,
      category: incomeDetails.category,
      date: incomeDetails.date,
      description: incomeDetails.description
    };

    try {
      const response = await fetch("http://localhost:3030/addincome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newIncome)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Reset the form fields
      setIncomeDetails(initialState);
      alert(`You have Added ${newIncome.amount}`);
      console.log("Income added successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-full mx-auto  bg-green-500 p-8  rounded-md shadow">
      <h1 className="text-3xl font-semibold mb-6">Add Income Form</h1>
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
            value={incomeDetails.amount}
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
            value={incomeDetails.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
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
            value={incomeDetails.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          >
            {incomeOptions.map((option, index) => (
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
            value={incomeDetails.date}
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
            value={incomeDetails.description}
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

export default AddIncomeForm;
