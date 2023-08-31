/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// Productivity features require license key to work properly, you can get a trial license key: https://orders.ckeditor.com/trial/premium-features?feature=pagination
const PRODUCTIVITY_PACK_LICENSE_KEY = '';

import DecoupledEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

// Framework
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import fontColorIcon from '@ckeditor/ckeditor5-font/theme/icons/font-color.svg';
import clickOutsideHandler from '@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler';
import DropdownButtonView from '@ckeditor/ckeditor5-ui/src/dropdown/button/dropdownbuttonview';
import DropdownPanelView from '@ckeditor/ckeditor5-ui/src/dropdown/dropdownpanelview';
import DropdownView from '@ckeditor/ckeditor5-ui/src/dropdown/dropdownview';
import ToolbarView from '@ckeditor/ckeditor5-ui/src/toolbar/toolbarview';

// Features
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
// Productivity Pack features
import Template from '@ckeditor/ckeditor5-template/src/template';
import SlashCommand from '@ckeditor/ckeditor5-slash-command/src/slashcommand';

export const TEMPLATE_DEFINITIONS = [
	{
		title: 'New client contact',
		data: `<p>Hey [Name],</p>
				<p>Thank you for your last purchase with our company [Name]! We hope that you like your new product.</p>
				<p>Would you be so kind to share a personal experience with us? Please fill out the questionnaire attached to this email. It is brief, and your replies will be anonymous.</p>
				<p>I appreciate your attention and engagement.</p>
				<p>Thanks,<br>[Your name]</p>`,
		description: 'Predefined contact with a new customer',
		icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6421 9.04747C18.6421 11.6896 16.544 15.4659 11.2241 15.4659C10.3955 15.4659 9.6463 15.3654 8.97193 15.1873C8.21294 15.6712 6.48571 16.7639 5.92171 17.1693C5.88646 16.429 5.83161 14.2026 5.83161 13.3391C4.26299 11.8763 3.85864 10.267 3.85864 9.06501C3.85864 6.80584 5.53396 2.39963 11.2241 2.39963C16.9142 2.39963 18.6421 6.40534 18.6421 9.04747Z" fill="#C9FE43"/><path d="M3.69464 14.2468H4.16339V14.043L4.01434 13.904L3.69464 14.2468ZM6.83497 16.095L6.95472 15.6418L6.75615 15.5893L6.58297 15.6997L6.83497 16.095ZM3.78475 18.077L3.31653 18.0993C3.3247 18.2709 3.42613 18.4243 3.58085 18.4991C3.73558 18.5738 3.9188 18.5579 4.05833 18.4576L3.78475 18.077ZM9.0871 16.8424C11.8676 16.8424 13.8494 15.8511 15.1338 14.4751C16.4077 13.1103 16.9739 11.39 16.9739 9.95518H16.0364C16.0364 11.1625 15.5536 12.6514 14.4485 13.8353C13.3538 15.008 11.6266 15.9049 9.0871 15.9049V16.8424ZM16.9739 9.95518C16.9739 8.5434 16.5146 6.76669 15.2856 5.33513C14.0437 3.88855 12.0535 2.83859 9.0871 2.83859V3.77609C11.8109 3.77609 13.5296 4.72899 14.5743 5.9458C15.6318 7.17762 16.0364 8.72484 16.0364 9.95518H16.9739ZM9.0871 2.83859C6.10474 2.83859 4.1288 4.00075 2.90752 5.49637C1.70184 6.97288 1.25293 8.74713 1.25293 9.97272H2.19043C2.19043 8.93915 2.57918 7.38071 3.63368 6.08933C4.67259 4.81704 6.37936 3.77609 9.0871 3.77609V2.83859ZM1.25293 9.97272C1.25293 11.2864 1.69864 13.0263 3.37494 14.5896L4.01434 13.904C2.55342 12.5416 2.19043 11.0631 2.19043 9.97272H1.25293ZM6.71522 16.5482C7.43078 16.7372 8.22032 16.8424 9.0871 16.8424V15.9049C8.29669 15.9049 7.5879 15.8091 6.95472 15.6418L6.71522 16.5482ZM3.22589 14.2468C3.22589 15.1179 3.28093 17.3517 3.31653 18.0993L4.25297 18.0547C4.21807 17.3218 4.16339 15.1028 4.16339 14.2468H3.22589ZM4.05833 18.4576C4.60837 18.0623 6.31766 16.9807 7.08697 16.4902L6.58297 15.6997C5.83431 16.177 4.08911 17.281 3.51117 17.6964L4.05833 18.4576Z" fill="#743CCD"/><circle cx="5.43604" cy="9.78443" r="0.963748" fill="#743CCD"/><circle cx="9.11096" cy="9.78443" r="0.963748" fill="#743CCD"/><circle cx="12.7875" cy="9.78443" r="0.963748" fill="#743CCD"/></svg>`,
	},
	{
		title: 'Company Letterhead',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 21 21"><g clip-path="url(#a)"><path fill="#E8DFF7" d="M19.611.5H1.39a.889.889 0 0 0-.889.889V19.61c0 .491.398.889.889.889h18.22a.889.889 0 0 0 .889-.889V1.39a.889.889 0 0 0-.888-.89Z"/><path fill="#fff" d="M4.5 17.167c0 .859.696 1.555 1.556 1.555h8.888c.86 0 1.556-.696 1.556-1.555V6.539c0-.448-.194-.875-.531-1.17l-2.585-2.262a1.555 1.555 0 0 0-1.024-.385H6.056c-.86 0-1.556.697-1.556 1.556v12.889Z"/><path stroke="#743CCD" stroke-width=".667" d="M15.939 5.785c.145.127.228.31.228.502v11.435a.667.667 0 0 1-.667.667h-10a.667.667 0 0 1-.667-.667v-14c0-.368.299-.666.667-.666h7.069c.161 0 .317.058.439.165l2.93 2.564Z"/><rect width="4.889" height=".667" x="6.278" y="8.944" fill="#743CCD" rx=".333"/><rect width="6.667" height=".667" x="6.278" y="10.722" fill="#743CCD" rx=".333"/><rect width="4.889" height=".667" x="6.278" y="12.5" fill="#743CCD" rx=".333"/><rect width="4.889" height=".667" x="6.278" y="14.278" fill="#743CCD" rx=".333"/><rect width="7.111" height=".667" x="6.278" y="16.055" fill="#743CCD" rx=".333"/><circle cx="7.611" cy="6.278" r="1.333" fill="#C9FE43"/><rect width="4" height=".667" x="9.833" y="6.278" fill="#743CCD" rx=".333"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z" transform="translate(.5 .5)"/></clipPath></defs></svg>`,
		data: `<table style="border-width:0">
							<colgroup>
								<col style="width:30%;">
								<col style="width:70%;">
							</colgroup>
							<tbody>
								<tr>
									<td style="width:30%;">
										<figure class="image">
											<picture>
												<img src="/assets/images/matata-logo.png">
											</picture>
										</figure>
									</td>
									<td>
										<span><a href="mailto:info@matataventures.co"><span style="background-color:transparent;color:#1155cc;"><u>info@matataventures.co</u></span></a><br>
										<span">1 Bonnyville Dr. Spryfield B3P 1H8</span><br>
										<span">+1-613-555-0133</span></span>
									</td>
								</tr>
							</tbody>
						</table>`,
		description: 'Document letterhead with logo',
	},
];


class FormattingOptions extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'FormattingOptions';
	}

	/**
	 * @inheritDoc
	 */
	constructor( editor ) {
		super( editor );

		editor.ui.componentFactory.add( 'formattingOptions', locale => {
			const t = locale.t;
			const buttonView = new DropdownButtonView( locale );
			const panelView = new DropdownPanelView( locale );
			const dropdownView = new DropdownView( locale, buttonView, panelView );
			const toolbarView = this.toolbarView = dropdownView.toolbarView = new ToolbarView( locale );

			// Accessibility: Give the toolbar a human-readable ARIA label.
			toolbarView.set( {
				ariaLabel: t( 'Formatting options toolbar' )
			} );

			// Accessibility: Give the dropdown a human-readable ARIA label.
			dropdownView.set( {
				label: t( 'Formatting options' )
			} );

			// Toolbars in dropdowns need specific styling, hence the class.
			dropdownView.extendTemplate( {
				attributes: {
					class: [ 'ck-toolbar-dropdown' ]
				}
			} );

			// Accessibility: If the dropdown panel is already open, the arrow down key should focus the first child of the #panelView.
			dropdownView.keystrokes.set( 'arrowdown', ( data, cancel ) => {
				if ( dropdownView.isOpen ) {
					toolbarView.focus();
					cancel();
				}
			} );

			// Accessibility: If the dropdown panel is already open, the arrow up key should focus the last child of the #panelView.
			dropdownView.keystrokes.set( 'arrowup', ( data, cancel ) => {
				if ( dropdownView.isOpen ) {
					toolbarView.focusLast();
					cancel();
				}
			} );

			// The formatting options should not close when the user clicked:
			// * the dropdown or it contents,
			// * any editing root,
			// * any floating UI in the "body" collection
			// It should close, for instance, when another (main) toolbar button was pressed, though.
			dropdownView.on( 'render', () => {
				clickOutsideHandler( {
					emitter: dropdownView,
					activator: () => dropdownView.isOpen,
					callback: () => { dropdownView.isOpen = false; },
					contextElements: [
						dropdownView.element,
						...[ ...editor.ui.getEditableElementsNames() ].map( name => editor.ui.getEditableElement( name ) ),
						document.querySelector( '.ck-body-wrapper' )
					]
				} );
			} );

			// The main button of the dropdown should be bound to the state of the dropdown.
			buttonView.bind( 'isOn' ).to( dropdownView, 'isOpen' );
			buttonView.bind( 'isEnabled' ).to( dropdownView );

			// Using the font color icon to visually represent the formatting.
			buttonView.set( {
				tooltip: t( 'Formatting options' ),
				icon: fontColorIcon
			} );

			dropdownView.panelView.children.add( toolbarView );

			toolbarView.fillFromConfig(
				editor.config.get( 'formattingOptions' ),
				editor.ui.componentFactory
			);

			return dropdownView;
		} );
	}
}

class BottomToolbarCustomizations extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'BottomToolbarCustomizations';
	}

	afterInit() {
		const editor = this.editor;

		editor.ui.on( 'ready', () => {
			overrideDropdownPositionsToNorth( editor, editor.ui.view.toolbar );
			overrideDropdownPositionsToNorth( editor, editor.plugins.get( 'FormattingOptions' ).toolbarView );

			overrideTooltipPositions( editor.ui.view.toolbar );
			overrideTooltipPositions( editor.plugins.get( 'FormattingOptions' ).toolbarView );
		} );

	}
}

DecoupledEditor.create(
	document.querySelector('#cke5-user-interface-bottom-toolbar-demo-content'),
	{
		plugins: [
			Alignment,
			Autoformat,
			BlockQuote,
			Bold,
			BottomToolbarCustomizations,
			CloudServices,
			Essentials,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			FormattingOptions,
			Heading,
			HorizontalLine,
			Image,
			ImageCaption,
			ImageResize,
			ImageStyle,
			ImageToolbar,
			ImageUpload,
			Base64UploadAdapter,
			Indent,
			IndentBlock,
			Italic,
			Link,
			List,
			MediaEmbed,
			Mention,
			Paragraph,
			PasteFromOffice,
			RemoveFormat,
			Strikethrough,
			Subscript,
			Superscript,
			Table,
			TableColumnResize,
			TableToolbar,
			Underline,
			UploadAdapter,
			// SlashCommand,
			// Template,
		],
		licenseKey: PRODUCTIVITY_PACK_LICENSE_KEY,
		toolbar: [
			'formattingOptions',
			'|',
			'link',
			'blockQuote',
			'uploadImage',
			'insertTable',
			'mediaEmbed',
			'horizontalLine',
			// '|',
			// 'insertTemplate',
		],
		formattingOptions: [
			'undo',
			'redo',
			'|',
			'fontFamily',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'removeFormat',
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'outdent',
			'indent',
		],
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
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4',
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5',
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6',
				},
			],
		},
		fontFamily: {
			supportAllValues: true,
		},
		fontSize: {
			options: [10, 12, 14, 'default', 18, 20, 22],
			supportAllValues: true,
		},
		image: {
			styles: ['alignCenter', 'alignLeft', 'alignRight'],
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
				'imageStyle:side',
			],
		},
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
		},
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
		},
		template: {
			definitions: TEMPLATE_DEFINITIONS,
		},
	}
)
	.then((editor) => {
		window.editor = editor;

		document
			.querySelector(
				'#cke5-user-interface-bottom-toolbar-demo-toolbar-container'
			)
			.appendChild(editor.ui.view.toolbar.element);
	})
	.catch((error) => {
		console.error(error.stack);
	});

/**
 * Force all toolbar dropdown panels to use northern positions rather than southern (editor default).
 * This will position them correctly relative to the toolbar at the bottom of the editing root.
 *
 * @private
 * @param {module:core/editor/editor~Editor} editor
 * @param {module:ui/toolbar/toolbarview~ToolbarView} toolbarView
 */
function overrideDropdownPositionsToNorth( editor, toolbarView ) {
	const {
		south, north, southEast, southWest, northEast, northWest,
		southMiddleEast, southMiddleWest, northMiddleEast, northMiddleWest
	} = DropdownView.defaultPanelPositions;

	let panelPositions;

	if ( editor.locale.uiLanguageDirection !== 'rtl' ) {
		panelPositions = [
			northEast, northWest, northMiddleEast, northMiddleWest, north,
			southEast, southWest, southMiddleEast, southMiddleWest, south
		];
	} else {
		panelPositions = [
			northWest, northEast, northMiddleWest, northMiddleEast, north,
			southWest, southEast, southMiddleWest, southMiddleEast, south
		];
	}

	for ( const item of toolbarView.items ) {
		if ( !( item instanceof DropdownView ) ) {
			continue;
		}

		item.on( 'change:isOpen', () => {
			if ( !item.isOpen ) {
				return;
			}

			item.panelView.position = DropdownView._getOptimalPosition( {
				element: item.panelView.element,
				target: item.buttonView.element,
				fitInViewport: true,
				positions: panelPositions
			} ).name;
		} );
	}
}

/**
 * Forces all toolbar items to display tooltips to the north.
 * This will position them correctly relative to the toolbar at the bottom of the editing root.
 *
 * @private
 * @param {module:ui/toolbar/toolbarview~ToolbarView} toolbarView
 */
function overrideTooltipPositions( toolbarView ) {
	for ( const item of toolbarView.items ) {
		if ( item.buttonView ) {
			item.buttonView.tooltipPosition = 'n';
		} else if ( item.tooltipPosition ) {
			item.tooltipPosition = 'n';
		}
	}
}
