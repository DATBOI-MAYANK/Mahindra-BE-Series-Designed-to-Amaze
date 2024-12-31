import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex mx-5 mt-4  absolute text-[#EDF2F4] z-10">
      <ul className="flex left-full relative space-x-11 font-serif text-2xl">
        <li className="hover:underline">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#EF233C]" : "text-[#EDF2F4]"
              } hover:text-[#EF233C] `
            }
          >
            Home
          </NavLink>
        </li>
        <li className="hover:underline">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#EF233C]" : "text-[#EDF2F4]"
              } hover:text-[#EF233C] `
            }
          >
            About
          </NavLink>
        </li>
        <li className="hover:underline">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#EF233C]" : "text-[#EDF2F4]"
              } hover:text-[#EF233C] `
            }
          >
            Services
          </NavLink>
        </li>
        <li className="hover:underline">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#EF233C]" : "text-[#EDF2F4]"
              } hover:text-[#EF233C] `
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
