/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// AI Assistant require license key to work properly, you can get a trial license key: https://orders.ckeditor.com/trial/premium-features
const LICENSE_KEY = '';

// https://ckeditor.com/docs/ckeditor5/40.2.0/features/ai-assistant/ai-assistant-integration.html#integrating-with-the-proxy-endpoint
const AI_API_URL = '';

/* You must provide a valid token URL in order to use the CKBox application.
After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint */
const CKBOX_TOKEN_URL = 'https://api.ckbox.io/token/demo';

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
	TableColumnResize,
} from 'ckeditor5';

import {
	ExportPdf,
	ExportWord,
	ImportWord,
	AIAssistant,
	OpenAITextAdapter,
	SlashCommand,
	PasteFromOfficeEnhanced,
} from 'ckeditor5-premium-features';

import 'ckeditor5/index.css';
import 'ckeditor5-premium-features/index.css';

ClassicEditor.create(
	document.querySelector('#cke5-ai-assistant-demo') as HTMLElement,
	{
		plugins: [
			AIAssistant,
			Alignment,
			AutoImage,
			BlockQuote,
			Bold,
			/* You must provide a valid token URL in order to use the CKBox application.
			After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
			https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint */
			CKBox,
			PictureEditing,
			Code,
			CodeBlock,
			CloudServices,
			EasyImage,
			Essentials,
			ExportPdf,
			ExportWord,
			ImportWord,
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
			OpenAITextAdapter,
			Paragraph,
			PasteFromOffice,
			PasteFromOfficeEnhanced,
			RemoveFormat,
			SlashCommand,
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
				/* You must provide a valid token URL in order to use the CKBox application.
				After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
				https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint*/
				'ckbox',
				'insertTable',
				'codeBlock',
				'specialCharacters',
				'|',
				'exportPdf',
				'exportWord',
				'importWord',
			],
		},
		link: {
			decorators: {
				isExternal: {
					mode: 'manual',
					label: 'Open in a new tab',
					attributes: {
						target: '_blank',
						rel: 'noopener noreferrer',
					},
				},
				isDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'download',
					},
				},
				isGallery: {
					mode: 'manual',
					label: 'Gallery link',
					classes: 'gallery',
				},
			},
		},
		ckbox: {
			tokenUrl: CKBOX_TOKEN_URL,
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true,
			},
		},
		image: {
			resizeOptions: [
				{
					name: 'resizeImage:original',
					label: 'Original size',
					value: null,
				},
				{
					name: 'resizeImage:50',
					label: '50%',
					value: '50',
				},
				{
					name: 'resizeImage:75',
					label: '75%',
					value: '75',
				},
			],
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'|',
				'resizeImage',
			],
			insert: {
				integrations: ['upload', 'assetManager', 'url'],
			},
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
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph',
				},
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
			],
		},
		exportPdf: {
			dataCallback: (editor) =>
				editor.getData({
					showSuggestionHighlights: true,
				}),
			stylesheets: ['EDITOR_STYLES'],
			converterOptions: {
				format: 'A4',
				margin_top: '20mm',
				margin_bottom: '20mm',
				margin_right: '12mm',
				margin_left: '12mm',
				page_orientation: 'portrait',
			},
			tokenUrl: false,
		},
		exportWord: {
			dataCallback: (editor) =>
				editor.getData({
					showSuggestionHighlights: true,
				}),
			stylesheets: ['EDITOR_STYLES'],
			converterOptions: {
				format: 'A4',
				margin_top: '20mm',
				margin_bottom: '20mm',
				margin_right: '12mm',
				margin_left: '12mm',
				orientation: 'portrait',
			},
			tokenUrl: false,
		},
		// AI configuration will land here:
		ai: {
			openAI: {
				apiUrl: AI_API_URL,
			},
		},
		licenseKey: LICENSE_KEY,
	}
);