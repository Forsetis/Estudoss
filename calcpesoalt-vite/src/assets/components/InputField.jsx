import React from "react";

function InputField({ label, value, onChange, step }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <label>{label}: </label>
      <input
        type="number"
        value={value}
        step={step}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
