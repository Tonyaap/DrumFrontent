import React from "react";

function Sequencer({ composition, onCompositionChange, instrument }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;
    onCompositionChange(instrument, newComposition);
  };

  return (
    <div>
      <div className={instrument}>
        <ul>
          <label className="customCheckbox">
            {instrument}
            {[...Array(16)].map((_, i) => {
              return (
                <input
                  className="check"
                  key={`${instrument}${i}`}
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

export default Sequencer;
