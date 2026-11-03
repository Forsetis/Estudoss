import React from "react";
import "./Button.css";

function Button({ onClick, text }) {
  return (
    <button style={{ marginTop: "20px" }} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
