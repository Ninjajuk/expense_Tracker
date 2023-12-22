import { useState, useEffect } from "react";
import { data, expenseTracker } from "./data";
import { MdOutlineClose, MdOutlineDashboard } from "react-icons/md";
import {
  FaPowerOff,
  FaAngleRight,
  FaAngleLeft,
  FaAngleDown
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const Sidebar3 = ({ open, siebaropen }) => {
  const [openMenu, setOpenMenu] = useState("");
  const location = useLocation();

  // Function to handle submenu click
  const handleSubMenuClick = (menu) => {
    console.log(`Clicked on menu: ${menu}`);
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
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center">
              <img
                className="max-w-full h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="hi"
              />
              <h1 className="pl-3">NinjaKing</h1>
              {/* {open && (
                <h1
                  onClick={() => siebaropen()}
                  className="px-6 font-medium text-red-500"
                >
                  <FaAngleLeft className="w-6 h-6 m-auto cursor-pointer " />
                </h1>
              )} */}
            </div>

            <div className="border-t-2 border-green-200 border-t-indigo-500 my-2  ">
              {expenseTracker.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSubMenuClick(item.menu)}
                  className={`px-4 py-2 mt-4  ${
                    item.path === location.pathname // Check if the item's path matches the current pathname
                      ? "bg-gray-200 text-blue-400"
                      : openMenu === item.menu
                      ? "hover:bg-gray-200 hover:text-blue-400"
                      : "hover:bg-transparent hover:text-blue-600"
                  }`}
                >
                  <div className="flex items-center hover:bg-gray-300 rounded-md">
                    <span className="py-2 px-2">
                      <Link
                        to={item.path}
                        className="flex items-center gap-x-2"
                      >
                        <span className="px-2 py-2">{item.icon}</span>
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
                          to={`${subItem.path}`}
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
          {/* User Profile and Logout */}
          <div className="mt-auto px-4 ">
            <div className="flex items-center hover:bg-gray-800 hover:text-blue-500  cursor-pointer rounded-md py-2 mb-2">
              <span>
                <FaPowerOff className="text-red-700" />
              </span>
              <span className="px-2 text-white ">Logout</span>
            </div>
          </div>
        </div>
      </aside>
      {open ? (
        <h1
          onClick={() => siebaropen()}
          className={` bg-purple-600 px-6 font-medium text-red-500 ${
            open ? "w-0" : ""
          }`}
        >
          <FaAngleLeft
            onClick={() => siebaropen()}
            className="w-3 h-6 m-auto cursor-pointer "
          />
        </h1>
      ) : (
        <FaAngleRight
          onClick={() => siebaropen()}
          className="w-6 h-6 m-auto cursor-pointer "
        />
      )}
    </>
  );
};
