import React, { useState } from "react";
import { initialUsers } from "../Table/tabledata";

function UserTable() {
  const [users, setUsers] = useState(initialUsers);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Function to toggle sorting order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Function to handle sorting
  const handleSort = (key) => {
    if (sortBy === key) {
      toggleSortOrder();
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  // Function to sort users based on the selected column
  const sortedUsers = users.slice().sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (
      sortBy === "name" ||
      sortBy === "title" ||
      sortBy === "email" ||
      sortBy === "role"
    ) {
      if (sortOrder === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    } else {
      // Numeric sorting for numeric columns
      if (sortOrder === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    }
  });

  return (
    <div className="max-w-full h-full  overflow-x-auto    rounded-md shadow-md">
      <div className="flex items-center justify-between  px-2">
        <div className="px-4">
          <h2 className="text-xl font-bold ">Users</h2>
          <p>
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add User
        </button>
      </div>
      <table className="min-w-full h-full">
        <thead className="sticky top-0 bg-pink-400 text-left">
          <tr>
            <th className="cursor-pointer" onClick={() => handleSort("name")}>
              Name
              {sortBy === "name" && (
                <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
              )}
            </th>
            <th className="cursor-pointer" onClick={() => handleSort("title")}>
              Title
              {sortBy === "title" && (
                <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
              )}
            </th>
            <th className="cursor-pointer" onClick={() => handleSort("email")}>
              Email
              {sortBy === "email" && (
                <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
              )}
            </th>
            <th className="cursor-pointer" onClick={() => handleSort("role")}>
              Role
              {sortBy === "role" && (
                <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr
              key={user.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-red-200"}
            >
              <td className="px-2 py-2 border">{user.name}</td>
              <td className="px-2 py-2 border">{user.title}</td>
              <td className="px-2 py-2 border">{user.email}</td>
              <td className="px-2 py-2 border">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
