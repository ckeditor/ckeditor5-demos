/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// Put your Web Spell Checker license key here, for more info how to get the key see https://ckeditor.com/docs/ckeditor5/40.2.0/features/spelling-and-grammar-checking.html.
const WEB_SPELL_CHECKER_LICENSE_KEY = '';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import cloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import WProofreader from '@webspellchecker/wproofreader-ckeditor5/src/wproofreader';

ClassicEditor.create(document.querySelector('#cke5-spellchecker-demo'), {
	plugins: [
		cloudServices,
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
})
	.then((editor) => {
		window.editor = editor;
	})
	.catch((error) => {
		console.error(error.stack);
	});
