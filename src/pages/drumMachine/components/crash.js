import React from "react";

function Cymbal({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log("cymbal", newComposition);
    onCompositionChange("cymbal", newComposition);
  };

  return (
    <div>
      <div className="cymbal">
        <ul>
          Cymbal
          {[...Array(16)].map((_, i) => {
            return (
              <input
                className="check"
                key={`crash${i}`}
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

export default Cymbal;
