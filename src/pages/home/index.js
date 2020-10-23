import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1> Drum_Machine </h1>
      <br></br>
      <br></br>
      <NavLink to="/drummachine" activeClassName="selected">
        <ul className="makenoise"> ♫ Make some noise!</ul>
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
