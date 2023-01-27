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
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import CKBox from '@ckeditor/ckeditor5-ckbox/src/ckbox';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';
import ExportWord from '@ckeditor/ckeditor5-export-word/src/exportword';
import ImportWord from '@ckeditor/ckeditor5-import-word/src/importword';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Font from '@ckeditor/ckeditor5-font/src/font';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Style from '@ckeditor/ckeditor5-style/src/style';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import WProofreader from '@webspellchecker/wproofreader-ckeditor5/src/wproofreader';

const REDUCED_MATERIAL_COLORS = [
	{ label: 'Red 50', color: '#ffebee' },
	{ label: 'Purple 50', color: '#f3e5f5' },
	{ label: 'Indigo 50', color: '#e8eaf6' },
	{ label: 'Blue 50', color: '#e3f2fd' },
	{ label: 'Cyan 50', color: '#e0f7fa' },
	{ label: 'Teal 50', color: '#e0f2f1' },
	{ label: 'Light green 50', color: '#f1f8e9' },
	{ label: 'Lime 50', color: '#f9fbe7' },
	{ label: 'Amber 50', color: '#fff8e1' },
	{ label: 'Orange 50', color: '#fff3e0' },
	{ label: 'Grey 50', color: '#fafafa' },
	{ label: 'Blue grey 50', color: '#eceff1' },
	{ label: 'Red 100', color: '#ffcdd2' },
	{ label: 'Purple 100', color: '#e1bee7' },
	{ label: 'Indigo 100', color: '#c5cae9' },
	{ label: 'Blue 100', color: '#bbdefb' },
	{ label: 'Cyan 100', color: '#b2ebf2' },
	{ label: 'Teal 100', color: '#b2dfdb' },
	{ label: 'Light green 100', color: '#dcedc8' },
	{ label: 'Lime 100', color: '#f0f4c3' },
	{ label: 'Amber 100', color: '#ffecb3' },
	{ label: 'Orange 100', color: '#ffe0b2' },
	{ label: 'Grey 100', color: '#f5f5f5' },
	{ label: 'Blue grey 100', color: '#cfd8dc' },
	{ label: 'Red 200', color: '#ef9a9a' },
	{ label: 'Purple 200', color: '#ce93d8' },
	{ label: 'Indigo 200', color: '#9fa8da' },
	{ label: 'Blue 200', color: '#90caf9' },
	{ label: 'Cyan 200', color: '#80deea' },
	{ label: 'Teal 200', color: '#80cbc4' },
	{ label: 'Light green 200', color: '#c5e1a5' },
	{ label: 'Lime 200', color: '#e6ee9c' },
	{ label: 'Amber 200', color: '#ffe082' },
	{ label: 'Orange 200', color: '#ffcc80' },
	{ label: 'Grey 200', color: '#eeeeee' },
	{ label: 'Blue grey 200', color: '#b0bec5' },
	{ label: 'Red 300', color: '#e57373' },
	{ label: 'Purple 300', color: '#ba68c8' },
	{ label: 'Indigo 300', color: '#7986cb' },
	{ label: 'Blue 300', color: '#64b5f6' },
	{ label: 'Cyan 300', color: '#4dd0e1' },
	{ label: 'Teal 300', color: '#4db6ac' },
	{ label: 'Light green 300', color: '#aed581' },
	{ label: 'Lime 300', color: '#dce775' },
	{ label: 'Amber 300', color: '#ffd54f' },
	{ label: 'Orange 300', color: '#ffb74d' },
	{ label: 'Grey 300', color: '#e0e0e0' },
	{ label: 'Blue grey 300', color: '#90a4ae' },
	{ label: 'Red 400', color: '#ef5350' },
	{ label: 'Purple 400', color: '#ab47bc' },
	{ label: 'Indigo 400', color: '#5c6bc0' },
	{ label: 'Blue 400', color: '#42a5f5' },
	{ label: 'Cyan 400', color: '#26c6da' },
	{ label: 'Teal 400', color: '#26a69a' },
	{ label: 'Light green 400', color: '#9ccc65' },
	{ label: 'Lime 400', color: '#d4e157' },
	{ label: 'Amber 400', color: '#ffca28' },
	{ label: 'Orange 400', color: '#ffa726' },
	{ label: 'Grey 400', color: '#bdbdbd' },
	{ label: 'Blue grey 400', color: '#78909c' },
	{ label: 'Red 500', color: '#f44336' },
	{ label: 'Purple 500', color: '#9c27b0' },
	{ label: 'Indigo 500', color: '#3f51b5' },
	{ label: 'Blue 500', color: '#2196f3' },
	{ label: 'Cyan 500', color: '#00bcd4' },
	{ label: 'Teal 500', color: '#009688' },
	{ label: 'Light green 500', color: '#8bc34a' },
	{ label: 'Lime 500', color: '#cddc39' },
	{ label: 'Amber 500', color: '#ffc107' },
	{ label: 'Orange 500', color: '#ff9800' },
	{ label: 'Grey 500', color: '#9e9e9e' },
	{ label: 'Blue grey 500', color: '#607d8b' },
	{ label: 'Red 600', color: '#e53935' },
	{ label: 'Purple 600', color: '#8e24aa' },
	{ label: 'Indigo 600', color: '#3949ab' },
	{ label: 'Blue 600', color: '#1e88e5' },
	{ label: 'Cyan 600', color: '#00acc1' },
	{ label: 'Teal 600', color: '#00897b' },
	{ label: 'Light green 600', color: '#7cb342' },
	{ label: 'Lime 600', color: '#c0ca33' },
	{ label: 'Amber 600', color: '#ffb300' },
	{ label: 'Orange 600', color: '#fb8c00' },
	{ label: 'Grey 600', color: '#757575' },
	{ label: 'Blue grey 600', color: '#546e7a' },
	{ label: 'Red 700', color: '#d32f2f' },
	{ label: 'Purple 700', color: '#7b1fa2' },
	{ label: 'Indigo 700', color: '#303f9f' },
	{ label: 'Blue 700', color: '#1976d2' },
	{ label: 'Cyan 700', color: '#0097a7' },
	{ label: 'Teal 700', color: '#00796b' },
	{ label: 'Light green 700', color: '#689f38' },
	{ label: 'Lime 700', color: '#afb42b' },
	{ label: 'Amber 700', color: '#ffa000' },
	{ label: 'Orange 700', color: '#f57c00' },
	{ label: 'Grey 700', color: '#616161' },
	{ label: 'Blue grey 700', color: '#455a64' },
	{ label: 'Red 800', color: '#c62828' },
	{ label: 'Purple 800', color: '#6a1b9a' },
	{ label: 'Indigo 800', color: '#283593' },
	{ label: 'Blue 800', color: '#1565c0' },
	{ label: 'Cyan 800', color: '#00838f' },
	{ label: 'Teal 800', color: '#00695c' },
	{ label: 'Light green 800', color: '#558b2f' },
	{ label: 'Lime 800', color: '#9e9d24' },
	{ label: 'Amber 800', color: '#ff8f00' },
	{ label: 'Orange 800', color: '#ef6c00' },
	{ label: 'Grey 800', color: '#424242' },
	{ label: 'Blue grey 800', color: '#37474f' },
	{ label: 'Red 900', color: '#b71c1c' },
	{ label: 'Purple 900', color: '#4a148c' },
	{ label: 'Indigo 900', color: '#1a237e' },
	{ label: 'Blue 900', color: '#0d47a1' },
	{ label: 'Cyan 900', color: '#006064' },
	{ label: 'Teal 900', color: '#004d40' },
	{ label: 'Light green 900', color: '#33691e' },
	{ label: 'Lime 900', color: '#827717' },
	{ label: 'Amber 900', color: '#ff6f00' },
	{ label: 'Orange 900', color: '#e65100' },
	{ label: 'Grey 900', color: '#212121' },
	{ label: 'Blue grey 900', color: '#263238' }
];

const MENTION_FEEDS = [
	{
		marker: '@',
		feed: [
			{ id: '@cflores', avatar: 'm_1', name: 'Charles Flores' },
			{ id: '@gjackson', avatar: 'm_2', name: 'Gerald Jackson' },
			{ id: '@wreed', avatar: 'm_3', name: 'Wayne Reed' },
			{ id: '@lgarcia', avatar: 'm_4', name: 'Louis Garcia' },
			{ id: '@rwilson', avatar: 'm_5', name: 'Roy Wilson' },
			{ id: '@mnelson', avatar: 'm_6', name: 'Matthew Nelson' },
			{ id: '@rwilliams', avatar: 'm_7', name: 'Randy Williams' },
			{ id: '@ajohnson', avatar: 'm_8', name: 'Albert Johnson' },
			{ id: '@sroberts', avatar: 'm_9', name: 'Steve Roberts' },
			{ id: '@kevans', avatar: 'm_10', name: 'Kevin Evans' },
			{ id: '@vxiques', avatar: 'm_11', name: 'Vincent Xiques' },
			{ id: '@jzaldivar', avatar: 'm_12', name: 'Jack Zaldivar' },
			{ id: '@tfoxworth', avatar: 'm_13', name: 'Thomas Foxworth' },
			{ id: '@phendrix', avatar: 'm_14', name: 'Peter Hendrix' },
			{ id: '@pthaxton', avatar: 'm_15', name: 'Philip Thaxton' },
			{ id: '@mwilson', avatar: 'w_1', name: 'Mildred Wilson' },
			{ id: '@mnelson', avatar: 'w_2', name: 'Melissa Nelson' },
			{ id: '@kallen', avatar: 'w_3', name: 'Kathleen Allen' },
			{ id: '@myoung', avatar: 'w_4', name: 'Mary Young' },
			{ id: '@arogers', avatar: 'w_5', name: 'Ashley Rogers' },
			{ id: '@dgriffin', avatar: 'w_6', name: 'Debra Griffin' },
			{ id: '@dwilliams', avatar: 'w_7', name: 'Denise Williams' },
			{ id: '@ajames', avatar: 'w_8', name: 'Amy James' },
			{ id: '@randerson', avatar: 'w_9', name: 'Ruby Anderson' },
			{ id: '@wlee', avatar: 'w_10', name: 'Wanda Lee' },
			{ id: '@yquick', avatar: 'w_11', name: 'Yasmin Quick' },
			{ id: '@bzappaterra', avatar: 'w_12', name: 'Beatrice Zappaterra' },
			{ id: '@zquigley', avatar: 'w_13', name: 'Zoe Quigley' },
			{ id: '@pfabozzi', avatar: 'w_14', name: 'Patrizia Fabozzi' },
			{ id: '@vquimby', avatar: 'w_15', name: 'Victoria Quimby' },
		],
		minimumCharacters: 1,
		itemRenderer: customMentionUserItemRenderer
	},
	{
		marker: '#',
		feed: [
			'#american', '#asian', '#baking', '#breakfast', '#cake', '#caribbean',
			'#chinese', '#chocolate', '#cooking', '#dairy', '#delicious', '#delish',
			'#dessert', '#desserts', '#dinner', '#eat', '#eating', '#eggs', '#fish',
			'#food', '#foodie', '#foods', '#french', '#fresh',
			'#fusion', '#glutenfree', '#greek', '#grilling', '#halal', '#homemade',
			'#hot', '#hungry', '#icecream', '#indian', '#italian', '#japanese', '#keto',
			'#korean', '#lactosefree', '#lunch', '#meat', '#mediterranean', '#mexican',
			'#moroccan', '#nom', '#nomnom', '#paleo', '#poultry', '#snack', '#spanish',
			'#sugarfree', '#sweet', '#sweettooth', '#tasty', '#thai', '#vegan',
			'#vegetarian', '#vietnamese', '#yum', '#yummy'
		]
	}
];

/*
 * Customizes the way the list of user suggestions is displayed.
 * Each user has an @id, a name and an avatar.
 */
function customMentionUserItemRenderer( item ) {
	const itemElement = document.createElement( 'span' );
	const avatar = document.createElement( 'img' );
	const userNameElement = document.createElement( 'span' );
	const fullNameElement = document.createElement( 'span' );

	itemElement.classList.add( 'mention__item' );

	avatar.src = `./assets/images/avatars/${ item.avatar }.jpg`;

	userNameElement.classList.add( 'mention__item__user-name' );
	userNameElement.textContent = item.id;

	fullNameElement.classList.add( 'mention__item__full-name' );
	fullNameElement.textContent = item.name;

	itemElement.appendChild( avatar );
	itemElement.appendChild( userNameElement );
	itemElement.appendChild( fullNameElement );

	return itemElement;
}

ClassicEditor.create( document.querySelector( '#cke5-source-code-demo' ), {
	plugins: [
		Alignment,
		Autoformat,
		AutoImage,
		AutoLink,
		BlockQuote,
		Bold,
		CloudServices,
		Code,
		CodeBlock,
		/* You must provide a valid token URL in order to use the CKBox application.
		After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
		https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint */
		// CKBox,
		Essentials,
		ExportPdf,
		ExportWord,
		FindAndReplace,
		Font,
		GeneralHtmlSupport,
		Heading,
		HorizontalLine,
		HtmlEmbed,
		Image,
		ImageCaption,
		ImageInsert,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Base64UploadAdapter,
		ImportWord,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		MediaEmbed,
		Mention,
		PageBreak,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		RemoveFormat,
		SourceEditing,
		Strikethrough,
		Style,
		Subscript,
		Superscript,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TextPartLanguage,
		TextTransformation,
		TodoList,
		Underline,
		UploadAdapter,
		WProofreader
	],
	language: 'en',
	toolbar: {
		shouldNotGroupWhenFull: true,
		items: [
			// --- Document-wide tools ----------------------------------------------------------------------
			'undo',
			'redo',
			'|',
			'sourceEditing',
			'|',
			'importWord',
			'exportWord',
			'exportPdf',
			'|',
			'findAndReplace',
			'selectAll',
			'wproofreader',
			'|',

			// --- "Insertables" ----------------------------------------------------------------------------
			'link',
			'insertImage',
			/* You must provide a valid token URL in order to use the CKBox application.
			After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
			https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint*/
			// 'ckbox',
			'insertTable',
			'blockQuote',
			'mediaEmbed',
			'codeBlock',
			'htmlEmbed',
			'pageBreak',
			'horizontalLine',
			'-',

			// --- Block-level formatting -------------------------------------------------------------------
			'heading',
			'style',
			'|',

			// --- Basic styles, font and inline formatting -------------------------------------------------------
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'superscript',
			'subscript',
			{
				label: 'Basic styles',
				icon: 'text',
				items: [ 'fontSize',
				'fontFamily',
				'fontColor',
				'fontBackgroundColor',
				'code',
				'|',
				'textPartLanguage',
				'|' ]
			}, 'removeFormat',
			'|',

			// --- Text alignment ---------------------------------------------------------------------------
			'alignment',
			'|',

			// --- Lists and indentation --------------------------------------------------------------------
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'outdent',
			'indent'
		]
	},
	exportPdf: {
		stylesheets: [
			'EDITOR_STYLES',
			'./content.css'
		],
		fileName: 'export-pdf-demo.pdf',
		appID: 'cke5-demos',
		converterOptions: {
			format: 'Tabloid',
			margin_top: '20mm',
			margin_bottom: '20mm',
			margin_right: '7mm',
			margin_left: '7mm',
			page_orientation: 'portrait'
		},
		tokenUrl: false
	},
	exportWord: {
		stylesheets: [
			'EDITOR_STYLES',
			'./content.css'
		],
		fileName: 'export-word-demo.docx',
		appID: 'cke5-demos',
		converterOptions: {
			format: 'A4',
			margin_top: '20mm',
			margin_bottom: '20mm',
			margin_right: '7mm',
			margin_left: '7mm'
		},
		tokenUrl: false
	},
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [ 10, 12, 14, 'default', 18, 20, 22 ],
		supportAllValues: true
	},
	fontColor: {
		columns: 12,
		colors: REDUCED_MATERIAL_COLORS
	},
	fontBackgroundColor: {
		columns: 12,
		colors: REDUCED_MATERIAL_COLORS
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
			{ model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
			{ model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
		]
	},
	htmlEmbed: {
		showPreviews: true
	},
	htmlSupport: {
		allow: [
			// Enables all HTML features.
			{
				name: /.*/,
				attributes: true,
				classes: true,
				styles: true
			}
		],
		disallow: [
			{
				attributes: [
					{ key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i }
				]
			}
		]
	},
	image: {
		styles: [ 'alignCenter', 'alignLeft', 'alignRight' ],
		resizeOptions: [
			{
				name: 'resizeImage:original',
				label: 'Default image width',
				value: null
			},
			{
				name: 'resizeImage:50',
				label: '50% page width',
				value: '50'
			},
			{
				name: 'resizeImage:75',
				label: '75% page width',
				value: '75'
			}
		],
		toolbar: [
			'imageTextAlternative', 'toggleImageCaption',
			'|',
			'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side',
			'|',
			'resizeImage'
		],
		insert: {
			integrations: [ 'insertImageViaUrl' ]
		}
	},
	importWord: {
		tokenUrl: false,
		defaultStyles: true
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	link: {
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		},
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://'
	},
	mention: {
		feeds: MENTION_FEEDS
	},
	placeholder: 'Type or paste your content here!',
	style: {
		definitions: [
			{
				name: 'Title',
				element: 'h1',
				classes: [ 'document-title' ]
			},
			{
				name: 'Subtitle',
				element: 'h2',
				classes: [ 'document-subtitle' ]
			},
			{
				name: 'Callout',
				element: 'p',
				classes: [ 'callout' ]
			},
			{
				name: 'Side quote',
				element: 'blockquote',
				classes: [ 'side-quote' ]
			},
			{
				name: 'Needs clarification',
				element: 'span',
				classes: [ 'needs-clarification' ]
			},
			{
				name: 'Wide spacing',
				element: 'span',
				classes: [ 'wide-spacing' ]
			},
			{
				name: 'Small caps',
				element: 'span',
				classes: [ 'small-caps' ]
			},
			{
				name: 'Code (dark)',
				element: 'pre',
				classes: [ 'stylish-code', 'stylish-code-dark' ]
			},
			{
				name: 'Code (bright)',
				element: 'pre',
				classes: [ 'stylish-code', 'stylish-code-bright' ]
			}
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
		]
	},
	wproofreader: {
		// serviceId: 'your-service-ID', // WProofreader: required for the Cloud version only.
		lang: 'auto',
		srcUrl: 'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js',
		autoStartup: false
	},
	/* You must provide a valid token URL in order to use the CKBox application.
	After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
	https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint */
	// ckbox: {
	// 	tokenUrl: 'https://your.token.url'
	// }
} )
	.then( editor => {
		window.editor = editor;
	} ).catch( error => {
		console.error( error.stack );
	} );
