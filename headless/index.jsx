/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import React, { useState, useEffect, StrictMode } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import HeadlessEditor from '.';
import { createRoot } from 'react-dom/client';

function App() {
	const [editor, setEditor] = useState(null);

	return (
		<div className="App">
			<EditorToolbar editor={editor} />

			<CKEditor
				editor={HeadlessEditor}
				data="<h2>
						Build a dynamite UI from scratch 🧨
					</h2>
					<p>
						CKEditor&nbsp;5 comes with a rich, customizable UI that you can easily adapt to your needs. But it’s an option, not a must! If your app requires a completely new look, you can ditch the UI altogether and <strong>use CKEditor&nbsp;5 as a headless editor</strong>.
					</p>
					<h3>
						Work with React, Vue, Angular, or any other framework
					</h3>
					<p>
						If you take the headless route, the sky is the limit.
					</p>
					<p>
						This demo has an interface developed with <a target='_blank' rel='noopener noreferrer' href='https://ckeditor.com/ckeditor-5/react/'>React</a>, but that’s just an example. With the headless approach, you can develop your perfect UI in <strong>any framework you want</strong>.
					</p>
					<h3>
						Use an existing UI framework or your own design system
					</h3>
					<p>
						A headless editor seamlessly blends with your existing design. This ensures a <strong>consistent user experience</strong>, no matter which UI framework you use.
					</p>
					<p>
						You can easily integrate CKEditor with any solution, including:
					</p>
					<ul>
						<li>
							Bootstrap
						</li>
						<li>
							Material UI
						</li>
						<li>
							Tailwind CSS
						</li>
						<li>
							Or your own design system 💪
						</li>
					</ul>
				"
				onReady={(editor) => {
					setEditor(editor);

					window.editor = editor;
				}}
			/>
		</div>
	);
}

function EditorToolbar({ editor }) {
	return (
		<div className="editor-toolbar">
			<EditorToolbarButton label="Paragraph" editor={editor} commandName="paragraph" />
			<EditorToolbarButton label="H1" editor={editor} commandName="heading" commandValue="heading1" />
			<EditorToolbarButton label="H2" editor={editor} commandName="heading" commandValue="heading2" />
			<EditorToolbarButton label="H3" editor={editor} commandName="heading" commandValue="heading3" />
			<EditorToolbarButton label="Bold" editor={editor} commandName="bold" />
			<EditorToolbarButton label="Italic" editor={editor} commandName="italic" />
			<EditorToolbarButton label="Underline" editor={editor} commandName="underline" />
			<EditorToolbarButton label="Strikethrough" editor={editor} commandName="strikethrough" />
			<EditorToolbarButton label="Code" editor={editor} commandName="code" />
			<EditorToolbarButton label="Code block" editor={editor} commandName="codeBlock" />
			<EditorToolbarButton label="Block quote" editor={editor} commandName="blockQuote" />
			<EditorToolbarButton label="Bullet list" editor={editor} commandName="bulletedList" />
			<EditorToolbarButton label="Ordered list" editor={editor} commandName="numberedList" />
			<EditorToolbarButton label="Remove format" editor={editor} commandName="removeFormat" />
			<EditorToolbarButton label="Undo" editor={editor} commandName="undo" />
			<EditorToolbarButton label="Redo" editor={editor} commandName="redo" />
		</div>
	);
}

function EditorToolbarButton({ label, editor, commandName, commandValue = null }) {
	const command = editor ? editor.commands.get(commandName) : null;
	const [isOn, setIsOn] = useState(false);
	const [isEnabled, setIsEnabled] = useState(true);

	useEffect(() => {
		if (!command) {
			return;
		}

		function handleValueChange() {
			if (typeof command.value === 'boolean') {
				setIsOn(!!command.value);
			} else {
				setIsOn(commandValue === command.value);
			}
		}

		function handleIsEnabledChange() {
			setIsEnabled(command.isEnabled);
		}

		command.on('change:value', handleValueChange);
		command.on('change:isEnabled', handleIsEnabledChange);

		handleValueChange();
		handleIsEnabledChange();

		return function cleanup() {
			command.off('change:value', handleValueChange);
			command.off('change:isEnabled', handleIsEnabledChange);
		};
	}, [command]);

	const classNames = ['custom-editor-button'];

	if (isEnabled) {
		classNames.push(isOn ? 'custom-editor-button--fill' : '');
	} else {
		classNames.push('custom-editor-button--disabled');
	}

	return (
		<button
			className={classNames.join(' ')}
			onClick={() => {
				if (commandValue) {
					editor.execute(commandName, { value: commandValue });
				} else {
					editor.execute(commandName);
				}

				editor.editing.view.focus();
			}}
		>
			{label}
		</button>
	);
}

const rootElement = document.getElementById('cke5-headless');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
