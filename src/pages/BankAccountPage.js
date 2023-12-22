import React from "react";
import Layout3 from "../Components/Layout/Layout3";


const accountDetails = [
  {
    bankName: "State bank of India ",
    accountNumber: "34954040901",
    accountName: "Samsuddin Ansari",
    accountBalance: 100000
  },
  {
    bankName: "Bank of India",
    accountNumber: "34954040901",
    accountName: "Samsuddin Ansari",
    accountBalance: 5000.0
  },
  {
    bankName: "ICICI Bank",
    accountNumber: "34954040901",
    accountName: "Samsuddin Ansari",
    accountBalance: 15000.0
  },
  {
    bankName: "Punjab National bank",
    accountNumber: "34954040901",
    accountName: "Samsuddin Ansari",
    accountBalance: 150000.0
  }
];

const transactions = [
  {
    id: 1,
    date: "2023-09-05",
    description: "Deposit",
    amount: 1000.0
  },
  {
    id: 2,
    date: "2023-09-04",
    description: "Withdrawal",
    amount: -500.0
  }
  // Add more transactions as needed
];
const backgroundColors = [
  "bg-purple-600",
  "bg-blue-600",
  "bg-green-600",
  "bg-gray-600",
  "bg-purple-400"
];
function BankAccountPage() {
  return (
    <Layout3>
      <div
        className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="max-w-full mx-auto">
          <h1 className="text-2xl font-medium mb-4 text-center text-gray-700">
            {" "}
            List of Bank Account
          </h1>
          <div className=" shadow overflow-hidden sm:rounded-lg mb-4">
            <div className="p-4">
              {/* <h2 className="text-lg font-semibold">Account Details</h2> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {accountDetails.map((item, index) => (
                  <div
                    key={item.accountNumber}
                    className={`mt-2 p-4 rounded-md shadow-md ${
                      backgroundColors[index % backgroundColors.length]
                    }`}
                  >
                    <div className="text-sm text-white flex justify-between py-2 ">
                      Bank
                      <span className="text-lg font-medium text-purple-800">
                        {item.bankName}
                      </span>
                    </div>
                    <div className="text-sm text-white flex justify-between py-2 ">
                      <span>Account Number</span>
                      <span className="text-lg font-medium">
                        {item.accountNumber}
                      </span>
                    </div>
                    <div className="text-sm text-white flex justify-between py-2 ">
                      <span>Name</span>
                      <span className="text-lg font-medium text-black">
                        {item.accountName}
                      </span>
                    </div>
                    <div className="text-sm text-white flex justify-between py-2 ">
                      <span>Account Balance</span>
                      <span className="text-lg font-medium">
                        <span className="text-gray-800 text-2xl">₹</span>
                        <span className="text-xl font-medium text-gray-500">
                          {item.accountBalance.toFixed(2)}
                        </span>
                      </span>
                    </div>
                    <div className="text-sm text-white flex justify-between py-2 ">
                      <span>Account Number</span>
                      <span className="text-lg font-medium text-black">
                        {item.accountNumber}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="p-4">
              <h2 className="text-lg font-semibold">Transaction History</h2>
              <ul className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <li key={transaction.id}>
                    <div className="flex items-center justify-between px-4 py-2">
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
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </Layout3>
  );
}

export default BankAccountPage;
