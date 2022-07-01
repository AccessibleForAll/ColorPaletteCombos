import React from "react"
import {AiOutlineCloseCircle} from 'react-icons/ai'
const ColorInput = ({ inputId, bgColor, onChange,handleDelete }) => {
  console.log(typeof inputId)
  return (
    <div className="colorInputContainer">
      <div className="colorSwatch" style={{ backgroundColor: bgColor }}></div>
      {(inputId > 2)?<AiOutlineCloseCircle color="red" className="deleteButton" onClick={()=>handleDelete(inputId-1)}/>:null}
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
  )
}

export default ColorInput
