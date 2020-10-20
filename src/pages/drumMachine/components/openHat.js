import React from "react";

function OpenHat({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    console.log("openhat", newComposition);
    onCompositionChange("openhat", newComposition);
  };

  return (
    <div>
      <div className="openhat">
        <ul>
          {" "}
          <label className="customCheckbox">
            OpenHat
            {[...Array(16)].map((_, i) => {
              return (
                <input
                  className="check"
                  key={`openhat${i}`}
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

export default OpenHat;
