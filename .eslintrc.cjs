/* global module */

module.exports = {
	env: {
		browser: true
	},
	extends: [
		'ckeditor5'
	],
	rules: {
		'no-alert': 'off',
		'ckeditor5-rules/prevent-license-key-leak': 'error'
	}
};
