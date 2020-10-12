import React from "react";
import * as Tone from "tone";
import ClosedHat from "./components/closedhat";
import Kick from "./components/kick";
import OpenHat from "./components/openHat";
import Snare from "./components/snare";
import HiTom from "./components/hitom";
import LoTom from "./components/lotom";
import Rim from "./components/rim";
import Crash from "./components/crash";

function drumMachine() {
  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, "16n");
  Tone.Transport.start();
  Tone.Transport.bpm.rampTo(120, 10);

  async function startPlaying() {
    await Tone.start();
    Tone.Transport.start();
    console.log("audio ready");
  }
  async function stopPlaying() {
    await Tone.Transport.stop();
    console.log("audio stopped");
  }

  const kick = new Tone.Player(
    process.env.PUBLIC_URL + "/drumkits/808/808-Kick.wav"
  ).toDestination();
  Tone.Buffer.loaded(() => kick.start());

  const snare = new Tone.Player(
    process.env.PUBLIC_URL + "/drumkits/808/808-Snare.wav"
  ).toDestination();
  Tone.Buffer.loaded(() => snare.start());

  const closedHat = new Tone.Player(
    process.env.PUBLIC_URL + "/drumkits/808/808-HiHats.wav"
  ).toDestination();
  Tone.Buffer.loaded(() => closedHat.start());

  const openHat = new Tone.Player(
    process.env.PUBLIC_URL + "/drumkits/808/808-OpenHiHats.wav"
  ).toDestination();
  Tone.Buffer.loaded(() => openHat.start());

  const hiTom = new Tone.Player(
    process.env.PUBLIC_URL + "/drumkits/808/808-HiTom.wav"
  ).toDestination();
  Tone.Buffer.loaded(() => hiTom.start());

  const loTom = new Tone.Player(
    process.env.PUBLIC_URL + "/drumkits/808/808-LoTom.wav"
  ).toDestination();
  Tone.Buffer.loaded(() => loTom.start());

  const rim = new Tone.Player(
    process.env.PUBLIC_URL + "/drumkits/808/808-Rim.wav"
  ).toDestination();
  Tone.Buffer.loaded(() => rim.start());

  const cowbell = new Tone.Player(
    process.env.PUBLIC_URL + "/drumkits/808/808-Cowbell.wav"
  ).toDestination();
  Tone.Buffer.loaded(() => cowbell.start());

  // setInterval(() => console.log(Tone.now()), 100);

  function repeat() {
    let step = index % 16;

    let kickInputs = document.querySelector(
      `.kick input:nth-child(${step + 1} )`
    );
    let snareInputs = document.querySelector(
      `.snare input:nth-child(${step + 1})`
    );
    let closedHatInputs = document.querySelector(
      `.closedHat input:nth-child(${step + 1})`
    );
    let openHatInputs = document.querySelector(
      `.openHat input:nth-child(${step + 1})`
    );
    let hiTomInputs = document.querySelector(
      `.HiTom input:nth-child(${step + 1})`
    );
    let loTomInputs = document.querySelector(
      `.LoTom input:nth-child(${step + 1})`
    );
    let rimInputs = document.querySelector(`.Rim input:nth-child(${step + 1})`);
    let cowbellInputs = document.querySelector(
      `.Cymbal input:nth-child(${step + 1})`
    );

    if (kickInputs.checked) {
      kick.start();
    }
    if (snareInputs.checked) {
      snare.start();
    }
    if (closedHatInputs.checked) {
      closedHat.start();
    }
    if (openHatInputs.checked) {
      openHat.start();
    }
    if (hiTomInputs.checked) {
      hiTom.start();
    }
    if (loTomInputs.checked) {
      loTom.start();
    }
    if (rimInputs.checked) {
      rim.start();
    }
    if (cowbellInputs.checked) {
      cowbell.start();
    }

    index++;
  }

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
        {/* disabled={!loaded} */}
        <button onClick={startPlaying}>Start</button>
        <button className="button2" onClick={stopPlaying}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default drumMachine;
