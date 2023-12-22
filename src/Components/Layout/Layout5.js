import React from "react";

const Layout5 = () => {
  return (
    <div className="bg-gray-200 flex flex-col md:flex-row min-h-screen">
      {/* First Row */}
      <div className="flex " style={{ minHeight: "30%" }}>
        <div className="w-1/3 p-4 bg-blue-500">Column 1</div>
        <div className="w-1/3 p-4 bg-green-500">Column 2</div>
        <div className="w-1/3 p-4 bg-red-500">Column 3</div>
      </div>

      {/* Second Row */}
      <div className="flex " style={{ minHeight: "60%" }}>
        <div className="w-1/2 p-4 bg-yellow-500">Column 1</div>
        <div className="w-1/2 p-4 bg-purple-500">Column 2</div>
      </div>

      {/* Third Row */}
      <div className="flex " style={{ minHeight: "30%" }}>
        <div className="w-1/3 p-4 bg-pink-500">Column 1</div>
        <div className="w-1/3 p-4 bg-indigo-500">Column 2</div>
        <div className="w-1/3 p-4 bg-teal-500">Column 3</div>
      </div>
    </div>
  );
};

export default Layout5;
