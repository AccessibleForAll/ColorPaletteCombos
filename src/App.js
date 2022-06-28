import { useState } from 'react'

import './App.css'

import ColorInput from './components/ColorInput'

function App() {
  const [colors, setColors] = useState([{ colorCode: '#ffffff' }, { colorCode: '#000000' }])

  const addNewColorInput = () => {
    setColors([...colors, { colorCode: '#' }])
  }

  const handleColorInput = (e, index) => {
    let hexColor = e.target.value
    if (!hexColor.startsWith('#')) {
      hexColor = '#' + hexColor
    }
    setColors([...colors], (colors[index].colorCode = hexColor))
  }
  return (
    <div className="appContainer">
      <header>
        <h1>Color Palette Combos</h1>
      </header>
      <main>
        <section>
          <p>Contrast ratio is the different in lightness between two colors.</p>
          <p>Requirements according to WCAG 2.0:</p>
          <ul>
            <li>Level AA requires a ratio of 4.5:1 for normal text</li>
            <li>Level AA requires a ratio of 3:1 for large text, graphics and user interface components</li>
            <li>Level AAA requires a ratio of 7:1 for normal text</li>
            <li>Level AAA requires a ratio of 4.5:1 for large text, graphics and user interface components</li>
          </ul>
          <p>Large text is defined as 24px with normal font weight or 18.66px with bold font weight.</p>
        </section>
        <section>
          {colors.map((obj, i) => (
            <ColorInput key={i} inputId={i + 1} bgColor={obj.colorCode} onChange={handleColorInput} />
          ))}

          {colors.length < 12 && <button onClick={addNewColorInput}>Add color</button>}
        </section>
      </main>
    </div>
  )
}

export default App
