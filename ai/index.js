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

import {
	DecoupledEditor,
	Alignment,
	Autoformat,
	BalloonToolbar,
	BlockQuote,
	Bold,
	Code,
	Italic,
	Underline,
	Strikethrough,
	Subscript,
	Superscript,
	Bookmark,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	CodeBlock,
	Essentials,
	Font,
	GeneralHtmlSupport,
	Heading,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	AutoImage,
	PictureEditing,
	Indent,
	IndentBlock,
	AutoLink,
	Link,
	LinkImage,
	List,
	ListProperties,
	Mention,
	Paragraph,
	PasteFromOffice,
	Plugin,
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersEssentials,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	FindAndReplace,
	MediaEmbed,
	Emoji,
	uid,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText
} from 'ckeditor5';

import {
	AIChat,
	AIQuickActions,
	AIActions,
	AIBalloon,
	AIReviewMode,
	PasteFromOfficeEnhanced,
	TrackChanges,
	Comments,
	FormatPainter,
	LineHeight
} from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

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
	.create( document.querySelector( '#snippet-ckeditor-ai' ), {
		licenseKey: LICENSE_KEY,
		placeholder: 'Type or paste your content here!',
		plugins: [
			AIChat, AIQuickActions, AIActions, AIReviewMode, AIBalloon,
			Autoformat, BalloonToolbar, BlockQuote, Bold,
			Bookmark, Heading, Image, ImageCaption,
			ImageStyle, ImageToolbar, Indent, Italic, Link, List,
			Paragraph, Table, TableToolbar, Alignment, AutoImage, AutoLink,
			CloudServices, Code, CodeBlock, Essentials,
			Font, HorizontalLine,
			ImageInsert, ImageResize, ImageUpload, IndentBlock, GeneralHtmlSupport,
			LinkImage, ListProperties, Mention, PasteFromOffice, PasteFromOfficeEnhanced,
			PictureEditing, RemoveFormat,
			TableCaption, TableCellProperties, TableColumnResize,
			TableProperties, TextTransformation,
			Underline, Strikethrough, Subscript, Superscript,
			SpecialCharacters,
			SpecialCharactersArrows,
			SpecialCharactersCurrency,
			SpecialCharactersEssentials,
			SpecialCharactersLatin,
			SpecialCharactersMathematical,
			SpecialCharactersText,
			TodoList, FindAndReplace, MediaEmbed, Emoji, FormatPainter,
			LineHeight,
			TrackChanges, Comments,
			UsersIntegration,
			...!CKBOX_TOKEN_URL ? [] : [ CKBox, CKBoxImageEdit ]
		],
		toolbar: {
			items: [
				'undo', 'redo',
				'|',
				'trackChanges', 'comment',
				'|',
				'formatPainter', 'removeFormat',
				'|',
				'heading',
				'|',
				'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
				'|',
				'bold', 'italic', 'underline', 'code',
				'|',
				'link', 'insertImage', 'ckbox', 'mediaEmbed', 'insertTable', 'blockQuote', 'codeBlock',
				'|',
				'alignment', 'lineHeight',
				'|',
				'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
				'|',
				'specialCharacters', 'horizontalLine'
			],
			shouldNotGroupWhenFull: true
		},
		balloonToolbar: {
			items: [
				'aiQuickActions',
				'ask-ai',
				'|',
				'bold', 'italic', 'underline', 'strikethrough',
				'|',
				'link',
				'|',
				'fontColor', 'fontBackgroundColor'
			]
		},
		fontFamily: {
			supportAllValues: true
		},
		fontSize: {
			options: [ 10, 12, 14, 'default', 18, 20, 22 ],
			supportAllValues: true
		},
		htmlSupport: {
			allow: [
				{
					name: /^.*$/,
					styles: true,
					attributes: true,
					classes: true
				}
			]
		},
		image: {
			styles: [
				'alignCenter',
				'alignLeft',
				'alignRight'
			],
			resizeOptions: [
				{
					name: 'resizeImage:original',
					label: 'Original',
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
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText', '|',
				'resizeImage',
				'|',
				'ckboxImageEdit'
			]
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
				addTargetToExternalLinks: true,
				defaultProtocol: 'https://',
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
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableProperties',
				'tableCellProperties',
				'toggleTableCaption'
			]
		},
		ckbox: {
			tokenUrl: CKBOX_TOKEN_URL,
			forceDemoLabel: true,
			allowExternalImagesEditing: [ /^data:/, 'origin', /ckbox/ ]
		},
		collaboration: {
			channelId
		},
		cloudServices: {
			...CS_CONFIG,
			tokenUrl: buildUserTokenUrl( CS_CONFIG.tokenUrl, USER_DATA )
		},
		ai: {
			serviceUrl: 'https://ai.cke-cs.com/v1',
			container: {
				type: 'sidebar',
				element: document.querySelector( '#ai-sidebar-container' )
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
					}
				}
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
		}
	} )
	.then( editor => {
		window.editor = editor;

		document.querySelector( '.ai-integration__toolbar-container' ).appendChild( editor.ui.view.toolbar.element );

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
