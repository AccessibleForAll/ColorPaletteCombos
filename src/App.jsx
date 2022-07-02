import { useState } from "react"
import { getRelativeLuminance,deepCopyArrayOfObject } from "./utils"

import "./App.css"

import {AiOutlineReload} from "react-icons/ai"
import ColorInput from "./components/ColorInput"
import ContrastInfoCard from "./components/ContrastInfoCard"

const initialColorState = [
  { colorCodeHex: "#ffffff", relativeLuminance: 1 },
  { colorCodeHex: "#000000", relativeLuminance: 0 },
]
function App() {
  const [colors, setColors] = useState(deepCopyArrayOfObject(initialColorState))

  const addNewColorInput = () => {
    setColors([...colors, { colorCodeHex: "#", relativeLuminance: null }])
  }

  const handleColorInput = (e, index) => {
    let hexColor = e.target.value
    if (!hexColor.startsWith("#")) {
      hexColor = "#" + hexColor
    }
    setColors(
      [...colors],
      (colors[index].colorCodeHex = hexColor),
      (colors[index].relativeLuminance = getRelativeLuminance(hexColor))
    )
  }
  const resetTextfields = () =>{
    setColors(deepCopyArrayOfObject(initialColorState))
  }
  const handleDelete = (index) =>{
    colors.splice(index,1)
    setColors([...colors])
  }
  console.log(colors)
  return (
    <div className="appContainer">
      <header>
        <h1>Color Palette Combos</h1>
      </header>
      <main>
        <section className="instructionsContainer">
          <p>
            Contrast ratio is the different in lightness between two colors.
          </p>
          <p>Requirements according to WCAG 2.0:</p>
          <ul className="wcagRequirementsList">
            <li>Level AA requires a ratio of 4.5:1 for normal text</li>
            <li>
              Level AA requires a ratio of 3:1 for large text, graphics and user
              interface components
            </li>
            <li>Level AAA requires a ratio of 7:1 for normal text</li>
            <li>
              Level AAA requires a ratio of 4.5:1 for large text, graphics and
              user interface components
            </li>
          </ul>
          <p>
            Large text is defined as 24px with normal font weight or 18.66px
            with bold font weight.
          </p>
        </section>
        <section className="colorInputContainer">
          {colors.map((obj, i) => (
            <ColorInput
              key={i}
              inputId={i + 1}
              bgColor={obj.colorCodeHex}
              onChange={handleColorInput}
              handleDelete={handleDelete}
            />
          ))}
        </section>
        <div className="addColorInputBtnContainer">
          {colors.length < 12 && (
            <button className="addColorBtn" onClick={addNewColorInput}>
              <strong>+</strong> Add color
            </button>
          )}
          <button className="resetBtn" onClick={resetTextfields}>
            <AiOutlineReload className="resetIcon"/>
            Reset
          </button>
        </div>
        <section className="contrastInfoCardsContainer">
          {colors.map((color1, index1) => (
            <div key={`${color1}${index1}`}>
              {colors.map((color2, index2) => (
                <ContrastInfoCard
                  key={`${index1},${index2}`}
                  color1={color1}
                  color2={color2}
                />
              ))}
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
