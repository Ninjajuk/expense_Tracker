import React, { useState, useEffect } from "react";
import { extractMonthAndDateFromDate } from "../../utility/dateUtils";
import ExpensePagination from "../Pagination/ExpensePagination";

const ExpenseTable = ({ detail, button1, isModalOpen, setIsModalOpen }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getIncomeTable = async () => {
      try {
        const response = await fetch("http://localhost:3030/expensetable");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching income data:", error);
      }
    };
    getIncomeTable(); // Call the function to fetch data
  }, [customers]);

  // Sorting state
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  // Function to toggle sorting direction
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  // Sort customers based on the selected field and direction
  const sortedCustomers = [...customers].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];

    if (sortDirection === "asc") {
      return fieldA < fieldB ? -1 : 1;
    } else {
      return fieldA > fieldB ? -1 : 1;
    }
  });

  // Pagination state
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = sortedCustomers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // State for the filter term
  const [filterTerm, setFilterTerm] = useState("");

  // State for the search results
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle filter input change
  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    // Filter customers based on the filter term and update searchResults
    const filteredCustomers = sortedCustomers.filter((customer) => {
      return customer.category.toLowerCase().includes(filterTerm.toLowerCase());
    });
    setSearchResults(filteredCustomers);
  };

  // Determine which data to display in the table (filtered results if available, otherwise sortedCustomers)
  const tableData = searchResults.length > 0 ? searchResults : sortedCustomers;

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-full  ">
          {/* <h1 className="text-2xl font-semibold mb-4">Money Management</h1> */}

          <div className="flex flex-col    bg-white-500 ">
            <div className="flex items-center justify-end">
              <input
                type="text"
                placeholder="Filter by category"
                value={filterTerm}
                onChange={handleFilterChange}
                className="ml-2 px-2 py-1 border rounded"
              />
              <button
                onClick={handleSearchClick}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded ml-2"
              >
                Search
              </button>
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-medium px-4 sticky">{detail}</h2>
              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  console.log("Clciked");
                }}
                className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded mx-2"
              >
                {button1}
              </button>
            </div>
          </div>

          <div className="  max-h-40 overflow-y-auto overflow-x-auto">
            <table className="w-full table-auto border-collapse border  overflow-y-auto overflow-x-auto">
              <thead className="sticky top-0 bg-pink-400 text-left">
                <tr>
                  <th className="border border-gray-300 p-2">
                    <input type="checkbox" />
                  </th>
                  <th
                    className="border border-gray-300 p-2 cursor-pointer"
                    onClick={() => {
                      setSortField("date");
                      toggleSortDirection();
                    }}
                  >
                    Date
                  </th>
                  <th
                    className="border border-gray-300 p-2 cursor-pointer"
                    onClick={() => {
                      setSortField("category");
                      toggleSortDirection();
                    }}
                  >
                    Category
                  </th>
                  <th
                    className="border border-gray-300 p-2 cursor-pointer"
                    onClick={() => {
                      setSortField("orders");
                      toggleSortDirection();
                    }}
                  >
                    Months
                  </th>
                  <th
                    className="border border-gray-300 p-2 cursor-pointer"
                    onClick={() => {
                      setSortField("amount");
                      toggleSortDirection();
                    }}
                  >
                    Amounts
                  </th>
                  <th
                    className="border border-gray-300 p-2 cursor-pointer"
                    onClick={() => {
                      setSortField("city");
                      toggleSortDirection();
                    }}
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((customer, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-400" : "white"}
                  >
                    <td className="border border-gray-300 p-2">
                      <input type="checkbox" />
                    </td>
                    <td className="border border-gray-300 p-2">
                      {extractMonthAndDateFromDate(customer.date).formattedDate}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {customer.category}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {extractMonthAndDateFromDate(customer.date).monthName}
                    </td>
                    <td className="border border-gray-300 p-2">
                      ${customer.amount}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {customer.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div
          style={{ height: "20%" }}
          className="flex mt-auto  w-full h-1/6 sticky bottom-0 "
        >
          {/* Pagination component */}

          <ExpensePagination
            itemsPerPage={itemsPerPage}
            totalItems={sortedCustomers.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            className=" max-w-full "
          />
        </div>
      </div>
    </>
  );
};

export default ExpenseTable;

import React, { useState, useEffect } from "react";
import { extractMonthAndDateFromDate } from "../../utility/dateUtils";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import IncomePagination from "../Pagination/Incomepagination";
const IncomeTable = ({ detail, button1, isModalOpen, setIsModalOpen }) => {
  const [customers, setCustomers] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  useEffect(() => {
    const getIncomeTable = async () => {
      try {
        const response = await fetch("http://localhost:3030/incometable");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching income data:", error);
      }
    };
    getIncomeTable(); // Call the function to fetch data
  }, [customers]);

  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  // Function to toggle sorting direction
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  // Sort customers based on the selected field and direction
  const sortedCustomers = [...customers].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];

    if (sortDirection === "asc") {
      return fieldA < fieldB ? -1 : 1;
    } else {
      return fieldA > fieldB ? -1 : 1;
    }
  });

  // Pagination state
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = sortedCustomers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // State for the filter term
  const [filterTerm, setFilterTerm] = useState("");

  // State for the search results
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle filter input change
  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    // Filter customers based on the filter term and update searchResults
    const filteredCustomers = sortedCustomers.filter((customer) => {
      return customer.category.toLowerCase().includes(filterTerm.toLowerCase());
    });
    setSearchResults(filteredCustomers);
  };

  const handleDateRangeFilter = () => {
    // Filter customers based on the selected date range
    const filteredCustomers = sortedCustomers.filter((customer) => {
      const customerDate = new Date(customer.date);
      return (
        (!startDate || customerDate >= startDate) &&
        (!endDate || customerDate <= endDate)
      );
    });

    // Update the displayed data with the filtered results
    setSearchResults(filteredCustomers);
  };

  // Determine which data to display in the table (filtered results if available, otherwise sortedCustomers)
  const tableData = searchResults.length > 0 ? searchResults : sortedCustomers;

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="max-w-full  bg-gray-600 " style={{ height: "80%" }}>
          {/* <h1 className="text-2xl font-semibold mb-4">Money Management</h1> */}

          <div className="flex flex-col  ">
            <div className="flex items-center justify-end ">
              <input
                type="text"
                placeholder="Filter by category"
                value={filterTerm}
                onChange={handleFilterChange}
                className="ml-2 px-2  border rounded"
              />
              <button
                onClick={handleSearchClick}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded ml-2"
              >
                Search
              </button>
            </div>
            <div className="flex items-center justify-end">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
                dateFormat="yyyy-MM-dd"
                className="ml-2 px-2 border rounded"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End Date"
                dateFormat="yyyy-MM-dd"
                className="ml-2 px-2 border rounded"
              />
              <button
                onClick={handleDateRangeFilter}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded ml-2"
              >
                Apply Date Range
              </button>
            </div>

            <div className="flex flex-col">
              <h2 className="text-3xl font-medium px-4 sticky">{detail}</h2>

              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                }}
                className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded mx-2"
              >
                {button1}
              </button>
            </div>
          </div>

          <div className="  max-h-full  overflow-y-auto overflow-x-auto">
            <table className="w-full table-auto border-collapse border  overflow-y-auto overflow-x-auto">
              <thead className="sticky top-0 bg-pink-400 text-left">
                <tr>
                  <th className="border border-gray-300 p-2">
                    <input type="checkbox" />
                  </th>
                  <th
                    className="border border-gray-300 p-2 cursor-pointer"
                    onClick={() => {
                      setSortField("date");
                      toggleSortDirection();
                    }}
                  >
                    Date
                  </th>
                  <th
                    className="border border-gray-300 p-2 cursor-pointer"
                    onClick={() => {
                      setSortField("category");
                      toggleSortDirection();
                    }}
                  >
                    Sources
                  </th>
                  <th
                    className="border border-gray-300 p-2 cursor-pointer"
                    onClick={() => {
                      setSortField("Months");
                      toggleSortDirection();
                    }}
                  >
                    Months
                  </th>
                  <th
                    className="border border-gray-300 p-2 cursor-pointer"
                    onClick={() => {
                      setSortField("amount");
                      toggleSortDirection();
                    }}
                  >
                    Amounts
                  </th>
                  <th
                    className="border border-gray-300 p-2 cursor-pointer"
                    onClick={() => {
                      setSortField("descriptions");
                      toggleSortDirection();
                    }}
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((customer, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-400" : "white"}
                  >
                    <td className="border border-gray-300 p-2">
                      <input type="checkbox" />
                    </td>
                    <td className="border border-gray-300 p-2">
                      {extractMonthAndDateFromDate(customer.date).formattedDate}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {customer.category}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {extractMonthAndDateFromDate(customer.date).monthName}
                    </td>
                    <td className="border border-gray-300 p-2">
                      ₹{customer.amount}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {customer.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination component */}
        <div
          className="flex mt-auto  max-w-full h-1/6 sticky bottom-0 bg-red-400"
          style={{ height: "3rem" }}
        >
          <IncomePagination
            itemsPerPage={itemsPerPage}
            totalItems={sortedCustomers.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            className=" max-w-full bg-red-400"
            tableData={tableData}
          />
        </div>
        {/* Pagination component ends here */}
      </div>
    </>
  );
};

export default IncomeTable;
