import React from "react";

function Kick({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log(newComposition);
    onCompositionChange("kick", newComposition);
  };

  return (
    <div>
      <span> Kick</span>
      <div className="kick">
        {[...Array(16)].map((_, i) => {
          return (
            <input
              className={`p${i}`}
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
