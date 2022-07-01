import { useState } from "react"
import { getRelativeLuminance } from "./utils"

import "./App.css"

import ColorInput from "./components/ColorInput"
import ContrastInfoCard from "./components/ContrastInfoCard"
import Footer from "./components/Footer"

function App() {
  const [colors, setColors] = useState([
    { colorCodeHex: "#ffffff", relativeLuminance: 1 },
    { colorCodeHex: "#000000", relativeLuminance: 0 },
  ])

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
          <p>
            Requirements according to{" "}
            <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">
              WCAG 2.0
            </a>{" "}
            and{" "}
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html">
              WCAG 2.1:
            </a>
          </p>
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
            />
          ))}
        </section>
        <div className="addColorInputBtnContainer">
          {colors.length < 12 && (
            <button onClick={addNewColorInput}>
              <strong>+</strong> Add color
            </button>
          )}
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
      <Footer />
    </div>
  )
}

export default App
