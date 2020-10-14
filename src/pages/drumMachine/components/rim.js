import React from "react";

function Rim({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log(newComposition);
    onCompositionChange("rim", newComposition);
  };

  return (
    <div>
      <span> Rim</span>
      <div className="rim">
        {[...Array(16)].map((_, i) => {
          return (
            <input
              className={`rim${i}`}
              key={`rim${i}`}
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

export default Rim;
