import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ activePage, setActivePage }) => {
  const getActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav>
      <NavLink to="/about" className={getActiveClass}>
        About Me
      </NavLink>
      <NavLink to="/portfolio" className={getActiveClass}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" className={getActiveClass}>
        Contact
      </NavLink>
      <NavLink to="/resume" className={getActiveClass}>
        Resume
      </NavLink>
    </nav>
  );
};

export default Nav;
