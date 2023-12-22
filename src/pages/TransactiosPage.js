import React from "react";
import Layout3 from "../Components/Layout/Layout3";


const transactions = [
  {
    id: 1,
    date: "2023-09-05",
    description: "Purchase at Online Store",
    amount: -50.0
  },
  {
    id: 2,
    date: "2023-09-04",
    description: "Salary Deposit",
    amount: 2000.0
  }
];

function TransactionsPage() {
  return (
    <Layout3>
      <div className="  py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Transactions</h1>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${
                          transaction.amount < 0
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {transaction.amount < 0 ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        )}
                      </svg>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.description}
                      </div>
                      <div
                        className={`text-sm ${
                          transaction.amount < 0
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {transaction.amount < 0 ? "-" : "+"}$
                        {Math.abs(transaction.amount).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {transaction.date}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout3>
  );
}

export default TransactionsPage;
