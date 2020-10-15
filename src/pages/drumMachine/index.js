import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import ClosedHat from "./components/closedhat";
import Kick from "./components/kick";
import OpenHat from "./components/openHat";
import Snare from "./components/snare";
import HiTom from "./components/hitom";
import LoTom from "./components/lotom";
import Rim from "./components/rim";
import Cymbal from "./components/crash";
import { Player } from "tone";
import { useSelector } from "react-redux";
import { selectCompositions } from "../../store/user/selectors";

const initialStepState = {
  kick: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  snare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  closedhat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  openhat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  hitom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  lotom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  rim: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  cymbal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

function DrumMachine() {
  const [composition, setComposition] = useState(initialStepState);
  const [tempo, setTempo] = useState(100);
  const [loaded, setLoaded] = useState(false);
  const compositions = useSelector(selectCompositions);
  const [currentStep, setStep] = useState(0);
  const buffers = useRef(null);
  const player1 = useRef(null);
  const player2 = useRef(null);
  const player3 = useRef(null);
  const player4 = useRef(null);
  const player5 = useRef(null);
  const player6 = useRef(null);
  const player7 = useRef(null);
  const player8 = useRef(null);
  let index = 0;

  console.log("compositions?", compositions);

  async function startPlaying() {
    await Tone.start();
    // Tone.Transport.bpm.rampTo(120, 10);
    // Tone.Transport.schedule(() => {}, 0);

    Tone.Transport.start();

    console.log("audio ready");
  }
  async function stopPlaying() {
    await Tone.Transport.stop();

    console.log("audio stopped");
  }

  useEffect(() => {
    Tone.Transport.scheduleRepeat(repeat, "16n");
    player1.current = new Player().toDestination();
    player2.current = new Player().toDestination();
    player3.current = new Player().toDestination();
    player4.current = new Player().toDestination();
    player5.current = new Player().toDestination();
    player6.current = new Player().toDestination();
    player7.current = new Player().toDestination();
    player8.current = new Player().toDestination();

    buffers.current = new Tone.Buffers(
      {
        kick: process.env.PUBLIC_URL + "/drumkits/808/808-Kick.wav",
        snare: process.env.PUBLIC_URL + "/drumkits/808/808-Snare.wav",
        closedhat: process.env.PUBLIC_URL + "/drumkits/808/808-HiHats.wav",
        openhat: process.env.PUBLIC_URL + "/drumkits/808/808-OpenHiHats.wav",
        hitom: process.env.PUBLIC_URL + "/drumkits/808/808-HiTom.wav",
        lotom: process.env.PUBLIC_URL + "/drumkits/808/808-LoTom.wav",
        rim: process.env.PUBLIC_URL + "/drumkits/808/808-Rim.wav",
        cowbell: process.env.PUBLIC_URL + "/drumkits/808/808-Cowbell.wav",
      },
      function () {
        setLoaded(true);
      }
    );
    return () => {
      console.log("cleanup function");
    };
  }, []);

  useEffect(() => {
    Tone.Transport.bpm.value = tempo;
  }, [tempo]);

  if (player1.current) {
    player1.current.buffer = buffers.current.get("kick");
  }
  if (player2.current) {
    player2.current.buffer = buffers.current.get("snare");
  }
  if (player3.current) {
    player3.current.buffer = buffers.current.get("closedhat");
  }
  if (player4.current) {
    player4.current.buffer = buffers.current.get("openhat");
  }
  if (player5.current) {
    player5.current.buffer = buffers.current.get("hitom");
  }
  if (player6.current) {
    player6.current.buffer = buffers.current.get("lotom");
  }
  if (player7.current) {
    player7.current.buffer = buffers.current.get("rim");
  }
  if (player8.current) {
    player8.current.buffer = buffers.current.get("cowbell");
  }

  function repeat() {
    let step = index % 16;

    console.log("STEP?", step);

    let kickInputs = document.querySelector(
      `.kick input:nth-child(${step + 1} )`
    );

    let snareInputs = document.querySelector(
      `.snare input:nth-child(${step + 1})`
    );

    let closedHatInputs = document.querySelector(
      `.closedhat input:nth-child(${step + 1})`
    );
    let openHatInputs = document.querySelector(
      `.openhat input:nth-child(${step + 1})`
    );
    let hiTomInputs = document.querySelector(
      `.hitom input:nth-child(${step + 1})`
    );
    let loTomInputs = document.querySelector(
      `.lotom input:nth-child(${step + 1})`
    );
    let rimInputs = document.querySelector(`.rim input:nth-child(${step + 1})`);

    let cymbalInputs = document.querySelector(
      `.cymbal input:nth-child(${step + 1})`
    );

    if (kickInputs.checked) {
      player1.current.start();
    }
    if (snareInputs.checked) {
      player2.current.start();
    }
    if (closedHatInputs.checked) {
      player3.current.start();
    }
    if (openHatInputs.checked) {
      player4.current.start();
    }
    if (hiTomInputs.checked) {
      player5.current.start();
    }
    if (loTomInputs.checked) {
      player6.current.start();
    }
    if (rimInputs.checked) {
      player7.current.start();
    }
    if (cymbalInputs.checked) {
      player8.current.start();
    }

    index++;
    setStep(step);
  }

  const onCompositionChange = (instrument, newState) => {
    setComposition({ ...composition, [instrument]: newState });
  };

  // console.log(composition);

  return (
    <div>
      <h1> DrumMachine! </h1>
      <option> </option>
      <div className="drums">
        <br />
        <Kick
          composition={composition["kick"]}
          onCompositionChange={onCompositionChange}
        />
        <Snare
          composition={composition["snare"]}
          onCompositionChange={onCompositionChange}
        />
        <ClosedHat
          composition={composition["closedhat"]}
          onCompositionChange={onCompositionChange}
        />
        <OpenHat
          composition={composition["openhat"]}
          onCompositionChange={onCompositionChange}
        />
        <HiTom
          composition={composition["hitom"]}
          onCompositionChange={onCompositionChange}
        />
        <LoTom
          composition={composition["lotom"]}
          onCompositionChange={onCompositionChange}
        />
        <Rim
          composition={composition["rim"]}
          onCompositionChange={onCompositionChange}
        />
        <Cymbal
          composition={composition["cymbal"]}
          onCompositionChange={onCompositionChange}
        />
        <div className="Indicator">
          {[...Array(16)].map((_, i) => {
            return (
              <input
                type="checkbox"
                readOnly
                checked={i === currentStep}
                key={i}
              />
            );
          })}
        </div>
        <button disabled={!loaded} onClick={startPlaying}>
          Start
        </button>
        <button className="button2" onClick={stopPlaying}>
          Stop
        </button>
        <input
          type="range"
          min={60}
          max={180}
          onChange={(event) => {
            setTempo(event.target.value);
          }}
        />{" "}
        <p> bpm = {tempo} </p>
      </div>
    </div>
  );
}

export default DrumMachine;
