import React from "react";

function Snare({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;

    onCompositionChange("snare", newComposition);
  };

  return (
    <div>
      <div className="snare">
        <ul>
          {" "}
          <label className="customCheckbox">
            Snare
            {[...Array(16)].map((_, i) => {
              return (
                <input
                  className="check"
                  key={`snare${i}`}
                  type="checkbox"
                  checked={composition[i]}
                  onChange={() => updateComposition(i)}
                />
              );
            })}
          </label>
        </ul>
      </div>
    </div>
  );
}

export default Snare;
