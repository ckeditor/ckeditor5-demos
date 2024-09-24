/* global module */

module.exports = {
	env: {
		browser: true
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'react'
	],
	extends: [
		'ckeditor5'
	],
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'no-alert': 'off',
		'ckeditor5-rules/prevent-license-key-leak': 'error'
	}
};
