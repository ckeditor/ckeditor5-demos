/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

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
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

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

DecoupledEditor.create( document.querySelector( '#cke5-user-interface-bottom-toolbar-demo-content' ), {
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
		UploadAdapter
	],
	toolbar: [
		'formattingOptions',
		'|',
		'link', 'blockQuote', 'uploadImage', 'insertTable', 'mediaEmbed', 'horizontalLine'
	],
	formattingOptions: [
		'undo', 'redo',
		'|',
		'fontFamily', 'fontSize', 'fontColor', 'fontBackgroundColor',
		'|',
		'bold', 'italic', 'underline', 'strikethrough', 'removeFormat',
		'|',
		'alignment',
		'|',
		'bulletedList', 'numberedList', 'outdent', 'indent'
	],
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
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [ 10, 12, 14, 'default', 18, 20, 22 ],
		supportAllValues: true
	},
	image: {
		styles: [ 'alignCenter', 'alignLeft', 'alignRight' ],
		toolbar: [
			'imageTextAlternative', 'toggleImageCaption',
			'|',
			'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side'
		]
	},
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://'
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	}
} )
	.then( editor => {
		window.editor = editor;

		document.querySelector( '#cke5-user-interface-bottom-toolbar-demo-toolbar-container' ).appendChild( editor.ui.view.toolbar.element );
	} ).catch( error => {
		console.error( error.stack );
	} );

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
