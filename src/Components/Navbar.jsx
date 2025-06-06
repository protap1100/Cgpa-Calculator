// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseClass = "px-3 py-1 rounded transition";

  const activeClass = "underline bg-blue-500";

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-sm sm:text-base font-medium">
        {[
          { to: "/", label: "Home" },
          { to: "/cgpa", label: "Calculate" },
          { to: "/2514-CGPA", label: "2514-CGPA" },
          { to: "/contact-me", label: "Contact Me" },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${baseClass} ${
                  isActive ? activeClass : "hover:underline hover:bg-blue-500"
                }`
              }
              end={to === "/"}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
