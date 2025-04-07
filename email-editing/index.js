/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * CKEditor 5 requires a license key.
 *
 * The "GPL" license key used below only allows you to use the open-source features.
 * To use the premium features, replace it with your commercial license key.
 * If you don't have one, you can get a trial license key from https://portal.ckeditor.com/checkout?plan=free.
 */
const LICENSE_KEY = 'GPL';

if ( LICENSE_KEY === 'GPL' ) {
	alert( 'Premium features are disabled, because they require a commercial license key. Check the index.js file for more information.' );
}

// CKBox plugin requires a valid token URL in order to use the CKBox application.
// After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
// https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint
const CKBOX_TOKEN_URL = '';

// WProofreader plugin require a license key to work properly.
// For more info how to get the key, see https://ckeditor.com/docs/ckeditor5/latest/features/spelling-and-grammar-checking.html.
const WEB_SPELL_CHECKER_LICENSE_KEY = '';

import {
	ClassicEditor,
	AdjacentListsSupport,
	Alignment,
	AutoImage,
	Autoformat,
	AutoLink,
	BlockQuote,
	Bold,
	Code,
	CodeBlock,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Clipboard,
	EmptyBlock,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Heading,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	ListProperties,
	MediaEmbed,
	Mention,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
	SpecialCharacters,
	Strikethrough,
	Style,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableLayout,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline
} from 'ckeditor5';

import {
	CaseChange,
	EmailConfigurationHelper,
	ExportInlineStyles,
	FormatPainter,
	ExportPdf,
	ExportWord,
	ImportWord,
	MergeFields,
	Template,
	SlashCommand,
	MultiLevelList,
	SourceEditingEnhanced
} from 'ckeditor5-premium-features';

import { WProofreader } from '@webspellchecker/wproofreader-ckeditor5';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

import coreStylesheets from 'ckeditor5/ckeditor5.css?url';
import premiumStylesheets from 'ckeditor5-premium-features/ckeditor5-premium-features.css?url';

const exportHorizontalSpace = '19.25mm';
const exportVerticalSpace = '16mm';

const DEFAULT_HEX_COLORS = [
	{
		color: '#000000',
		label: 'Black'
	},
	{
		color: '#4D4D4D',
		label: 'Dim grey'
	},
	{
		color: '#999999',
		label: 'Grey'
	},
	{
		color: '#E6E6E6',
		label: 'Light grey'
	},
	{
		color: '#FFFFFF',
		label: 'White',
		hasBorder: true
	},
	{
		color: '#E65C5C',
		label: 'Red'
	},
	{
		color: '#E69C5C',
		label: 'Orange'
	},
	{
		color: '#E6E65C',
		label: 'Yellow'
	},
	{
		color: '#C2E65C',
		label: 'Light green'
	},
	{
		color: '#5CE65C',
		label: 'Green'
	},
	{
		color: '#5CE6A6',
		label: 'Aquamarine'
	},
	{
		color: '#5CE6E6',
		label: 'Turquoise'
	},
	{
		color: '#5CA6E6',
		label: 'Light blue'
	},
	{
		color: '#5C5CE6',
		label: 'Blue'
	},
	{
		color: '#A65CE6',
		label: 'Purple'
	}
];

/* eslint-disable max-len */
const TEMPLATE_DEFINITIONS = [
	{
		title: 'Two column layout table',
		description: 'The layout of the email is a table with two columns.',
		icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="icons/rich-table"> <rect id="icon-bg" width="45" height="45" rx="2" fill="#F3D1F4"/> <g id="table-border" filter="url(#filter0_d_1_775)"> <path d="M8 40H37C38.1046 40 39 39.1046 39 38V8C39 6.89543 38.1046 6 37 6H31H7.9994C6.89484 6 6 6.89543 6 8V38C6 39.1046 6.89543 40 8 40Z" fill="white"/> <path d="M37 39.25H8C7.30964 39.25 6.75 38.6904 6.75 38V8C6.75 7.30935 7.30934 6.75 7.9994 6.75H31H37C37.6904 6.75 38.25 7.30964 38.25 8V38C38.25 38.6904 37.6904 39.25 37 39.25Z" stroke="black" stroke-width="1.5"/> </g> <rect id="Rectangle 29" x="17" y="8" width="1" height="30" fill="#A8A8A8"/> <rect id="Rectangle 35" x="37" y="19" width="1" height="29" transform="rotate(90 37 19)" fill="#A8A8A8"/> <rect id="Rectangle 36" x="37" y="25" width="1" height="29" transform="rotate(90 37 25)" fill="#A8A8A8"/> <rect id="Rectangle 37" x="37" y="31" width="1" height="29" transform="rotate(90 37 31)" fill="#A8A8A8"/> <rect id="Rectangle 30" x="27" y="8" width="1" height="30" fill="#A8A8A8"/> <rect id="Rectangle 34" x="37" y="13" width="1" height="29" transform="rotate(90 37 13)" fill="#6D6D6D"/> <g id="Rectangle 31"> <rect x="8" y="8" width="9" height="5" fill="#B6E3FC"/> <rect x="8" y="8" width="9" height="5" fill="#B6E3FC"/> </g> <rect id="Rectangle 32" x="18" y="8" width="9" height="5" fill="#B6FCC5"/> <rect id="Rectangle 33" x="28" y="8" width="9" height="5" fill="#FCB6E8"/> </g> <defs> <filter id="filter0_d_1_775" x="6" y="6" width="34" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="1"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_775"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_775" result="shape"/> </filter> </defs> </svg>',
		data: `
			<table class="layout-table" style="width: 100%; height: 100%;">
				<tr>
					<td style="width: 50%;">&nbsp;</td>
					<td style="width: 50%;">&nbsp;</td>
				</tr>
			</table>
		`
	},
	{
		title: 'Three column layout table',
		description: 'The layout of the email is a table with three columns.',
		icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="icons/rich-table"> <rect id="icon-bg" width="45" height="45" rx="2" fill="#F3D1F4"/> <g id="table-border" filter="url(#filter0_d_1_775)"> <path d="M8 40H37C38.1046 40 39 39.1046 39 38V8C39 6.89543 38.1046 6 37 6H31H7.9994C6.89484 6 6 6.89543 6 8V38C6 39.1046 6.89543 40 8 40Z" fill="white"/> <path d="M37 39.25H8C7.30964 39.25 6.75 38.6904 6.75 38V8C6.75 7.30935 7.30934 6.75 7.9994 6.75H31H37C37.6904 6.75 38.25 7.30964 38.25 8V38C38.25 38.6904 37.6904 39.25 37 39.25Z" stroke="black" stroke-width="1.5"/> </g> <rect id="Rectangle 29" x="17" y="8" width="1" height="30" fill="#A8A8A8"/> <rect id="Rectangle 35" x="37" y="19" width="1" height="29" transform="rotate(90 37 19)" fill="#A8A8A8"/> <rect id="Rectangle 36" x="37" y="25" width="1" height="29" transform="rotate(90 37 25)" fill="#A8A8A8"/> <rect id="Rectangle 37" x="37" y="31" width="1" height="29" transform="rotate(90 37 31)" fill="#A8A8A8"/> <rect id="Rectangle 30" x="27" y="8" width="1" height="30" fill="#A8A8A8"/> <rect id="Rectangle 34" x="37" y="13" width="1" height="29" transform="rotate(90 37 13)" fill="#6D6D6D"/> <g id="Rectangle 31"> <rect x="8" y="8" width="9" height="5" fill="#B6E3FC"/> <rect x="8" y="8" width="9" height="5" fill="#B6E3FC"/> </g> <rect id="Rectangle 32" x="18" y="8" width="9" height="5" fill="#B6FCC5"/> <rect id="Rectangle 33" x="28" y="8" width="9" height="5" fill="#FCB6E8"/> </g> <defs> <filter id="filter0_d_1_775" x="6" y="6" width="34" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="1"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_775"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_775" result="shape"/> </filter> </defs> </svg>',
		data: `
			<table class="layout-table" style="width: 100%; height: 100%;">
				<tr>
					<td style="width: 33.33%;">&nbsp;</td>
					<td style="width: 33.34%;">&nbsp;</td>
					<td style="width: 33.33%;">&nbsp;</td>
				</tr>
			</table>
		`
	}
];

const MERGE_FIELDS_DEFINITIONS = [
	{
		groupId: 'authorInformation',
		groupLabel: 'Author information',
		definitions: [
			{
				id: 'mergeFieldExample',
				label: 'Merge Field Example',
				defaultValue:
					'Merge fields are useful for personalizing email campaigns with recipient names or locations for a more targeted message.'
			},
			{
				id: 'authorTitle',
				label: 'Title',
				defaultValue: 'Mr./Mrs.'
			},
			{
				id: 'authorName',
				label: 'Name',
				defaultValue: 'John'
			},
			{
				id: 'authorSurname',
				label: 'Surname',
				defaultValue: 'Doe'
			}
		]
	}
];

const MERGE_FIELDS_DATASETS = [
	{
		id: '78900',
		label: 'David Lee',
		values: {
			mergeFieldExample:
				'Merge fields are useful for automating the inclusion of product details like names, prices, and descriptions in marketing materials.',
			authorTitle: 'Mr.',
			authorName: 'David',
			authorSurname: 'Lee'
		}
	},
	{
		id: '78901',
		label: 'Kate Smith',
		values: {
			mergeFieldExample:
				'Merge fields are useful for dynamically inserting dates and times in event invitations or reminders.',
			authorTitle: 'Mrs.',
			authorName: 'Kate',
			authorSurname: 'Smith'
		}
	},
	{
		id: '78902',
		label: 'John Azar',
		values: {
			mergeFieldExample:
				'Merge fields are useful for creating tailored customer service responses by populating customer information into templates.',
			authorTitle: 'Mr.',
			authorName: 'John',
			authorSurname: 'Azar'
		}
	},
	{
		id: '98765',
		label: 'Emily Johnson',
		values: {
			mergeFieldExample:
				'Merge fields are useful for embedding tables that display personalized data such as order summaries or product comparisons.',
			authorTitle: 'Dr.',
			authorName: 'Emily',
			authorSurname: 'Johnson'
		}
	},
	{
		id: '43210',
		label: 'David Brown',
		values: {
			mergeFieldExample:
				'Merge fields are useful for dynamically generating reports with client-specific metrics or performance data in table format.',
			authorTitle: 'Mr.',
			authorName: 'David',
			authorSurname: 'Brown'
		}
	},
	{
		id: '54321',
		label: 'Sarah Miller',
		values: {
			mergeFieldExample:
				'Merge fields are useful for inserting formatted blocks like invoices or shipping details into emails or documents based on individual transactions.',
			authorName: 'Sarah',
			authorSurname: 'Miller'
		}
	}
];
/* eslint-enable max-len */

ClassicEditor.create(
	document.getElementById( 'email-editor-demo' ),
	{
		plugins: [
			AdjacentListsSupport,
			Alignment,
			AutoImage,
			Autoformat,
			AutoLink,
			BlockQuote,
			Bold,
			CloudServices,
			Clipboard,
			Code,
			CodeBlock,
			EmptyBlock,
			Essentials,
			FindAndReplace,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			GeneralHtmlSupport,
			Heading,
			HorizontalLine,
			Image,
			ImageCaption,
			ImageResize,
			ImageStyle,
			ImageToolbar,
			ImageUpload,
			Indent,
			IndentBlock,
			Italic,
			Link,
			List,
			ListProperties,
			MediaEmbed,
			Mention,
			Paragraph,
			PasteFromOffice,
			PictureEditing,
			RemoveFormat,
			SpecialCharacters,
			Strikethrough,
			Style,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableLayout,
			TableProperties,
			TableToolbar,
			TextTransformation,
			TodoList,
			Underline,

			// Include CKBox plugin only if the CKBOX_TOKEN_URL is provided.
			...( CKBOX_TOKEN_URL ? [
				CKBox,
				CKBoxImageEdit
			] : [] ),

			// Include premium features only if the license key is not GPL.
			...( LICENSE_KEY !== 'GPL' ? [
				CaseChange,
				EmailConfigurationHelper,
				ExportInlineStyles,
				ExportPdf,
				ExportWord,
				FormatPainter,
				ImportWord,
				MergeFields,
				MultiLevelList,
				SlashCommand,
				SourceEditingEnhanced,
				Template
			] : [] ),

			// Include WebSpellChecker plugin only if the WEB_SPELL_CHECKER_LICENSE_KEY is provided.
			...( WEB_SPELL_CHECKER_LICENSE_KEY ? [
				WProofreader
			] : [] )

		],
		licenseKey: LICENSE_KEY,
		menuBar: {
			isVisible: true
		},
		toolbar: {
			shouldNotGroupWhenFull: true,
			items: [
				'undo',
				'redo',
				'|',
				'insertMergeField',
				'previewMergeFields',
				'|',
				'importWord',
				'exportWord',
				'exportPdf',
				'|',
				'insertTemplate',
				'|',
				'heading',
				'|',
				{
					label: 'Font styles',
					icon: 'text',
					items: [
						'fontSize',
						'fontFamily',
						'fontColor',
						'fontBackgroundColor'
					]
				},
				'removeFormat',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'|',
				'link',
				'insertImage',
				'insertTable',
				'insertTableLayout',
				'|',
				'alignment',
				'|',
				'bulletedList',
				'numberedList',
				'|',
				'outdent',
				'indent',
				'|',
				'sourceEditingEnhanced',
				'style'
			]
		},
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h2',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h3',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h4',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h5',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h6',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				}
			]
		},
		fontFamily: {
			supportAllValues: true
		},
		fontSize: {
			options: [ 10, 12, 14, 'default', 18, 20, 22 ],
			supportAllValues: true
		},
		fontColor: {
			colorPicker: {
				format: 'hex'
			},
			colors: DEFAULT_HEX_COLORS
		},
		fontBackgroundColor: {
			colorPicker: {
				format: 'hex'
			},
			colors: DEFAULT_HEX_COLORS
		},
		image: {
			toolbar: [
				'toggleImageCaption',
				'imageTextAlternative',
				'resizeImage:20',
				'resizeImage:60',
				'resizeImage:100',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText'
			],
			resizeOptions: [
				{
					name: 'resizeImage:20',
					value: '20',
					icon: 'small'
				},
				{
					name: 'resizeImage:60',
					value: '60',
					icon: 'medium'
				},
				{
					name: 'resizeImage:100',
					value: '100',
					icon: 'large'
				}
			],
			upload: {
				types: [ 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'svg+xml' ]
			}
		},
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://'
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true
			}
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
			tableCellProperties: {
				borderColors: DEFAULT_HEX_COLORS,
				backgroundColors: DEFAULT_HEX_COLORS
			},
			tableProperties: {
				borderColors: DEFAULT_HEX_COLORS,
				backgroundColors: DEFAULT_HEX_COLORS
			}
		},
		htmlSupport: {
			preserveEmptyBlocksInEditingView: true,
			allow: [
				{
					name: /^(div|table|tbody|tr|td|span|img|h1|h2|h3|p|a)$/,
					attributes: true,
					classes: true,
					styles: true
				}
			]
		},
		style: {
			definitions: [
				{
					name: 'Button (green)',
					element: 'a',
					classes: [ 'button', 'button--green' ]
				},
				{
					name: 'Button (black)',
					element: 'a',
					classes: [ 'button', 'button--black' ]
				}
			]
		},
		exportPdf: {
			stylesheets: [ coreStylesheets, premiumStylesheets, './content.css' ],
			fileName: 'export-pdf-demo.pdf',
			appID: 'cke5-demos',
			converterOptions: {
				format: 'A4',
				margin_top: exportVerticalSpace,
				margin_bottom: exportVerticalSpace,
				margin_right: exportHorizontalSpace,
				margin_left: exportHorizontalSpace,
				page_orientation: 'portrait'
			},
			tokenUrl: false
		},
		exportWord: {
			stylesheets: [ coreStylesheets, premiumStylesheets, './content.css' ],
			fileName: 'export-word-demo.docx',
			converterOptions: {
				format: 'A4',
				margin_top: exportVerticalSpace,
				margin_bottom: exportVerticalSpace,
				margin_right: exportHorizontalSpace,
				margin_left: exportHorizontalSpace
			},
			tokenUrl: false
		},
		mergeFields: {
			previewModes: [ '$labels', '$defaultValues' ],
			initialPreviewMode: '$labels',
			previewHtmlValues: true,
			sanitizeHtml: html => ( { html, hasChanged: false } ),
			definitions: MERGE_FIELDS_DEFINITIONS,
			dataSets: MERGE_FIELDS_DATASETS
		},
		wproofreader: {
			serviceId: WEB_SPELL_CHECKER_LICENSE_KEY,
			lang: 'auto',
			srcUrl:
				'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js',
			ignoreClasses: [ 'image-inline' ]
		},
		ckbox: {
			tokenUrl: CKBOX_TOKEN_URL,
			allowExternalImagesEditing: image => {
				return !!image.match( /\.(jpeg|jpg|png|gif|webp)$/i );
			},
			forceDemoLabel: true
		},
		template: {
			definitions: TEMPLATE_DEFINITIONS
		}
	} )
	.catch( error => {
		console.error( error.stack );
	} );
