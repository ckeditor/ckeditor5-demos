/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import {
	ClassicEditor,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	BlockQuote,
	Bold,
	CloudServices,
	Essentials,
	FindAndReplace,
	Heading,
	Highlight,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageInsert,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Base64UploadAdapter,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	MediaEmbed,
	Paragraph,
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersEssentials,
	Strikethrough,
	Table,
	TableCaption,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
} from 'ckeditor5';

import deTranslations from 'ckeditor5/translations/de.js';
import arTranslations from 'ckeditor5/translations/ar.js';
import jaTranslations from 'ckeditor5/translations/ja.js';

import 'ckeditor5/ckeditor5.css';

const plugins = [
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	BlockQuote,
	Bold,
	CloudServices,
	Essentials,
	FindAndReplace,
	Heading,
	Highlight,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageInsert,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Base64UploadAdapter,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	MediaEmbed,
	Paragraph,
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersEssentials,
	Strikethrough,
	Table,
	TableCaption,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
];

/**
 * Localized CKEditor 5 demos (in German, Arabic and Japanese).
 */

ClassicEditor.create(
	document.querySelector('#cke5-localized-de-demo'),
	{
		language: 'de',
		plugins: plugins,
		placeholder: 'Tippen Sie Ihren Inhalt hier oder fügen Sie ihn ein!',
		toolbar: [
			'undo',
			'redo',
			'|',
			'findAndReplace',
			'|',
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'removeFormat',
			'|',
			'link',
			'insertImage',
			'insertTable',
			'highlight',
			'specialCharacters',
			{
				label: 'Einfügen',
				icon: 'plus',
				items: ['blockQuote', 'mediaEmbed', 'horizontalLine'],
			},
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'outdent',
			'indent',
		],
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
			],
			insert: {
				integrations: ['url'],
			},
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableProperties',
				'toggleTableCaption',
			],
		},
		translations: deTranslations,
	}
)
.then((editor) => {
	window.editor = editor;
})
.catch((error) => {
	console.error(error.stack);
});

ClassicEditor.create(
	document.querySelector('#cke5-localized-ar-demo'),
	{
		language: 'ar',
		plugins: plugins,
		placeholder: 'اكتب أو الصق المحتوى الخاص بك هنا!',
		toolbar: [
			'undo',
			'redo',
			'|',
			'findAndReplace',
			'|',
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'removeFormat',
			'|',
			'link',
			'insertImage',
			'insertTable',
			'highlight',
			'specialCharacters',
			{
				label: 'إدراج',
				icon: 'plus',
				items: ['blockQuote', 'mediaEmbed', 'horizontalLine'],
			},
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'outdent',
			'indent',
		],
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
			],
			insert: {
				integrations: ['url'],
			},
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableProperties',
				'toggleTableCaption',
			],
		},
		translations: arTranslations,
	}
)
.then((editor) => {
	window.editor = editor;
})
.catch((error) => {
	console.error(error.stack);
});

ClassicEditor.create(
	document.querySelector('#cke5-localized-ja-demo'),
	{
		language: 'ja',
		plugins: plugins,
		placeholder: 'こちらに内容を入力するか張り付けてください。',
		toolbar: [
			'undo',
			'redo',
			'|',
			'findAndReplace',
			'|',
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'removeFormat',
			'|',
			'link',
			'insertImage',
			'insertTable',
			'highlight',
			'specialCharacters',
			{
				label: '挿入',
				icon: 'plus',
				items: ['blockQuote', 'mediaEmbed', 'horizontalLine'],
			},
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'outdent',
			'indent',
		],
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
			],
			insert: {
				integrations: ['url'],
			},
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableProperties',
				'toggleTableCaption',
			],
		},
		translations: jaTranslations,
	}
)
.then((editor) => {
	window.editor = editor;
})
.catch((error) => {
	console.error(error.stack);
});
