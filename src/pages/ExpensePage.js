import React, { useState } from "react";
import ExpenseDetails from "../Components/ExpenseDetails";
import AddIncomeForm from "../Components/Form/AddincomeForm";
import ExpenseForm from "../Components/Form/ExpenseForm";
import UserTable from "../Components/IncomeDetails/Usertable";
import Layout3 from "../Components/Layout/Layout3";


function ExpensePage() {
  const [open, setOpen] = useState(true);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <Layout3>
      <div className=" bg-blue-400  px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="flex flex-col md:flex-row w-full h-full  gap-2">
          <div className="w-full h-full md:w-2/5 pt-4   ">
            <ExpenseForm />
          </div>
          <div className="flex-grow md:w-2/5   ">
            <div className="flex flex-col h-full">
              {" "}
              {/* Added h-full */}
              <div className="flex flex-col gap-4">
                <div className="h-1/2 w-full  rounded-md shadow-md">
                  <ExpenseDetails />
                </div>
                <div className="h-1/2  bg-green-400 rounded-md shadow">
                  {" "}
                  {/* Updated this line */}
                  <UserTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout3>
  );
}

export default ExpensePage;
