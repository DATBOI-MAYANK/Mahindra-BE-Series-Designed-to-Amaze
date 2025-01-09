import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className=" mx-5 mt-4  absolute text-[#EDF2F4] z-10">
      <ul className="flex ml-9 left-full relative space-x-11 font-serif text-2xl motion-scale-in-[0.5] motion-translate-x-in-[1%] motion-translate-y-in-[-75%] motion-blur-in-[20px] motion-ease-spring-bouncy">
        <li className="hover:underline">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#EF233C]  motion-scale-in-[0.5] motion-translate-x-in-[1%] motion-translate-y-in-[-75%] motion-blur-in-[20px] motion-ease-spring-bouncy" : "text-[#EDF2F4]"
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
                isActive ? "text-[#EF233C]  motion-scale-in-[0.5] motion-translate-x-in-[1%] motion-translate-y-in-[-75%] motion-blur-in-[20px] motion-ease-spring-bouncy " : "text-[#EDF2F4]"
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
                isActive ? "text-[#EF233C]  motion-scale-in-[0.5] motion-translate-x-in-[1%] motion-translate-y-in-[-75%] motion-blur-in-[20px] motion-ease-spring-bouncy" : "text-[#EDF2F4]"
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
                isActive ? "text-[#EF233C]  motion-scale-in-[0.5] motion-translate-x-in-[1%] motion-translate-y-in-[-75%] motion-blur-in-[20px] motion-ease-spring-bouncy" : "text-[#EDF2F4]"
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
