/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import {
	ClassicEditor,
	Alignment,
	BlockQuote,
	Bold,
	CloudServices,
	Code,
	CodeBlock,
	Essentials,
	Font,
	Heading,
	Image,
	ImageInline,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Base64UploadAdapter,
	Indent,
	IndentBlock,
	Italic,
	LinkImage,
	List,
	ListProperties,
	PasteFromOffice,
	RemoveFormat,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableToolbar,
	TodoList,
	Underline,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

ClassicEditor.create(
	document.querySelector('#cke5-mobile-demo'),
	{
		plugins: [
			Alignment,
			BlockQuote,
			Bold,
			CloudServices,
			Code,
			CodeBlock,
			Essentials,
			Font,
			Heading,
			Image,
			ImageInline,
			ImageStyle,
			ImageToolbar,
			TableToolbar,
			ImageUpload,
			Base64UploadAdapter,
			Indent,
			IndentBlock,
			Italic,
			LinkImage,
			List,
			ListProperties,
			PasteFromOffice,
			RemoveFormat,
			Strikethrough,
			Subscript,
			Superscript,
			Table,
			TodoList,
			Underline,
		],
		toolbar: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'todoList',
			'outdent',
			'indent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'|',
			'undo',
			'redo',
		],
		heading: {
			options: [
				{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1',
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2',
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3',
				},
			],
		},
		image: {
			toolbar: [
				'imageTextAlternative',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
			],
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true,
			},
		},
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
		},
	}
)
.then((editor) => {
	window.editor = editor;
})
.catch((error) => {
	console.error(error.stack);
});
