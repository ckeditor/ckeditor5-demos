/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

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
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
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
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
	SpecialCharacters,
	Strikethrough,
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
	Template,
	SlashCommand,
	MultiLevelList
} from 'ckeditor5-premium-features';

import { WProofreader } from '@webspellchecker/wproofreader-ckeditor5';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

import coreStylesheets from 'ckeditor5/ckeditor5.css?url';
import premiumStylesheets from 'ckeditor5-premium-features/ckeditor5-premium-features.css?url';

/* eslint-disable max-len */
const TEMPLATE_DEFINITIONS = [
	{
		title: 'Reservation confirmation',
		data: `
		<figure class="image image_resized" style="width:100%;">
			<img
				src="https://ckeditor.com/assets/images/ckdemo/merge-fields/serenity-springs.png"
				alt="Serenity Springs Resort logo." />
		</figure>
		<p>{{guestTitle}} {{guestLastName}},</p>
		<p>This email confirms your reservation at Serenity Springs Resort for a relaxing stay at
			{{roomType}}. We will be delighted to welcome you on {{arrivalDate}}!</p>
		<p><i>Sincerely,<br />
				The Team at Serenity Springs Resort<br />
				P.S. Treat yourself to a massage during your stay! Mention this email for {{discount}} off
				your first Spa treatment.
			</i></p>
	`,
		icon: '<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' fill=\'none\' viewBox=\'0 0 21 21\'><g clip-path=\'url(#a)\'><path fill=\'#E8DFF7\' d=\'M19.611.5H1.39a.889.889 0 0 0-.889.889V19.61c0 .491.398.889.889.889h18.22a.889.889 0 0 0 .889-.889V1.39a.889.889 0 0 0-.888-.89Z\'/><path fill=\'#fff\' d=\'M4.5 17.167c0 .859.696 1.555 1.556 1.555h8.888c.86 0 1.556-.696 1.556-1.555V6.539c0-.448-.194-.875-.531-1.17l-2.585-2.262a1.555 1.555 0 0 0-1.024-.385H6.056c-.86 0-1.556.697-1.556 1.556v12.889Z\'/><path stroke=\'#743CCD\' stroke-width=\'.667\' d=\'M15.939 5.785c.145.127.228.31.228.502v11.435a.667.667 0 0 1-.667.667h-10a.667.667 0 0 1-.667-.667v-14c0-.368.299-.666.667-.666h7.069c.161 0 .317.058.439.165l2.93 2.564Z\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'8.944\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'6.667\' height=\'.667\' x=\'6.278\' y=\'10.722\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'12.5\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'14.278\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'7.111\' height=\'.667\' x=\'6.278\' y=\'16.055\' fill=\'#743CCD\' rx=\'.333\'/><circle cx=\'7.611\' cy=\'6.278\' r=\'1.333\' fill=\'#C9FE43\'/><rect width=\'4\' height=\'.667\' x=\'9.833\' y=\'6.278\' fill=\'#743CCD\' rx=\'.333\'/></g><defs><clipPath id=\'a\'><path fill=\'#fff\' d=\'M0 0h20v20H0z\' transform=\'translate(.5 .5)\'/></clipPath></defs></svg>',
		description: 'Reservation confirmation with basic information.'
	},
	{
		title: 'Reservation reminder',
		data: `
		<figure class="image image_resized" style="width:100%;">
			<img
				src="https://ckeditor.com/assets/images/ckdemo/merge-fields/serenity-springs.png"
				alt="Serenity Springs Resort logo." />
		</figure>
		<p>Dear {{guestName}},</p>

		<p>We’re excited to welcome you to Serenity Springs Resort in just two days! Your relaxing getaway is just around the corner.</p>

		{{reservationDetails}}

		<p>If you have any special requests or need assistance before your arrival, please don’t hesitate to contact us. We want to ensure your stay is as comfortable and enjoyable as possible.</p>

		<p>We look forward to your arrival!</p>

		<p>
				<i>Warm regards,<br />
				The Serenity Springs Resort Team</i>
			</p>
		`,
		icon: '<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' fill=\'none\' viewBox=\'0 0 21 21\'><g clip-path=\'url(#a)\'><path fill=\'#E8DFF7\' d=\'M19.611.5H1.39a.889.889 0 0 0-.889.889V19.61c0 .491.398.889.889.889h18.22a.889.889 0 0 0 .889-.889V1.39a.889.889 0 0 0-.888-.89Z\'/><path fill=\'#fff\' d=\'M4.5 17.167c0 .859.696 1.555 1.556 1.555h8.888c.86 0 1.556-.696 1.556-1.555V6.539c0-.448-.194-.875-.531-1.17l-2.585-2.262a1.555 1.555 0 0 0-1.024-.385H6.056c-.86 0-1.556.697-1.556 1.556v12.889Z\'/><path stroke=\'#743CCD\' stroke-width=\'.667\' d=\'M15.939 5.785c.145.127.228.31.228.502v11.435a.667.667 0 0 1-.667.667h-10a.667.667 0 0 1-.667-.667v-14c0-.368.299-.666.667-.666h7.069c.161 0 .317.058.439.165l2.93 2.564Z\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'8.944\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'6.667\' height=\'.667\' x=\'6.278\' y=\'10.722\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'12.5\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'14.278\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'7.111\' height=\'.667\' x=\'6.278\' y=\'16.055\' fill=\'#743CCD\' rx=\'.333\'/><circle cx=\'7.611\' cy=\'6.278\' r=\'1.333\' fill=\'#C9FE43\'/><rect width=\'4\' height=\'.667\' x=\'9.833\' y=\'6.278\' fill=\'#743CCD\' rx=\'.333\'/></g><defs><clipPath id=\'a\'><path fill=\'#fff\' d=\'M0 0h20v20H0z\' transform=\'translate(.5 .5)\'/></clipPath></defs></svg>',
		description: 'Detailed reservation information.'
	},
	{
		title: 'Spa booking reminder',
		data: `
		<figure class="image image_resized" style="width:100%;">
			<img
				src="https://ckeditor.com/assets/images/ckdemo/merge-fields/serenity-springs.png"
				alt="Serenity Springs Resort logo." />
		</figure>
		<p>{{guestTitle}} {{guestLastName}},</p>
		<p>Your upcoming stay at Serenity Springs Resort is the perfect opportunity to unwind and rejuvenate. Take in the beauty of your accommodations and prepare for a truly relaxing experience.</p>
		<figure class="image" width="600" height="400">
		<img src="{{hotelRoomPhoto}}" />
		<figcaption>Quick look into your {{roomType}} experience</figcaption>
		</figure>
		<p>To make your visit even more special, we’re pleased to offer you exclusive perks for our luxurious spa services.</p>
		<p><strong>Spa Highlights:</strong></p>
		<ul>
		<li><strong>Complimentary {{complimentaryDuration}} Massage:</strong> Relax and let your stress melt away.</li>
		<li><strong>{{discount}}  Off Any Spa Package:</strong> Indulge in our full range of treatments, from facials to body wraps.</li>
		</ul>
		{{additionalValueProposition}}
		<p><strong>Reminder:</strong> Our Spa is popular, so we recommend booking your treatments in advance to secure your preferred time.</p>
		<p>To book your Spa experience, simply call us at {{resortPhone}}. We look forward to pampering you during your stay!</p>

		<p>
			<i>Warm regards,<br />
			The Serenity Springs Resort Team</i>
		</p>
	`,
		icon: '<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' fill=\'none\' viewBox=\'0 0 21 21\'><g clip-path=\'url(#a)\'><path fill=\'#E8DFF7\' d=\'M19.611.5H1.39a.889.889 0 0 0-.889.889V19.61c0 .491.398.889.889.889h18.22a.889.889 0 0 0 .889-.889V1.39a.889.889 0 0 0-.888-.89Z\'/><path fill=\'#fff\' d=\'M4.5 17.167c0 .859.696 1.555 1.556 1.555h8.888c.86 0 1.556-.696 1.556-1.555V6.539c0-.448-.194-.875-.531-1.17l-2.585-2.262a1.555 1.555 0 0 0-1.024-.385H6.056c-.86 0-1.556.697-1.556 1.556v12.889Z\'/><path stroke=\'#743CCD\' stroke-width=\'.667\' d=\'M15.939 5.785c.145.127.228.31.228.502v11.435a.667.667 0 0 1-.667.667h-10a.667.667 0 0 1-.667-.667v-14c0-.368.299-.666.667-.666h7.069c.161 0 .317.058.439.165l2.93 2.564Z\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'8.944\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'6.667\' height=\'.667\' x=\'6.278\' y=\'10.722\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'12.5\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'14.278\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'7.111\' height=\'.667\' x=\'6.278\' y=\'16.055\' fill=\'#743CCD\' rx=\'.333\'/><circle cx=\'7.611\' cy=\'6.278\' r=\'1.333\' fill=\'#C9FE43\'/><rect width=\'4\' height=\'.667\' x=\'9.833\' y=\'6.278\' fill=\'#743CCD\' rx=\'.333\'/></g><defs><clipPath id=\'a\'><path fill=\'#fff\' d=\'M0 0h20v20H0z\' transform=\'translate(.5 .5)\'/></clipPath></defs></svg>',
		description: 'Information about booked Spa session.'
	},
	{
		title: 'Feedback request',
		icon: '<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' fill=\'none\' viewBox=\'0 0 21 21\'><g clip-path=\'url(#a)\'><path fill=\'#E8DFF7\' d=\'M19.611.5H1.39a.889.889 0 0 0-.889.889V19.61c0 .491.398.889.889.889h18.22a.889.889 0 0 0 .889-.889V1.39a.889.889 0 0 0-.888-.89Z\'/><path fill=\'#fff\' d=\'M4.5 17.167c0 .859.696 1.555 1.556 1.555h8.888c.86 0 1.556-.696 1.556-1.555V6.539c0-.448-.194-.875-.531-1.17l-2.585-2.262a1.555 1.555 0 0 0-1.024-.385H6.056c-.86 0-1.556.697-1.556 1.556v12.889Z\'/><path stroke=\'#743CCD\' stroke-width=\'.667\' d=\'M15.939 5.785c.145.127.228.31.228.502v11.435a.667.667 0 0 1-.667.667h-10a.667.667 0 0 1-.667-.667v-14c0-.368.299-.666.667-.666h7.069c.161 0 .317.058.439.165l2.93 2.564Z\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'8.944\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'6.667\' height=\'.667\' x=\'6.278\' y=\'10.722\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'12.5\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'4.889\' height=\'.667\' x=\'6.278\' y=\'14.278\' fill=\'#743CCD\' rx=\'.333\'/><rect width=\'7.111\' height=\'.667\' x=\'6.278\' y=\'16.055\' fill=\'#743CCD\' rx=\'.333\'/><circle cx=\'7.611\' cy=\'6.278\' r=\'1.333\' fill=\'#C9FE43\'/><rect width=\'4\' height=\'.667\' x=\'9.833\' y=\'6.278\' fill=\'#743CCD\' rx=\'.333\'/></g><defs><clipPath id=\'a\'><path fill=\'#fff\' d=\'M0 0h20v20H0z\' transform=\'translate(.5 .5)\'/></clipPath></defs></svg>',
		data: `
		<figure class="image image_resized" style="width:100%;">
			<img
				src="https://ckeditor.com/assets/images/ckdemo/merge-fields/serenity-springs.png"
				alt="Serenity Springs Resort logo." />
		</figure>
		<p>Dear {{guestName}},</p>
		<p>We hope you enjoyed your recent {{numberOfNights}} nights stay at Serenity Springs Resort. Your comfort and satisfaction are our top priorities, and we’d love to hear about your experience.</p>
		<p>Please take a few minutes to share your thoughts by completing our {{feedbackSurvey}}. Your feedback helps us continue to provide the best possible service to our guests.</p>
		<p>Thank you for choosing Serenity Springs Resort. We look forward to welcoming you back soon!</p>
		<p>
			<i>Warm regards,<br />
			The Serenity Springs Resort Team</i>
		</p>
	`,
		description: 'Feedback request with a link to the survey.'
	}
];

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
			},
			{
				id: 'hotelRoomPhoto',
				label: 'Hotel room photo',
				type: 'image',
				width: 600,
				height: 400,
				defaultValue: 'https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg'
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
			},
			{
				id: 'reservationDetails',
				label: 'Reservation details',
				defaultValue: `
					<p style="text-align:center;"><strong>Reservation Details</strong></p>
					<figure class="table">
						<table>
							<tbody>
								<tr>
									<th style="padding:5px 10px;">
										Check-In Date
									</th>
									<td style="padding:5px 10px;text-align:center;">
										01/01/2000
									</td>
								</tr>
								<tr>
									<th style="padding:5px 10px;">
										Reservation Number
									</th>
									<td style="padding:5px 10px;text-align:center;">
										XXXXXXXX
									</td>
								</tr>
								<tr>
									<th style="padding:5px 10px;">
										Number of Guests
									</th>
									<td style="padding:5px 10px;text-align:center;">
										0
									</td>
								</tr>
							</tbody>
						</table>
					</figure>`,
				type: 'block'
			},
			{
				id: 'additionalValueProposition',
				label: 'Spa recommendations box',
				defaultValue: `
					<figure class="table">
						<table style="border-width:0;background:#ebe8e1;text-wrap: balance;width:clamp(45.9375rem, 27.8492rem + 39.3759vw, 62.5rem);">
							<colgroup>
								<col style="width:11.12%"></col>
								<col style="width:11.12%"></col>
								<col style="width:11.12%"></col>
								<col style="width:11.12%"></col>
								<col style="width:11.12%"></col>
								<col style="width:11.12%"></col>
								<col style="width:11.12%"></col>
								<col style="width:11.12%"></col>
								<col style="width:11.12%"></col>
							</colgroup>
							<tbody>
								<tr>
								<td colspan="2" style="width:22.24%;border-style:none;text-align:left;border-bottom: 4px solid #fff;">
									<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/left-edge.svg" alt="" />
									</td>
								<td colspan="5" style="width:55.6%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
									<h3 class="ck-recomendations-header-text">
										Spa offers hand-picked for you
										<br />
										with a special X% discount
									</h3>
								</td>
								<td colspan="2" style="width:22.24%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
										<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/right-edge.svg" alt="" />
									</td>
								</tr>
							<tr>
								<td colspan="3" style="width:33.36%;border-style:none;text-align:center;background: #ddd8cd;padding: 16px;">
									<h4 class="ck-offer-header">Spa Offer #1</h4>
									<p class="ck-offer_paragraph">Description of the offer.</p>
								</td>
								<td colspan="3" style="width:33.36%;border-style:none;text-align:center;background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
									<h4 class="ck-offer-header">Spa Offer #2</h4>
									<p class="ck-offer_paragraph">Description of the offer.</p></td>
								<td colspan="3" style="width:33.36%;border-style:none;text-align:center;background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
									<h4 class="ck-offer-header">Spa Offer #3</h4>
									<p class="ck-offer_paragraph">Description of the offer.</p></td>
							</tr>
							</tbody>
						</table>
					</figure>`,
				type: 'block'
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
				label: 'Feedback survey',
				defaultValue:
					'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'
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
			hotelRoomPhoto: 'https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg',
			reservationNumber: 'Y2JKH5G1Z',
			arrivalDate: new Date( 2024, 7, 22 ).toLocaleDateString(),
			numberOfGuests: '2',
			numberOfNights: '6',
			roomType: 'Double Room',
			discount: '20%',
			complimentaryDuration: '15 min',
			feedbackSurvey:
				'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',
			resortPhone: '555-232-2334-23',
			reservationDetails: `
				<p style="text-align:center;"><strong>Reservation Details</strong></p>
				<figure class="table">
					<table>
						<tbody>
							<tr>
								<th style="padding:5px 10px;">
									Check-In Date
								</th>
								<td style="padding:5px 10px;text-align:center;">
									${ new Date( 2024, 7, 22 ).toLocaleDateString() }
								</td>
							</tr>
							<tr>
								<th style="padding:5px 10px;">
									Reservation Number
								</th>
								<td style="padding:5px 10px;text-align:center;">
									Y2JKH5G1Z
								</td>
							</tr>
							<tr>
								<th style="padding:5px 10px;">
									Number of Guests
								</th>
								<td style="padding:5px 10px;text-align:center;">
									2
								</td>
							</tr>
						</tbody>
					</table>
			</figure>`,
			additionalValueProposition: `
				<figure class="table">
					<table style="border-width:0;background:#ebe8e1;text-wrap: balance;width:clamp(45.9375rem, 27.8492rem + 39.3759vw, 62.5rem);">
						<colgroup>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
						</colgroup>
						<tbody>
							<tr>
							<td colspan="2" style="width:22.24%;border-style:none;text-align:left;border-bottom: 4px solid #fff;">
								<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/left-edge.svg" alt="" />
								</td>
							<td colspan="5" style="width:55.6%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
								<h3 class="ck-recomendations-header-text">
									Spa offers hand-picked for you
									<br />
									with a special 10% discount
								</h3>
							</td>
							<td colspan="2" style="width:22.24%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
									<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/right-edge.svg" alt="" />
								</td>
							</tr>
						<tr>
							<td colspan="3" style="width:33.36%;border-style:none;text-align:center;background: #ddd8cd;padding: 16px;">
								<h4 class="ck-offer-header">Signature Relaxation Package</h4>
								<p class="ck-offer_paragraph">Luxurious day of pampering: massage, facial, body wrap.</p>
							</td>
							<td colspan="3" style="width:33.36%;border-style:none;text-align:center;background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
								<h4 class="ck-offer-header">Couples' Retreat</h4>
								<p class="ck-offer_paragraph">Relaxing escape for two: massage, bath, scrub.</p></td>
							<td colspan="3" style="width:33.36%;border-style:none;text-align:center;background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
								<h4 class="ck-offer-header">Anti-Aging Treatment</h4>
								<p class="ck-offer_paragraph">Combat aging: facial, massage, body wrap.</p></td>
						</tr>
						</tbody>
					</table>
				</figure>`
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
			hotelRoomPhoto: 'https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room.jpg',
			arrivalDate: new Date( 2024, 4, 12 ).toLocaleDateString(),
			numberOfGuests: '3',
			numberOfNights: '10',
			roomType: 'Apartment',
			discount: '30%',
			complimentaryDuration: '30 min',
			feedbackSurvey:
				'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',
			resortPhone: '555-232-2334-23',
			reservationDetails: `
				<p style="text-align:center;"><strong>Reservation Details</strong></p>
				<figure class="table">
					<table>
						<tbody>
							<tr>
								<th style="padding:5px 10px;">
									Check-In Date
								</th>
								<td style="padding:5px 10px;text-align:center;">
									${ new Date( 2024, 4, 12 ).toLocaleDateString() }
								</td>
							</tr>
							<tr>
								<th style="padding:5px 10px;">
									Reservation Number
								</th>
								<td style="padding:5px 10px;text-align:center;">
									GRJKCCG23
								</td>
							</tr>
							<tr>
								<th style="padding:5px 10px;">
									Number of Guests
								</th>
								<td style="padding:5px 10px;text-align:center;">
									3
								</td>
							</tr>
						</tbody>
					</table>
				</figure>`,
			additionalValueProposition: `
				<figure class="table">
					<table style="border-width:0;background:#ebe8e1;text-wrap: balance;width:clamp(45.9375rem, 27.8492rem + 39.3759vw, 62.5rem);">
						<colgroup>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
						</colgroup>
						<tbody>
							<tr>
							<td colspan="2" style="width:22.24%;border-style:none;text-align:left;border-bottom: 4px solid #fff;">
								<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/left-edge.svg" alt="" />
								</td>
							<td colspan="5" style="width:55.6%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
								<h3 class="ck-recomendations-header-text">
									Spa offers hand-picked for you
									<br />
									with a special 20% discount
								</h3>
							</td>
							<td colspan="2" style="width:22.24%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
									<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/right-edge.svg" alt="" />
								</td>
							</tr>
						<tr>
							<td colspan="3" style="width:33.36%;border-style:none;text-align:center;background: #ddd8cd;padding: 16px;">
								<h4 class="ck-offer-header">Harmony Found: Thai Massage and Foot Reflexology</h4>
								<p class="ck-offer_paragraph">Blissful Thai massage & foot reflexology.</p>
							</td>
							<td colspan="3" style="width:33.36%;border-style:none;text-align:center;background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
								<h4 class="ck-offer-header">Twin Tranquility: Couples' Thai Massage</h4>
								<p class="ck-offer_paragraph">Relaxing massage for two.</p></td>
							<td colspan="3" style="width:33.36%;border-style:none;text-align:center;background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
								<h4 class="ck-offer-header">Serenity Through Scent: Aromatherapy Massage</h4>
								<p class="ck-offer_paragraph">Aromatic massage for peace.</p></td>
						</tr>
						</tbody>
					</table>
				</figure>`
		}
	}
];
/* eslint-enable max-len */

const exportHorizontalSpace = '19.25mm';
const exportVerticalSpace = '16mm';

ClassicEditor.create(
	document.querySelector( '.cke5-merge-fields-demo__content' ),
	{
		plugins: [
			AdjacentListsSupport,
			Alignment,
			Autoformat,
			AutoLink,
			BlockQuote,
			Bold,
			CloudServices,
			Clipboard,
			Code,
			CodeBlock,
			Essentials,
			FindAndReplace,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
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
			Paragraph,
			PasteFromOffice,
			PictureEditing,
			RemoveFormat,
			SpecialCharacters,
			Strikethrough,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TextTransformation,
			TodoList,
			Underline,

			// Include CKBox plugin only if the CKBOX_TOKEN_URL is provided.
			...( CKBOX_TOKEN_URL ? [
				CKBox
			] : [] ),

			// Include premium features only if the license key is not GPL.
			...( LICENSE_KEY !== 'GPL' ? [
				CaseChange,
				ExportPdf,
				ExportWord,
				FormatPainter,
				ImportWord,
				MergeFields,
				MultiLevelList,
				SlashCommand,
				Template
			] : [] ),

			// Include WebSpellChecker plugin only if the WEB_SPELL_CHECKER_LICENSE_KEY is provided.
			...( WEB_SPELL_CHECKER_LICENSE_KEY ? [
				WProofreader
			] : [] )

		],
		licenseKey: LICENSE_KEY,
		menuBar: {
			isVisible: true
		},
		toolbar: {
			shouldNotGroupWhenFull: true,
			items: [
				'undo',
				'redo',
				'|',
				'insertMergeField',
				'previewMergeFields',
				'|',
				'importWord',
				'exportWord',
				'exportPdf',
				'|',
				'insertTemplate',
				'|',
				'heading',
				'|',
				{
					label: 'Font styles',
					icon: 'text',
					items: [
						'fontSize',
						'fontFamily',
						'fontColor',
						'fontBackgroundColor'

					]
				},
				'removeFormat',
				'|',
				'bold',
				'italic',
				'underline',
				'|',
				'link',
				'insertImage',
				'insertTable',
				'|',
				'alignment',
				'|',
				'bulletedList',
				'numberedList',
				'|',
				'outdent',
				'indent'
			]
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
		image: {
			toolbar: [
				'toggleImageCaption',
				'imageTextAlternative',
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
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true
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
		exportPdf: {
			stylesheets: [ coreStylesheets, premiumStylesheets, './content.css' ],
			fileName: 'export-pdf-demo.pdf',
			appID: 'cke5-demos',
			converterOptions: {
				format: 'A4',
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
		mergeFields: {
			previewHtmlValues: true,
			sanitizeHtml: html => ( { html, hasChanged: false } ),
			definitions: MERGE_FIELDS_DEFINITIONS,
			dataSets: MERGE_FIELDS_DATASETS
		},
		wproofreader: {
			serviceId: WEB_SPELL_CHECKER_LICENSE_KEY,
			lang: 'auto',
			srcUrl:
				'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js',
			ignoreClasses: [ 'image-inline' ]
		},
		ckbox: {
			tokenUrl: CKBOX_TOKEN_URL
		},
		template: {
			definitions: TEMPLATE_DEFINITIONS
		}
	} )
	.catch( error => {
		console.error( error.stack );
	} );
