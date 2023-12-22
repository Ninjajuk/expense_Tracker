import React from "react";

function calculatePercentageChange(startPrice, endPrice) {
  if (typeof startPrice !== "number" || typeof endPrice !== "number") {
    return NaN;
  }
  return ((endPrice - startPrice) / startPrice) * 100;
}

const StockTable = () => {
  const stockData = [
    {
      name: "BPCL",
      startPrice: 326.85,
      endPrice: 351.1,
      percentageChange: 351.1
    },
    { name: "SBI", startPrice: 1958.1, endPrice: 2730, percentageChange: 20 },
    {
      name: "Relaiance",
      startPrice: 1958.1,
      endPrice: 2730,
      percentageChange: 20
    },
    {
      name: "Zomato",
      startPrice: 1958.1,
      endPrice: 2730,
      percentageChange: 20
    },
    {
      name: "Yes Bank",
      startPrice: 1958.1,
      endPrice: 2730,
      percentageChange: 20
    },
    { name: "LT", startPrice: 1958.1, endPrice: 2730, percentageChange: 20 },
    { name: "LT", startPrice: 1958.1, endPrice: 2730, percentageChange: 20 },
    { name: "LT", startPrice: 1958.1, endPrice: 2730, percentageChange: 20 },
    { name: "LT", startPrice: 1958.1, endPrice: 2730, percentageChange: 20 },
    { name: "LT", startPrice: 1958.1, endPrice: 2730, percentageChange: 20 }
    // { name: "LT", startPrice: 1958.1, endPrice: 2730, percentageChange: 20 }
    // Add more stock objects as needed
  ];

  return (
    <div className=" bg-black max-h-40 overflow-y-auto">
      <table className="w-full table-fixed divide-y divide-gray-200">
        <thead className="sticky top-0 bg-purple-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Stock Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Last Year Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              End Year Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Percentage Change
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
          {stockData.map((stock, index) => (
            <tr key={index}>
              <td className=" w-1/2 px-6 py-4 whitespace-nowrap">
                {stock.name}
              </td>
              <td className=" w-1/2 px-6 py-4 whitespace-nowrap">
                {stock.startPrice}
              </td>
              <td className="w-1/2 px-6 py-4 whitespace-nowrap">
                {stock.endPrice}
              </td>
              <td className="w-1/2 px-6 py-4 whitespace-nowrap">
                {calculatePercentageChange(
                  stock.startPrice,
                  stock.endPrice
                ).toFixed(2)}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
