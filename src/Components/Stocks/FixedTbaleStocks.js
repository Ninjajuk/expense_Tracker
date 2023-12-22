import React from "react";

const data = [
  {
    id: 1,
    month: "Jan",
    investment: 500,
    dividend: 200,
    mutualFund: 1700,
    totalAmount: 2400
  },
  {
    id: 2,
    month: "Feb",
    investment: 600,
    dividend: 250,
    mutualFund: 1800,
    totalAmount: 2650
  },
  {
    id: 3,
    month: "March",
    investment: 550,
    dividend: 220,
    mutualFund: 1600,
    totalAmount: 2370
  },
  {
    id: 4,
    month: "April",
    investment: 700,
    dividend: 300,
    mutualFund: 1900,
    totalAmount: 2900
  },
  {
    id: 5,
    month: "May",
    investment: 480,
    dividend: 180,
    mutualFund: 1650,
    totalAmount: 2310
  },
  {
    id: 6,
    month: "June",
    investment: 620,
    dividend: 270,
    mutualFund: 1750,
    totalAmount: 2640
  },
  {
    id: 7,
    month: "July",
    investment: 530,
    dividend: 210,
    mutualFund: 1680,
    totalAmount: 2420
  },
  {
    id: 8,
    month: "August",
    investment: 550,
    dividend: 230,
    mutualFund: 1700,
    totalAmount: 2480
  },
  {
    id: 9,
    month: "September",
    investment: 580,
    dividend: 240,
    mutualFund: 1760,
    totalAmount: 2580
  },
  {
    id: 10,
    month: "October",
    investment: 610,
    dividend: 260,
    mutualFund: 1850,
    totalAmount: 2720
  },
  {
    id: 11,
    month: "November",
    investment: 540,
    dividend: 220,
    mutualFund: 1670,
    totalAmount: 2430
  },
  {
    id: 12,
    month: "December",
    investment: 670,
    dividend: 290,
    mutualFund: 1950,
    totalAmount: 2910
  }
];

const FixedHeightTable = () => {
  return (
    <div className="max-h-full overflow-x-auto ">
      <table className="w-full table-fixed table-auto">
        <thead className="sticky top-0 bg-black text-white text-left">
          <tr>
            <th className="w-1/2 px-2 py-">Month</th>
            <th className="w-1/2 px-2 py-2">Equity</th>
            <th className="w-1/2 px-2 py-2">Mutual Fund</th>
            <th className="w-1/2 px-2 py-2">Dividends</th>
            <th className="w-1/2 px-2 py-2">Total</th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="w-1/2 border px-4 py-2">{item.month}</td>
              <td className="w-1/2 border px-4 py-2">{item.investment}</td>
              <td className="w-1/2 border px-4 py-2">{item.mutualFund}</td>
              <td className="w-1/2 border px-4 py-2">{item.dividend}</td>
              <td className="w-1/2 border px-4 py-2">{item.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FixedHeightTable;
