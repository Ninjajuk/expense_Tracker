import React from "react";

import { FaCcVisa } from "react-icons/fa";
const CreditCard = () => {
  return (
    <div className=" glass-bg text-white p-6 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xs">
      <div className="flex justify-between items-center mb-4">
        <FaCcVisa className="w-16 h-16" />
        <img
          src="https://www.sbicard.com/sbi-card-en/resources/img/logo.png"
          alt="sbi-card Logo"
          className="w-16 bg-white px-2 py-2 rounded-md"
        />
        {/* <i className="fab fa-cc-visa text-2xl"></i> */}
      </div>
      <div className="text-lg font-semibold mb-2">Card Number</div>
      <div className="text-xl mb-4">1234 **** **** 3456</div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          {/* <div className="text-sm">Cardholder</div> */}
          <div className="text-lg font-semibold">Samsuddin Ansari</div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm">Expires</div>
          <div className="text-lg font-semibold">12/24</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
