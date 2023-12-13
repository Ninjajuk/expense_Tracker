import { useState } from "react";

import Navbar4 from "../Navbar/Navbar";
import { Sidebar3 } from "../Sidebar/Sidebar3";
import Dashboard1 from "../TailWindDashboar/Dashboard1";
import Dashboard3 from "../TailWindDashboar/Dashboard3";
import Dashboard4 from "../TailWindDashboar/Dashboard4";
import Dashboard5 from "../TailWindDashboar/Dashboard5";
import Dashboard6 from "../TailWindDashboar/Dashboard6";

 const Layout3 = ({ children }) => {
  const [open, setOpen] = useState(false);

  function siebaropen() {
    setOpen(!open);
  }

  return (
    <>
      <Navbar4
        open={open}
        siebaropen={siebaropen}
        className="sticky top-0 z-10"
      />
      <div className="flex">
        {/* Desktop Sidebar */}
        <Sidebar3 open={open} siebaropen={siebaropen} />

        {/* Mobile Sidebar Toggle Button */}

        {/* Main Content */}
        <main
          className={`overflow-y-auto ${
            open ? "ml-250" : "ml-0"
          }   flex-grow transition-all duration-300 hide-scrollbar`}
          style={{
            width: open ? "calc(100% - 250px)" : "100%",
            height: open ? "calc(100vh - 4rem)" : "calc(100vh - 4rem)"
          }}
        >
          {children}
        </main>
   
      </div>
      <Dashboard1/>
      <Dashboard3/>
      <Dashboard4/>
      <Dashboard5/>
      <Dashboard6/>
    </>
  );
};
export default Layout3;