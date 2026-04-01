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

import {
	Plugin,
	DecoupledEditor,
	Alignment,
	AutoImage,
	Autoformat,
	AutoLink,
	Autosave,
	BalloonToolbar,
	ImageBlock,
	BlockQuote,
	Bold,
	Bookmark,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Code,
	Emoji,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Fullscreen,
	Heading,
	HorizontalLine,
	ImageCaption,
	ImageEditing,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	ImageUtils,
	ImageInline,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Mention,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
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
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	uid
} from 'ckeditor5';

import {
	AIChat,
	AITranslate,
	AIEditorIntegration,
	AIQuickActions,
	AIReviewMode,
	AIChatShortcuts,
	CaseChange,
	Comments,
	ExportPdf,
	ExportWord,
	Footnotes,
	FormatPainter,
	ImportWord,
	LineHeight,
	MergeFields,
	MultiLevelList,
	PasteFromOfficeEnhanced,
	RevisionHistory,
	SlashCommand,
	TableOfContents,
	Template,
	TrackChanges,
	TrackChangesData,
	TrackChangesPreview
} from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

import { createComments } from './ai-comments.js';

const channelId = handleIDUrlParameter( 'channelId' );
const userId = handleIDUrlParameter( 'userId' );

const USER_DATA = {
	name: getRandomUserName(),
	id: userId,
	role: 'writer'
};

class UsersIntegration extends Plugin {
	static get requires() {
		return [ 'Users' ];
	}

	init() {
		const users = this.editor.plugins.get( 'Users' );

		users.addUser( USER_DATA );
		users.defineMe( USER_DATA.id );
	}
}

DecoupledEditor
	.create( {
		root: {
			element: document.querySelector( '#snippet-ckeditor-ai' )
		},
		licenseKey: LICENSE_KEY,
		placeholder: 'Type or paste your content here!',
		plugins: [
			AIChat,
			AIEditorIntegration,
			AIQuickActions,
			AIReviewMode,
			AITranslate,
			AIChatShortcuts,
			Alignment,
			Autoformat,
			AutoImage,
			AutoLink,
			Autosave,
			BalloonToolbar,
			ImageBlock,
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
			Underline,
			UsersIntegration
		],
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'revisionHistory',
				'trackChanges',
				'comment',
				'commentsArchive',
				'|',
				'toggleAi',
				'aiQuickActions',
				'|',
				'formatPainter',
				'fullscreen',
				'|',
				'heading',
				'|',
				'fontSize',
				'fontFamily',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'removeFormat',
				'|',
				'link',
				'insertImage',
				'ckbox',
				'insertTable',
				'insertTemplate',
				'blockQuote',
				'|',
				'alignment',
				'lineHeight',
				'|',
				'bulletedList',
				'numberedList',
				'multiLevelList',
				'outdent',
				'indent'
			]
		},
		balloonToolbar: [
			'comment',
			'|',
			'aiQuickActions',
			'ask-ai',
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
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
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
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true
			}
		},
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		table: {
			contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ]
		},
		template: {
			definitions: [
				{
					title: 'Introduction',
					description: 'Simple introduction to an article',
					// eslint-disable-next-line max-len
					icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <g id="icons/article-image-right">\n        <rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>\n        <g id="page" filter="url(#filter0_d_1_507)">\n            <path d="M9 41H36V12L28 5H9V41Z" fill="white"/>\n            <path d="M35.25 12.3403V40.25H9.75V5.75H27.7182L35.25 12.3403Z" stroke="#333333" stroke-width="1.5"/>\n        </g>\n        <g id="image">\n            <path id="Rectangle 22" d="M21.5 23C21.5 22.1716 22.1716 21.5 23 21.5H31C31.8284 21.5 32.5 22.1716 32.5 23V29C32.5 29.8284 31.8284 30.5 31 30.5H23C22.1716 30.5 21.5 29.8284 21.5 29V23Z" fill="#B6E3FC" stroke="#333333"/>\n            <path id="Vector 1" d="M24.1184 27.8255C23.9404 27.7499 23.7347 27.7838 23.5904 27.9125L21.6673 29.6268C21.5124 29.7648 21.4589 29.9842 21.5328 30.178C21.6066 30.3719 21.7925 30.5 22 30.5H32C32.2761 30.5 32.5 30.2761 32.5 30V27.7143C32.5 27.5717 32.4391 27.4359 32.3327 27.3411L30.4096 25.6268C30.2125 25.451 29.9127 25.4589 29.7251 25.6448L26.5019 28.8372L24.1184 27.8255Z" fill="#44D500" stroke="#333333" stroke-linejoin="round"/>\n            <circle id="Ellipse 1" cx="26" cy="25" r="1.5" fill="#FFD12D" stroke="#333333"/>\n        </g>\n        <rect id="Rectangle 23" x="13" y="13" width="12" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 24" x="13" y="17" width="19" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 25" x="13" y="21" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 26" x="13" y="25" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 27" x="13" y="29" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 28" x="13" y="33" width="16" height="2" rx="1" fill="#B4B4B4"/>\n    </g>\n    <defs>\n        <filter id="filter0_d_1_507" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n            <feOffset dx="1" dy="1"/>\n            <feComposite in2="hardAlpha" operator="out"/>\n            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>\n            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_507"/>\n            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_507" result="shape"/>\n        </filter>\n    </defs>\n</svg>\n',
					// eslint-disable-next-line max-len
					data: '<h2>Introduction</h2><p>In today\'s fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you\'re seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>'
				}
			]
		},
		ckbox: {
			allowExternalImagesEditing: image => {
				return !!image.match( CKBOX_IMAGE_EDIT_FORMATS );
			},
			forceDemoLabel: true,
			tokenUrl: CKBOX_TOKEN_URL
		},
		collaboration: {
			channelId
		},
		cloudServices: {
			...CS_CONFIG,
			tokenUrl: buildUserTokenUrl( CS_CONFIG.tokenUrl, USER_DATA )
		},
		trackChangesData: {
			editorCreator: ( config, createElement ) => {
				if ( !config.removePlugins ) {
					config.removePlugins = [];
				}

				config.removePlugins.push( 'AIChat',
					'AITranslate',
					'AIEditorIntegration',
					'AIQuickActions',
					'AIReviewMode',
					'AIChatShortcuts' );

				return DecoupledEditor.create( {
					...config,
					root: {
						element: createElement()
					}
				} );
			}
		},
		revisionHistory: {
			editorContainer: document.querySelector( '#editor-container' ),
			viewerContainer: document.querySelector( '#editor-revision-history' ),
			viewerEditorElement: document.querySelector( '#editor-revision-history-editor' ),
			viewerSidebarContainer: document.querySelector( '#editor-revision-history-sidebar' ),
			resumeUnsavedRevision: true,
			showRevisionViewerCallback: config => {
				const editorContainer = document.querySelector( '#editor-container' );
				const editorToolbar = document.querySelector( '.ai-integration__toolbar-container' );
				const viewerContainer = document.querySelector( '#editor-revision-history' );
				const viewerElement = document.querySelector( '#editor-revision-history-editor' );

				editorContainer.style.opacity = '0';
				editorContainer.style.visibility = 'hidden';
				editorContainer.style.pointerEvents = 'none';
				editorToolbar.style.opacity = '0';
				editorToolbar.style.visibility = 'hidden';
				editorToolbar.style.pointerEvents = 'none';

				viewerContainer.classList.add( 'is-visible' );

				return DecoupledEditor.create( {
					...config,
					root: {
						element: viewerElement
					}
				} ).then( viewerEditor => {
					const toolbarContainer = document.querySelector( '#editor-revision-history-toolbar' );

					if (
						toolbarContainer && viewerEditor && viewerEditor.ui &&
						viewerEditor.ui.view && viewerEditor.ui.view.toolbar && viewerEditor.ui.view.toolbar.element ) {
						toolbarContainer.innerHTML = '';
						toolbarContainer.appendChild( viewerEditor.ui.view.toolbar.element );
					}

					return viewerEditor;
				} );
			},
			closeRevisionViewerCallback: viewerEditor => {
				const editorContainer = document.querySelector( '#editor-container' );
				const editorToolbar = document.querySelector( '.ai-integration__toolbar-container' );
				const viewerContainer = document.querySelector( '#editor-revision-history' );

				viewerContainer.classList.remove( 'is-visible' );

				editorContainer.style.opacity = '';
				editorContainer.style.visibility = '';
				editorContainer.style.pointerEvents = '';
				editorToolbar.style.opacity = '';
				editorToolbar.style.visibility = '';
				editorToolbar.style.pointerEvents = '';

				return viewerEditor.destroy().then( () => {
					const toolbarContainer = document.querySelector( '#editor-revision-history-toolbar' );
					if ( toolbarContainer ) {
						toolbarContainer.innerHTML = '';
					}
				} );
			}
		},
		ai: {
			serviceUrl: 'https://ai.cke-cs.com/v1',
			container: {
				type: 'sidebar',
				element: document.querySelector( '#ai-sidebar-container' ),
				showResizeButton: false
			},
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
							'Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas.' +
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
						check: 'correctness'
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
						prompt: 'Apply the following company style guide rules to the text.' +
							'For each violation, suggest a concrete rewrite. ' +
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
				extraPlugins: [ Bold, Italic, Autoformat ]
			}
		},
		emoji: {
			skinTone: 'default',
			definitionsUrl: 'cdn'
		},
		sidebar: {
			container: document.querySelector( '#editor-annotations' )
		}
	} )
	.then( editor => {
		window.editor = editor;

		const toolbarContainer = document.querySelector( '.ai-integration__toolbar-container' );
		if ( toolbarContainer ) {
			if ( editor.ui.view.menuBarView ) {
				toolbarContainer.appendChild( editor.ui.view.menuBarView.element );
			}
			toolbarContainer.appendChild( editor.ui.view.toolbar.element );
		}

		createComments( editor, USER_DATA );

		// Switch between narrow and wide sidebar annotations according to the window size.
		const annotationsUIs = editor.plugins.get( 'AnnotationsUIs' );
		const fullscreenCommand = editor.commands.get( 'toggleFullscreen' );
		const aiTabs = editor.plugins.get( 'AITabs' );

		function isAiSidebarOpen() {
			if ( !aiTabs || !aiTabs.view ) {
				return false;
			}

			return aiTabs.view.isRendered && aiTabs.view.isVisible;
		}

		function refreshDisplayMode() {
			// Fullscreen mode handles the annotations mode itself.
			if ( fullscreenCommand && fullscreenCommand.value ) {
				return;
			}

			const aiOpen = isAiSidebarOpen();

			// For breakpoint values: small: 48rem (768px), medium: 64rem (1024px),
			// extraMedium: 79rem (1264px), large: 88rem (1408px), extraLarge: 108rem (1728px)
			if ( aiOpen ) {
				// When AI is open: only use wide sidebar on extraLarge screens and wider (>= 1728px)
				if ( getMatchMediaQuery( 'extraLarge' ) ) {
					annotationsUIs.switchTo( 'wideSidebar' );
				} else {
					annotationsUIs.switchTo( 'narrowSidebar' );
				}
			} else {
				// When AI is closed: use wide sidebar on extraMedium screens and wider (>= 1264px)
				if ( getMatchMediaQuery( 'extraMedium' ) ) {
					annotationsUIs.switchTo( 'wideSidebar' );
				} else {
					annotationsUIs.switchTo( 'narrowSidebar' );
				}
			}
		}

		// Debounce resize events to prevent flickering
		let resizeTimeout;
		const debouncedRefreshDisplayMode = () => {
			clearTimeout( resizeTimeout );
			resizeTimeout = setTimeout( refreshDisplayMode, 150 );
		};

		if ( annotationsUIs ) {
			editor.ui.view.listenTo( window, 'resize', debouncedRefreshDisplayMode );
			refreshDisplayMode();

			// Listen to AI sidebar visibility changes
			if ( aiTabs && aiTabs.view ) {
				aiTabs.view.on( 'change:isVisible', refreshDisplayMode );
				aiTabs.view.on( 'change:isRendered', refreshDisplayMode );
			}
		}

		// When exiting fullscreen mode, refresh the display mode.
		if ( fullscreenCommand ) {
			fullscreenCommand.on( 'execute', () => {
				if ( !fullscreenCommand.value ) {
					refreshDisplayMode();
				}
			} );
		}

		// Prevent page scrolling when opening comments
		const commentsRepo = editor.plugins.get( 'CommentsRepository' );
		if ( commentsRepo ) {
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

		return editor;
	} )
	.catch( err => {
		console.error( err );
	} );

/**
 * Builds a user token URL with the specified base URL and user information.
 *
 * @param baseUrl - The base URL for the token.
 * @param user - The user information to include in the token.
 * @returns The constructed user token URL.
 */
function buildUserTokenUrl( baseUrl, user ) {
	const tokenUrl = `${ baseUrl }?` + Object.keys( user )
		.filter( key => user[ key ] )
		.map( key => {
			if ( key === 'role' ) {
				return `${ key }=${ user[ key ] }`;
			}

			return `user.${ key }=${ user[ key ] }`;
		} )
		.join( '&' );

	return tokenUrl;
}

/**
 * Generic function to handle URL parameters - gets parameter from URL or generates one if missing.
 * Updates the URL state with the parameter.
 *
 * @param paramName - The name of the URL parameter (e.g., 'channelId', 'userId')
 * @returns The parameter value from URL or newly generated
 */
function handleIDUrlParameter( paramName ) {
	// Get parameter from URL.
	const paramMatch = location.search.match( new RegExp( `${ paramName }=([^&]+)` ) );
	let paramValue = paramMatch ? decodeURIComponent( paramMatch[ 1 ] ) : null;

	if ( !paramValue ) {
		// Generate new parameter value.
		paramValue = uid();

		// Update URL with the new parameter.
		const url = new URL( window.location.href );
		url.searchParams.set( paramName, paramValue );
		window.history.replaceState( {}, document.title, url.toString() );
	}

	return paramValue;
}

/**
 * Generates a random user name by combining a random first name and a random last name.
 *
 * @returns A randomly generated user name.
 */
function getRandomUserName() {
	const firstNames = [ 'Alex', 'Jordan', 'Taylor', 'Casey', 'Morgan', 'Riley', 'Avery', 'Quinn', 'Sage', 'River' ];
	const lastNames = [ 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez' ];

	const firstName = firstNames[ Math.floor( Math.random() * firstNames.length ) ];
	const lastName = lastNames[ Math.floor( Math.random() * lastNames.length ) ];

	return `${ firstName } ${ lastName }`;
}

/**
 * Checks if the current viewport matches the given media query.
 * Breakpoint values: small: 48rem (768px), medium: 64rem (1024px),
 * extraMedium: 79rem (1264px), large: 88rem (1408px), extraLarge: 108rem (1728px)
 *
 * @param {string} breakpoint - The breakpoint name (e.g., 'extraLarge', 'extraMedium')
 * @returns {boolean} True if the viewport matches the media query
 */
function getMatchMediaQuery( breakpoint ) {
	const BREAKPOINTS = {
		extraSmall: 28, // 448px
		small: 48, // 768px
		medium: 64, // 1024px
		extraMedium: 79, // 1264px
		large: 88, // 1408px
		extraLarge: 108 // 1728px
	};

	const breakpointValue = BREAKPOINTS[ breakpoint ];
	if ( !breakpointValue ) {
		return false;
	}

	const query = `(width >= ${ breakpointValue }rem)`;
	return window.matchMedia( query ).matches;
}
