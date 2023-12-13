import { useState } from "react";

import Navbar4 from "../Navbar/Navbar";
import { Sidebar3 } from "../Sidebar/Sidebar3";


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

    </>
  );
};
export default Layout3;