/**
 * CKEditor 5 requires a license key.
 * 
 * The "GPL" license key used below only allows you to use the open-source features.
 * To use the premium features, replace it with your commercial license key.
 * If you don't have one, you can get a trial license key from https://ckeditor.com/pricing/.
 */
const LICENSE_KEY = 'GPL';

if (LICENSE_KEY === 'GPL') {
	alert( 'Premium features are disabled, because they require a commercial license key. Check the index.js file for more information.' );
}

import {
	InlineEditor,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Base64UploadAdapter,
	CloudServices,
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

		// Include premium features only if the license key is not GPL.
		...( LICENSE_KEY !== 'GPL' ? [
			SlashCommand,
		] : [] ),
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
