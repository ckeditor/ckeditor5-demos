/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * CKEditor 5 requires a license key. If you have a commercial license key, you can use it here.
 * You can also get a trial license key from https://ckeditor.com/pricing/.
 *
 * Otherwise, you use the "GPL" license key and remove the plugins imported from the "ckeditor5-premium-features" package.
 */
const LICENSE_KEY = '';

if (!LICENSE_KEY) {
	alert( 'CKEditor 5 requires a license key. Check the index.js file for more information.' );
}

import {
	InlineEditor,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Base64UploadAdapter,
	CKFinder,
	CKFinderUploadAdapter,
	CloudServices,
	EditorConfig,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	PictureEditing,
	Indent,
	Link,
	List,
	Mention,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
} from 'ckeditor5';

import {
	SlashCommand
} from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

const defaultConfig = {
	plugins: [
		Essentials,
		Autoformat,
		Bold,
		Italic,
		BlockQuote,
		CKFinder,
		CKFinderUploadAdapter,
		CloudServices,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Base64UploadAdapter,
		Indent,
		Link,
		List,
		Mention,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		Table,
		TableToolbar,
		TextTransformation,
		...(LICENSE_KEY ? [SlashCommand] : []),
	],
	licenseKey: LICENSE_KEY,
	toolbar: [
		'undo',
		'redo',
		'|',
		'heading',
		'|',
		'bold',
		'italic',
		'|',
		'link',
		'uploadImage',
		'insertTable',
		'blockQuote',
		'|',
		'bulletedList',
		'numberedList',
		'|',
		'outdent',
		'indent',
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
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4',
			},
		],
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
		],
	},
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
	},
};

const headerConfig = {
	plugins: [Essentials, Autoformat, Bold, Italic, Heading, Link, Paragraph],
	toolbar: ['heading', '|', 'bold', 'italic', 'link'],
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
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4',
			},
		],
	},
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
	},
};

const inlineElementsIds = [
	'inline-header',
	'inline-main',
	'inline-footer-first',
	'inline-footer-second',
];

inlineElementsIds.forEach((id) => {
	const element = document.getElementById(id);

	if (!element) {
		return;
	}

	InlineEditor.create(
		element,
		id === 'inline-header' ? headerConfig : defaultConfig
	)
		.then((editor) => {
			window.editor = editor;
		})
		.catch((error) => {
			console.error(error.stack);
		});
});
