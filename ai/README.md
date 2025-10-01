# AI editor

CKEditor AI is an AI-powered writing assistant that integrates directly into our rich-text editor, CKEditor 5, providing instant text rewriting, summarization, correction, and contextual chat help based on internal style guides. The platform includes automated review tools and enterprise-ready functionality that plugs into existing systems without requiring custom infrastructure.

This demo showcases most CKEditor features alongside some premium add-ons: Export to PDF/Word and Import from Word.

See this demo live at [ckeditor.com](https://ckeditor.com/ai/) or read more about it in the [CKEditor 5 documentation](https://ckeditor.com/docs/ckeditor5/latest/features/ai/ckeditor-ai-overview.html).

## Installation steps

1. Clone this repository:

```shell
git clone git@github.com:ckeditor/ckeditor5-demos.git
```

2. Change the directory and install the dependencies:

```shell
cd ckeditor5-demos/ai && yarn
```

1. Open the `ai/index.js` file and update the values of the `LICENSE_KEY`, `CS_CONFIG` and `CKBOX_TOKEN_URL` variables. Without this, the CKBox, AIAssistant and other premium features will not be enabled.

2. Start the demo:

```shell
yarn dev
```
