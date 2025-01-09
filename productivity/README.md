# Productivity editor

Test out all the features included in the Productivity. You can find Table of Contents, Format Painter and Templates in the toolbar and Document Outline in the left sidebar. Don’t forget to type <kbd>/</kbd> to display the Slash Commands dropdown!

See this demo live at [ckeditor.com](https://ckeditor.com/ckeditor-5/demo/productivity/) or read more about each feature in CKEditor 5 documentation for [Slash Commands](https://ckeditor.com/docs/ckeditor5/latest/features/slash-commands.html), [Table of contents](https://ckeditor.com/docs/ckeditor5/latest/features/table-of-contents.html), [Document outline](https://ckeditor.com/docs/ckeditor5/latest/features/document-outline.html), [Templates](https://ckeditor.com/docs/ckeditor5/latest/features/template.html), [Format painter](https://ckeditor.com/docs/ckeditor5/latest/features/format-painter.html).

## Installation steps

1. Clone this repository:

```shell
git clone git@github.com:ckeditor/ckeditor5-demos.git
```

2. Change the directory and install the dependencies:

```shell
cd ckeditor5-demos/productivity && yarn
```

3. Open the `productivity/index.js` file and update the values of the `LICENSE_KEY`, `CKBOX_TOKEN_URL`, and `WEB_SPELL_CHECKER_LICENSE_KEY` variables. Without this, the CKBox, spell checker, and other premium features will not be enabled.

4. Start the demo:

```shell
yarn dev
```
