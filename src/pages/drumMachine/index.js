import React from "react";
import ClosedHat from "./components/closedhat";
import Kick from "./components/kick";
import OpenHat from "./components/openHat";
import Snare from "./components/snare";
import HiTom from "./components/hitom";
import LoTom from "./components/lotom";
import Rim from "./components/rim";
import Crash from "./components/crash";

function drumMachine() {
  return (
    <div>
      <h1> DrumMachine! </h1>
      <div className="drums">
        <br />
        <Kick />
        <Snare />
        <ClosedHat />
        <OpenHat />
        <HiTom />
        <LoTom />
        <Rim />
        <Crash />
        <button>Start</button>
        <button className="button2">Stop</button>
      </div>
    </div>
  );
}

export default drumMachine;
