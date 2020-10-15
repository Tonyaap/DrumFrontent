import React from "react";

function Rim({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log("rim", newComposition);
    onCompositionChange("rim", newComposition);
  };

  return (
    <div>
      <div className="rim">
        <ul>
          {" "}
          Rim
          {[...Array(16)].map((_, i) => {
            return (
              <input
                className="checkbox"
                key={`rim${i}`}
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

export default Rim;
