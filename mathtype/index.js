import {
	ClassicEditor,
	Alignment,
	Essentials,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CloudServices,
	FontSize,
	FontFamily,
	Heading,
	Highlight,
	Image,
	ImageUpload,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Strikethrough,
	Table,
	TableCaption,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TableColumnResize,
	Underline
} from 'ckeditor5';

import MathType from '@wiris/mathtype-ckeditor5/dist/index.js';

import 'ckeditor5/ckeditor5.css';

ClassicEditor.create(
	document.querySelector( '#cke5-mathtype-demo' ),
	{
		licenseKey: 'GPL',
		plugins: [
			CloudServices,
			MathType,
			Essentials,
			Alignment,
			Autoformat,
			Bold,
			Italic,
			BlockQuote,
			FontFamily,
			FontSize,
			Heading,
			Highlight,
			Image,
			ImageUpload,
			Link,
			List,
			Paragraph,
			PasteFromOffice,
			Strikethrough,
			Table,
			TableCaption,
			TableCellProperties,
			TableProperties,
			TableToolbar,
			TableColumnResize,
			Underline
		],
		toolbar: {
			items: [
				'heading',
				'|',
				'fontsize',
				'fontfamily',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'highlight',
				'|',
				'alignment',
				'|',
				'numberedList',
				'bulletedList',
				'|',
				'MathType',
				'ChemType',
				'|',
				'insertTable',
				'undo',
				'redo'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableProperties',
				'tableCellProperties',
				'toggleTableCaption'
			],
			tableToolbar: [ 'bold', 'italic' ]
		}
	}
)
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( error.stack );
	} );
