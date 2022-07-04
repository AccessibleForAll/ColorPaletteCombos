module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"comma-spacing": ["error", { before: false, after: true }],
		"react/prop-types": "off",
		// suppress errors for missing 'import React' in files
		"react/react-in-jsx-scope": "off",
		// allow jsx syntax in js files (for next.js project)
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], //should add ".ts" if typescript project
	},
}
