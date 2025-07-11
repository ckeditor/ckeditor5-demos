import {
	DecoupledEditor,
	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	ListProperties,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
	Strikethrough,
	Table,
	TableToolbar,
	TextTransformation,
	Underline
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

class HeadlessEditor extends DecoupledEditor {}

HeadlessEditor.builtinPlugins = [
	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	ListProperties,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
	Strikethrough,
	Table,
	TableToolbar,
	TextTransformation,
	Underline
];

HeadlessEditor.defaultConfig = {
	licenseKey: 'GPL',
	codeBlock: {
		languages: [
			{ language: 'css', label: 'CSS' },
			{ language: 'html', label: 'HTML' },
			{ language: 'javascript', label: 'JavaScript' },
			{ language: 'php', label: 'PHP' }
		]
	},
	image: {
		resizeUnit: 'px',
		toolbar: [
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	},
	language: 'en'
};

export default HeadlessEditor;
