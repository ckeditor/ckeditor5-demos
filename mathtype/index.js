/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import cloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import MathType from '@wiris/mathtype-ckeditor5/src/plugin';

ClassicEditor.create(document.querySelector('#cke5-mathtype-demo'), {
	plugins: [
		cloudServices,
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
		Underline,
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
			'redo',
		],
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'tableCellProperties',
			'toggleTableCaption',
		],
		tableToolbar: ['bold', 'italic'],
	},
})
	.then((editor) => {
		window.editor = editor;
	})
	.catch((error) => {
		console.error(error.stack);
	});
