// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const baseClass = "px-2 py-1 rounded transition text-center"; 
  const activeClass = "underline bg-blue-500";

  const links = [
    { to: "/", label: "Home" },
    { to: "/cgpa", label: "Calculate" },
    { to: "/2514-CGPA", label: "2514-CGPA" },
    { to: "/contact-me", label: "Contact Me" },
  ];

  return (
    <nav className="bg-gray-800 text-white px-0 lg:px-4 py-3 shadow-md relative">
      <div className="flex justify-between items-center px-4 lg:px-0">
        {/* Hamburger button for small and md devices */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-2xl p-1 rounded hover:bg-gray-700 transition"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu */}
        <ul
          className={`font-medium text-sm sm:text-base absolute sm:static top-full left-0 w-full sm:w-auto bg-gray-800 sm:bg-transparent transition-all duration-300 overflow-hidden
          ${isOpen ? "max-h-60 py-2" : "max-h-0"}
          sm:max-h-full
          sm:flex
          sm:flex-row
          sm:items-center
          grid
          grid-cols-2
          gap-1
          sm:grid-cols-none
          sm:gap-5
          `}
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 999 }}
        >
          {links.map(({ to, label }) => (
            <li key={to} className="lg:text-lg text-xs">
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `${baseClass} ${
                    isActive
                      ? activeClass
                      : "hover:underline hover:bg-blue-500"
                  } block`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
