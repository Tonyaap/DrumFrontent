import React from "react";

function HiTom({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log(newComposition);
    onCompositionChange("hitom", newComposition);
  };

  return (
    <div>
      <span> HiTom</span>
      <div className="hitom">
        {[...Array(16)].map((_, i) => {
          return (
            <input
              className={`hitom${i}`}
              key={`hitom${i}`}
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

export default HiTom;
