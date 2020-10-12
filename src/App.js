import React from "react";
import { Switch, Route } from "react-router-dom";
import drumMachine from "./pages/drumMachine";
import Nav from "./components/Nav";
import Home from "./pages/home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Welcome!</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/drummachine" component={drumMachine} />
      </Switch>
    </div>
  );
}

export default App;
