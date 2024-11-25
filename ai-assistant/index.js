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

/**
 * AI Assistant requires additional configuration.
 *
 * See https://ckeditor.com/docs/ckeditor5/latest/features/ai-assistant/ai-assistant-integration.html#integrating-with-the-proxy-endpoint
 */
const AI_API_URL = '';

if ( !AI_API_URL ) {
	alert( 'AI Assistant requires additional configuration. Check the index.js file for more information.' );
}

/**
 * CKBox plugin requires a valid token URL in order to use the CKBox application.
 *
 * After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
 * https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint
 */
const CKBOX_TOKEN_URL = '';

import {
	ClassicEditor,
	Alignment,
	AutoImage,
	BlockQuote,
	Bold,
	CKBox,
	Code,
	CodeBlock,
	CloudServices,
	CloudServicesUploadAdapter,
	List,
	ListProperties,
	EasyImage,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Heading,
	Italic,
	Image,
	ImageCaption,
	ImageResize,
	ImageToolbar,
	ImageUpload,
	ImageInsert,
	Link,
	LinkImage,
	AutoLink,
	Mention,
	Underline,
	PictureEditing,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersEssentials,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TableColumnResize
} from 'ckeditor5';

import {
	AIAssistant,
	ExportPdf,
	ExportWord,
	ImportWord,
	OpenAITextAdapter,
	SlashCommand,
	PasteFromOfficeEnhanced
} from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

import coreStylesheets from 'ckeditor5/ckeditor5.css?url';
import premiumStylesheets from 'ckeditor5-premium-features/ckeditor5-premium-features.css?url';

ClassicEditor.create(
	document.querySelector( '#cke5-ai-assistant-demo' ),
	{
		plugins: [
			Alignment,
			AutoImage,
			BlockQuote,
			Bold,
			PictureEditing,
			Code,
			CodeBlock,
			CloudServices,
			EasyImage,
			Essentials,
			FindAndReplace,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			Heading,
			GeneralHtmlSupport,
			Image,
			ImageCaption,
			ImageResize,
			ImageToolbar,
			ImageUpload,
			ImageInsert,
			Italic,
			Link,
			LinkImage,
			AutoLink,
			List,
			ListProperties,
			Mention,
			Paragraph,
			PasteFromOffice,
			RemoveFormat,
			SpecialCharacters,
			SpecialCharactersEssentials,
			Strikethrough,
			Subscript,
			Superscript,
			Table,
			TableCaption,
			TableCellProperties,
			TableProperties,
			TableToolbar,
			TableColumnResize,
			Underline,
			CloudServicesUploadAdapter,

			// Include CKBox plugin only if the CKBOX_TOKEN_URL is provided.
			...( CKBOX_TOKEN_URL ? [
				CKBox
			] : [] ),

			// Include premium features only if the license key is not GPL.
			...( LICENSE_KEY !== 'GPL' ? [
				ExportPdf,
				ExportWord,
				ImportWord,
				OpenAITextAdapter,
				PasteFromOfficeEnhanced,
				SlashCommand,

				// Include AI Assistant only if the AI_API_URL is provided.
				...( AI_API_URL ? [
					AIAssistant
				] : [] )
			] : [] )
		],
		toolbar: {
			items: [
				'aiCommands',
				'aiAssistant',
				'|',
				'undo',
				'redo',
				'findAndReplace',
				'|',
				'heading',
				'|',
				'fontsize',
				'fontfamily',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'subscript',
				'superscript',
				'code',
				'removeFormat',
				'link',
				'|',
				'alignment',
				'|',
				'bulletedList',
				'numberedList',
				'blockQuote',
				'|',
				'insertImage',
				'ckbox',
				'insertTable',
				'codeBlock',
				'specialCharacters',
				'|',
				'exportPdf',
				'exportWord',
				'importWord'
			]
		},
		link: {
			decorators: {
				isExternal: {
					mode: 'manual',
					label: 'Open in a new tab',
					attributes: {
						target: '_blank',
						rel: 'noopener noreferrer'
					}
				},
				isDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'download'
					}
				},
				isGallery: {
					mode: 'manual',
					label: 'Gallery link',
					classes: 'gallery'
				}
			}
		},
		ckbox: {
			tokenUrl: CKBOX_TOKEN_URL
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true
			}
		},
		image: {
			resizeOptions: [
				{
					name: 'resizeImage:original',
					label: 'Original size',
					value: null
				},
				{
					name: 'resizeImage:50',
					label: '50%',
					value: '50'
				},
				{
					name: 'resizeImage:75',
					label: '75%',
					value: '75'
				}
			],
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'|',
				'resizeImage'
			],
			insert: {
				integrations: [ 'upload', 'assetManager', 'url' ]
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
			tableToolbar: [ 'bold', 'italic' ]
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
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				}
			]
		},
		exportPdf: {
			dataCallback: editor =>
				editor.getData( {
					showSuggestionHighlights: true
				} ),
			stylesheets: [ coreStylesheets, premiumStylesheets ],
			converterOptions: {
				format: 'A4',
				margin_top: '20mm',
				margin_bottom: '20mm',
				margin_right: '12mm',
				margin_left: '12mm',
				page_orientation: 'portrait'
			},
			tokenUrl: false
		},
		exportWord: {
			dataCallback: editor =>
				editor.getData( {
					showSuggestionHighlights: true
				} ),
			stylesheets: [ coreStylesheets, premiumStylesheets ],
			converterOptions: {
				format: 'A4',
				margin_top: '20mm',
				margin_bottom: '20mm',
				margin_right: '12mm',
				margin_left: '12mm',
				orientation: 'portrait'
			},
			tokenUrl: false
		},
		ai: {
			openAI: {
				apiUrl: AI_API_URL
			}
		},
		licenseKey: LICENSE_KEY
	}
)
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( error.stack );
	} );
