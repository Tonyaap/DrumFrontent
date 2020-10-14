import React from "react";

function OpenHat({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log(newComposition);
    onCompositionChange("openhat", newComposition);
  };

  return (
    <div>
      <span> OpenHat</span>
      <div className="openhat">
        {[...Array(16)].map((_, i) => {
          return (
            <input
              className={`openhat${i}`}
              key={`openhat${i}`}
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

export default OpenHat;
