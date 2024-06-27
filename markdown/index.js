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

import {
	ClassicEditor,
	Essentials,
	Autoformat,
	BlockQuote,
	Bold,
	CloudServices,
	Code,
	CodeBlock,
	Heading,
	HorizontalLine,
	Image,
	ImageToolbar,
	ImageUpload,
	Base64UploadAdapter,
	Italic,
	Link,
	List,
	Markdown,
	Mention,
	Paragraph,
	SourceEditing,
	SpecialCharacters,
	SpecialCharactersEssentials,
	Strikethrough,
	Table,
	TableToolbar,
	TextTransformation,
	TodoList,
} from 'ckeditor5';

import {
	SlashCommand
} from 'ckeditor5-premium-features'

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

/**
 * Enrich the special characters plugin with emojis.
 */
function SpecialCharactersEmoji(editor) {
	if (!editor.plugins.get('SpecialCharacters')) {
		return;
	}

	// Make sure Emojis are last on the list.
	this.afterInit = function () {
		editor.plugins.get('SpecialCharacters').addItems('Emoji', EMOJIS_ARRAY);
	};
}

const EMOJIS_ARRAY = [
	{ character: '🙈', title: 'See-No-Evil Monkey' },
	{ character: '🙄', title: 'Face With Rolling Eyes' },
	{ character: '🙃', title: 'Upside Down Face' },
	{ character: '🙂', title: 'Slightly Smiling Face' },
	{ character: '😴', title: 'Sleeping Face' },
	{ character: '😳', title: 'Flushed Face' },
	{ character: '😱', title: 'Face Screaming in Fear' },
	{ character: '😭', title: 'Loudly Crying Face' },
	{ character: '😬', title: 'Grimacing Face' },
	{ character: '😩', title: 'Weary Face' },
	{ character: '😢', title: 'Crying Face' },
	{ character: '😡', title: 'Pouting Face' },
	{ character: '😞', title: 'Disappointed Face' },
	{ character: '😜', title: 'Face with Stuck-Out Tongue and Winking Eye' },
	{ character: '😚', title: 'Kissing Face With Closed Eyes' },
	{ character: '😘', title: 'Face Throwing a Kiss' },
	{ character: '😔', title: 'Pensive Face' },
	{ character: '😒', title: 'Unamused Face' },
	{ character: '😑', title: 'Expressionless Face' },
	{ character: '😐', title: 'Neutral Face' },
	{ character: '😏', title: 'Smirking Face' },
	{ character: '😎', title: 'Smiling Face with Sunglasses' },
	{ character: '😍', title: 'Smiling Face with Heart-Eyes' },
	{ character: '😌', title: 'Relieved Face' },
	{ character: '😋', title: 'Face Savoring Delicious Food' },
	{ character: '😊', title: 'Smiling Face with Smiling Eyes' },
	{ character: '😉', title: 'Winking Face' },
	{ character: '😈', title: 'Smiling Face With Horns' },
	{ character: '😇', title: 'Smiling Face with Halo' },
	{
		character: '😆',
		title: 'Smiling Face with Open Mouth and Tightly-Closed Eyes',
	},
	{ character: '😅', title: 'Smiling Face with Open Mouth and Cold Sweat' },
	{ character: '😄', title: 'Smiling Face with Open Mouth and Smiling Eyes' },
	{ character: '😃', title: 'Smiling Face with Open Mouth' },
	{ character: '😂', title: 'Face with Tears of Joy' },
	{ character: '😁', title: 'Grinning Face with Smiling Eyes' },
	{ character: '😀', title: 'Grinning Face' },
	{ character: '🥺', title: 'Pleading Face' },
	{ character: '🥵', title: 'Hot Face' },
	{ character: '🥴', title: 'Woozy Face' },
	{ character: '🥳', title: 'Partying Face' },
	{ character: '🥰', title: 'Smiling Face with Hearts' },
	{ character: '🤭', title: 'Face with Hand Over Mouth' },
	{ character: '🤪', title: 'Zany Face' },
	{ character: '🤩', title: 'Grinning Face with Star Eyes' },
	{ character: '🤦', title: 'Face Palm' },
	{ character: '🤤', title: 'Drooling Face' },
	{ character: '🤣', title: 'Rolling on the Floor Laughing' },
	{ character: '🤔', title: 'Thinking Face' },
	{ character: '🤞', title: 'Crossed Fingers' },
	{ character: '🙏', title: 'Person with Folded Hands' },
	{ character: '🙌', title: 'Person Raising Both Hands in Celebration' },
	{ character: '🙋', title: 'Happy Person Raising One Hand' },
	{ character: '🤷', title: 'Shrug' },
	{ character: '🤗', title: 'Hugging Face' },
	{ character: '🖤', title: 'Black Heart' },
	{ character: '🔥', title: 'Fire' },
	{ character: '💰', title: 'Money Bag' },
	{ character: '💯', title: 'Hundred Points Symbol' },
	{ character: '💪', title: 'Flexed Biceps' },
	{ character: '💩', title: 'Pile of Poo' },
	{ character: '💥', title: 'Collision' },
	{ character: '💞', title: 'Revolving Hearts' },
	{ character: '💜', title: 'Purple Heart' },
	{ character: '💚', title: 'Green Heart' },
	{ character: '💙', title: 'Blue Heart' },
	{ character: '💗', title: 'Growing Heart' },
	{ character: '💖', title: 'Sparkling Heart' },
	{ character: '💕', title: 'Two Hearts' },
	{ character: '💔', title: 'Broken Heart' },
	{ character: '💓', title: 'Beating Heart' },
	{ character: '💐', title: 'Bouquet' },
	{ character: '💋', title: 'Kiss Mark' },
	{ character: '💀', title: 'Skull' },
	{ character: '👑', title: 'Crown' },
	{ character: '👏', title: 'Clapping Hands Sign' },
	{ character: '👍', title: 'Thumbs Up Sign' },
	{ character: '👌', title: 'OK Hand Sign' },
	{ character: '👉', title: 'Backhand Index Pointing Right' },
	{ character: '👈', title: 'Backhand Index Pointing Left' },
	{ character: '👇', title: 'Backhand Index Pointing Down' },
	{ character: '👀', title: 'Eyes' },
	{ character: '🎶', title: 'Multiple Musical Notes' },
	{ character: '🎊', title: 'Confetti Ball' },
	{ character: '🎉', title: 'Party Popper' },
	{ character: '🎈', title: 'Balloon' },
	{ character: '🎂', title: 'Birthday Cake' },
	{ character: '🎁', title: 'Wrapped Gift' },
	{ character: '🌹', title: 'Rose' },
	{ character: '🌸', title: 'Cherry Blossom' },
	{ character: '🌞', title: 'Sun with Face' },
	{ character: '❤️', title: 'Red Heart' },
	{ character: '❣️', title: 'Heavy Heart Exclamation Mark Ornament' },
	{ character: '✨', title: 'Sparkles' },
	{ character: '✌️', title: 'Victory Hand' },
	{ character: '✅', title: 'Check Mark Button' },
	{ character: '♥️', title: 'Heart Suit' },
	{ character: '☺️', title: 'Smiling Face' },
	{ character: '☹️', title: 'Frowning Face' },
	{ character: '☀️', title: 'Sun' },
];

ClassicEditor.create(
	document.querySelector('#cke5-markdown-demo'),
	{
		plugins: [
			Autoformat,
			BlockQuote,
			Bold,
			CloudServices,
			Code,
			CodeBlock,
			Essentials,
			Heading,
			HorizontalLine,
			Image,
			ImageToolbar,
			ImageUpload,
			Base64UploadAdapter,
			Italic,
			Link,
			List,
			Markdown,
			Mention,
			Paragraph,
			SourceEditing,
			SpecialCharacters,
			SpecialCharactersEmoji,
			SpecialCharactersEssentials,
			Strikethrough,
			Table,
			TableToolbar,
			TextTransformation,
			TodoList,
			...(LICENSE_KEY ? [SlashCommand] : []),
		],
		licenseKey: LICENSE_KEY,
		language: 'en',
		toolbar: [
			'undo',
			'redo',
			'|',
			'sourceEditing',
			'|',
			'heading',
			'|',
			'bold',
			'italic',
			'strikethrough',
			'code',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'link',
			'uploadImage',
			'insertTable',
			'blockQuote',
			'codeBlock',
			'horizontalLine',
			'specialCharacters',
		],
		codeBlock: {
			languages: [
				{ language: 'css', label: 'CSS' },
				{ language: 'html', label: 'HTML' },
				{ language: 'javascript', label: 'JavaScript' },
				{ language: 'php', label: 'PHP' },
			],
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
		image: {
			toolbar: ['imageTextAlternative'],
		},
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
		},
	}
)
.then((editor) => {
	window.editor = editor;
})
.catch((error) => {
	console.error(error.stack);
});
