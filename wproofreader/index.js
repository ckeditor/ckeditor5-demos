/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// WProofreader plugin require a license key to work properly.
// For more info how to get the key, see https://ckeditor.com/docs/ckeditor5/latest/features/spelling-and-grammar-checking.html.
const WEB_SPELL_CHECKER_LICENSE_KEY = '';

if (!WEB_SPELL_CHECKER_LICENSE_KEY) {
	alert(
		'Web Spell Checker Features included in this demo require a license key.\n' +
		'Check the index.js file for more information.'
	);
}

import {
	ClassicEditor,
	Essentials,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CloudServices,
	Heading,
	MediaEmbed,
	Indent,
	IndentBlock,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableColumnResize,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
} from 'ckeditor5';

import { WProofreader } from '@webspellchecker/wproofreader-ckeditor5';

import 'ckeditor5/ckeditor5.css';

import '@webspellchecker/wproofreader-ckeditor5/index.css';

ClassicEditor.create(
	document.querySelector('#cke5-spellchecker-demo'),
	{
		plugins: [
			CloudServices,
			Essentials,
			Autoformat,
			BlockQuote,
			Bold,
			Heading,
			Indent,
			IndentBlock,
			Italic,
			Link,
			List,
			MediaEmbed,
			Paragraph,
			PasteFromOffice,
			Table,
			TableColumnResize,
			TableCellProperties,
			TableProperties,
			TableToolbar,
			TextTransformation,
			TodoList,
			WProofreader,
		],
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'link',
				'bulletedList',
				'numberedList',
				'todoList',
				'|',
				'indent',
				'outdent',
				'|',
				'blockQuote',
				'insertTable',
				'mediaEmbed',
				'undo',
				'redo',
				'wproofreader',
			],
		},
		indentBlock: {
			offset: 1,
			unit: 'em',
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableProperties',
				'tableCellProperties',
			],
		},
		wproofreader: {
			autoSearch: true,
			enableGrammar: true,
			serviceId: WEB_SPELL_CHECKER_LICENSE_KEY,
			lang: 'auto',
			srcUrl:
				'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js',
		},
	}
)
.then((editor) => {
	window.editor = editor;
})
.catch((error) => {
	console.error(error.stack);
});
