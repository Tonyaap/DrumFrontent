import React from "react";

function Snare({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log(newComposition);
    onCompositionChange("snare", newComposition);
  };

  return (
    <div>
      <span> Snare</span>
      <div className="snare">
        {[...Array(16)].map((_, i) => {
          return (
            <input
              className={`snare${i}`}
              key={`snare${i}`}
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

export default Snare;
