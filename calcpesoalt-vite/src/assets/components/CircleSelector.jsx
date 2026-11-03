import React from "react";
import "./CircleSelector.css";

function CircleSelector({ label, options, selected, onChange }) {
  return (
    <div className="circle-selector" style={{ marginTop: "15px" }}>
      <p>{label}:</p>
      {options.map((opt) => (
        <label key={opt} style={{ marginRight: "15px" }}>
          <input
            type="radio"
            value={opt}
            checked={selected === opt}
            onChange={() => onChange(opt)}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

export default CircleSelector;
