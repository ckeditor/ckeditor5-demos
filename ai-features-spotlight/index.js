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
 * Cloud Services configuration.
 */
const CS_CONFIG = {
	tokenUrl: '',
	uploadUrl: '',
	webSocketUrl: ''
};

/**
 * CKBox plugin requires a valid token URL in order to use the CKBox application.
 *
 * After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
 * https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint
 */
const CKBOX_TOKEN_URL = '';
const CKBOX_IMAGE_EDIT_FORMATS = /.+([jpg|jpeg|webp|png|bmp|tiff|gif])/;

const EXPORT_HORIZONTAL_SPACE = '12mm';
const EXPORT_VERTICAL_SPACE = '20mm';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import {
	AIChat,
	AIChatShortcuts,
	AIEditorIntegration,
	AIQuickActions,
	AIReviewMode,
	AITranslate
} from '@ckeditor/ckeditor5-ai';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import {
	Bold,
	Code,
	Italic,
	Strikethrough,
	Subscript,
	Superscript,
	Underline
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Bookmark } from '@ckeditor/ckeditor5-bookmark';
import { CaseChange } from '@ckeditor/ckeditor5-case-change';
import { CKBox, CKBoxImageEdit } from '@ckeditor/ckeditor5-ckbox';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Comments } from '@ckeditor/ckeditor5-comments';
import { TableOfContents } from '@ckeditor/ckeditor5-document-outline';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Emoji } from '@ckeditor/ckeditor5-emoji';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportWord } from '@ckeditor/ckeditor5-export-word';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import {
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize
} from '@ckeditor/ckeditor5-font';
import { Footnotes } from '@ckeditor/ckeditor5-footnotes';
import { FormatPainter } from '@ckeditor/ckeditor5-format-painter';
import { Fullscreen } from '@ckeditor/ckeditor5-fullscreen';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import {
	AutoImage,
	Image,
	ImageBlock,
	ImageCaption,
	ImageEditing,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	ImageUtils,
	PictureEditing
} from '@ckeditor/ckeditor5-image';
import { ImportWord } from '@ckeditor/ckeditor5-import-word';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { LineHeight } from '@ckeditor/ckeditor5-line-height';
import { AutoLink, Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { MultiLevelList } from '@ckeditor/ckeditor5-list-multi-level';
import { MergeFields } from '@ckeditor/ckeditor5-merge-fields';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { PasteFromOfficeEnhanced } from '@ckeditor/ckeditor5-paste-from-office-enhanced';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { RevisionHistory } from '@ckeditor/ckeditor5-revision-history';
import { SlashCommand } from '@ckeditor/ckeditor5-slash-command';
import {
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText
} from '@ckeditor/ckeditor5-special-characters';
import {
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar
} from '@ckeditor/ckeditor5-table';
import { Template } from '@ckeditor/ckeditor5-template';
import {
	TrackChanges,
	TrackChangesData,
	TrackChangesPreview
} from '@ckeditor/ckeditor5-track-changes';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { BalloonToolbar, BlockToolbar } from '@ckeditor/ckeditor5-ui';
import { BalloonEditor } from '@ckeditor/ckeditor5-editor-balloon';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { uid } from '@ckeditor/ckeditor5-utils';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

import { BALLOON_COMMENTS_DATA, CHAT_COMMENTS_DATA, createComments } from './ai-comments.js';

/* eslint-disable max-len */
const minimizeIcon = '<svg class="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
	'<path d="M2.98004 11.6211C2.98004 11.0688 3.42776 10.6211 3.98004 10.6211H11.98C12.5323 10.6211 12.98 11.0688 12.98 11.6211C12.98 12.1734 12.5323 12.6211 11.98 12.6211H3.98004C3.42776 12.6211 2.98004 12.1734 2.98004 11.6211Z" fill="currentColor"/>' +
	'<path fill-rule="evenodd" clip-rule="evenodd" d="M14 0C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2C0 0.895431 0.895431 0 2 0H14ZM2.5 1.49805C1.94772 1.49805 1.5 1.94576 1.5 2.49805V13.498C1.5 14.0503 1.94772 14.498 2.5 14.498H13.5C14.0523 14.498 14.5 14.0503 14.5 13.498V2.49805C14.5 1.94576 14.0523 1.49805 13.5 1.49805H2.5Z" fill="currentColor"/>' +
	'</svg>';
/* eslint-enable max-len */

const AI_DEMO_TOOLBAR_ITEMS = [
	'undo',
	'redo',
	'|',
	'trackChanges',
	'comment',
	'|',
	'toggleAi',
	'|',
	'heading',
	'|',
	'bold',
	'italic',
	'underline',
	'|',
	'link',
	'insertImage',
	'ckbox',
	'insertTable',
	'mediaEmbed',
	'|',
	'bulletedList',
	'numberedList',
	'|',
	'outdent',
	'indent'
];

// --------- Classic AI Editor ------------------------------------------------------------------------

class ClassicAiEditor extends ClassicEditor {}

ClassicAiEditor.builtinPlugins = [
	AIChat,
	AIEditorIntegration,
	AIQuickActions,
	AIReviewMode,
	AITranslate,
	AIChatShortcuts,
	Autoformat,
	BalloonToolbar,
	BlockQuote,
	Bold,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Comments,
	EasyImage,
	Emoji,
	Essentials,
	Heading,
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
	List,
	MediaEmbed,
	Mention,
	Paragraph,
	PasteFromOffice,
	PasteFromOfficeEnhanced,
	PictureEditing,
	Table,
	TableColumnResize,
	TableToolbar,
	TextTransformation,
	TrackChanges,
	TrackChangesData,
	TrackChangesPreview,
	Underline,
	SimpleUploadAdapter,
	SlashCommand
];

ClassicAiEditor.defaultConfig = {
	licenseKey: LICENSE_KEY,
	cloudServices: CS_CONFIG,
	toolbar: AI_DEMO_TOOLBAR_ITEMS,
	balloonToolbar: [
		'comment',
		'|',
		'aiQuickActions',
		'ask-ai',
		'|',
		'bold',
		'italic',
		'blockQuote',
		'|',
		'link',
		'insertImage',
		'|',
		'bulletedList',
		'numberedList'
	],
	emoji: {
		definitionsUrl: 'cdn'
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
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4'
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
			'imageTextAlternative',
			'toggleImageCaption',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage',
			'ckboxImageEdit'
		]
	},
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://'
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	},
	ckbox: {
		allowExternalImagesEditing: image => {
			return !!image.match( CKBOX_IMAGE_EDIT_FORMATS );
		},
		forceDemoLabel: true,
		tokenUrl: CKBOX_TOKEN_URL
	},
	comments: {
		editorConfig: {
			extraPlugins: [ Autoformat, Bold, Italic, List, Mention ],
			mention: {
				feeds: [
					{
						marker: '@',
						feed: []
					}
				]
			}
		}
	},
	trackChangesData: {
		editorCreator: ( config, createElement ) => {
			if ( !config.removePlugins ) {
				config.removePlugins = [];
			}

			config.removePlugins.push(
				'AIChat',
				'AITranslate',
				'AIEditorIntegration',
				'AIQuickActions',
				'AIReviewMode',
				'AIChatShortcuts'
			);

			if ( !config.attachTo ) {
				config.attachTo = createElement();
			}

			return ClassicAiEditor.create( config );
		}
	},
	ai: {
		serviceUrl: 'https://ai.cke-cs.com/v1',
		chat: {
			context: {
				document: {
					enabled: true
				},
				urls: {
					enabled: true
				},
				files: {
					enabled: true
				},
				sources: [
					{
						id: 'customer_support_metrics',
						label: 'Source Data',
						useDefaultFiltering: true,
						getResources: async () => {
							const resources = [
								{
									id: 'customer_support_metrics_source',
									type: 'file',
									label: 'Customer Support Metric'
								}
							];

							return Promise.resolve( resources );
						},
						getData: async () => {
							const pdfUrl = 'https://ckeditor.com/files/Customer%20Support%20Metrics%20%E2%80%93%20Source%20Data.pdf';

							const response = await fetch( pdfUrl );
							const blob = await response.blob();

							const file = new File( [ blob ], 'Customer Support Metrics – Source Data.pdf', {
								type: 'application/pdf'
							} );

							return Promise.resolve( file );
						}
					}
				]
			},
			shortcuts: [
				{
					id: 'summarize-document',
					type: 'chat',
					label: 'Summarize the document',
					prompt: 'Summarize the following document in 5-7 sentences. Focus on the main ideas and essential details. ' +
						'Exclude examples, repetition, and minor points. Do not introduce new information.'
				},
				{
					id: 'continue-writing',
					type: 'chat',
					label: 'Continue writing',
					prompt: 'Continue writing this document. Match the existing tone, vocabulary level, and formatting. ' +
						'Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas. ' +
						'Add approximately 3 paragraphs.',
					useReasoning: true,
					useWebSearch: true
				},
				{
					id: 'rewrite-document',
					type: 'chat',
					label: 'Rewrite the document',
					prompt: `Rewrite the document below for the following audience:

Audience: [e.g. Product / Engineering /Leadership]
Primary concern: [e.g., escalations, integrations, customer sentiment]
Context: [e.g. Internal performance review]

Guidelines:

- Emphasize sections most relevant to this audience
- De-emphasize or condense less relevant details
- Adjust terminology to match how this team thinks and speaks
- Keep metrics accurate and unchanged

Tone: [e.g. Clear, practical, collaborative]`,
					useReasoning: true,
					draftMode: true
				},
				{
					id: 'fix-grammar-and-spelling',
					type: 'review',
					label: 'Fix grammar and spelling',
					commandId: 'correctness'
				},
				{
					id: 'review-document',
					type: 'review',
					label: 'Review document'
				},
				{
					id: 'translate-document',
					type: 'translate',
					label: 'Translate document'
				}
			]
		},
		review: {
			extraCommands: [
				{
					id: 'company-style-guide',
					label: 'Company style guide',
					description: 'Apply the company writing style guide to ensure consistent, professional language.',
					prompt: 'Apply the following company style guide rules to the text. For each violation, suggest a concrete rewrite. ' +
						'Replace hedging phrases (e.g., "may require", "could positively impact", ' +
						'"should be treated as") with direct, confident statements. ' +
						'Convert passive voice to active voice where the actor is known or implied. ' +
						'Remove filler words and redundant qualifiers (e.g., "overall", "generally", "in terms of"). ' +
						'Replace vague language with precise wording (e.g., "minor improvement" → state the actual change). ' +
						'Keep all data, metrics, and factual content unchanged.'
				}
			]
		}
	}
};

// --------- Classic AI Editor — AI Chat tab ------------------------------------------------------------------------

class AiChatEditor extends ClassicEditor {}

AiChatEditor.builtinPlugins = [
	AIChat,
	AIEditorIntegration,
	AIQuickActions,
	AIChatShortcuts,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	Bold,
	Bookmark,
	CaseChange,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Code,
	Comments,
	Emoji,
	Essentials,
	ExportPdf,
	ExportWord,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Footnotes,
	FormatPainter,
	Fullscreen,
	Heading,
	HorizontalLine,
	ImageBlock,
	ImageCaption,
	ImageEditing,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	ImageUtils,
	ImportWord,
	Indent,
	IndentBlock,
	Italic,
	LineHeight,
	Link,
	LinkImage,
	List,
	ListProperties,
	Mention,
	MergeFields,
	MultiLevelList,
	Paragraph,
	PasteFromOffice,
	PasteFromOfficeEnhanced,
	PictureEditing,
	RemoveFormat,
	RevisionHistory,
	SlashCommand,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableOfContents,
	TableProperties,
	TableToolbar,
	Template,
	TextTransformation,
	TodoList,
	TrackChanges,
	TrackChangesData,
	TrackChangesPreview,
	Underline
];

AiChatEditor.defaultConfig = {
	toolbar: {
		items: AI_DEMO_TOOLBAR_ITEMS
	},
	licenseKey: LICENSE_KEY,
	root: {
		placeholder: 'Type or paste your content here!'
	},
	balloonToolbar: [
		'comment',
		'|',
		'aiQuickActions',
		'ask-ai',
		'|',
		'bold',
		'italic',
		'blockQuote',
		'|',
		'link',
		'insertImage',
		'|',
		'bulletedList',
		'numberedList'
	],
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [ 10, 12, 14, 'default', 18, 20, 22 ],
		supportAllValues: true
	},
	fullscreen: {
		onEnterCallback: container =>
			container.classList.add(
				'editor-container',
				'editor-container_document-editor',
				'editor-container_include-annotations',
				'editor-container_contains-wrapper',
				'editor-container_include-fullscreen',
				'main-container'
			)
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
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage',
			'|',
			'ckboxImageEdit'
		]
	},
	lineHeight: {
		supportAllValues: true
	},
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: { download: 'file' }
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	mention: {
		feeds: [ { marker: '@', feed: [] } ]
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ]
	},
	template: {
		definitions: [
			{
				title: 'Introduction',
				description: 'Simple introduction to an article',
				icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">' +
					'<g id="icons/article-image-right"><rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/></g></svg>',
				data: '<h2>Introduction</h2><p>In today\'s fast-paced world, keeping up with the latest trends and ' +
					'insights is essential.</p>'
			}
		]
	},
	ai: {
		serviceUrl: 'https://ai.cke-cs.com/v1',
		chat: {
			context: {
				document: { enabled: true },
				urls: { enabled: true },
				files: { enabled: true },
				sources: [
					{
						id: 'state_of_collaborative_editing_2025',
						label: 'Source Data',
						useDefaultFiltering: true,
						getResources: async () => Promise.resolve( [
							{
								id: 'state_of_collaborative_editing_2025_source',
								type: 'file',
								label: 'CKEditor - State of Collaborative Editing report 2025.pdf'
							}
						] ),
						getData: async () => {
							const pdfUrl = 'https://ckeditor.com/files/CKEditor_-_State_of_Collaborative_Editing_report_2025.pdf';
							const response = await fetch( pdfUrl );
							const blob = await response.blob();
							return new File( [ blob ], 'CKEditor - State of Collaborative Editing report 2025.pdf', {
								type: 'application/pdf'
							} );
						}
					}
				]
			},
			shortcuts: [
				{
					id: 'fill-template-music-ifpi',
					type: 'chat',
					label: 'Fill template with recent music industry data',
					prompt: 'Find the most recent (2026) music industry reports and data from reliable sources ' +
						'(e.g., IFPI, MIDiA Research, RIAA, Statista). Select the most relevant report. ' +
						'If full report access is not available, use reliable summaries, official excerpts, or verified ' +
						'secondary sources that accurately reflect the report\'s findings. Using only data from the selected ' +
						'report or its reliable summaries and the current document, fill every placeholder and bracketed ' +
						'section in the editor template (title, subtitle, takeaways, data points, company implications, ' +
						'outlook, and about the report). Replace all placeholders ([Title], [Subtitle], and all bracketed ' +
						'hints) with concrete content. Do not leave any placeholder or instructional text. Do not use ' +
						'unrelated or unverified sources. Ensure all content is consistent with the source material and ' +
						'written in clear, customer-ready language. If no 2026 report is available, use the latest ' +
						'available report (e.g., 2025) without fabricating newer data.',
					useWebSearch: true
				},
				{
					id: 'generate-report-economic-outlook',
					type: 'chat',
					label: 'Generate report using economic outlook data',
					prompt: 'Find the most recent (2026) economic reports related to AI from reliable sources ' +
						'(e.g., IMF, OECD, World Economic Forum, World Bank). Select the most relevant report. ' +
						'If full report access is not available, use reliable summaries, official excerpts, or verified ' +
						'secondary sources that accurately reflect the report\'s findings. Using only data from the ' +
						'selected report or its reliable summaries and the current document, fill every placeholder and ' +
						'bracketed section in the editor template (title, subtitle, takeaways, data points, company ' +
						'implications, outlook, and about the report). Replace all placeholders ([Title], [Subtitle], and ' +
						'all bracketed hints) with concrete content. Do not leave any placeholder or instructional text. ' +
						'Do not use unrelated or unverified sources. Ensure all content is consistent with the source ' +
						'material and written in clear, customer-ready language. If no 2026 report is available, use the ' +
						'latest available report (e.g., 2025) without fabricating newer data.',
					useWebSearch: true
				},
				{
					id: 'populate-template-climate-noaa',
					type: 'chat',
					label: 'Populate template with climate report data',
					prompt: 'Find the most recent (2026) climate and environmental reports from reliable sources ' +
						'(e.g., WMO, UNEP, NOAA, IPCC, EEA). Select the most relevant report. If full report access is ' +
						'not available, use reliable summaries, official excerpts, or verified secondary sources that ' +
						'accurately reflect the report\'s findings. Using only data from the selected report or its reliable ' +
						'summaries and the current document, fill every placeholder and bracketed section in the editor ' +
						'template (title, subtitle, takeaways, data points, company implications, outlook, and about the ' +
						'report). Replace all placeholders ([Title], [Subtitle], and all bracketed hints) with concrete ' +
						'content. Do not leave any placeholder or instructional text. Do not use unrelated or unverified ' +
						'sources. Ensure all content is consistent with the source material and written in clear, ' +
						'customer-ready language. If no 2026 report is available, use the latest available report (e.g., ' +
						'2025) without fabricating newer data.',
					useWebSearch: true
				},
				{
					id: 'fill-report-collaboration-survey',
					type: 'chat',
					label: 'Fill report with collaboration survey data',
					prompt: 'Using only CKEditor - State of Collaborative Editing report 2025.pdf from AI context, fill every ' +
						'placeholder and bracketed section in the editor template (title, subtitle, takeaways, data points, ' +
						'companies implications, outlook, and about the report). Write in clear, customer-ready language. ' +
						'Replace [Title], [Subtitle], and each [bracketed] hint with concrete content. Do not leave ' +
						'instructional placeholder text behind. Do not use any other source. If the file is not provided, ' +
						'ask user to use attach icon in the input to select the file.',
					draftMode: true
				}
			]
		}
	},
	comments: {
		editorConfig: {
			extraPlugins: [ Autoformat, Bold, Italic, List, Mention ],
			mention: { feeds: [ { marker: '@', feed: [] } ] }
		}
	},
	exportPdf: {
		stylesheets: [ 'EDITOR_STYLES' ],
		fileName: 'export-pdf-demo.pdf',
		appID: 'cke5-demos',
		converterOptions: {
			format: 'Tabloid',
			margin_top: '7mm',
			margin_bottom: '7mm',
			margin_right: '7mm',
			margin_left: '7mm',
			page_orientation: 'portrait'
		},
		tokenUrl: false
	},
	exportWord: {
		version: 2,
		stylesheets: [ 'EDITOR_STYLES' ],
		fileName: 'export-word-demo.docx',
		converterOptions: {
			document: {
				size: 'A4',
				orientation: 'portrait',
				margins: {
					top: EXPORT_VERTICAL_SPACE,
					bottom: EXPORT_VERTICAL_SPACE,
					right: EXPORT_HORIZONTAL_SPACE,
					left: EXPORT_HORIZONTAL_SPACE
				}
			}
		},
		tokenUrl: false
	},
	ckbox: {
		allowExternalImagesEditing: image => !!image.match( CKBOX_IMAGE_EDIT_FORMATS ),
		forceDemoLabel: true,
		tokenUrl: CKBOX_TOKEN_URL
	},
	trackChangesData: {
		editorCreator: ( config, createElement ) => {
			if ( !config.removePlugins ) {
				config.removePlugins = [];
			}
			config.removePlugins.push(
				'AIChat',
				'AIEditorIntegration',
				'AIQuickActions',
				'AIChatShortcuts'
			);
			if ( !config.attachTo ) {
				config.attachTo = createElement();
			}
			return AiChatEditor.create( config );
		}
	},
	cloudServices: CS_CONFIG
};

// --------- Classic AI Editor — Quick Actions --------

class AiQuickActionsEditor extends ClassicEditor {}

AiQuickActionsEditor.builtinPlugins = [
	AIQuickActions,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	Bold,
	Bookmark,
	CaseChange,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Code,
	Comments,
	Emoji,
	Essentials,
	ExportPdf,
	ExportWord,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Footnotes,
	FormatPainter,
	Fullscreen,
	Heading,
	HorizontalLine,
	ImageBlock,
	ImageCaption,
	ImageEditing,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	ImageUtils,
	ImportWord,
	Indent,
	IndentBlock,
	Italic,
	LineHeight,
	Link,
	LinkImage,
	List,
	ListProperties,
	Mention,
	MergeFields,
	MultiLevelList,
	Paragraph,
	PasteFromOffice,
	PasteFromOfficeEnhanced,
	PictureEditing,
	RemoveFormat,
	RevisionHistory,
	SlashCommand,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableOfContents,
	TableProperties,
	TableToolbar,
	Template,
	TextTransformation,
	TodoList,
	TrackChanges,
	TrackChangesData,
	TrackChangesPreview,
	Underline
];

AiQuickActionsEditor.defaultConfig = {
	toolbar: {
		items: AI_DEMO_TOOLBAR_ITEMS
	},
	licenseKey: LICENSE_KEY,
	root: {
		placeholder: 'Type or paste your content here!'
	},
	balloonToolbar: [
		'aiQuickActions',
		'|',
		'comment',
		'|',
		'bold',
		'italic',
		'blockQuote',
		'|',
		'link',
		'insertImage',
		'|',
		'bulletedList',
		'numberedList'
	],
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [ 10, 12, 14, 'default', 18, 20, 22 ],
		supportAllValues: true
	},
	fullscreen: {
		onEnterCallback: container =>
			container.classList.add(
				'editor-container',
				'editor-container_document-editor',
				'editor-container_include-annotations',
				'editor-container_contains-wrapper',
				'editor-container_include-fullscreen',
				'main-container'
			)
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
	image: {
		toolbar: [
			'generate-alt-and-caption',
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage',
			'|',
			'ckboxImageEdit'
		]
	},
	lineHeight: {
		supportAllValues: true
	},
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: { download: 'file' }
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	mention: {
		feeds: [ { marker: '@', feed: [] } ]
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ]
	},
	template: {
		definitions: [
			{
				title: 'Introduction',
				description: 'Simple introduction to an article',
				icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">' +
					'<g id="icons/article-image-right"><rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/></g></svg>',
				data: '<h2>Introduction</h2><p>In today\'s fast-paced world, keeping up with the latest trends and ' +
					'insights is essential.</p>'
			}
		]
	},
	ai: {
		serviceUrl: 'https://ai.cke-cs.com/v1',
		chat: {
			context: {
				document: { enabled: true },
				urls: { enabled: true },
				files: { enabled: true }
			},
			shortcuts: [
				{
					id: 'summarize-document',
					type: 'chat',
					label: 'Summarize the document',
					prompt: 'Summarize the following document in 5-7 sentences. Focus on the main ideas and essential details. ' +
						'Exclude examples, repetition, and minor points. Do not introduce new information.'
				},
				{
					id: 'continue-writing',
					type: 'chat',
					label: 'Continue writing',
					prompt: 'Continue writing this document. Match the existing tone, vocabulary level, and formatting. ' +
						'Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas. ' +
						'Add approximately 3 paragraphs.',
					useReasoning: true,
					useWebSearch: true
				},
				{
					id: 'rewrite-document',
					type: 'chat',
					label: 'Rewrite the document',
					prompt: `Rewrite the document below for the following audience:
 
Audience: [e.g. Product / Engineering /Leadership]
Primary concern: [e.g., escalations, integrations, customer sentiment]
Context: [e.g. Internal performance review]

Guidelines:

- Emphasize sections most relevant to this audience
- De-emphasize or condense less relevant details
- Adjust terminology to match how this team thinks and speaks
- Keep metrics accurate and unchanged

Tone: [e.g. Clear, practical, collaborative]`,
					useReasoning: true,
					draftMode: true
				},
				{
					id: 'fix-grammar-and-spelling',
					type: 'review',
					label: 'Fix grammar and spelling',
					commandId: 'correctness'
				},
				{
					id: 'review-document',
					type: 'review',
					label: 'Review document'
				},
				{
					id: 'translate-document',
					type: 'translate',
					label: 'Translate document'
				}
			]
		},
		quickActions: {
			extraCommands: [
				{
					id: 'convert-to-bullet-points',
					label: 'Convert to bullet points',
					prompt: 'Find the inline list of items in the selected text and convert only those items into a bullet list. ' +
						'Keep any introductory or closing sentences as they are. Do not change, add, or remove any words.',
					type: 'action',
					model: 'gpt-5.4'
				}
			]
		},
		review: {
			extraCommands: [
				{
					id: 'company-style-guide',
					label: 'Company style guide',
					description: 'Apply the company writing style guide to ensure consistent, professional language.',
					prompt: 'Apply the following company style guide rules to the text. For each violation, suggest a concrete rewrite. ' +
						'Replace hedging phrases (e.g., "may require", "could positively impact", ' +
						'"should be treated as") with direct, confident statements. ' +
						'Convert passive voice to active voice where the actor is known or implied. ' +
						'Remove filler words and redundant qualifiers (e.g., "overall", "generally", "in terms of"). ' +
						'Replace vague language with precise wording (e.g., "minor improvement" → state the actual change). ' +
						'Keep all data, metrics, and factual content unchanged.'
				}
			]
		}
	},
	comments: {
		editorConfig: {
			extraPlugins: [ Autoformat, Bold, Italic, List, Mention ],
			mention: { feeds: [ { marker: '@', feed: [] } ] }
		}
	},
	exportPdf: {
		stylesheets: [ 'EDITOR_STYLES' ],
		fileName: 'export-pdf-demo.pdf',
		appID: 'cke5-demos',
		converterOptions: {
			format: 'Tabloid',
			margin_top: '7mm',
			margin_bottom: '7mm',
			margin_right: '7mm',
			margin_left: '7mm',
			page_orientation: 'portrait'
		},
		tokenUrl: false
	},
	exportWord: {
		version: 2,
		stylesheets: [ 'EDITOR_STYLES' ],
		fileName: 'export-word-demo.docx',
		converterOptions: {
			document: {
				size: 'A4',
				orientation: 'portrait',
				margins: {
					top: EXPORT_VERTICAL_SPACE,
					bottom: EXPORT_VERTICAL_SPACE,
					right: EXPORT_HORIZONTAL_SPACE,
					left: EXPORT_HORIZONTAL_SPACE
				}
			}
		},
		tokenUrl: false
	},
	ckbox: {
		allowExternalImagesEditing: image => !!image.match( CKBOX_IMAGE_EDIT_FORMATS ),
		forceDemoLabel: true,
		tokenUrl: CKBOX_TOKEN_URL
	},
	trackChangesData: {
		editorCreator: ( config, createElement ) => {
			if ( !config.removePlugins ) {
				config.removePlugins = [];
			}
			config.removePlugins.push(
				'AIChat',
				'AITranslate',
				'AIEditorIntegration',
				'AIQuickActions',
				'AIReviewMode',
				'AIChatShortcuts'
			);
			if ( !config.attachTo ) {
				config.attachTo = createElement();
			}
			return AiQuickActionsEditor.create( config );
		}
	},
	cloudServices: CS_CONFIG
};

// --------- Classic AI Editor — AI Review + Translate --------

class AiReviewEditor extends ClassicEditor {}

AiReviewEditor.builtinPlugins = [
	AIEditorIntegration,
	AIQuickActions,
	AIReviewMode,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	Bold,
	Bookmark,
	CaseChange,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Code,
	Comments,
	Emoji,
	Essentials,
	ExportPdf,
	ExportWord,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Footnotes,
	FormatPainter,
	Fullscreen,
	Heading,
	HorizontalLine,
	ImageBlock,
	ImageCaption,
	ImageEditing,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	ImageUtils,
	ImportWord,
	Indent,
	IndentBlock,
	Italic,
	LineHeight,
	Link,
	LinkImage,
	List,
	ListProperties,
	Mention,
	MergeFields,
	MultiLevelList,
	Paragraph,
	PasteFromOffice,
	PasteFromOfficeEnhanced,
	PictureEditing,
	RemoveFormat,
	RevisionHistory,
	SlashCommand,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableOfContents,
	TableProperties,
	TableToolbar,
	Template,
	TextTransformation,
	TodoList,
	TrackChanges,
	TrackChangesData,
	TrackChangesPreview,
	Underline
];

AiReviewEditor.defaultConfig = {
	toolbar: {
		items: AI_DEMO_TOOLBAR_ITEMS
	},
	licenseKey: LICENSE_KEY,
	root: {
		placeholder: 'Type or paste your content here!'
	},
	balloonToolbar: [
		'comment',
		'|',
		'aiQuickActions',
		'|',
		'bold',
		'italic',
		'|',
		'link',
		'insertImage',
		'|',
		'bulletedList',
		'numberedList'
	],
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [ 10, 12, 14, 'default', 18, 20, 22 ],
		supportAllValues: true
	},
	fullscreen: {
		onEnterCallback: container =>
			container.classList.add(
				'editor-container',
				'editor-container_document-editor',
				'editor-container_include-annotations',
				'editor-container_contains-wrapper',
				'editor-container_include-fullscreen',
				'main-container'
			)
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
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage',
			'|',
			'ckboxImageEdit'
		]
	},
	lineHeight: {
		supportAllValues: true
	},
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: { download: 'file' }
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	mention: {
		feeds: [ { marker: '@', feed: [] } ]
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ]
	},
	template: {
		definitions: [
			{
				title: 'Introduction',
				description: 'Simple introduction to an article',
				icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">' +
					'<g id="icons/article-image-right"><rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/></g></svg>',
				data: '<h2>Introduction</h2><p>In today\'s fast-paced world, keeping up with the latest trends and ' +
					'insights is essential.</p>'
			}
		]
	},
	ai: {
		serviceUrl: 'https://ai.cke-cs.com/v1',
		chat: {
			context: {
				document: { enabled: true },
				urls: { enabled: true },
				files: { enabled: true }
			},
			shortcuts: [
				{
					id: 'summarize-document',
					type: 'chat',
					label: 'Summarize the document',
					prompt: 'Summarize the following document in 5-7 sentences. Focus on the main ideas and essential details. ' +
						'Exclude examples, repetition, and minor points. Do not introduce new information.'
				},
				{
					id: 'continue-writing',
					type: 'chat',
					label: 'Continue writing',
					prompt: 'Continue writing this document. Match the existing tone, vocabulary level, and formatting. ' +
						'Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas. ' +
						'Add approximately 3 paragraphs.',
					useReasoning: true,
					useWebSearch: true
				},
				{
					id: 'rewrite-document',
					type: 'chat',
					label: 'Rewrite the document',
					prompt: `Rewrite the document below for the following audience:

Audience: [e.g. Product / Engineering /Leadership]
Primary concern: [e.g., escalations, integrations, customer sentiment]
Context: [e.g. Internal performance review]

Guidelines:

- Emphasize sections most relevant to this audience
- De-emphasize or condense less relevant details
- Adjust terminology to match how this team thinks and speaks
- Keep metrics accurate and unchanged

Tone: [e.g. Clear, practical, collaborative]`,
					useReasoning: true,
					draftMode: true
				},
				{
					id: 'fix-grammar-and-spelling',
					type: 'review',
					label: 'Fix grammar and spelling',
					commandId: 'correctness'
				},
				{
					id: 'review-document',
					type: 'review',
					label: 'Review document'
				},
				{
					id: 'translate-document',
					type: 'translate',
					label: 'Translate document'
				}
			]
		},
		review: {
			extraCommands: [
				{
					id: 'company-style-guide',
					label: 'Company style guide',
					description: 'Apply the company writing style guide to ensure consistent, professional language.',
					prompt: 'Apply the following company style guide rules to the text. For each violation, suggest a concrete rewrite. ' +
						'Replace hedging phrases (e.g., "may require", "could positively impact", ' +
						'"should be treated as") with direct, confident statements. ' +
						'Convert passive voice to active voice where the actor is known or implied. ' +
						'Remove filler words and redundant qualifiers (e.g., "overall", "generally", "in terms of"). ' +
						'Replace vague language with precise wording (e.g., "minor improvement" → state the actual change). ' +
						'Keep all data, metrics, and factual content unchanged.'
				}
			]
		}
	},
	comments: {
		editorConfig: {
			extraPlugins: [ Autoformat, Bold, Italic, List, Mention ],
			mention: { feeds: [ { marker: '@', feed: [] } ] }
		}
	},
	exportPdf: {
		stylesheets: [ 'EDITOR_STYLES' ],
		fileName: 'export-pdf-demo.pdf',
		appID: 'cke5-demos',
		converterOptions: {
			format: 'Tabloid',
			margin_top: '7mm',
			margin_bottom: '7mm',
			margin_right: '7mm',
			margin_left: '7mm',
			page_orientation: 'portrait'
		},
		tokenUrl: false
	},
	exportWord: {
		version: 2,
		stylesheets: [ 'EDITOR_STYLES' ],
		fileName: 'export-word-demo.docx',
		converterOptions: {
			document: {
				size: 'A4',
				orientation: 'portrait',
				margins: {
					top: EXPORT_VERTICAL_SPACE,
					bottom: EXPORT_VERTICAL_SPACE,
					right: EXPORT_HORIZONTAL_SPACE,
					left: EXPORT_HORIZONTAL_SPACE
				}
			}
		},
		tokenUrl: false
	},
	ckbox: {
		allowExternalImagesEditing: image => !!image.match( CKBOX_IMAGE_EDIT_FORMATS ),
		forceDemoLabel: true,
		tokenUrl: CKBOX_TOKEN_URL
	},
	trackChangesData: {
		editorCreator: ( config, createElement ) => {
			if ( !config.removePlugins ) {
				config.removePlugins = [];
			}
			config.removePlugins.push(
				'AIChat',
				'AITranslate',
				'AIEditorIntegration',
				'AIQuickActions',
				'AIReviewMode',
				'AIChatShortcuts'
			);
			if ( !config.attachTo ) {
				config.attachTo = createElement();
			}
			return AiReviewEditor.create( config );
		}
	},
	cloudServices: CS_CONFIG
};

// --------- Classic AI Editor — AI Translate --------

class AiTranslateEditor extends ClassicEditor {}

AiTranslateEditor.builtinPlugins = [
	AIEditorIntegration,
	AIQuickActions,
	AITranslate,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	Bold,
	Bookmark,
	CaseChange,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Code,
	Comments,
	Emoji,
	Essentials,
	ExportPdf,
	ExportWord,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Footnotes,
	FormatPainter,
	Fullscreen,
	Heading,
	HorizontalLine,
	ImageBlock,
	ImageCaption,
	ImageEditing,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	ImageUtils,
	ImportWord,
	Indent,
	IndentBlock,
	Italic,
	LineHeight,
	Link,
	LinkImage,
	List,
	ListProperties,
	Mention,
	MergeFields,
	MultiLevelList,
	Paragraph,
	PasteFromOffice,
	PasteFromOfficeEnhanced,
	PictureEditing,
	RemoveFormat,
	RevisionHistory,
	SlashCommand,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableOfContents,
	TableProperties,
	TableToolbar,
	Template,
	TextTransformation,
	TodoList,
	TrackChanges,
	TrackChangesData,
	TrackChangesPreview,
	Underline
];

AiTranslateEditor.defaultConfig = {
	toolbar: {
		items: AI_DEMO_TOOLBAR_ITEMS
	},
	licenseKey: LICENSE_KEY,
	root: {
		placeholder: 'Type or paste your content here!'
	},
	balloonToolbar: [
		'comment',
		'|',
		'aiQuickActions',
		'|',
		'bold',
		'italic',
		'blockQuote',
		'|',
		'link',
		'insertImage',
		'|',
		'bulletedList',
		'numberedList'
	],
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [ 10, 12, 14, 'default', 18, 20, 22 ],
		supportAllValues: true
	},
	fullscreen: {
		onEnterCallback: container =>
			container.classList.add(
				'editor-container',
				'editor-container_document-editor',
				'editor-container_include-annotations',
				'editor-container_contains-wrapper',
				'editor-container_include-fullscreen',
				'main-container'
			)
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
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage',
			'|',
			'ckboxImageEdit'
		]
	},
	lineHeight: {
		supportAllValues: true
	},
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: { download: 'file' }
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	mention: {
		feeds: [ { marker: '@', feed: [] } ]
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ]
	},
	template: {
		definitions: [
			{
				title: 'Introduction',
				description: 'Simple introduction to an article',
				icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">' +
					'<g id="icons/article-image-right"><rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/></g></svg>',
				data: '<h2>Introduction</h2><p>In today\'s fast-paced world, keeping up with the latest trends and ' +
					'insights is essential.</p>'
			}
		]
	},
	ai: {
		serviceUrl: 'https://ai.cke-cs.com/v1',
		chat: {
			context: {
				document: { enabled: true },
				urls: { enabled: true },
				files: { enabled: true }
			},
			shortcuts: [
				{
					id: 'summarize-document',
					type: 'chat',
					label: 'Summarize the document',
					prompt: 'Summarize the following document in 5-7 sentences. Focus on the main ideas and essential details. ' +
						'Exclude examples, repetition, and minor points. Do not introduce new information.'
				},
				{
					id: 'continue-writing',
					type: 'chat',
					label: 'Continue writing',
					prompt: 'Continue writing this document. Match the existing tone, vocabulary level, and formatting. ' +
						'Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas. ' +
						'Add approximately 3 paragraphs.',
					useReasoning: true,
					useWebSearch: true
				},
				{
					id: 'rewrite-document',
					type: 'chat',
					label: 'Rewrite the document',
					prompt: `Rewrite the document below for the following audience:
 
Audience: [e.g. Product / Engineering /Leadership]
Primary concern: [e.g., escalations, integrations, customer sentiment]
Context: [e.g. Internal performance review]

Guidelines:

- Emphasize sections most relevant to this audience
- De-emphasize or condense less relevant details
- Adjust terminology to match how this team thinks and speaks
- Keep metrics accurate and unchanged

Tone: [e.g. Clear, practical, collaborative]`,
					useReasoning: true,
					draftMode: true
				},
				{
					id: 'fix-grammar-and-spelling',
					type: 'review',
					label: 'Fix grammar and spelling',
					commandId: 'correctness'
				},
				{
					id: 'review-document',
					type: 'review',
					label: 'Review document'
				},
				{
					id: 'translate-document',
					type: 'translate',
					label: 'Translate document'
				}
			]
		}
	},
	comments: {
		editorConfig: {
			extraPlugins: [ Autoformat, Bold, Italic, List, Mention ],
			mention: { feeds: [ { marker: '@', feed: [] } ] }
		}
	},
	exportPdf: {
		stylesheets: [ 'EDITOR_STYLES' ],
		fileName: 'export-pdf-demo.pdf',
		appID: 'cke5-demos',
		converterOptions: {
			format: 'Tabloid',
			margin_top: '7mm',
			margin_bottom: '7mm',
			margin_right: '7mm',
			margin_left: '7mm',
			page_orientation: 'portrait'
		},
		tokenUrl: false
	},
	exportWord: {
		version: 2,
		stylesheets: [ 'EDITOR_STYLES' ],
		fileName: 'export-word-demo.docx',
		converterOptions: {
			document: {
				size: 'A4',
				orientation: 'portrait',
				margins: {
					top: EXPORT_VERTICAL_SPACE,
					bottom: EXPORT_VERTICAL_SPACE,
					right: EXPORT_HORIZONTAL_SPACE,
					left: EXPORT_HORIZONTAL_SPACE
				}
			}
		},
		tokenUrl: false
	},
	ckbox: {
		allowExternalImagesEditing: image => !!image.match( CKBOX_IMAGE_EDIT_FORMATS ),
		forceDemoLabel: true,
		tokenUrl: CKBOX_TOKEN_URL
	},
	trackChangesData: {
		editorCreator: ( config, createElement ) => {
			if ( !config.removePlugins ) {
				config.removePlugins = [];
			}
			config.removePlugins.push(
				'AIChat',
				'AITranslate',
				'AIEditorIntegration',
				'AIQuickActions',
				'AIReviewMode',
				'AIChatShortcuts'
			);
			if ( !config.attachTo ) {
				config.attachTo = createElement();
			}
			return AiTranslateEditor.create( config );
		}
	},
	cloudServices: CS_CONFIG
};

// --------- Balloon AI Editor — Custom AI interface --------

class BalloonAiEditor extends BalloonEditor {}

BalloonAiEditor.builtinPlugins = [
	AIChat,
	AIEditorIntegration,
	AIQuickActions,
	AIReviewMode,
	AITranslate,
	AIChatShortcuts,
	Autoformat,
	BlockQuote,
	BlockToolbar,
	Bold,
	CKBox,
	CloudServices,
	Comments,
	EasyImage,
	Emoji,
	Essentials,
	Heading,
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
	List,
	MediaEmbed,
	Mention,
	Paragraph,
	PasteFromOffice,
	PasteFromOfficeEnhanced,
	PictureEditing,
	Table,
	TableToolbar,
	TextTransformation,
	TrackChanges,
	TrackChangesData,
	SimpleUploadAdapter,
	SlashCommand,
	BalloonToolbar,
	Underline
];

BalloonAiEditor.defaultConfig = {
	licenseKey: LICENSE_KEY,
	cloudServices: CS_CONFIG,
	blockToolbar: [
		'undo',
		'redo',
		'|',
		'heading',
		'|',
		'uploadImage',
		'insertTable',
		'blockQuote',
		'mediaEmbed',
		'|',
		'bulletedList',
		'numberedList',
		'|',
		'outdent',
		'indent'
	],
	toolbar: {
		items: [
			'comment',
			'|',
			'aiQuickActions',
			'ask-ai',
			'|',
			'bold',
			'italic',
			'underline',
			'|',
			'link'
		]
	},
	emoji: {
		definitionsUrl: 'cdn'
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' }
		]
	},
	image: {
		styles: [ 'alignCenter', 'alignLeft', 'alignRight' ],
		resizeOptions: [
			{ name: 'resizeImage:original', label: 'Default image width', value: null },
			{ name: 'resizeImage:50', label: '50% page width', value: '50' },
			{ name: 'resizeImage:75', label: '75% page width', value: '75' }
		],
		toolbar: [
			'imageTextAlternative',
			'toggleImageCaption',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage'
		]
	},
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://'
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	},
	ckbox: {
		allowExternalImagesEditing: image => !!image.match( CKBOX_IMAGE_EDIT_FORMATS ),
		forceDemoLabel: true,
		tokenUrl: CKBOX_TOKEN_URL
	},
	comments: {
		editorConfig: {
			extraPlugins: [ Autoformat, Bold, Italic, List, Mention ],
			mention: {
				feeds: [ { marker: '@', feed: [] } ]
			}
		}
	},
	trackChangesData: {
		editorCreator: ( config, createElement ) => {
			if ( !config.removePlugins ) {
				config.removePlugins = [];
			}
			config.removePlugins.push(
				'AIChat',
				'AIEditorIntegration',
				'AIQuickActions',
				'AIReviewMode',
				'AITranslate'
			);
			if ( !config.attachTo ) {
				config.attachTo = createElement();
			}
			return BalloonAiEditor.create( config );
		}
	},
	ai: {
		serviceUrl: 'https://ai.cke-cs.com/v1',
		chat: {
			shortcuts: [
				{
					id: 'summarize-document',
					type: 'chat',
					label: 'Summarize the document',
					prompt: 'Summarize the following document in 5-7 sentences. Focus on the main ideas and essential details. ' +
						'Exclude examples, repetition, and minor points. Do not introduce new information.'
				},
				{
					id: 'continue-writing',
					type: 'chat',
					label: 'Continue writing',
					prompt: 'Continue writing this document. Match the existing tone, vocabulary level, and formatting. ' +
						// eslint-disable-next-line max-len
						'Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas. Add approximately 3 paragraphs.',
					useReasoning: true,
					useWebSearch: true
				},
				{
					id: 'rewrite-document',
					type: 'chat',
					label: 'Rewrite the document',
					prompt: `Rewrite the document below for the following audience:

Audience: [e.g. Product / Engineering /Leadership]
Primary concern: [e.g., escalations, integrations, customer sentiment]
Context: [e.g. Internal performance review]

Guidelines:

- Emphasize sections most relevant to this audience
- De-emphasize or condense less relevant details
- Adjust terminology to match how this team thinks and speaks
- Keep metrics accurate and unchanged

Tone: [e.g. Clear, practical, collaborative]`,
					useReasoning: true,
					draftMode: true
				},
				{
					id: 'fix-grammar-and-spelling',
					type: 'review',
					label: 'Fix grammar and spelling',
					commandId: 'correctness'
				},
				{
					id: 'review-document',
					type: 'review',
					label: 'Review document'
				},
				{
					id: 'translate-document',
					type: 'translate',
					label: 'Translate document'
				}
			]
		},
		review: {
			extraCommands: [
				{
					id: 'company-style-guide',
					label: 'Company style guide',
					description: 'Apply the company writing style guide to ensure consistent, professional language.',
					prompt: 'Apply the following company style guide rules to the text. For each violation, suggest a concrete rewrite. ' +
						'Replace hedging phrases with direct, confident statements. ' +
						'Convert passive voice to active voice where the actor is known or implied. ' +
						'Remove filler words and redundant qualifiers. ' +
						'Replace vague language with precise wording. ' +
						'Keep all data, metrics, and factual content unchanged.'
				}
			]
		}
	}
};

// --------- Editor bundle ------------------------------------------------------------------------

const AiSpotlightEditors = {
	ClassicAiEditor,
	AiChatEditor,
	AiQuickActionsEditor,
	AiReviewEditor,
	AiTranslateEditor,
	BalloonAiEditor
};
const AI_DEMO_TYPE_TO_EDITOR_KEY = {
	'ai-classic': 'aiClassic',
	'ai-chat': 'aiChat',
	'ai-quick-actions': 'aiQuickActions',
	'ai-review': 'aiReview',
	'ai-translate': 'aiTranslate',
	'ai-balloon': 'aiBalloon'
};

function getMatchMediaQuery( breakpoint ) {
	const BREAKPOINTS = {
		extraSmall: 28,
		small: 48,
		medium: 64,
		extraMedium: 79,
		large: 88,
		extraLarge: 108
	};

	const breakpointValue = BREAKPOINTS[ breakpoint ];
	if ( !breakpointValue ) {
		return false;
	}

	return window.matchMedia( `(width >= ${ breakpointValue }rem)` ).matches;
}

function removeLoader( { loaderClass } ) {
	const loaderElement = document.querySelector( loaderClass );
	if ( loaderElement ) {
		loaderElement.parentNode.removeChild( loaderElement );
	}
}

function showEditorWrapper( { editorWrapperClass, classToRemove } ) {
	const editorWrapperElement = document.querySelector( editorWrapperClass );
	if ( editorWrapperElement ) {
		editorWrapperElement.classList.remove( classToRemove );
	}
}

const viewportTopOffsetEditors = [];

function startViewportTopOffsetUpdater( editor ) {
	const header = document.querySelector( '.demo-page-header' );

	function applyOffset() {
		const top = header ? header.getBoundingClientRect().height : 0;
		editor.ui.viewportOffset = { top };
	}

	applyOffset();

	if ( !viewportTopOffsetEditors.length && header && window.ResizeObserver ) {
		const observer = new ResizeObserver( () => {
			viewportTopOffsetEditors.forEach( ed => {
				ed.ui.viewportOffset = { top: header.getBoundingClientRect().height };
			} );
		} );
		observer.observe( header );
	}

	viewportTopOffsetEditors.push( editor );
}

function handleIDUrlParameter( paramName ) {
	const url = new URL( window.location.href );
	let paramValue = url.searchParams.get( paramName );

	if ( !paramValue ) {
		paramValue = uid();
		url.searchParams.set( paramName, paramValue );
		window.history.replaceState( {}, document.title, url.toString() );
	}

	return paramValue;
}

function getRandomUserName() {
	const firstNames = [ 'Alex', 'Jordan', 'Taylor', 'Casey', 'Morgan', 'Riley', 'Avery', 'Quinn', 'Sage', 'River' ];
	const lastNames = [ 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez' ];
	const firstName = firstNames[ Math.floor( Math.random() * firstNames.length ) ];
	const lastName = lastNames[ Math.floor( Math.random() * lastNames.length ) ];
	return `${ firstName } ${ lastName }`;
}

function buildUserTokenUrl( baseUrl, user ) {
	const url = new URL( baseUrl );

	for ( const key of Object.keys( user ) ) {
		if ( !user[ key ] ) {
			continue;
		}

		const paramName = key === 'role' ? key : `user.${ key }`;
		url.searchParams.set( paramName, user[ key ] );
	}

	return url.toString();
}

function createUsersIntegrationEditor( userId ) {
	const USER_DATA = {
		name: getRandomUserName(),
		id: userId,
		role: 'writer'
	};

	class UsersIntegration {
		constructor( editor ) {
			this.editor = editor;
		}

		static get pluginName() {
			return 'UsersIntegration';
		}

		static get requires() {
			return [ 'Users' ];
		}

		init() {
			const users = this.editor.plugins.get( 'Users' );
			users.addUser( USER_DATA );
			users.defineMe( USER_DATA.id );
		}
	}

	return { USER_DATA, UsersIntegration };
}

function setupAiDisplayMode( editor, options = {} ) {
	const {
		wideSidebarBreakpointWhenAiOpen = 'extraLarge',
		wideSidebarBreakpointWhenAiClosed = 'extraMedium'
	} = options;

	const annotationsUIs = editor.plugins.get( 'AnnotationsUIs' );
	const fullscreenCommand = editor.commands.get( 'toggleFullscreen' );
	const aiTabs = editor.plugins.has( 'AITabs' ) ? editor.plugins.get( 'AITabs' ) : false;

	// Cache the last applied mode to avoid re-rendering the annotations sidebar
	// when the target mode hasn't changed (e.g. toggling the balloon AI panel on
	// wide screens where both breakpoints resolve to the same mode).
	let lastAppliedMode = null;

	function isAiSidebarOpen() {
		if ( !aiTabs || !aiTabs.view ) {
			return false;
		}
		return aiTabs.view.isRendered && aiTabs.view.isVisible;
	}

	function refreshDisplayMode() {
		if ( fullscreenCommand && fullscreenCommand.value ) {
			return;
		}
		if ( !annotationsUIs ) {
			return;
		}
		const aiOpen = isAiSidebarOpen();
		// eslint-disable-next-line max-len
		const targetMode = ( aiOpen ? getMatchMediaQuery( wideSidebarBreakpointWhenAiOpen ) : getMatchMediaQuery( wideSidebarBreakpointWhenAiClosed ) ) ?
			'wideSidebar' :
			'narrowSidebar';

		if ( targetMode === lastAppliedMode ) {
			return;
		}

		try {
			annotationsUIs.switchTo( targetMode );
			lastAppliedMode = targetMode;
		} catch ( error ) {
			console.warn( 'Annotations UI not ready yet:', error );
		}
	}

	let resizeTimeout;
	const debouncedRefreshDisplayMode = () => {
		clearTimeout( resizeTimeout );
		resizeTimeout = setTimeout( refreshDisplayMode, 150 );
	};

	editor.ui.view.listenTo( window, 'resize', debouncedRefreshDisplayMode );
	setTimeout( () => refreshDisplayMode(), 100 );

	if ( aiTabs && aiTabs.view ) {
		aiTabs.view.on( 'change:isVisible', refreshDisplayMode );
		aiTabs.view.on( 'change:isRendered', refreshDisplayMode );
	}

	if ( fullscreenCommand ) {
		fullscreenCommand.on( 'execute', () => {
			if ( !fullscreenCommand.value ) {
				refreshDisplayMode();
			}
		} );
	}
}

function setupAiSidebarVisibility( editor, sidebarElement, closedClass = 'ai-demo-types-integration__sidebar--ai-closed' ) {
	if ( !sidebarElement ) {
		return;
	}
	const aiTabs = editor.plugins.get( 'AITabs' );

	function isAiSidebarOpen() {
		if ( !aiTabs || !aiTabs.view ) {
			return false;
		}
		return aiTabs.view.isRendered && aiTabs.view.isVisible;
	}

	function updateVisibility() {
		sidebarElement.classList.toggle( closedClass, !isAiSidebarOpen() );
	}

	setTimeout( () => updateVisibility(), 100 );

	if ( aiTabs && aiTabs.view ) {
		aiTabs.view.on( 'change:isVisible', updateVisibility );
		aiTabs.view.on( 'change:isRendered', updateVisibility );
	}
}

function setupAnnotationsScrollRefresh( editor ) {
	const editorEl = editor.ui.view.editable.element;
	const annotations = editor.plugins.get( 'Annotations' );
	editorEl.addEventListener( 'scroll', () => {
		editor.ui.update();
		annotations.refreshPositioning();
	} );
}

function setupScrollPrevention( editor ) {
	const commentsRepo = editor.plugins.get( 'CommentsRepository' );
	let scrollPreventionActive = false;

	commentsRepo.on( 'change:activeCommentThread', () => {
		if ( commentsRepo.activeCommentThread ) {
			scrollPreventionActive = true;
			const originalScrollTo = window.scrollTo;
			window.scrollTo = function( ...args ) {
				if ( scrollPreventionActive ) {
					return;
				}
				return originalScrollTo.apply( window, args );
			};
			setTimeout( () => {
				scrollPreventionActive = false;
				window.scrollTo = originalScrollTo;
			}, 100 );
		}
	} );
}

function updateVisibleAiDemoEditorUi( panelRoot ) {
	if ( !panelRoot ) {
		return;
	}
	const wrapper = panelRoot.querySelector( '[data-demo-type]' );
	if ( !wrapper ) {
		return;
	}
	const editorKey = AI_DEMO_TYPE_TO_EDITOR_KEY[ wrapper.dataset.demoType ];
	if ( !editorKey ) {
		return;
	}
	const editor = window.editors[ editorKey ];
	if ( editor?.ui?.update ) {
		editor.ui.update();
	}
}

function setupDemoTabButtons() {
	document.querySelectorAll( '[data-demo-tab-target]' ).forEach( btn => {
		btn.addEventListener( 'click', () => {
			const id = btn.getAttribute( 'data-demo-tab-target' );
			document.querySelectorAll( '[data-demo-tab-target]' ).forEach( b => {
				const on = b === btn;
				b.classList.toggle( 'is-active', on );
				b.setAttribute( 'aria-selected', on ? 'true' : 'false' );
			} );
			document.querySelectorAll( '[data-demo-panel]' ).forEach( panel => {
				const match = panel.getAttribute( 'data-demo-panel' ) === id;
				panel.hidden = !match;
				panel.classList.toggle( 'is-active', match );
			} );
			const panel = document.querySelector( `[data-demo-panel="${ id }"]` );
			requestAnimationFrame( () => {
				requestAnimationFrame( () => updateVisibleAiDemoEditorUi( panel ) );
			} );
		} );
	} );
}

function disableStickyHeader( editor ) {
	if ( !editor.ui.view.stickyPanel ) {
		return;
	}
	editor.ui.view.stickyPanel.unbind( 'isActive' );
	editor.ui.view.stickyPanel.isActive = false;
}

window.editors = {};

function initAiClassicEditor() {
	const editorElement = document.querySelector( '#cke5-ai-demo-types-classic-content' );
	const annotationsContainer = document.querySelector( '#editor-annotations-classic' );
	const sidebarContainer = document.querySelector( '#ai-sidebar-container-classic' );
	const userId = handleIDUrlParameter( 'userId' );
	const channelId = handleIDUrlParameter( 'channelId' );
	const { USER_DATA, UsersIntegration } = createUsersIntegrationEditor( userId );

	const editorConfig = {
		extraPlugins: [ UsersIntegration ],
		collaboration: { channelId },
		cloudServices: {
			...CS_CONFIG,
			tokenUrl: buildUserTokenUrl( CS_CONFIG.tokenUrl, USER_DATA )
		},
		sidebar: { container: annotationsContainer },
		ai: {
			container: {
				type: 'sidebar',
				element: sidebarContainer,
				showResizeButton: false,
				visibleByDefault: true
			}
		}
	};

	AiSpotlightEditors.ClassicAiEditor.create( { attachTo: editorElement, ...editorConfig } )
		.then( editor => {
			window.editors.aiClassic = editor;
			disableStickyHeader( editor );
			createComments( editor, USER_DATA );
			setupAiDisplayMode( editor, {
				wideSidebarBreakpointWhenAiOpen: 'large',
				wideSidebarBreakpointWhenAiClosed: 'extraMedium'
			} );
			setupAnnotationsScrollRefresh( editor );
			setupScrollPrevention( editor );
			setupAiSidebarVisibility( editor, sidebarContainer.closest( '.ai-demo-types-integration__sidebar' ) );
			removeLoader( { loaderClass: '.js-spinner-holder-ai-classic' } );
			showEditorWrapper( { editorWrapperClass: '.js-editor-wrapper-ai-classic', classToRemove: 'u-gone' } );
			startViewportTopOffsetUpdater( editor );
		} )
		.catch( error => console.error( error.stack ) );
}

function initAiChatEditor() {
	const editorElement = document.querySelector( '#cke5-ai-demo-types-chat-content' );
	const annotationsContainer = document.querySelector( '#editor-annotations-chat' );
	const sidebarContainer = document.querySelector( '#ai-sidebar-container-chat' );
	const userId = handleIDUrlParameter( 'userId' );
	const channelId = handleIDUrlParameter( 'channelIdChat' );
	const { USER_DATA, UsersIntegration } = createUsersIntegrationEditor( userId );

	const editorConfig = {
		extraPlugins: [ UsersIntegration ],
		collaboration: { channelId },
		cloudServices: {
			...CS_CONFIG,
			tokenUrl: buildUserTokenUrl( CS_CONFIG.tokenUrl, USER_DATA )
		},
		sidebar: { container: annotationsContainer },
		ai: {
			container: {
				type: 'sidebar',
				element: sidebarContainer,
				showResizeButton: false,
				visibleByDefault: true
			}
		}
	};

	AiSpotlightEditors.AiChatEditor.create( { attachTo: editorElement, ...editorConfig } )
		.then( editor => {
			window.editors.aiChat = editor;
			disableStickyHeader( editor );
			createComments( editor, USER_DATA, CHAT_COMMENTS_DATA );
			setupAiDisplayMode( editor, {
				wideSidebarBreakpointWhenAiOpen: 'large',
				wideSidebarBreakpointWhenAiClosed: 'extraMedium'
			} );
			setupAnnotationsScrollRefresh( editor );
			setupScrollPrevention( editor );
			setupAiSidebarVisibility( editor, sidebarContainer.closest( '.ai-demo-types-integration__sidebar' ) );
			removeLoader( { loaderClass: '.js-spinner-holder-ai-chat' } );
			showEditorWrapper( { editorWrapperClass: '.js-editor-wrapper-ai-chat', classToRemove: 'u-gone' } );
			startViewportTopOffsetUpdater( editor );
		} )
		.catch( error => console.error( error.stack ) );
}

function initAiQuickActionsEditor() {
	const editorElement = document.querySelector( '#cke5-ai-demo-types-quick-actions-content' );
	const annotationsContainer = document.querySelector( '#editor-annotations-quick-actions' );
	if ( !editorElement || !annotationsContainer ) {
		return;
	}
	const userId = handleIDUrlParameter( 'userId' );
	const channelId = handleIDUrlParameter( 'channelIdQuickActions' );
	const { USER_DATA, UsersIntegration } = createUsersIntegrationEditor( userId );

	const editorConfig = {
		extraPlugins: [ UsersIntegration ],
		collaboration: { channelId },
		cloudServices: {
			...CS_CONFIG,
			tokenUrl: buildUserTokenUrl( CS_CONFIG.tokenUrl, USER_DATA )
		},
		sidebar: { container: annotationsContainer }
	};

	AiSpotlightEditors.AiQuickActionsEditor.create( { attachTo: editorElement, ...editorConfig } )
		.then( editor => {
			window.editors.aiQuickActions = editor;
			disableStickyHeader( editor );
			createComments( editor, USER_DATA );
			setupAiDisplayMode( editor, { wideSidebarBreakpointWhenAiClosed: 'extraMedium' } );
			setupAnnotationsScrollRefresh( editor );
			setupScrollPrevention( editor );
			removeLoader( { loaderClass: '.js-spinner-holder-ai-quick-actions' } );
			showEditorWrapper( { editorWrapperClass: '.js-editor-wrapper-ai-quick-actions', classToRemove: 'u-gone' } );
			startViewportTopOffsetUpdater( editor );
		} )
		.catch( error => console.error( error.stack ) );
}

function initAiReviewEditor() {
	const editorElement = document.querySelector( '#cke5-ai-demo-types-review-content' );
	const annotationsContainer = document.querySelector( '#editor-annotations-review' );
	const sidebarContainer = document.querySelector( '#ai-sidebar-container-review' );
	if ( !editorElement || !annotationsContainer || !sidebarContainer ) {
		return;
	}
	const userId = handleIDUrlParameter( 'userId' );
	const channelId = handleIDUrlParameter( 'channelIdReview' );
	const { USER_DATA, UsersIntegration } = createUsersIntegrationEditor( userId );

	const editorConfig = {
		extraPlugins: [ UsersIntegration ],
		collaboration: { channelId },
		cloudServices: {
			...CS_CONFIG,
			tokenUrl: buildUserTokenUrl( CS_CONFIG.tokenUrl, USER_DATA )
		},
		sidebar: { container: annotationsContainer },
		ai: {
			container: {
				type: 'sidebar',
				element: sidebarContainer,
				showResizeButton: false,
				visibleByDefault: true
			}
		}
	};

	AiSpotlightEditors.AiReviewEditor.create( { attachTo: editorElement, ...editorConfig } )
		.then( editor => {
			window.editors.aiReview = editor;
			disableStickyHeader( editor );
			createComments( editor, USER_DATA );
			setupAiDisplayMode( editor, {
				wideSidebarBreakpointWhenAiOpen: 'large',
				wideSidebarBreakpointWhenAiClosed: 'extraMedium'
			} );
			setupAnnotationsScrollRefresh( editor );
			setupScrollPrevention( editor );
			setupAiSidebarVisibility( editor, sidebarContainer.closest( '.ai-demo-types-integration__sidebar' ) );
			removeLoader( { loaderClass: '.js-spinner-holder-ai-review' } );
			showEditorWrapper( { editorWrapperClass: '.js-editor-wrapper-ai-review', classToRemove: 'u-gone' } );
			startViewportTopOffsetUpdater( editor );
		} )
		.catch( error => console.error( error.stack ) );
}

function initAiTranslateEditor() {
	const editorElement = document.querySelector( '#cke5-ai-demo-types-translate-content' );
	const annotationsContainer = document.querySelector( '#editor-annotations-translate' );
	const sidebarContainer = document.querySelector( '#ai-sidebar-container-translate' );
	if ( !editorElement || !annotationsContainer || !sidebarContainer ) {
		return;
	}
	const userId = handleIDUrlParameter( 'userId' );
	const channelId = handleIDUrlParameter( 'channelIdTranslate' );
	const { USER_DATA, UsersIntegration } = createUsersIntegrationEditor( userId );

	const editorConfig = {
		extraPlugins: [ UsersIntegration ],
		collaboration: { channelId },
		cloudServices: {
			...CS_CONFIG,
			tokenUrl: buildUserTokenUrl( CS_CONFIG.tokenUrl, USER_DATA )
		},
		sidebar: { container: annotationsContainer },
		ai: {
			container: {
				type: 'sidebar',
				element: sidebarContainer,
				showResizeButton: false,
				visibleByDefault: true
			}
		}
	};

	AiSpotlightEditors.AiTranslateEditor.create( { attachTo: editorElement, ...editorConfig } )
		.then( editor => {
			window.editors.aiTranslate = editor;
			disableStickyHeader( editor );
			createComments( editor, USER_DATA );
			setupAiDisplayMode( editor, {
				wideSidebarBreakpointWhenAiOpen: 'large',
				wideSidebarBreakpointWhenAiClosed: 'extraMedium'
			} );
			setupAnnotationsScrollRefresh( editor );
			setupScrollPrevention( editor );
			setupAiSidebarVisibility( editor, sidebarContainer.closest( '.ai-demo-types-integration__sidebar' ) );
			removeLoader( { loaderClass: '.js-spinner-holder-ai-translate' } );
			showEditorWrapper( { editorWrapperClass: '.js-editor-wrapper-ai-translate', classToRemove: 'u-gone' } );
			startViewportTopOffsetUpdater( editor );
		} )
		.catch( error => console.error( error.stack ) );
}

function initAiBalloonEditor() {
	const editorElement = document.querySelector( '#cke5-ai-demo-types-balloon-content' );
	const annotationsContainer = document.querySelector( '#editor-annotations-balloon' );
	const aiPanelContent = document.querySelector( '#ai-balloon-panel-content' );
	const aiPanel = document.querySelector( '#ai-balloon-panel' );
	const aiTrigger = document.querySelector( '#ai-balloon-trigger' );

	if ( !editorElement || !aiPanelContent ) {
		return;
	}

	const userId = handleIDUrlParameter( 'userId' );
	const channelId = handleIDUrlParameter( 'channelIdBalloon' );
	const { USER_DATA, UsersIntegration } = createUsersIntegrationEditor( userId );

	const editorConfig = {
		extraPlugins: [ UsersIntegration ],
		collaboration: { channelId },
		cloudServices: {
			...CS_CONFIG,
			tokenUrl: buildUserTokenUrl( CS_CONFIG.tokenUrl, USER_DATA )
		},
		sidebar: { container: annotationsContainer },
		ai: {
			container: {
				type: 'custom',
				showResizeButton: false,
				visibleByDefault: false
			}
		}
	};

	AiSpotlightEditors.BalloonAiEditor.create( editorElement, editorConfig )
		.then( editor => {
			window.editors.aiBalloon = editor;

			createComments( editor, USER_DATA, BALLOON_COMMENTS_DATA );
			setupAiDisplayMode( editor, {
				wideSidebarBreakpointWhenAiOpen: 'extraMedium',
				wideSidebarBreakpointWhenAiClosed: 'extraMedium'
			} );
			setupAnnotationsScrollRefresh( editor );
			setupScrollPrevention( editor );

			const aiTabs = editor.plugins.has( 'AITabs' ) ?
				editor.plugins.get( 'AITabs' ) :
				null;

			if ( aiTabs ) {
				buildCustomAiTabs( aiTabs, aiPanelContent, editor );
			}

			function updatePanelVisibility() {
				const isOpen = !!( aiTabs?.view?.isRendered && aiTabs?.view?.isVisible );
				aiPanel.classList.toggle( 'ai-balloon-panel--open', isOpen );
				aiTrigger.classList.toggle( 'ai-balloon-trigger--active', isOpen );

				if ( isOpen ) {
					adjustPanelHorizontalShift();

					// Force a CKEditor UI update after the panel becomes visible so the
					// add-context button (position:absolute with JS-calculated left via
					// getBoundingClientRect) is repositioned with the real element width.
					// eslint-disable-next-line no-void
					void aiPanel.offsetHeight;
					requestAnimationFrame( () => editor.ui.update() );
				}
			}

			function adjustPanelHorizontalShift() {
				if ( !aiPanel || !aiPanel.classList.contains( 'ai-balloon-panel--open' ) ) {
					return;
				}

				const dock = aiPanel.parentElement;
				if ( !dock ) {
					return;
				}

				const dockRect = dock.getBoundingClientRect();
				if ( dockRect.width === 0 ) {
					return;
				}

				const panelWidth = 454;
				const viewportWidth = window.innerWidth;
				const rightMargin = 18;

				const panelNaturalRight = dockRect.left + panelWidth;
				const overflow = ( panelNaturalRight + rightMargin ) - viewportWidth;
				const leftOffset = overflow > 0 ? -overflow : 0;

				aiPanel.style.left = leftOffset + 'px';
			}

			window.addEventListener( 'resize', adjustPanelHorizontalShift );

			if ( aiTabs?.view ) {
				aiTabs.view.on( 'change:isVisible', updatePanelVisibility );
				aiTabs.view.on( 'change:isRendered', updatePanelVisibility );
			}

			if ( aiTrigger ) {
				aiTrigger.addEventListener( 'click', () => {
					editor.execute( 'toggleAi' );
				} );
			}

			removeLoader( { loaderClass: '.js-spinner-holder-ai-balloon' } );
			showEditorWrapper( { editorWrapperClass: '.js-editor-wrapper-ai-balloon', classToRemove: 'u-gone' } );
			startViewportTopOffsetUpdater( editor );
		} )
		.catch( error => console.error( error.stack ) );
}

// Builds the custom AI tab UI: panels wrapper (top) → buttons bar → disclaimer (bottom).
// Tab panels are nested inside CKEditor class wrappers so internal theme CSS applies.
function buildCustomAiTabs( aiTabs, container, editor ) {
	const panelsWrapper = document.createElement( 'div' );
	panelsWrapper.className = 'ai-balloon-panels';

	const tabsOuterWrapper = document.createElement( 'div' );
	tabsOuterWrapper.className = 'ck ck-reset ck-tabs ck-tabs_right ck-ai-tabs ck-ai-tabs__sidebar';

	const panelsContainer = document.createElement( 'div' );
	panelsContainer.className = 'ck ck-tabs__panels-container ck-tabs__panels-container_right';

	tabsOuterWrapper.appendChild( panelsContainer );
	panelsWrapper.appendChild( tabsOuterWrapper );

	const buttonsBar = document.createElement( 'div' );
	buttonsBar.className = 'ai-balloon-buttons';

	for ( const id of aiTabs.view.getTabIds() ) {
		const tab = aiTabs.view.getTab( id );

		buttonsBar.appendChild( tab.button.element );
		panelsContainer.appendChild( tab.panel.element );
	}

	container.appendChild( panelsWrapper );
	container.appendChild( buttonsBar );

	const disclaimer = document.createElement( 'div' );
	disclaimer.className = 'ai-balloon-disclaimer';
	disclaimer.textContent = 'AI can make mistakes. Please double-check responses.';
	container.appendChild( disclaimer );

	// Tab panel content renders lazily — use MutationObserver to inject minimize buttons.
	const injectMinimizeButtons = () => {
		container.querySelectorAll( '.ck-ai-header' ).forEach( header => {
			if ( header.querySelector( '.ai-balloon-minimize' ) ) {
				return;
			}

			const minimizeBtn = document.createElement( 'button' );
			minimizeBtn.className = 'ck ck-button ck-ai-button-tertiary ck-off ai-balloon-minimize';
			minimizeBtn.type = 'button';
			minimizeBtn.title = 'Minimize AI';
			minimizeBtn.innerHTML = minimizeIcon;
			header.appendChild( minimizeBtn );

			minimizeBtn.addEventListener( 'click', () => editor.execute( 'toggleAi' ) );
		} );
	};

	new MutationObserver( injectMinimizeButtons ).observe( container, { childList: true, subtree: true } );
	injectMinimizeButtons();
}

setupDemoTabButtons();
initAiClassicEditor();
initAiChatEditor();
initAiQuickActionsEditor();
initAiReviewEditor();
initAiTranslateEditor();
initAiBalloonEditor();
