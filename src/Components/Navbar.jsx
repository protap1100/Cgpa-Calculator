// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact-me">Contact Me</Link>
        </li>
        <li>
          <Link to="/cgpa">cgpa</Link>
        </li>
        {/* Add more links if needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
