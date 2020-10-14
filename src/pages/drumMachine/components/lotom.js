import React from "react";

function LoTom({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log(newComposition);
    onCompositionChange("lotom", newComposition);
  };

  return (
    <div>
      <span> LoTom</span>
      <div className="lotom">
        {[...Array(16)].map((_, i) => {
          return (
            <input
              className={`lotom${i}`}
              key={`lotom${i}`}
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

export default LoTom;
