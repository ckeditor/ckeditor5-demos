# AI Assistant editor

Add powerful AI content creation tools into CKEditor. Use pre-made prompts or custom queries to have AI write, rephrase, translate, or summarize your text.

This demo showcases most CKEditor features alongside some premium add-ons: Export to PDF/Word and Import from Word.

See this demo live at [ckeditor.com](https://ckeditor.com/ai-assistant/) or read more about it in the [CKEditor 5 documentation](https://ckeditor.com/docs/ckeditor5/latest/features/ai-assistant/ai-assistant-overview.html).

## Installation steps

1. Clone this repository:

```shell
git clone git@github.com:ckeditor/ckeditor5-demos.git
```

2. Change the directory and install the dependencies:

```shell
cd ckeditor5-demos/ai-assistant && yarn
```

3. Open the `ai-assistant/index.js` file and add update the values of the `LICENSE_KEY`, `AI_API_URL`, and `CKBOX_TOKEN_URL` variables. Without this, the CKBox, AIAssistant and other premium features will not be enabled.

4. Start the demo:

```shell
yarn dev
```
