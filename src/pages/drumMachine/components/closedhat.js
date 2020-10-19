import React from "react";

function ClosedHat({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log("closedhat", newComposition);
    onCompositionChange("closedhat", newComposition);
  };

  return (
    <div>
      <div className="closedhat">
        <ul>
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
        </ul>
      </div>
    </div>
  );
}

export default ClosedHat;
