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

import {
	ClassicEditor,
	Alignment,
	Autoformat,
	Bold,
	CloudServices,
	EasyImage,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Heading,
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
	PasteFromOffice,
	Paragraph,
	Strikethrough,
	Table,
	TableCaption,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	Underline
} from 'ckeditor5';

import {
	PasteFromOfficeEnhanced
} from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

const REDUCED_MATERIAL_COLORS = [
	{ label: 'Red 50', color: '#ffebee' },
	{ label: 'Purple 50', color: '#f3e5f5' },
	{ label: 'Indigo 50', color: '#e8eaf6' },
	{ label: 'Blue 50', color: '#e3f2fd' },
	{ label: 'Cyan 50', color: '#e0f7fa' },
	{ label: 'Teal 50', color: '#e0f2f1' },
	{ label: 'Light green 50', color: '#f1f8e9' },
	{ label: 'Lime 50', color: '#f9fbe7' },
	{ label: 'Amber 50', color: '#fff8e1' },
	{ label: 'Orange 50', color: '#fff3e0' },
	{ label: 'Grey 50', color: '#fafafa' },
	{ label: 'Blue grey 50', color: '#eceff1' },
	{ label: 'Red 100', color: '#ffcdd2' },
	{ label: 'Purple 100', color: '#e1bee7' },
	{ label: 'Indigo 100', color: '#c5cae9' },
	{ label: 'Blue 100', color: '#bbdefb' },
	{ label: 'Cyan 100', color: '#b2ebf2' },
	{ label: 'Teal 100', color: '#b2dfdb' },
	{ label: 'Light green 100', color: '#dcedc8' },
	{ label: 'Lime 100', color: '#f0f4c3' },
	{ label: 'Amber 100', color: '#ffecb3' },
	{ label: 'Orange 100', color: '#ffe0b2' },
	{ label: 'Grey 100', color: '#f5f5f5' },
	{ label: 'Blue grey 100', color: '#cfd8dc' },
	{ label: 'Red 200', color: '#ef9a9a' },
	{ label: 'Purple 200', color: '#ce93d8' },
	{ label: 'Indigo 200', color: '#9fa8da' },
	{ label: 'Blue 200', color: '#90caf9' },
	{ label: 'Cyan 200', color: '#80deea' },
	{ label: 'Teal 200', color: '#80cbc4' },
	{ label: 'Light green 200', color: '#c5e1a5' },
	{ label: 'Lime 200', color: '#e6ee9c' },
	{ label: 'Amber 200', color: '#ffe082' },
	{ label: 'Orange 200', color: '#ffcc80' },
	{ label: 'Grey 200', color: '#eeeeee' },
	{ label: 'Blue grey 200', color: '#b0bec5' },
	{ label: 'Red 300', color: '#e57373' },
	{ label: 'Purple 300', color: '#ba68c8' },
	{ label: 'Indigo 300', color: '#7986cb' },
	{ label: 'Blue 300', color: '#64b5f6' },
	{ label: 'Cyan 300', color: '#4dd0e1' },
	{ label: 'Teal 300', color: '#4db6ac' },
	{ label: 'Light green 300', color: '#aed581' },
	{ label: 'Lime 300', color: '#dce775' },
	{ label: 'Amber 300', color: '#ffd54f' },
	{ label: 'Orange 300', color: '#ffb74d' },
	{ label: 'Grey 300', color: '#e0e0e0' },
	{ label: 'Blue grey 300', color: '#90a4ae' },
	{ label: 'Red 400', color: '#ef5350' },
	{ label: 'Purple 400', color: '#ab47bc' },
	{ label: 'Indigo 400', color: '#5c6bc0' },
	{ label: 'Blue 400', color: '#42a5f5' },
	{ label: 'Cyan 400', color: '#26c6da' },
	{ label: 'Teal 400', color: '#26a69a' },
	{ label: 'Light green 400', color: '#9ccc65' },
	{ label: 'Lime 400', color: '#d4e157' },
	{ label: 'Amber 400', color: '#ffca28' },
	{ label: 'Orange 400', color: '#ffa726' },
	{ label: 'Grey 400', color: '#bdbdbd' },
	{ label: 'Blue grey 400', color: '#78909c' },
	{ label: 'Red 500', color: '#f44336' },
	{ label: 'Purple 500', color: '#9c27b0' },
	{ label: 'Indigo 500', color: '#3f51b5' },
	{ label: 'Blue 500', color: '#2196f3' },
	{ label: 'Cyan 500', color: '#00bcd4' },
	{ label: 'Teal 500', color: '#009688' },
	{ label: 'Light green 500', color: '#8bc34a' },
	{ label: 'Lime 500', color: '#cddc39' },
	{ label: 'Amber 500', color: '#ffc107' },
	{ label: 'Orange 500', color: '#ff9800' },
	{ label: 'Grey 500', color: '#9e9e9e' },
	{ label: 'Blue grey 500', color: '#607d8b' },
	{ label: 'Red 600', color: '#e53935' },
	{ label: 'Purple 600', color: '#8e24aa' },
	{ label: 'Indigo 600', color: '#3949ab' },
	{ label: 'Blue 600', color: '#1e88e5' },
	{ label: 'Cyan 600', color: '#00acc1' },
	{ label: 'Teal 600', color: '#00897b' },
	{ label: 'Light green 600', color: '#7cb342' },
	{ label: 'Lime 600', color: '#c0ca33' },
	{ label: 'Amber 600', color: '#ffb300' },
	{ label: 'Orange 600', color: '#fb8c00' },
	{ label: 'Grey 600', color: '#757575' },
	{ label: 'Blue grey 600', color: '#546e7a' },
	{ label: 'Red 700', color: '#d32f2f' },
	{ label: 'Purple 700', color: '#7b1fa2' },
	{ label: 'Indigo 700', color: '#303f9f' },
	{ label: 'Blue 700', color: '#1976d2' },
	{ label: 'Cyan 700', color: '#0097a7' },
	{ label: 'Teal 700', color: '#00796b' },
	{ label: 'Light green 700', color: '#689f38' },
	{ label: 'Lime 700', color: '#afb42b' },
	{ label: 'Amber 700', color: '#ffa000' },
	{ label: 'Orange 700', color: '#f57c00' },
	{ label: 'Grey 700', color: '#616161' },
	{ label: 'Blue grey 700', color: '#455a64' },
	{ label: 'Red 800', color: '#c62828' },
	{ label: 'Purple 800', color: '#6a1b9a' },
	{ label: 'Indigo 800', color: '#283593' },
	{ label: 'Blue 800', color: '#1565c0' },
	{ label: 'Cyan 800', color: '#00838f' },
	{ label: 'Teal 800', color: '#00695c' },
	{ label: 'Light green 800', color: '#558b2f' },
	{ label: 'Lime 800', color: '#9e9d24' },
	{ label: 'Amber 800', color: '#ff8f00' },
	{ label: 'Orange 800', color: '#ef6c00' },
	{ label: 'Grey 800', color: '#424242' },
	{ label: 'Blue grey 800', color: '#37474f' },
	{ label: 'Red 900', color: '#b71c1c' },
	{ label: 'Purple 900', color: '#4a148c' },
	{ label: 'Indigo 900', color: '#1a237e' },
	{ label: 'Blue 900', color: '#0d47a1' },
	{ label: 'Cyan 900', color: '#006064' },
	{ label: 'Teal 900', color: '#004d40' },
	{ label: 'Light green 900', color: '#33691e' },
	{ label: 'Lime 900', color: '#827717' },
	{ label: 'Amber 900', color: '#ff6f00' },
	{ label: 'Orange 900', color: '#e65100' },
	{ label: 'Grey 900', color: '#212121' },
	{ label: 'Blue grey 900', color: '#263238' }
];

ClassicEditor.create(
	document.querySelector( '#cke5-paste-from-office-enhanced-demo' ),
	{
		plugins: [
			Alignment,
			Autoformat,
			Bold,
			CloudServices,
			EasyImage,
			Essentials,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			GeneralHtmlSupport,
			Heading,
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
			Strikethrough,
			Table,
			TableCaption,
			TableCellProperties,
			TableProperties,
			TableToolbar,
			Underline,

			// Include premium features only if the license key is not GPL.
			...( LICENSE_KEY !== 'GPL' ? [
				PasteFromOfficeEnhanced
			] : [] )
		],
		toolbar: {
			items: [
				'undo',
				'redo',
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
				'|',
				'link',
				'uploadImage',
				'insertTable',
				'mediaEmbed',
				'|',
				{
					label: 'Alignment',
					icon: 'alignLeft',
					items: [
						'alignment:left',
						'alignment:right',
						'alignment:center',
						'alignment:justify'
					]
				},
				'|',
				'bulletedList',
				'numberedList',
				'outdent',
				'indent'
			]
		},
		licenseKey: LICENSE_KEY,
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
			columns: 12,
			colors: REDUCED_MATERIAL_COLORS
		},
		fontBackgroundColor: {
			columns: 12,
			colors: REDUCED_MATERIAL_COLORS
		},
		htmlSupport: {
			allow: [
				{
					name: /^.*$/u,
					styles: true,
					classes: true,
					attributes: true
				}
			]
		},
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText'
			]
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
		}
	}
)
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( error.stack );
	} );
