import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="stepsequencer">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1> DrumMachine </h1>
      <br></br>
      <br></br>
      <NavLink to="/drummachine" activeClassName="selected">
        <li className="singlenav">Make some noise!</li>
      </NavLink>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Home;
