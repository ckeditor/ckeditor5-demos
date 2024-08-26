# Feature-rich editor

CKEditor brings hundreds of features that can transform your world of content editing. Discover which ones you need for your use case!

This demo showcases most of the CKEditor features along with some premium addons: Export to PDF/Word, Import from Word, and WProofreader.

See this demo live at [ckeditor.com](http://ckeditor.com/ckeditor-5/demo/feature-rich/) or read more about it in the [CKEditor 5 documentation](https://ckeditor.com/docs/ckeditor5/latest/examples/builds-custom/full-featured-editor.html).

## Installation steps

1. Clone this repository:

```shell
git clone git@github.com:ckeditor/ckeditor5-demos.git
```

2. Change the directory and install the dependencies:

```shell
cd ckeditor5-demos/feature-rich && yarn
```

3. Open the `feature-rich/index.js` file and add update the values of the `LICENSE_KEY`, `CKBOX_TOKEN_URL`, and `WEB_SPELL_CHECKER_LICENSE_KEY` variables. Without this, the CKBox, spell checker, and other premium features will not be enabled.

4. Start the demo:

```shell
yarn dev
```
