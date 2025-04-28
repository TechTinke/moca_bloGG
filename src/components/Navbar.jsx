import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/mental-health">Mental Health</Link>
        </li>
        <li>
          <Link to="/relationships">Relationships</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
        <li>
          <Link to="/fashion">Fashion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
