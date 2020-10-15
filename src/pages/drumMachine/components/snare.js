import React from "react";

function Snare({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log("snare", newComposition);
    onCompositionChange("snare", newComposition);
  };

  return (
    <div>
      <div className="snare">
        <ul>
          {" "}
          Snare
          {[...Array(16)].map((_, i) => {
            return (
              <input
                className="checkbox"
                key={`snare${i}`}
                type="checkbox"
                checked={composition[i]}
                onChange={() => updateComposition(i)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Snare;
