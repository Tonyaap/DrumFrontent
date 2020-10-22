import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import DrumMachine from "./pages/drumMachine";
import Nav from "./components/navigation";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { getUserWithStoredToken } from "./store/user/actions";
import { useDispatch } from "react-redux";
import FullscreenMenu from "./components/navigation/FullscreenMenu";

import "./style/global.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
      <FullscreenMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/drummachine" component={DrumMachine} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
