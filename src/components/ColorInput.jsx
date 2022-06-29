import React from "react";

const ColorInput = (props) => {
  const { inputId, bgColor, onChange } = props;
  return (
    <div className="colorInputContainer">
      <div className="colorSwatch" style={{ backgroundColor: bgColor }}></div>
      <div className="inputContainer">
        <label htmlFor={`colorInput-${inputId}`}>Color {inputId}:</label>
        <input
          type="text"
          maxLength={7}
          id={`colorInput-${inputId}`}
          name={`colorInput-${inputId}`}
          value={bgColor}
          onChange={(e) => onChange(e, inputId - 1)}
        />
      </div>
    </div>
  );
};

export default ColorInput;
