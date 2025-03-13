# Uploadcare

Upload, store, transform, and deliver images at scale with features including pre-built filters and various upload options (devices, URLs, social networks, and different cloud storage services).

See this demo live at [ckeditor.com](https://ckeditor.com/ckeditor-5/demo/image-optimizer/) or read more about this feature in the [CKEditor 5 documentation](https://ckeditor.com/docs/ckeditor5/latest/features/file-management/uploadcare.html).

## Installation steps

1. Clone this repository:

```shell
git clone git@github.com:ckeditor/ckeditor5-demos.git
```

2. Change the directory and install the dependencies:

```shell
cd ckeditor5-demos/image-optimizer && yarn
```

3. Open the `image-optimizer/index.js` file and update the values of the `LICENSE_KEY`, `WEB_SPELL_CHECKER_LICENSE_KEY`, and `UPLOADCARE_PUBKEY` variables. Without this, the Uploadcare, spell checker, and other premium features will not be enabled.

4. Start the demo:


```shell
yarn dev
```
