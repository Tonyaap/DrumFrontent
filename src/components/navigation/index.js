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

  const loginLogoutControls =
    token || localStorage.token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar className="navigation" variant="light">
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLink to="/" exact activeClassName="selected">
          <ul className="singlenav">HOME</ul>
        </NavLink>
        <NavLink to="/drummachine" activeClassName="selected">
          <ul className="singlenav">DrumMachine</ul>
        </NavLink>
        <Nav style={{ width: "100%" }} fill>
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
