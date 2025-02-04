# Uploadcare

CKEditor can be set to accept any HTML element, attribute, style, or class. Additionally, the Source button allows users to edit raw HTML.

CKEditor 5 supports custom HTML markup and styles. Switch to the source mode to check out the HTML source of the content and play with it. See `time`, `abbr`, `aside` and `details` semantic elements as well as non-semantic tags and inline styles used to implement column layout.

See this demo live at [ckeditor.com](https://ckeditor.com/ckeditor-5/demo/uploadcare/) or read more about this feature in the [CKEditor 5 documentation](https://ckeditor.com/docs/ckeditor5/latest/features/file-management/uploadcare.html).

## Installation steps

1. Clone this repository:

```shell
git clone git@github.com:ckeditor/ckeditor5-demos.git
```

2. Change the directory and install the dependencies:

```shell
cd ckeditor5-demos/uploadcare && yarn
```

3. Open the `uploadcare/index.js` file and update the values of the `LICENSE_KEY`, `WEB_SPELL_CHECKER_LICENSE_KEY`, and `UPLOADCARE_PUBKEY` variables. Without this, the Uploadcare, spell checker, and other premium features will not be enabled.

4. Start the demo:


```shell
yarn dev
```
