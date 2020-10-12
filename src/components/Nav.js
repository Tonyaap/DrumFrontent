import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <h3>
          <ul className="nav-links">
            <NavLink to="/" exact activeClassName="selected">
              <li className="singlenav">HOME</li>
            </NavLink>
            <NavLink to="/drummachine" activeClassName="selected">
              <li className="singlenav">DrumMachine</li>
            </NavLink>
          </ul>
        </h3>
      </nav>
    </div>
  );
}

export default Nav;
