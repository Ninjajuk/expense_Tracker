import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar4 = ({ siebaropen }, open) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/dashboard"); // Initialize with the default active link
  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigationLinks = [
    { name: "Dashboard", href: "/dashboard", current: true },
    // { name: "Team", href: "team", current: false },
    // { name: "Orders", href: "#", current: false },
    { name: "Login", href: "login", current: false }
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <nav className="bg-gray-800 py-2 " style={{ height: "4rem" }}>
        <div className=" flex justify-between items-center ">
          {/* Menu Toggle (visible in mobile view) */}
          <button className="md text-white ml-2 " onClick={siebaropen}>
            {open ? (
              <Bars3Icon className="h-6 w-6" />
            ) : (
              <XMarkIcon className="h-6 w-6 " />
            )}
          </button>
          {/* Logo (visible in desktop view) */}
          <div className="hidden md:block">
            <p href="/" className="px-4 text-white font-semibold text-lg">
              Home
            </p>
          </div>

          {/* Search Input */}
          <div className="flex-grow md:w-1/2 mx-4 md:mx-0">
            <input
              type="text"
              className="w-full rounded-full px-4 py-2 bg-gray-700 text-white focus:outline-none"
              placeholder="Search..."
            />
          </div>

          <div className="flex px-4 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>

          {/* Navigation Links (visible in desktop view) */}
          <div className="hidden md:flex space-x-4 px-2">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)} // Add onClick event handler
                className={classNames(
                  link.href === activeLink // Check if link.href matches activeLink
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-4 py-2 text-sm font-medium"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar4;
