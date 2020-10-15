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
      <span> ClosedHat</span>
      <div className="closedhat">
        {[...Array(16)].map((_, i) => {
          return (
            <input
              className={`closedhat${i}`}
              key={`closedhat${i}`}
              type="checkbox"
              checked={composition[i]}
              onChange={() => updateComposition(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ClosedHat;
