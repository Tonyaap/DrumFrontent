import React from "react";

function Cymbal({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log(newComposition);
    onCompositionChange("cymbal", newComposition);
  };

  return (
    <div>
      <span> Cymbal</span>
      <div className="cymbal">
        {[...Array(16)].map((_, i) => {
          return (
            <input
              className={`cymbal${i}`}
              key={`crash${i}`}
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

export default Cymbal;
