import { useState } from "react"
import { getRelativeLuminance, deepCopyArrayOfObject } from "./utils"

import "./App.css"

import { AiOutlineReload } from "react-icons/ai"
import ColorInput from "./components/ColorInput/ColorInput"
import ContrastInfoCard from "./components/ContrastInfoCard/ContrastInfoCard"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

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
	const resetTextfields = () => {
		setColors(deepCopyArrayOfObject(initialColorState))
	}
	const handleDelete = (index) => {
		colors.splice(index, 1)
		setColors([...colors])
	}

	const colorCombinations = colors
		.map((color1) => {
			return colors.map((color2) => ({ color1, color2 }))
		})
		.flat()

	return (
		<div className="appContainer">
			<Header />
			<main className="main">
				<section className="instructionsContainer">
					<p>
						This contrast checker lets you compare up to 12 colors (hex codes)
						at once to help you plan an accessible design.
					</p>

					<p>
						It will show all possible combinations of background and foreground
						colors and whether they pass or fail the current requirements.
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
						<li>Level AA - 4.5:1 for normal text</li>
						<li>
							Level AA - 3:1 for large text*, graphics and user interface
							components
						</li>
						<li>Level AAA - 7:1 for normal text</li>
						<li>
							Level AAA - 4.5:1 for large text*, graphics and user interface
							components
						</li>
					</ul>
					<p className="small-ptext">
						*Large text = 24px normal or 18.66px bold.
					</p>
				</section>
				<section className="sectionContainer">
					{colors.map((obj, i) => (
						<ColorInput
							key={i}
							inputId={i + 1}
							bgColor={obj.colorCodeHex}
							onChange={handleColorInput}
							handleDelete={handleDelete}
							colorsLength={colors.length}
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
						<AiOutlineReload className="resetIcon" />
						Reset
					</button>
				</div>
				<section>
					<ul className="sectionContainer">
						{colorCombinations.map((colorObj, index) => (
							<ContrastInfoCard
								key={`${index}`}
								color1={colorObj.color1}
								color2={colorObj.color2}
							/>
						))}
					</ul>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default App
