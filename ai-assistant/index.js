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
const CKBOX_TOKEN_URL = '';

// Editor creators
import AiAssistantDemoEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

// Features
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CKBox from '@ckeditor/ckeditor5-ckbox/src/ckbox';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';
import ExportWord from '@ckeditor/ckeditor5-export-word/src/exportword';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import PasteFromOfficeEnhanced from '@ckeditor/ckeditor5-paste-from-office-enhanced/src/pastefromofficeenhanced';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SlashCommand from '@ckeditor/ckeditor5-slash-command/src/slashcommand';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';

import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import { DocumentList, DocumentListProperties } from '@ckeditor/ckeditor5-list';
import ImportWord from '@ckeditor/ckeditor5-import-word/src/importword';

import AIAssistant from '@ckeditor/ckeditor5-ai/src/aiassistant';
import OpenAITextAdapter from '@ckeditor/ckeditor5-ai/src/adapters/openaitextadapter';

AiAssistantDemoEditor.create(
	document.querySelector('#cke5-ai-assistant-demo'),
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
			// CKBox,
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
			DocumentList,
			DocumentListProperties,
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
			UploadAdapter,
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
				// 'ckbox',
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
			upload: {
				panel: {
					items: ['insertImageViaUrl'],
				},
			},
			insert: {
				integrations: ['url'],
			},
		},
		typing: {
			transformations: {
				extra: [
					{ from: ':)', to: '🙂' },
					{ from: ':+1:', to: '👍' },
					{ from: ':tada:', to: '🎉' },
				],
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
				page_orientation: 'portrait',
			},
			tokenUrl: false,
		},
		// AI configuration will land here:
		ai: {
			openAI: {
				apiUrl: AI_API_URL,
				authKey: LICENSE_KEY,
			},
		},
		licenseKey: LICENSE_KEY,
	}
)
	.then((editor) => {
		window.editor = editor;
	})
	.catch((error) => {
		console.error(error.stack);
	});
