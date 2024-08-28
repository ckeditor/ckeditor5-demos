/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// CKEditor Commercial Features require a license key to work properly.
// * You can get a trial license key: https://orders.ckeditor.com/trial/premium-features.
// * Or you can comment out (disable) the plugins imported from the "ckeditor5-premium-features" package.
const LICENSE_KEY = '';

if (!LICENSE_KEY) {
	alert(
		'CKEditor Commercial Features included in this demo require a license key.\n' +
		'Check the index.js file for more information.'
	);
}

// CKBox plugin requires a valid token URL in order to use the CKBox application.
// After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
// https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint
const CKBOX_TOKEN_URL = '';

// WProofreader plugin require a license key to work properly.
// For more info how to get the key, see https://ckeditor.com/docs/ckeditor5/latest/features/spelling-and-grammar-checking.html.
const WEB_SPELL_CHECKER_LICENSE_KEY = '';

import {
	ClassicEditor,
	AdjacentListsSupport,
	Alignment,
	Autoformat,
	AutoLink,
	BlockQuote,
	Bold,
	Code,
	CodeBlock,
	CKBox,
	CloudServices,
	Clipboard,
	EasyImage,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Heading,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	ListProperties,
	MediaEmbed,
	Mention,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
	SpecialCharacters,
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
	TextTransformation,
	TodoList,
	Underline
} from 'ckeditor5';

import {
	CaseChange,
	FormatPainter,
	ExportPdf,
	ExportWord,
	ImportWord,
	MergeFields,
	Pagination,
	Template,
	SlashCommand,
	MultiLevelList
} from 'ckeditor5-premium-features';

import { WProofreader } from '@webspellchecker/wproofreader-ckeditor5';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

import coreStylesheets from 'ckeditor5/ckeditor5.css?url';
import premiumStylesheets from 'ckeditor5-premium-features/ckeditor5-premium-features.css?url';

const TEMPLATE_DEFINITIONS = [
	{
		title: 'Reservation reminder',
		data: `
		<p style="text-align: center;">
			<img
				src=" https://ckeditor.com/assets/images/ckdemo/merge-fields/serenity-springs.png" 
				alt="Serenity Springs Resort logo." />
		</p>
		<p>Dear {{guestName}},</p>

		<p>We’re excited to welcome you to Serenity Springs Resort in just two days! Your relaxing getaway is just around the corner.</p>

		<p><b>Reservation Details:</b><br />
		Check-In Date: {{arrivalDate}}<br />
		Reservation Number: {{reservationNumber}}<br />
		Number of Guests: : {{numberOfGuests}}</p>

		<p>If you have any special requests or need assistance before your arrival, please don’t hesitate to contact us. We want to ensure your stay is as comfortable and enjoyable as possible.</p>

		<p>We look forward to your arrival!</p>

		<p>
				<i>Warm regards,<br />
				The Serenity Springs Resort Team</i>
			</p>
		`,
		icon: `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 21 21'><g clip-path='url(#a)'><path fill='#E8DFF7' d='M19.611.5H1.39a.889.889 0 0 0-.889.889V19.61c0 .491.398.889.889.889h18.22a.889.889 0 0 0 .889-.889V1.39a.889.889 0 0 0-.888-.89Z'/><path fill='#fff' d='M4.5 17.167c0 .859.696 1.555 1.556 1.555h8.888c.86 0 1.556-.696 1.556-1.555V6.539c0-.448-.194-.875-.531-1.17l-2.585-2.262a1.555 1.555 0 0 0-1.024-.385H6.056c-.86 0-1.556.697-1.556 1.556v12.889Z'/><path stroke='#743CCD' stroke-width='.667' d='M15.939 5.785c.145.127.228.31.228.502v11.435a.667.667 0 0 1-.667.667h-10a.667.667 0 0 1-.667-.667v-14c0-.368.299-.666.667-.666h7.069c.161 0 .317.058.439.165l2.93 2.564Z'/><rect width='4.889' height='.667' x='6.278' y='8.944' fill='#743CCD' rx='.333'/><rect width='6.667' height='.667' x='6.278' y='10.722' fill='#743CCD' rx='.333'/><rect width='4.889' height='.667' x='6.278' y='12.5' fill='#743CCD' rx='.333'/><rect width='4.889' height='.667' x='6.278' y='14.278' fill='#743CCD' rx='.333'/><rect width='7.111' height='.667' x='6.278' y='16.055' fill='#743CCD' rx='.333'/><circle cx='7.611' cy='6.278' r='1.333' fill='#C9FE43'/><rect width='4' height='.667' x='9.833' y='6.278' fill='#743CCD' rx='.333'/></g><defs><clipPath id='a'><path fill='#fff' d='M0 0h20v20H0z' transform='translate(.5 .5)'/></clipPath></defs></svg>`,
		description: 'Detailed reservation information',
	},
	{
		title: 'Spa booking reminder',
		data: `
			<p style="text-align: center;">
				<img
					src=" https://ckeditor.com/assets/images/ckdemo/merge-fields/serenity-springs.png" 
					alt="Serenity Springs Resort logo." />
			</p>
			<p>{{guestTitle}} {{guestLastName}},</p>
			<p>Your upcoming stay at Serenity Springs Resort is the perfect opportunity to unwind and rejuvenate. To make your visit even more special, we’re pleased to offer you exclusive perks for our luxurious spa services.</p>
			<p><b>Spa Highlights:</b></p>
			<ul>
			<li><b>Complimentary {{complimentaryDuration}} Massage:</b> Relax and let your stress melt away.</li>
			<li><b>{{discount}}  Off Any Spa Package:</b> Indulge in our full range of treatments, from facials to body wraps.</li>
			</ul>
			<p><b>Reminder:</b> Our spa is popular, so we recommend booking your treatments in advance to secure your preferred time.</p>
			<p>To book your spa experience, simply call us at {{resortPhone}}. We look forward to pampering you during your stay!</p>

			<p>
				<i>Warm regards,<br />
				The Serenity Springs Resort Team</i>
			</p>
		`,
		icon: `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 21 21'><g clip-path='url(#a)'><path fill='#E8DFF7' d='M19.611.5H1.39a.889.889 0 0 0-.889.889V19.61c0 .491.398.889.889.889h18.22a.889.889 0 0 0 .889-.889V1.39a.889.889 0 0 0-.888-.89Z'/><path fill='#fff' d='M4.5 17.167c0 .859.696 1.555 1.556 1.555h8.888c.86 0 1.556-.696 1.556-1.555V6.539c0-.448-.194-.875-.531-1.17l-2.585-2.262a1.555 1.555 0 0 0-1.024-.385H6.056c-.86 0-1.556.697-1.556 1.556v12.889Z'/><path stroke='#743CCD' stroke-width='.667' d='M15.939 5.785c.145.127.228.31.228.502v11.435a.667.667 0 0 1-.667.667h-10a.667.667 0 0 1-.667-.667v-14c0-.368.299-.666.667-.666h7.069c.161 0 .317.058.439.165l2.93 2.564Z'/><rect width='4.889' height='.667' x='6.278' y='8.944' fill='#743CCD' rx='.333'/><rect width='6.667' height='.667' x='6.278' y='10.722' fill='#743CCD' rx='.333'/><rect width='4.889' height='.667' x='6.278' y='12.5' fill='#743CCD' rx='.333'/><rect width='4.889' height='.667' x='6.278' y='14.278' fill='#743CCD' rx='.333'/><rect width='7.111' height='.667' x='6.278' y='16.055' fill='#743CCD' rx='.333'/><circle cx='7.611' cy='6.278' r='1.333' fill='#C9FE43'/><rect width='4' height='.667' x='9.833' y='6.278' fill='#743CCD' rx='.333'/></g><defs><clipPath id='a'><path fill='#fff' d='M0 0h20v20H0z' transform='translate(.5 .5)'/></clipPath></defs></svg>`,
		description: 'Information about booked SPA session',
	},
	{
		title: 'Feedback request',
		icon: `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 21 21'><g clip-path='url(#a)'><path fill='#E8DFF7' d='M19.611.5H1.39a.889.889 0 0 0-.889.889V19.61c0 .491.398.889.889.889h18.22a.889.889 0 0 0 .889-.889V1.39a.889.889 0 0 0-.888-.89Z'/><path fill='#fff' d='M4.5 17.167c0 .859.696 1.555 1.556 1.555h8.888c.86 0 1.556-.696 1.556-1.555V6.539c0-.448-.194-.875-.531-1.17l-2.585-2.262a1.555 1.555 0 0 0-1.024-.385H6.056c-.86 0-1.556.697-1.556 1.556v12.889Z'/><path stroke='#743CCD' stroke-width='.667' d='M15.939 5.785c.145.127.228.31.228.502v11.435a.667.667 0 0 1-.667.667h-10a.667.667 0 0 1-.667-.667v-14c0-.368.299-.666.667-.666h7.069c.161 0 .317.058.439.165l2.93 2.564Z'/><rect width='4.889' height='.667' x='6.278' y='8.944' fill='#743CCD' rx='.333'/><rect width='6.667' height='.667' x='6.278' y='10.722' fill='#743CCD' rx='.333'/><rect width='4.889' height='.667' x='6.278' y='12.5' fill='#743CCD' rx='.333'/><rect width='4.889' height='.667' x='6.278' y='14.278' fill='#743CCD' rx='.333'/><rect width='7.111' height='.667' x='6.278' y='16.055' fill='#743CCD' rx='.333'/><circle cx='7.611' cy='6.278' r='1.333' fill='#C9FE43'/><rect width='4' height='.667' x='9.833' y='6.278' fill='#743CCD' rx='.333'/></g><defs><clipPath id='a'><path fill='#fff' d='M0 0h20v20H0z' transform='translate(.5 .5)'/></clipPath></defs></svg>`,
		data: `
			<p style="text-align: center;">
				<img
					src=" https://ckeditor.com/assets/images/ckdemo/merge-fields/serenity-springs.png" 
					alt="Serenity Springs Resort logo." />
			</p>
			<p>Dear {{guestName}},</p>
			<p>We hope you enjoyed your recent {{numberOfNights}}nights stay at Serenity Springs Resort. Your comfort and satisfaction are our top priorities, and we’d love to hear about your experience.</p>
			<p>Please take a few minutes to share your thoughts by completing our {{feedbackSurvey}}. Your feedback helps us continue to provide the best possible service to our guests.</p>
			<p>Thank you for choosing Serenity Springs Resort. We look forward to welcoming you back soon!</p>
			<p>
				<i>Warm regards,<br />
				The Serenity Springs Resort Team</i>
			</p>
		`,
		description: 'Document letterhead with logo',
	},
];

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
	{ label: 'Blue grey 900', color: '#263238' },
];

const exportHorizontalSpace = '10mm';
const exportVerticalSpace = '12mm';


const MERGE_FIELDS_DEFINITIONS = [
	{
		groupId: 'guestInformation',
		groupLabel: 'Guest information',
		definitions: [
			{
				id: 'guestTitle',
				label: 'Title',
				defaultValue: 'Mr./Mrs.'
			},
			{
				id: 'guestName',
				label: 'Name',
				defaultValue: 'John'
			},
			{
				id: 'guestLastName',
				label: 'Last name',
				defaultValue: 'Doe'
			},
			{
				id: 'discount',
				label: 'Guest discount',
				defaultValue: '0%'
			}
		]
	},
	{
		groupId: 'reservationInformation',
		groupLabel: 'Reservation information',
		definitions: [
			{
				id: 'reservationNumber',
				label: 'Reservation number',
				defaultValue: '0000'
			},
			{
				id: 'arrivalDate',
				label: 'Arrival date',
				defaultValue: () => new Date().toLocaleDateString()
			},
			{
				id: 'numberOfNights',
				label: 'Number of nights',
				defaultValue: '0'
			},
			{
				id: 'numberOfGuests',
				label: 'Number of guests',
				defaultValue: '0'
			},
			{
				id: 'roomType',
				label: 'Room type',
				defaultValue: 'Single room'
			},
			{
				id: 'complimentaryDuration',
				label: 'Complimentary duration',
				defaultValue: '60 min'
			}

		]
	},
	{
		groupId: 'resortInformation',
		groupLabel: 'Resort information',
		definitions: [
			{
				id: 'resortPhone',
				label: 'Resort phone',
				defaultValue: '555-232-2334-23'
			},
			{
				id: 'feedbackSurvey',
				label: "Feedback survey",
				defaultValue: '<a href="#">Feedback survey</a>'
			}
		]
	}

];

const MERGE_FIELDS_DATASETS = [
	{
		id: '78900',
		label: 'David Lee',
		values: {
			guestTitle: 'Mr.',
			guestName: 'David',
			guestLastName: 'Lee',
			reservationNumber: 'Y2JKH5G1Z',
			arrivalDate: new Date(2024, 7, 22).toLocaleDateString(),
			numberOfGuests: '2',
			numberOfNights: '6',
			roomType: 'Double Room',
			discount: '20%',
			complimentaryDuration: '15min',
			feedbackSurvey: '<a href="https://ckeditor.com">quick survey</a>',
			resortPhone: '555-232-2334-23'
		}
	},
	{
		id: '78901',
		label: 'Kate Smith',
		values: {
			guestTitle: 'Ms.',
			guestName: 'Kate',
			guestLastName: 'Smith',
			reservationNumber: 'GRJKCCG23',
			arrivalDate: new Date(2024, 4, 12).toLocaleDateString(),
			numberOfGuests: '3',
			numberOfNights: '10',
			roomType: 'Apartment',
			discount: '30%',
			complimentaryDuration: '30min',
			feedbackSurvey: '<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',
			resortPhone: '555-232-2334-23'
		}
	}
];


ClassicEditor.create(
	document.querySelector('.cke5-merge-fields-demo__content'),
	{
		plugins: [
			AdjacentListsSupport,
			Alignment,
			Autoformat,
			AutoLink,
			BlockQuote,
			Bold,
			...(CKBOX_TOKEN_URL ? [CKBox] : []),
			CloudServices,
			Clipboard,
			Code,
			CodeBlock,
			EasyImage,
			Essentials,
			FindAndReplace,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			GeneralHtmlSupport,
			Heading,
			HorizontalLine,
			Image,
			ImageCaption,
			ImageResize,
			ImageStyle,
			ImageToolbar,
			ImageUpload,
			Indent,
			IndentBlock,
			Italic,
			Link,
			List,
			ListProperties,
			MediaEmbed,
			Mention,
			MultiLevelList,
			PageBreak,
			Paragraph,
			PasteFromOffice,
			PictureEditing,
			RemoveFormat,
			SpecialCharacters,
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
			TextTransformation,
			TodoList,
			Underline,
			...(WEB_SPELL_CHECKER_LICENSE_KEY ? [WProofreader] : []),
			...(LICENSE_KEY ? [
				FormatPainter,
				CaseChange,
				ExportPdf,
				ExportWord,
				ImportWord,
				MergeFields,
				SlashCommand,
				Template,
				Pagination,
			] : []),
		],
		licenseKey: LICENSE_KEY,
		toolbar: {
			shouldNotGroupWhenFull: true,
			items: [
				// --- Document-wide tools ----------------------------------------------------------------------
				'insertMergeField',
				'previewMergeFields',
				'|',
				'importWord',
				'exportWord',
				'exportPdf',
				'|',
				'insertTemplate',
				'|',
				'formatPainter',
				'caseChange',
				'findAndReplace',
				'wproofreader',
				'|',
				'link',
				'insertImage',
				'ckbox',
				'insertTable',
				'blockQuote',
				'mediaEmbed',
				'codeBlock',
				'horizontalLine',
				'specialCharacters',
				'-',
				'heading',
				'style',
				'|',

				'bold',
				'italic',
				'underline',
				'strikethrough',
				{
					label: 'Basic styles',
					icon: 'text',
					items: [
						'fontSize',
						'fontFamily',
						'fontColor',
						'fontBackgroundColor',
						// 'highlight',
						'superscript',
						'subscript',
						'code',
					],
				},
				'removeFormat',
				'|',
				'alignment',
				'|',
				'bulletedList',
				'numberedList',
				'multilevelList',
				'todoList',
				'|',
				'outdent',
				'indent',
				'|',
				'undo',
				'redo',
			],
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
					view: 'h2',
					title: 'Heading 1',
					class: 'ck-heading_heading1',
				},
				{
					model: 'heading2',
					view: 'h3',
					title: 'Heading 2',
					class: 'ck-heading_heading2',
				},
				{
					model: 'heading3',
					view: 'h4',
					title: 'Heading 3',
					class: 'ck-heading_heading3',
				},
				{
					model: 'heading4',
					view: 'h5',
					title: 'Heading 4',
					class: 'ck-heading_heading4',
				},
				{
					model: 'heading5',
					view: 'h6',
					title: 'Heading 5',
					class: 'ck-heading_heading5',
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
		fontColor: {
			columns: 12,
			colors: REDUCED_MATERIAL_COLORS,
		},
		fontBackgroundColor: {
			columns: 12,
			colors: REDUCED_MATERIAL_COLORS,
		},
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
			],
		},
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true,
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
		},
		exportPdf: {
			stylesheets: [coreStylesheets, premiumStylesheets, './content.css'],
			fileName: 'export-pdf-demo.pdf',
			appID: 'cke5-demos',
			converterOptions: {
				format: 'A4',
				margin_top: exportVerticalSpace,
				margin_bottom: exportVerticalSpace,
				margin_right: exportHorizontalSpace,
				margin_left: exportHorizontalSpace,
				page_orientation: 'portrait',
			},
			tokenUrl: false,
		},
		exportWord: {
			stylesheets: [coreStylesheets, premiumStylesheets],
			fileName: 'export-word-demo.docx',
			converterOptions: {
				format: 'A4',
				margin_top: exportVerticalSpace,
				margin_bottom: exportVerticalSpace,
				margin_right: exportHorizontalSpace,
				margin_left: exportHorizontalSpace,
			},
			tokenUrl: false,
		},
		htmlSupport: {
			allow: [
				// Enables all HTML features.
				{
					name: /.*/,
					attributes: true,
					classes: true,
					styles: true,
				},
			],
			disallow: [
				{
					attributes: [
						{ key: /^on(.*)/i, value: true },
						{
							key: /.*/,
							value: /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i,
						},
						{ key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i },
					],
				},
				{ name: 'script' },
			],
		},
		mergeFields: {
			previewHtmlValues: true,
			definitions: MERGE_FIELDS_DEFINITIONS,
			dataSets: MERGE_FIELDS_DATASETS
		},
		pagination: {
			// A4
			pageWidth: '21cm',
			pageHeight: '29.7cm',
			pageMargins: {
				top: exportVerticalSpace,
				bottom: exportVerticalSpace,
				right: exportHorizontalSpace,
				left: exportHorizontalSpace,
			},
		},
		style: {
			definitions: [
				{
					name: 'Title',
					element: 'h1',
					classes: ['document-title'],
				},
				{
					name: 'Subtitle',
					element: 'h2',
					classes: ['document-subtitle'],
				},
				{
					name: 'Callout',
					element: 'p',
					classes: ['callout'],
				},
				{
					name: 'Side quote',
					element: 'blockquote',
					classes: ['side-quote'],
				},
				{
					name: 'Needs clarification',
					element: 'span',
					classes: ['needs-clarification'],
				},
				{
					name: 'Wide spacing',
					element: 'span',
					classes: ['wide-spacing'],
				},
				{
					name: 'Small caps',
					element: 'span',
					classes: ['small-caps'],
				},
				{
					name: 'Code (dark)',
					element: 'pre',
					classes: ['stylish-code', 'stylish-code-dark'],
				},
				{
					name: 'Code (bright)',
					element: 'pre',
					classes: ['stylish-code', 'stylish-code-bright'],
				},
			],
		},
		wproofreader: {
			serviceId: WEB_SPELL_CHECKER_LICENSE_KEY,
			lang: 'auto',
			srcUrl:
				'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js',
			ignoreClasses: ['image-inline'],
		},
		ckbox: {
			tokenUrl: CKBOX_TOKEN_URL,
		},
		template: {
			definitions: TEMPLATE_DEFINITIONS,
		},
	})
	.catch((error) => {
		console.error(error.stack);
	});

// --------- Just exports ------------------------------------------------------------------------
'val'
export default {
	ClassicEditor,
};
