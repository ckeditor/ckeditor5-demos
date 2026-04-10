# AI features spotlight

This demo mirrors the multi-tab AI experience from the CKEditor website: **Classic Editor with AI**, **AI Chat**, **AI Quick Actions**, **AI Review**, and **AI Translate**. Use the buttons above the editor to switch variants.

## Files (same layout as the `ai` demo)

- `index.html` — page shell, tab buttons, sample HTML for each variant
- `index.js` — editor configuration for all variants and startup logic
- `demo.css` — page and integration layout
- `content.css` — typography inside editor content
- `ai-comments.js` — seed comment threads for the sample documents

## Installation

```shell
cd ckeditor5-demos/ai-features-spotlight && yarn
```

Open `index.js` and set `LICENSE_KEY`, `CS_CONFIG`, and `CKBOX_TOKEN_URL` for full premium behavior (CKBox, collaboration, AI, export, etc.). With `GPL`, premium features stay disabled.

```shell
yarn dev
```
