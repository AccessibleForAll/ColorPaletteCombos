export const convertHexToRGB = (hexCode) => {
	let R
	let G
	let B

	if (hexCode.length === 4) {
		R = parseInt(hexCode[1] + hexCode[1], 16)
		G = parseInt(hexCode[2] + hexCode[2], 16)
		B = parseInt(hexCode[3] + hexCode[3], 16)
	} else {
		R = parseInt(hexCode.slice(1, 3), 16)
		G = parseInt(hexCode.slice(3, 5), 16)
		B = parseInt(hexCode.slice(5, 7), 16)
	}
	return [R, G, B]
}

export const getRelativeLuminance = (hexColor) => {
	const [R, G, B] = convertHexToRGB(hexColor)
	if (isNaN(R) || isNaN(G) || isNaN(B)) {
		return null
	}
	const inverseRGB = [R, G, B].map((value) => value / 255)
	const [r, g, b] = inverseRGB.map((value) =>
		value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
	)

	const relativeLuminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

	return relativeLuminance
}

export const getColorContrast = (relativeLuminance1, relativeLuminance2) => {
	if (relativeLuminance1 === null || relativeLuminance2 === null) {
		return null
	}
	const lighterColor = Math.max(relativeLuminance1, relativeLuminance2)
	const darkerColor = Math.min(relativeLuminance1, relativeLuminance2)

	const contrast = (lighterColor + 0.05) / (darkerColor + 0.05)
	return contrast
}

export const deepCopyArrayOfObject = (array) => {
	return array.map((a) => ({ ...a }))
}
