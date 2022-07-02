import React from "react"
import {AiOutlineCloseCircle} from 'react-icons/ai'
const ColorInput = ({ inputId,colorsLength, bgColor, onChange,handleDelete }) => {
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
        {(colorsLength > 2)?<button className="deleteButton" aria-label="delete input" onClick={()=>handleDelete(inputId-1)}>
        <AiOutlineCloseCircle color="grey" /></button>:null}
      </div>
    </div>
  )
}

export default ColorInput
