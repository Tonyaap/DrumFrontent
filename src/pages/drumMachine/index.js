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

function DrumMachine() {
  const compositions = useSelector(selectCompositions);

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

  const [composition, setComposition] = useState(initialStepState);
  const [tempo, setTempo] = useState(60);
  const [loaded, setLoaded] = useState(false);
  const [compositionName, setCompositionName] = useState("");

  console.log("compositionName", compositionName);
  console.log("compositions", compositions);

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
      // console.log("cleanup function");
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

  return (
    <div className="background">
      <div className="stepSequencer">
        <h1> DrumMachine! </h1>
        <br></br>
        <input
          type="range"
          min={60}
          max={180}
          onChange={(event) => {
            setTempo(event.target.value);
          }}
        />{" "}
        BPM = {tempo}
        <br></br>
        <div className="drums">
          <br />
          <div className="indicator">
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
                    className="checkbox"
                    type="checkbox"
                    readOnly
                    checked={i === currentStep}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
          <br></br>
          <button className="button2" disabled={!loaded} onClick={startPlaying}>
            Start
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-play"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
              />
            </svg>
          </button>
          <button className="button2" onClick={stopPlaying}>
            Stop
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-stop"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"
              />
            </svg>
          </button>
          <br></br>
          <br></br>

          <select
            onChange={(event) => {
              setCompositionName(event.target.value);
              console.log(compositionName);

              setComposition({
                kick: compositions[0].kick.map((step) => {
                  return parseInt(step);
                }),
                snare: compositions[0].snare.map((step) => {
                  return parseInt(step);
                }),
                closedhat: compositions[0].closedhat.map((step) => {
                  return parseInt(step);
                }),
                openhat: compositions[0].closedhat.map((step) => {
                  return parseInt(step);
                }),
                hitom: compositions[0].closedhat.map((step) => {
                  return parseInt(step);
                }),
                lotom: compositions[0].lotom.map((step) => {
                  return parseInt(step);
                }),
                rim: compositions[0].rim.map((step) => {
                  return parseInt(step);
                }),
                cymbal: compositions[0].cymbal.map((step) => {
                  return parseInt(step);
                }),
              });
            }}
          >
            {compositions?.map((composition) => {
              return (
                <option key={composition.id}>
                  {" "}
                  {composition.compositionName}{" "}
                </option>
              );
            })}
          </select>
          <button className="button1"> Load composition </button>
          <br></br>
          <input className="input" type="compsitionName" />
          <button className="button1"> Save composition </button>
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;
