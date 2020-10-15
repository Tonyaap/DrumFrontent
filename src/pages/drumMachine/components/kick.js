import React from "react";

function Kick({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log("kick", newComposition);
    onCompositionChange("kick", newComposition);
  };

  return (
    <div>
      <span> Kick</span>
      <div className="kick">
        {[...Array(16)].map((_, i) => {
          return (
            <input
              className={`kick${i}`}
              key={`kick${i}`}
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

export default Kick;
