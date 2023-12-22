import { useState, useEffect } from "react";
import { data, expenseTracker } from "./data";
import { MdOutlineClose, MdOutlineDashboard } from "react-icons/md";
import { FaPowerOff, FaAngleRight, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Sidebar4 = ({ open, siebaropen }) => {
  const [openMenu, setOpenMenu] = useState("");
  // Function to handle submenu click
  const handleSubMenuClick = (menu) => {
    if (openMenu === menu) {
      setOpenMenu("");
    } else {
      setOpenMenu(menu);
    }
  };

  return (
    <>
      <aside
        className={` bg-purple-600 text-white font-medium overflow-y-auto transform ${
          open ? "" : "-translate-x-250"
        } transition-transform duration-300 md:block fixed md:relative`}
        style={{
          width: open ? "250px" : "0",
          zIndex: "10",
          height: open ? "calc(100vh - 4rem)" : "calc(100vh - 4rem)"
        }}
      >
        <div className="flex items-center">
          <img
            className="max-w-full h-8"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="hi"
          />
          <h1 className="pl-3">NinjaKing</h1>
        </div>
        {/* <div className="relative border-t-2 border-green-200 border-t-indigo-500 my-2"> */}
        {open && (
          <h1
            onClick={() => siebaropen()}
            className="px-6 font-medium text-red-500"
          >
            <MdOutlineClose className="w-6 h-6 m-auto cursor-pointer " />
          </h1>
        )}
        {/* </div> */}
        <div className="flex flex-col max-h-screen ">
          <div className="  border-t-2 border-green-200 border-t-indigo-500 my-2 ">
            <div>
              {expenseTracker.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSubMenuClick(item.menu)}
                  className={`px-4 py-2  ${
                    item.active
                      ? "bg-gray-200 text-blue-400"
                      : openMenu === item.menu
                      ? "hover:bg-gray-200 hover:text-blue-400"
                      : "hover:bg-transparent hover:text-blue-600"
                  }`}
                >
                  <div className="flex">
                    {" "}
                    <span>
                      <Link
                        to={item.path}
                        className="flex items-center gap-x-2"
                      >
                        <span className="text-blue-600 ">{item.icon}</span>
                        <span>{item.menu}</span>
                      </Link>
                    </span>
                    <span className="ml-auto">
                      {Array.isArray(item.submenu) &&
                      item.submenu.length > 0 ? (
                        openMenu === item.menu ? (
                          <span className="ml-auto text-2xl">
                            <FaAngleDown />
                          </span>
                        ) : (
                          <span className="ml-auto text-2xl">
                            <FaAngleRight />
                          </span>
                        )
                      ) : null}
                    </span>
                  </div>

                  {Array.isArray(item.submenu) && openMenu === item.menu && (
                    <div className="flex flex-col">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={`${item.path}${subItem.path}`}
                          className={`pl-10 py-2 hover:bg-gray-800 ${
                            subItem.active ? "bg-gray-800" : ""
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* side  navigation Ends here */}
          <div className="  border-t-2 border-green-200 border-t-indigo-500 my-2 flex-grow"></div>
          {/* Userprofile logout starts here */}
          <div className="mt-auto  px-3 flex items-center hover:bg-gray-200 cursor-pointer rounded-full py-2 mt-auto">
            <span>
              <FaPowerOff className="text-red-700" />
            </span>
            <span className="px-2 text-blue-600">Logout</span>
          </div>
          {/* Userprofile logout Ends  here */}
        </div>
      </aside>
    </>
  );
};
