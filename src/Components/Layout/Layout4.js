import { useState } from "react";

import Navbar4 from "../Navbar/Navbar";
import { Sidebar3 } from "../Sidebar/Sidebar3";

const Layout4 = ({ children }) => {
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
        <Sidebar3 />

        {/* Mobile Sidebar Toggle Button */}

        {/* Main Content */}
        <main
          className={`overflow-y-auto  bg-blue-600 flex-grow  hide-scrollbar`}
          style={{
            width: open ? "calc(100% - 16rem)" : "100%",
            height: open ? "calc(100vh - 4rem)" : "calc(100vh - 4rem)"
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout4;
