import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import Sequencer from "./components/Sequencer";
import { Player } from "tone";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCompositionNames,
  selectCompositionById,
  selectUser,
} from "../../store/user/selectors";
import { selectMessage } from "../../store/appState/selectors";
import { createComposition } from "../../store/user/actions";
import StartButton from "./components/Startbutton";
import Stopbutton from "./components/Stopbutton";

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

const storageServerUrl =
  "https://tonyaapdrumsamples.s3.eu-west-3.amazonaws.com";

const instrumentUrls = {
  kick: `${storageServerUrl}/808-Kick.wav`,
  snare: `${storageServerUrl}/808-Snare.wav`,
  closedhat: `${storageServerUrl}/808-HiHats.wav`,
  openhat: `${storageServerUrl}/808-OpenHiHats.wav`,
  hitom: `${storageServerUrl}/808-HiTom.wav`,
  lotom: `${storageServerUrl}/808-LoTom.wav`,
  rim: `${storageServerUrl}/808-Rim.wav`,
  cymbal: `${storageServerUrl}/808-Cowbell.wav`,
};

function DrumMachine() {
  const dispatch = useDispatch();

  const [newCompositionName, setNewComposionName] = useState("");
  const [composition, setComposition] = useState(initialStepState);
  const [filterById, setFilterById] = useState(0);
  const [tempo, setTempo] = useState(60);
  const [volume, setVolume] = useState(-12);
  const [currentStep, setStep] = useState(0);
  const userId = useSelector(selectUser);
  const compositionNames = useSelector(selectCompositionNames);
  const compositionById = useSelector(selectCompositionById(filterById));
  const message = useSelector(selectMessage);

  const buffers = useRef();
  const players = useRef({});

  Tone.Destination.volume.value = volume;

  let index = 0;

  async function startPlaying() {
    await Tone.start();
    Tone.Transport.start();
    console.log("audio ready");
  }
  async function stopPlaying() {
    await Tone.Transport.stop();

    console.log("audio stopped");
  }

  useEffect(() => {
    dispatch(createComposition());
  }, [dispatch]);

  useEffect(() => {
    Tone.Transport.scheduleRepeat((time) => {
      repeat(time);
    }, "16n");

    players.current = {
      kick: new Player().toDestination(),
      snare: new Player().toDestination(),
      closedhat: new Player().toDestination(),
      openhat: new Player().toDestination(),
      hitom: new Player().toDestination(),
      lotom: new Player().toDestination(),
      rim: new Player().toDestination(),
      cymbal: new Player().toDestination(),
    };

    buffers.current = new Tone.Buffers(instrumentUrls);

    Object.keys(players.current).forEach((instrument) => {
      players.current[instrument].buffer = buffers.current.get(instrument);
    });
  }, []);

  useEffect(() => {
    Tone.Transport.bpm.value = tempo;
  }, [tempo]);

  const onCompositionChange = (instrument, newState) => {
    console.log("hi", newState);
    setComposition({ ...composition, [instrument]: newState });
  };

  function repeat(time) {
    let step = index % 16;
    Object.keys(players.current).forEach((instrument, index) => {
      console.log(step, composition[instrument]);
      if (
        document.querySelector(`.${instrument} input:nth-child(${step + 1} )`)
          .checked
      ) {
        players.current[instrument].start(time);
      }
    });
    index++;
    setStep(step);
  }

  useEffect(() => {
    setComposition({
      kick: compositionById.kick?.map((step) => {
        return parseInt(step);
      }),
      snare: compositionById.snare?.map((step) => {
        return parseInt(step);
      }),
      closedhat: compositionById.closedhat?.map((step) => {
        return parseInt(step);
      }),
      openhat: compositionById.openhat?.map((step) => {
        return parseInt(step);
      }),
      hitom: compositionById.hitom?.map((step) => {
        return parseInt(step);
      }),
      lotom: compositionById.lotom?.map((step) => {
        return parseInt(step);
      }),
      rim: compositionById.rim?.map((step) => {
        return parseInt(step);
      }),
      cymbal: compositionById.cymbal?.map((step) => {
        return parseInt(step);
      }),
    });
  }, [filterById]);

  console.log(compositionById);

  return (
    <div className="background">
      <div className="stepSequencer">
        <h1> Drum_Machine! </h1>
        <input
          type="range"
          min={-50}
          max={0}
          onChange={(event) => {
            setVolume(event.target.value);
          }}
        />
        Volume
        <br></br>
        <input
          type="range"
          step="1"
          min={60}
          max={180}
          onChange={(event) => {
            setTempo(event.target.value);
          }}
        />{" "}
        BPM = {tempo}
        <br></br>
        <br></br>
        <div className="drums">
          <br />
          <div className="indicator">
            {Object.keys(players.current).map((instrument) => {
              return (
                <Sequencer
                  key={instrument}
                  composition={composition[instrument]}
                  onCompositionChange={onCompositionChange}
                  instrument={instrument}
                />
              );
            })}
            <div className="Indicator">
              <label className="customCheckbox">
                {[...Array(16)].map((_, i) => {
                  return (
                    <input
                      className="check"
                      type="checkbox"
                      readOnly
                      checked={i === currentStep}
                      key={i}
                    />
                  );
                })}
              </label>
            </div>
          </div>
          <br></br>
          <button className="button2" onClick={startPlaying}>
            Start
            <StartButton />
          </button>
          <button className="button2" onClick={stopPlaying}>
            Stop
            <Stopbutton />
          </button>
          <br></br>
          <br></br>
          <select
            onChange={(event) => {
              setFilterById(event.target.value);
            }}
          >
            {compositionNames.map((composition) => {
              return (
                <option key={composition.id} value={composition.id}>
                  {" "}
                  {composition.compositionName}{" "}
                </option>
              );
            })}
          </select>
          <button className="button1"> Load composition </button>
          <br></br>
          <input
            className="input"
            type="compsitionName"
            onChange={(event) => {
              setNewComposionName(event.target.value);
            }}
          />
          {localStorage.token ? (
            <button
              className="button1"
              onClick={() => {
                dispatch(
                  createComposition(userId.id, newCompositionName, composition)
                );
              }}
            >
              Save composition
            </button>
          ) : (
            <p> Please login to save you beat </p>
          )}
          <p>{message?.text} </p>
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;
