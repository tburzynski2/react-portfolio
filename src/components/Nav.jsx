import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const getActiveClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className={getActiveClass}>
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className={getActiveClass}>
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={getActiveClass}>
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className={getActiveClass}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
