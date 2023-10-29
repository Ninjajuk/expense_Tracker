import React from "react";

const PortfolioCard = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row bg-yellow-300 rounded-md shadow-md p-4">
      {/* First Child Div */}
      <div className="w-full  rounded-md md:mx-2">
        <h2 className="text-2xl font-semibold">Portfolio Summary</h2>
        <div className="flex flex-col justify-between  my-2 mx-4">
          <div className="text-center">
            <p className="text-gray-600">Total Portfolio Value</p>
            <p className="text-3xl font-bold">$100,000</p>
          </div>
          <div className="bg-white  flex flex-col md:flex-row justify-between p-2 rounded-md">
            <div>
              <p className="text-gray-600">Invested Value</p>
              <p className="text-xl font-bold">$80,000</p>
            </div>
            <div>
              <p className="text-gray-600">Today's Gain/Loss</p>
              <p className="text-xl font-bold text-green-500">+$5,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Child Div */}
      {/* <div className="w-full md:w-1/2 bg-purple-400 rounded-md md:mx-2">
        <h2 className="text-2xl font-semibold">Equity</h2>
        <div className=" my-2 mx-4  text-center">
          <p className="text-gray-600">Overall Gain/Loss</p>
          <p className="text-3xl font-bold text-red-600">-$2,000</p>
        </div>
        <div className=" bg-white my-2 mx-4  flex flex-col md:flex-row justify-between p-2 rounded-md">
          <div className="">
            <p className="text-gray-600">Invested</p>
            <p className="text-xl font-bold">$40,000</p>
          </div>
          <div className=" ">
            <p className="text-gray-600">Current Value</p>
            <p className="text-xl font-bold">$38,000</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PortfolioCard;
