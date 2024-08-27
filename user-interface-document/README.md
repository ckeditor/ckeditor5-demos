# Editor with Document user interface

CKEditor comes with a variety of editor types and user interface configuration options you can choose from. See all of them in action.

The Document editor provides a similar editing experience to some native word processors such as Microsoft Word, with the UI that resembles a paper document.

See this demo live at [ckeditor.com](http://ckeditor.com/ckeditor-5/demo/editor-types.html#document) or read more about it in the [CKEditor 5 documentation](https://ckeditor.com/docs/ckeditor5/latest/examples/builds/document-editor.html).

## Installation steps

1. Clone this repository:

```shell
git clone git@github.com:ckeditor/ckeditor5-demos.git
```

2. Change the directory and install the dependencies:

```shell
cd ckeditor5-demos/user-interface-document && yarn
```

3. Open the `user-interface-document/index.js` file and update the values of the `LICENSE_KEY`, `CKBOX_TOKEN_URL`, and `WEB_SPELL_CHECKER_LICENSE_KEY` variables. Without this, the CKBox, spell checker, and other premium features will not be enabled.

4. Start the demo:

```shell
yarn dev
```
