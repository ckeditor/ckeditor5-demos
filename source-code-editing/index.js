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
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	BlockQuote,
	Bold,
	Base64UploadAdapter,
	CloudServices,
	Code,
	CodeBlock,
	CKBox,
	Essentials,
	FindAndReplace,
	Font,
	GeneralHtmlSupport,
	Heading,
	HorizontalLine,
	HtmlEmbed,
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
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	Mention,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
	ShowBlocks,
	SourceEditing,
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
	TextPartLanguage,
	TextTransformation,
	TodoList,
	Underline,
} from 'ckeditor5';

import {
	ExportPdf,
	ExportWord,
	ImportWord,
	Template,
	SlashCommand,
} from 'ckeditor5-premium-features';

import { WProofreader } from '@webspellchecker/wproofreader-ckeditor5';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

import coreStylesheets from 'ckeditor5/ckeditor5.css?url';
import premiumStylesheets from 'ckeditor5-premium-features/ckeditor5-premium-features.css?url';

const exportHorizontalSpace = '10mm';
const exportVerticalSpace = '12mm';

const TEMPLATE_DEFINITIONS = [
	{
		title: 'Signature (multi-line)',
		data: `<p style='margin-left:2em;'><span'><strong>I hereby verify that the aforementioned report has undergone thorough factual verification and reflects the most current information.</strong></span></p>
			<p style='margin-left:22em;'><br>
			<span'>Signature: __________&nbsp;&nbsp;</span><br>
			<span'>Name:&nbsp;</span><br>
			<span'>Title:&nbsp;</span><br>
			<span'>Date:</span></p>`,
		description: 'Author signature with statement',
		icon: `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 21 21'><g clip-path='url(#a)'><path fill='#E8DFF7' d='M19.833.5H1.611a.889.889 0 0 0-.889.889V19.61a.89.89 0 0 0 .89.889h18.221a.89.89 0 0 0 .89-.889V1.39a.889.889 0 0 0-.89-.889Z'/><path fill='#fff' d='M4.722 17.167c0 .859.697 1.555 1.556 1.555h8.889c.859 0 1.555-.696 1.555-1.555V6.539c0-.448-.194-.875-.531-1.17l-2.584-2.262a1.556 1.556 0 0 0-1.025-.385H6.278c-.86 0-1.556.697-1.556 1.556v12.889Z'/><path stroke='#743CCD' stroke-width='.667' d='M16.161 5.785c.145.127.228.31.228.502v11.435a.667.667 0 0 1-.667.667h-10a.667.667 0 0 1-.667-.667v-14c0-.368.299-.666.667-.666h7.069c.161 0 .317.058.439.165l2.931 2.564Z'/><path fill='#C9FE43' d='M16.546 8.525a.917.917 0 0 1 1.402 1.18l-4.132 4.908-1.402-1.18 4.132-4.908Zm-4.494 6.76.384-1.594 1.122.944-1.506.65Z'/><path stroke='#6C34C9' stroke-linecap='round' stroke-linejoin='round' stroke-width='.55' d='m11.666 15.837 1.96-.953c.126-.061.188-.092.246-.13.051-.033.1-.07.145-.112.05-.047.096-.1.186-.207l3.766-4.474a1.037 1.037 0 1 0-1.586-1.335l-3.767 4.473c-.09.107-.135.16-.172.218a1.091 1.091 0 0 0-.087.162c-.027.063-.046.13-.085.264l-.606 2.094Zm0 0 .584-2.019c.042-.144.063-.217.106-.253a.183.183 0 0 1 .136-.04c.056.005.114.053.229.15l.896.755c.115.097.172.145.188.2a.184.184 0 0 1-.018.14c-.028.049-.096.082-.23.148l-1.89.92Z'/><path stroke='#6C34C9' stroke-linecap='round' stroke-linejoin='round' stroke-width='.444' d='m6.5 16.945.903-1.162a.569.569 0 0 1 .989.17l.062.188a.46.46 0 0 0 .797.142v0a.46.46 0 0 1 .72 0l.282.353a.823.823 0 0 0 .642.309h.938'/><rect width='4.889' height='.667' x='6.5' y='6.278' fill='#743CCD' rx='.333'/><rect width='6.667' height='.667' x='6.5' y='8.056' fill='#743CCD' rx='.333'/><rect width='4.889' height='.667' x='6.5' y='9.833' fill='#743CCD' rx='.333'/><rect width='4.889' height='.667' x='6.5' y='11.611' fill='#743CCD' rx='.333'/></g><defs><clipPath id='a'><path fill='#fff' d='M0 0h20v20H0z' transform='translate(.722 .5)'/></clipPath></defs></svg>`,
	},
	{
		title: 'Projections table',
		data: `<figure class='table'>
			<table>
				<tbody>
					<tr>
						<th>&nbsp;</th>
						<th>FY 2023</th>
						<th>FY 2024 (Projected)</th>
						<th>Change (%)</th>
					</tr>
					<tr>
						<td>Revenue ($M)</td>
						<td>8</td>
						<td>10</td>
						<td>25</td>
					</tr>
					<tr>
						<td>Net Profit ($M)</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>Cash Flow ($M)</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>ROI (%)</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<figcaption>
				Financial Projections
			</figcaption>
		</figure>`,
		icon: `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 21 21'><g clip-path='url(#a)'><path fill='#E8DFF7' d='M20.055.5H1.833a.889.889 0 0 0-.889.889V19.61a.89.89 0 0 0 .89.889h18.221a.889.889 0 0 0 .89-.889V1.39a.889.889 0 0 0-.89-.889Z'/><path fill='#fff' d='M4.5 18.278h12.889a.89.89 0 0 0 .889-.89V4.057a.889.889 0 0 0-.89-.89H4.5a.889.889 0 0 0-.889.89V17.39c0 .49.398.889.889.889Z'/><path stroke='#743CCD' stroke-width='.667' d='M17.389 17.944H4.499a.556.556 0 0 1-.555-.555V4.056c0-.307.249-.556.556-.556h12.889c.307 0 .555.249.555.556v13.333a.555.555 0 0 1-.555.555Z'/><path fill='#E8DFF7' d='M8.944 4.056H8.5v13.333h.444V4.056Z'/><path fill='#E8DFF7' d='M17.389 9.389v-.445H4.499v.445h12.89Zm0 2.667v-.445H4.499v.445h12.89Zm0 2.666v-.444H4.499v.444h12.89Z'/><path fill='#E8DFF7' d='M13.389 4.056h-.445v13.333h.445V4.056Z'/><path fill='#E8DFF7' d='M17.389 6.722v-.444H4.499v.444h12.89Z'/><path fill='#743CCD' d='M8.5 4.056h-4v2.222h4V4.056Z'/><path fill='#743CCD' d='M8.5 4.056h-4v2.222h4V4.056Z'/><path fill='#DFFE8F' d='M12.944 4.056h-4v2.222h4V4.056Z'/><path fill='#E8DFF7' d='M17.389 4.056h-4v2.222h4V4.056Z'/></g><defs><clipPath id='a'><path fill='#fff' d='M0 0h20v20H0z' transform='translate(.944 .5)'/></clipPath></defs></svg>`,
		description: 'Table for annual financial projections',
	},
	{
		title: 'Balance Sheet',
		data: `<figure class='table'>
						<table style=';'>
							<tbody>
								<tr>
									<td><span'><strong>Group</strong></span></td>
									<td><span'><strong>Description</strong></span></td>
									<td><span'><strong>Current Year ($)</strong></span></td>
									<td><span'><strong>Previous Year ($)</strong></span></td>
								</tr>
								<tr>
									<td rowspan='3'><span'><strong>Assets</strong></span></td>
									<td><span'>Current Assets</span></td>
									<td><span'>9.4</span></td>
									<td><span'>8.9</span></td>
								</tr>
								<tr>
									<td><span'>Non-Current Assets</span></td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><span'>Total Assets</span></td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td rowspan='3'><span'><strong>Liabilities</strong></span></td>
									<td><span'>Current Liabilities</span></td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><span'>Non-Current Liabilities</span></td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><span'>Total Liabilities</span></td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td rowspan='4'><span'><strong>Equity</strong></span></td>
									<td><span'>Share Capital</span></td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><span'>Retained Earnings</span></td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><span'>Total Equity</span></td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td><span'>Total Liabilities and Equity</span></td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						<figcaption>
							Balance sheet
						</figcaption>
					</figure>`,
		icon: `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 21 21'><g clip-path='url(#a)'><path fill='#E8DFF7' d='M20.055.5H1.833a.889.889 0 0 0-.889.889V19.61a.89.89 0 0 0 .89.889h18.221a.889.889 0 0 0 .89-.889V1.39a.889.889 0 0 0-.89-.889Z'/><path fill='#fff' d='M4.5 18.278h12.889a.89.89 0 0 0 .889-.89V4.057a.889.889 0 0 0-.89-.89H4.5a.889.889 0 0 0-.889.89V17.39c0 .49.398.889.889.889Z'/><path stroke='#743CCD' stroke-width='.667' d='M17.389 17.944H4.499a.556.556 0 0 1-.555-.555V4.056c0-.307.249-.556.556-.556h12.889c.307 0 .555.249.555.556v13.333a.555.555 0 0 1-.555.555Z'/><path fill='#E8DFF7' d='M8.944 4.056H8.5v13.333h.444V4.056Z'/><path fill='#E8DFF7' d='M17.389 9.389v-.445H4.499v.445h12.89Zm0 2.667v-.445H4.499v.445h12.89Zm0 2.666v-.444H4.499v.444h12.89Z'/><path fill='#E8DFF7' d='M13.389 4.056h-.445v13.333h.445V4.056Z'/><path fill='#E8DFF7' d='M17.389 6.722v-.444H4.499v.444h12.89Z'/><path fill='#743CCD' d='M8.5 4.056h-4v2.222h4V4.056Z'/><path fill='#743CCD' d='M8.5 4.056h-4v2.222h4V4.056Z'/><path fill='#DFFE8F' d='M12.944 4.056h-4v2.222h4V4.056Z'/><path fill='#E8DFF7' d='M17.389 4.056h-4v2.222h4V4.056Z'/></g><defs><clipPath id='a'><path fill='#fff' d='M0 0h20v20H0z' transform='translate(.944 .5)'/></clipPath></defs></svg>`,
		description: 'Simple balance sheet table',
	},
	{
		title: 'Company Letterhead',
		icon: `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 21 21'><g clip-path='url(#a)'><path fill='#E8DFF7' d='M19.611.5H1.39a.889.889 0 0 0-.889.889V19.61c0 .491.398.889.889.889h18.22a.889.889 0 0 0 .889-.889V1.39a.889.889 0 0 0-.888-.89Z'/><path fill='#fff' d='M4.5 17.167c0 .859.696 1.555 1.556 1.555h8.888c.86 0 1.556-.696 1.556-1.555V6.539c0-.448-.194-.875-.531-1.17l-2.585-2.262a1.555 1.555 0 0 0-1.024-.385H6.056c-.86 0-1.556.697-1.556 1.556v12.889Z'/><path stroke='#743CCD' stroke-width='.667' d='M15.939 5.785c.145.127.228.31.228.502v11.435a.667.667 0 0 1-.667.667h-10a.667.667 0 0 1-.667-.667v-14c0-.368.299-.666.667-.666h7.069c.161 0 .317.058.439.165l2.93 2.564Z'/><rect width='4.889' height='.667' x='6.278' y='8.944' fill='#743CCD' rx='.333'/><rect width='6.667' height='.667' x='6.278' y='10.722' fill='#743CCD' rx='.333'/><rect width='4.889' height='.667' x='6.278' y='12.5' fill='#743CCD' rx='.333'/><rect width='4.889' height='.667' x='6.278' y='14.278' fill='#743CCD' rx='.333'/><rect width='7.111' height='.667' x='6.278' y='16.055' fill='#743CCD' rx='.333'/><circle cx='7.611' cy='6.278' r='1.333' fill='#C9FE43'/><rect width='4' height='.667' x='9.833' y='6.278' fill='#743CCD' rx='.333'/></g><defs><clipPath id='a'><path fill='#fff' d='M0 0h20v20H0z' transform='translate(.5 .5)'/></clipPath></defs></svg>`,
		data: `<table style='border-width:0'>
							<colgroup>
								<col style='width:30%;'>
								<col style='width:70%;'>
							</colgroup>
							<tbody>
								<tr>
									<td style='width:30%;'>
										<figure class='image'>
											<picture>
												<img src='/assets/images/matata-logo.png'>
											</picture>
										</figure>
									</td>
									<td>
										<span><a href='mailto:info@matataventures.co'><span style='background-color:transparent;color:#1155cc;'><u>info@matataventures.co</u></span></a><br>
										<span'>1 Bonnyville Dr. Spryfield B3P 1H8</span><br>
										<span'>+1-613-555-0133</span></span>
										<div></div>
									</td>
								</tr>
							</tbody>
						</table>`,
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

const MENTION_FEEDS = [
	{
		marker: '@',
		feed: [
			{ id: '@cflores', avatar: 'm_1', name: 'Charles Flores' },
			{ id: '@gjackson', avatar: 'm_2', name: 'Gerald Jackson' },
			{ id: '@wreed', avatar: 'm_3', name: 'Wayne Reed' },
			{ id: '@lgarcia', avatar: 'm_4', name: 'Louis Garcia' },
			{ id: '@rwilson', avatar: 'm_5', name: 'Roy Wilson' },
			{ id: '@mnelson', avatar: 'm_6', name: 'Matthew Nelson' },
			{ id: '@rwilliams', avatar: 'm_7', name: 'Randy Williams' },
			{ id: '@ajohnson', avatar: 'm_8', name: 'Albert Johnson' },
			{ id: '@sroberts', avatar: 'm_9', name: 'Steve Roberts' },
			{ id: '@kevans', avatar: 'm_10', name: 'Kevin Evans' },
			{ id: '@vxiques', avatar: 'm_11', name: 'Vincent Xiques' },
			{ id: '@jzaldivar', avatar: 'm_12', name: 'Jack Zaldivar' },
			{ id: '@tfoxworth', avatar: 'm_13', name: 'Thomas Foxworth' },
			{ id: '@phendrix', avatar: 'm_14', name: 'Peter Hendrix' },
			{ id: '@pthaxton', avatar: 'm_15', name: 'Philip Thaxton' },
			{ id: '@mwilson', avatar: 'w_1', name: 'Mildred Wilson' },
			{ id: '@mnelson', avatar: 'w_2', name: 'Melissa Nelson' },
			{ id: '@kallen', avatar: 'w_3', name: 'Kathleen Allen' },
			{ id: '@myoung', avatar: 'w_4', name: 'Mary Young' },
			{ id: '@arogers', avatar: 'w_5', name: 'Ashley Rogers' },
			{ id: '@dgriffin', avatar: 'w_6', name: 'Debra Griffin' },
			{ id: '@dwilliams', avatar: 'w_7', name: 'Denise Williams' },
			{ id: '@ajames', avatar: 'w_8', name: 'Amy James' },
			{ id: '@randerson', avatar: 'w_9', name: 'Ruby Anderson' },
			{ id: '@wlee', avatar: 'w_10', name: 'Wanda Lee' },
			{ id: '@yquick', avatar: 'w_11', name: 'Yasmin Quick' },
			{ id: '@bzappaterra', avatar: 'w_12', name: 'Beatrice Zappaterra' },
			{ id: '@zquigley', avatar: 'w_13', name: 'Zoe Quigley' },
			{ id: '@pfabozzi', avatar: 'w_14', name: 'Patrizia Fabozzi' },
			{ id: '@vquimby', avatar: 'w_15', name: 'Victoria Quimby' },
		],
		minimumCharacters: 1,
		itemRenderer: customMentionUserItemRenderer,
	},
	{
		marker: '#',
		feed: [
			'#american',
			'#asian',
			'#baking',
			'#breakfast',
			'#cake',
			'#caribbean',
			'#chinese',
			'#chocolate',
			'#cooking',
			'#dairy',
			'#delicious',
			'#delish',
			'#dessert',
			'#desserts',
			'#dinner',
			'#eat',
			'#eating',
			'#eggs',
			'#fish',
			'#food',
			'#foodie',
			'#foods',
			'#french',
			'#fresh',
			'#fusion',
			'#glutenfree',
			'#greek',
			'#grilling',
			'#halal',
			'#homemade',
			'#hot',
			'#hungry',
			'#icecream',
			'#indian',
			'#italian',
			'#japanese',
			'#keto',
			'#korean',
			'#lactosefree',
			'#lunch',
			'#meat',
			'#mediterranean',
			'#mexican',
			'#moroccan',
			'#nom',
			'#nomnom',
			'#paleo',
			'#poultry',
			'#snack',
			'#spanish',
			'#sugarfree',
			'#sweet',
			'#sweettooth',
			'#tasty',
			'#thai',
			'#vegan',
			'#vegetarian',
			'#vietnamese',
			'#yum',
			'#yummy',
		],
	},
];

/*
 * Customizes the way the list of user suggestions is displayed.
 * Each user has an @id, a name and an avatar.
 */
function customMentionUserItemRenderer(item) {
	const itemElement = document.createElement('span');
	const avatar = document.createElement('img');
	const userNameElement = document.createElement('span');
	const fullNameElement = document.createElement('span');

	itemElement.classList.add('mention__item');

	avatar.src = `./assets/images/avatars/${item.avatar}.jpg`;

	userNameElement.classList.add('mention__item__user-name');
	userNameElement.textContent = item.id;

	fullNameElement.classList.add('mention__item__full-name');
	fullNameElement.textContent = item.name;

	itemElement.appendChild(avatar);
	itemElement.appendChild(userNameElement);
	itemElement.appendChild(fullNameElement);

	return itemElement;
}

ClassicEditor.create(
	document.querySelector('#cke5-source-code-demo'),
		{
		plugins: [
			Alignment,
			Autoformat,
			AutoImage,
			AutoLink,
			BlockQuote,
			Bold,
			CloudServices,
			Code,
			CodeBlock,
			...(CKBOX_TOKEN_URL ? [CKBox] : []),
			Essentials,
			FindAndReplace,
			Font,
			GeneralHtmlSupport,
			Heading,
			HorizontalLine,
			HtmlEmbed,
			Image,
			ImageCaption,
			ImageInsert,
			ImageResize,
			ImageStyle,
			ImageToolbar,
			ImageUpload,
			Base64UploadAdapter,
			Indent,
			IndentBlock,
			Italic,
			Link,
			LinkImage,
			List,
			ListProperties,
			MediaEmbed,
			Mention,
			PageBreak,
			Paragraph,
			PasteFromOffice,
			PictureEditing,
			RemoveFormat,
			ShowBlocks,
			SourceEditing,
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
			TextPartLanguage,
			TextTransformation,
			TodoList,
			Underline,
			...(WEB_SPELL_CHECKER_LICENSE_KEY ? [WProofreader] : []),
			...(LICENSE_KEY ? [
				ExportPdf,
				ExportWord,
				ImportWord,
				SlashCommand,
				Template,
			] : []),
		],
		licenseKey: LICENSE_KEY,
		language: 'en',
		toolbar: {
			shouldNotGroupWhenFull: true,
			items: [
				// --- Document-wide tools ----------------------------------------------------------------------
				'undo',
				'redo',
				'|',
				'sourceEditing',
				'showBlocks',
				'|',
				'importWord',
				'exportWord',
				'exportPdf',
				'|',
				'findAndReplace',
				'selectAll',
				'wproofreader',
				'|',

				// --- "Insertables" ----------------------------------------------------------------------------
				// 'insertTemplate',
				'link',
				'insertImage',
				'ckbox',
				'insertTable',
				'blockQuote',
				'mediaEmbed',
				'codeBlock',
				'htmlEmbed',
				'pageBreak',
				'horizontalLine',
				'-',

				// --- Block-level formatting -------------------------------------------------------------------
				'heading',
				'style',
				'|',

				// --- Basic styles, font and inline formatting -------------------------------------------------------
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'superscript',
				'subscript',
				{
					label: 'Basic styles',
					icon: 'text',
					items: [
						'fontSize',
						'fontFamily',
						'fontColor',
						'fontBackgroundColor',
						'code',
						'|',
						'textPartLanguage',
						'|',
					],
				},
				'removeFormat',
				'|',

				// --- Text alignment ---------------------------------------------------------------------------
				'alignment',
				'|',

				// --- Lists and indentation --------------------------------------------------------------------
				'bulletedList',
				'numberedList',
				'todoList',
				'|',
				'outdent',
				'indent',
			],
		},
		exportPdf: {
			stylesheets: [coreStylesheets, premiumStylesheets, './content.css'],
			fileName: 'export-pdf-demo.pdf',
			appID: 'cke5-demos',
			converterOptions: {
				format: 'Tabloid',
				margin_top: exportVerticalSpace,
				margin_bottom: exportVerticalSpace,
				margin_right: exportHorizontalSpace,
				margin_left: exportHorizontalSpace,
				page_orientation: 'portrait',
			},
			tokenUrl: false,
		},
		exportWord: {
			stylesheets: [coreStylesheets, premiumStylesheets, './content.css'],
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
		heading: {
			options: [
				{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
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
		htmlEmbed: {
			showPreviews: true,
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
						{ key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i },
					],
				},
			],
		},
		image: {
			resizeOptions: [
				{
					name: 'resizeImage:original',
					label: 'Default image width',
					value: null,
				},
				{
					name: 'resizeImage:50',
					label: '50% page width',
					value: '50',
				},
				{
					name: 'resizeImage:75',
					label: '75% page width',
					value: '75',
				},
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
			],
			insert: {
				integrations: ['url'],
			},
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true,
			},
		},
		link: {
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file',
					},
				},
			},
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
		},
		mention: {
			feeds: MENTION_FEEDS,
		},
		placeholder: 'Type or paste your content here!',
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
		wproofreader: {
			serviceId: WEB_SPELL_CHECKER_LICENSE_KEY,
			lang: 'auto',
			srcUrl:
				'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js',
			autoStartup: false,
		},
		ckbox: {
			tokenUrl: CKBOX_TOKEN_URL,
		},
		template: {
			definitions: TEMPLATE_DEFINITIONS,
		},
	}
)
.then((editor) => {
	window.editor = editor;
})
.catch((error) => {
	console.error(error.stack);
});
