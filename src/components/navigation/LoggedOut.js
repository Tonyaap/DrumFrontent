import React from "react";
import { NavLink } from "react-router-dom";

export default function LoggedOut() {
  return (
    <>
      <NavLink to="/login" activeClassName="selected">
        <ul className="singlenav">Login</ul>
      </NavLink>
    </>
  );
}
