import React, { useState } from "react";
import IncomeTable from "../Components/Table/IncomeTable";
import { IncomeDetail } from "../Components/IncomeDetails";
import AddIncomeForm from "../Components/Form/AddincomeForm";
import Layout3 from "../Components/Layout/Layout3";

function Addincome() {
  const [open, setOpen] = useState(true);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <Layout3>
        <div className="flex flex-col md:flex-row w-full bg-white">
          <div
            className="w-full md:w-2/5 md:p-4 h-full bg-gray-100 overflow-y-auto overflow-x-auto"
            style={{
              maxHeight: "calc(100vh - 4rem)" // Set the maximum height
            }}
          >
            <AddIncomeForm />
          </div>
          <div
            style={{ height: "100%" }}
            className="flex-grow  bg-white md:w-3/5   my-2 rounded-md shadow"
          >
            <div className="flex flex-col h-full">
              <div className="h-1/2 bg-white rounded-lg shadow-md p-4 ">
                <h1 className="text-2xl font-semibold mb-4 text-center ">
                  Income Details August
                </h1>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="w-full md:w-1/2 h-1/2  p-4 mb-4 md:mb-0 bg-blue-300 rounded-md">
                    <h2 className="text-lg font-semibold">Income Sources</h2>
                    <ul className="list-disc pl-4 ">
                      <li className="flex justify-between">
                        <span>Salary:</span> <span>$1000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Dividend:</span> <span>$100</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Capital Gain:</span> <span>$500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Business:</span> <span>$2000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Bonus:</span> <span>$20</span>
                      </li>
                    </ul>
                    {/* <IncomeTable className='overflow-x-auto overflow-y-auto'/> */}
                  </div>
                  <div className="w-full md:w-1/2 relative bg-gray-400 py-4 rounded-md">
                    <h2 className="text-lg font-semibold flex justify-center py-2">
                      August
                    </h2>
                    <div className="bg-green-500 rounded-full w-24 h-24 flex justify-start items-center justify-center mx-auto">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">$3620</p>
                      </div>
                    </div>
                    <h2 className="text-lg font-semibold flex justify-center py-2">
                      Total Monthly Income August
                    </h2>
                  </div>
                </div>
                <div className="h-1/2 pt-4" style={{ height: "400px" }}>
                  <IncomeTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout3>
    </>
  );
}

export default Addincome;
