import React from "react";

function HiTom({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log("hitom", newComposition);
    onCompositionChange("hitom", newComposition);
  };

  return (
    <div>
      <div className="hitom">
        <ul>
          <label className="customCheckbox">
            HiTom
            {[...Array(16)].map((_, i) => {
              return (
                <input
                  className="check"
                  key={`hitom${i}`}
                  type="checkbox"
                  checked={composition[i]}
                  onChange={() => updateComposition(i)}
                />
              );
            })}
          </label>
        </ul>
      </div>
    </div>
  );
}

export default HiTom;
