import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
// import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="navbar-dark" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLink to="/" exact activeClassName="selected">
          <li className="singlenav">HOME</li>
        </NavLink>
        <NavLink to="/drummachine" activeClassName="selected">
          <li className="singlenav">DrumMachine</li>
        </NavLink>
        <Nav style={{ width: "100%" }} fill>
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
