import React from "react";

function ClosedHat({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    onCompositionChange("closedhat", newComposition);
  };

  return (
    <div>
      <div className="closedhat">
        <ul>
          <label className="customCheckbox">
            ClosedHat
            {[...Array(16)].map((_, i) => {
              return (
                <input
                  className="check"
                  key={`closedhat${i}`}
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

export default ClosedHat;
