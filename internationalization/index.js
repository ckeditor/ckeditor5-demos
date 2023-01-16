/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import cloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';

const plugins = [
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	BlockQuote,
	Bold,
	CKFinder,
	cloudServices,
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
	UploadAdapter,
];

/**
 * Localized CKEditor 5 demos (in German, Arabic and Japanese).
 */

window.editor = {};

const germanEditorElement = document.querySelector( '#cke5-localized-de-demo' );

ClassicEditor.create( germanEditorElement, {
	language: 'de',
	content: 'de',
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
			items: [
				'blockQuote',
				'mediaEmbed',
				'horizontalLine'
			]
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
			'imageTextAlternative', 'toggleImageCaption',
			'|',
			'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side'
		],
		insert: {
			integrations: [ 'insertImageViaUrl' ]
		}
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'toggleTableCaption'
		]
	}
} )
	.then( editor => {
		window.editor.de = editor;

		return editor;
	} ).catch( error => {
		console.error( error.stack );
	} );

const arabicEditorElement = document.querySelector( '#cke5-localized-ar-demo' );

ClassicEditor.create( arabicEditorElement, {
	language: 'ar',
	content: 'ar',
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
			items: [
				'blockQuote',
				'mediaEmbed',
				'horizontalLine'
			]
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
			'imageTextAlternative', 'toggleImageCaption',
			'|',
			'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side'
		],
		insert: {
			integrations: [ 'insertImageViaUrl' ]
		}
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'toggleTableCaption'
		]
	}
} )
	.then( editor => {
		window.editor.ar = editor;

		return editor;
	} ).catch( error => {
		console.error( error.stack );
	} );

const japaneseEditorElement = document.querySelector( '#cke5-localized-ja-demo' );

ClassicEditor.create( japaneseEditorElement, {
	language: 'ja',
	content: 'ja',
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
			items: [
				'blockQuote',
				'mediaEmbed',
				'horizontalLine'
			]
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
			'imageTextAlternative', 'toggleImageCaption',
			'|',
			'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side'
		],
		insert: {
			integrations: [ 'insertImageViaUrl' ]
		}
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'toggleTableCaption'
		]
	}
} )
	.then( editor => {
		window.editor.jp = editor;

		return editor;
	} ).catch( error => {
		console.error( error.stack );
	} );
