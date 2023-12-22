import React from "react";

function IncomeTable1() {
  // Sample data for demonstration
  const tableData = [
    {
      income: "Income 1",
      ownClassifications: "Classification 1",
      months: [
        "$100",
        "$200",
        "$150",
        "$175",
        "$300",
        "$250",
        "$180",
        "$200",
        "$220",
        "$190",
        "$250",
        "$275"
      ]
    },
    {
      income: "Income 2",
      ownClassifications: "Classification 2",
      months: [
        "$120",
        "$220",
        "$170",
        "$185",
        "$310",
        "$270",
        "$190",
        "$210",
        "$240",
        "$200",
        "$270",
        "$295"
      ]
    }
    // Add more data rows as needed
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return (
    <div className="m-w-full d:max-w-3/5 ">
      <div className="h-40% overflow-y-auto overflow-x-auto ">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-gray-600 border-b border-gray-300">
                Income
              </th>
              <th className="px-6 py-3 bg-gray-200 text-gray-600 border-b border-gray-300">
                Own Classifications
              </th>
              {/* {Array.from({ length: 12 }).map((_, index) => (
                <th
                  key={index}
                  className="px-6 py-3 bg-gray-200 text-gray-600 border-b border-gray-300"
                >
                  {index < 9 ? `0${index + 1}` : index + 1}
                </th>
              ))} */}

              {months.map((item) => (
                <th className="bg-gray-200 text-gray-600">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, rowIndex) => (
              <tr key={rowIndex}>
                <td className="px-6 py-3 border-b border-gray-300">
                  {data.income}
                </td>
                <td className="px-6 py-3 border-b border-gray-300">
                  {data.ownClassifications}
                </td>
                {data.months.map((month, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-3 border-b border-gray-300"
                  >
                    {month}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IncomeTable1;
