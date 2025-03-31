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
 * WProofreader plugin require a license key to work properly.
 *
 * For more info how to get the key, see https://ckeditor.com/docs/ckeditor5/latest/features/spelling-and-grammar-checking.html.
 */
const WEB_SPELL_CHECKER_LICENSE_KEY = '';

/**
 * Uploadcare plugin require a license key to work properly.
 *
 * For more info how to get the key, see
 * https://ckeditor.com/docs/ckeditor5/latest/features/file-management/uploadcare.html#activating-the-feature.
 */
const UPLOADCARE_PUBKEY = '';

import {
	ClassicEditor,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	BlockQuote,
	Bold,
	Base64UploadAdapter,
	CloudServices,
	Code,
	CodeBlock,
	Essentials,
	FindAndReplace,
	Font,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlEmbed,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
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
	ShowBlocks,
	SpecialCharacters,
	SpecialCharactersEssentials,
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
	Underline
} from 'ckeditor5';

import {
	ExportPdf,
	ExportWord,
	ImportWord,
	Template,
	SlashCommand,
	Uploadcare,
	UploadcareImageEdit,
	SourceEditingEnhanced
} from 'ckeditor5-premium-features';

import { WProofreader } from '@webspellchecker/wproofreader-ckeditor5';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

import coreStylesheets from 'ckeditor5/ckeditor5.css?url';
import premiumStylesheets from 'ckeditor5-premium-features/ckeditor5-premium-features.css?url';

const exportHorizontalSpace = '10mm';
const exportVerticalSpace = '12mm';

ClassicEditor.create(
	document.querySelector( '#cke5-uploadcare-demo' ),
	{
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
			Essentials,
			FindAndReplace,
			Font,
			GeneralHtmlSupport,
			Heading,
			Highlight,
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
			ShowBlocks,
			SourceEditingEnhanced,
			SpecialCharacters,
			SpecialCharactersEssentials,
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

			// Include premium features only if the license key is not GPL.
			...( LICENSE_KEY !== 'GPL' ? [
				ExportPdf,
				ExportWord,
				ImportWord,
				Template,
				SlashCommand,
				...( UPLOADCARE_PUBKEY ? [
					Uploadcare,
					UploadcareImageEdit
				] : [] )
			] : [] ),

			// Include WebSpellChecker plugin only if the WEB_SPELL_CHECKER_LICENSE_KEY is provided.
			...( WEB_SPELL_CHECKER_LICENSE_KEY ? [
				WProofreader
			] : [] )
		],
		licenseKey: LICENSE_KEY,
		language: 'en',
		toolbar: {
			shouldNotGroupWhenFull: true,
			items: [
				'insertImage',
				'|',
				'exportPDF',
				'exportWord',
				'|',
				'findAndReplace',
				'selectAll',
				'|',
				'heading',
				'|',
				'bold',
				'italic',
				'strikethrough',
				'underline',
				'code',
				'subscript',
				'superscript',
				'removeFormat',
				'|',
				'bulletedList',
				'numberedList',
				'todoList',
				'|',
				'outdent',
				'indent',
				'|',
				'undo',
				'redo',
				'fontSize',
				'fontFamily',
				'fontColor',
				'fontBackgroundColor',
				'highlight',
				'|',
				'alignment',
				'|',
				'link',
				'blockQuote',
				'insertTable',
				'mediaEmbed',
				'codeBlock',
				'htmlEmbed',
				'|',
				'specialCharacters',
				'horizontalLine',
				'pageBreak',
				'|',
				'textPartLanguage',
				'|',
				'sourceEditingEnhanced'
			]
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true
			}
		},
		exportPdf: {
			stylesheets: [ coreStylesheets, premiumStylesheets, './content.css' ],
			fileName: 'export-pdf-demo.pdf',
			appID: 'cke5-demos',
			converterOptions: {
				format: 'Tabloid',
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
		image: {
			toolbar: [
				'imageStyle:inline',
				'imageStyle:block',
				'|',
				'toggleImageCaption',
				'imageTextAlternative',
				'|',
				'uploadcareImageEdit'
			]
		},
		uploadcare: {
			pubkey: UPLOADCARE_PUBKEY,
			allowExternalImagesEditing: [ /^data:/, 'origin' ],
			uploader: {
				sourceList: [
					'local',
					'url',
					'dropbox',
					'gdrive',
					'facebook',
					'gphotos',
					'onedrive'
				]
			}
		},
		wproofreader: {
			autoSearch: true,
			enableGrammar: true,
			serviceId: WEB_SPELL_CHECKER_LICENSE_KEY,
			lang: 'auto',
			srcUrl:
				'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js'
		}
	}
)
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( error.stack );
	} );

// --------- Just exports ------------------------------------------------------------------------

export default {
	ClassicEditor
};
