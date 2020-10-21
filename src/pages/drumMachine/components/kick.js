import React from "react";

function Kick({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    onCompositionChange("kick", newComposition);
  };

  return (
    <div>
      {" "}
      <div className="kick">
        <ul>
          <label className="customCheckbox">
            Kick
            {[...Array(16)].map((_, i) => {
              return (
                <input
                  className="checkbox"
                  key={`kick${i}`}
                  type="checkbox"
                  id="customcheck"
                  checked={composition[i]}
                  onChange={() => updateComposition(i)}
                />
              );
            })}{" "}
          </label>
        </ul>
      </div>
    </div>
  );
}

export default Kick;
