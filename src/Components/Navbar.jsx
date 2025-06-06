// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-sm sm:text-base font-medium">
        <li>
          <Link
            to="/"
            className="hover:underline hover:bg-blue-500 px-3 py-1 rounded transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/cgpa"
            className="hover:underline hover:bg-blue-500 px-3 py-1 rounded transition"
          >
            Calculate
          </Link>
        </li>
        <li>
          <Link
            to="/2514-CGPA"
            className="hover:underline hover:bg-blue-500 px-3 py-1 rounded transition"
          >
            2514-CGPA
          </Link>
        </li>
        <li>
          <Link
            to="/contact-me"
            className="hover:underline hover:bg-blue-500 px-3 py-1 rounded transition"
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
