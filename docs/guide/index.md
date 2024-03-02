# Getting started

You might already know u-elements :tada:

`u-elements` mainly re-implements existing HTML tags. This means [online resources](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/) and your existing knowledge about HTML is applicable to u-elements counterparts. The goal is to learn and use regular HTML, but also [ensure outstanding accessibility](/guide/why) :rocket:

<!-- `u-elements` comply with W3C spesifications of existing HTML tags. This means that your existing knowledge and the abundance of online resources about the HTML tags
[details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details),
[summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary),
[datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist),
[option](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) and 
[progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) is applicable to their `u-elements` counterparts.
<br />The only difference, is that you need to load the u-elements javascript: -->


## Install
Install u-elements from NPM:

::: code-group

```bash [NPM]
npm add -D @u-elements/u-elements
```

```bash [PNPM]
pnpm add -D @u-elements/u-elements
```

```bash [Yarn]
yarn add -D @u-elements/u-elements
```

```bash [Bun]
bun add -D @u-elements/u-elements
```

```html [CDN]
<script type="module" src="https://unpkg.com/@u-elements/u-elements@latest/dist/index.js"></script>
```

:::

## CDN

## Import
Import `@u-elements/u-elements` to use u-elements.
- **If browser:** u-elements are automatically registered through [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)
- **If server:** Write u-elements markup in HTML/TSX/JSX/Svelte/Vue just like you would with regular HTML.
[DOM registration](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) only happens when reaching a browser
- **If loading multiple versions:** The first loaded version of a u-element will be used


```js
// your-main-app-file.js
import '@u-elements/u-elements';
```

## Usage in HTML

Add a `u-` to the relevant HTML tags in your markup.
<br />Refer to the [individual elements](/elements/) for supported attributes.

```html [u-progress]
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>u-elements example</title>
  </head>
  <body>
    <!-- Use u-elements in your HTML just like regular HTML elements -->
    <progress value="10" max="100"></progress> // [!code --]
    <u-progress value="10" max="100"></u-progress> // [!code ++]

    <script type="module" src="your-main-app-file.js" defer async></script>
 </body>
</html>
```


## Usage in Javascript

Refer to the [individual elements](/elements/) for supported JS interfaces.

## Usage in a framework

React, Svelte, Vue, Solid or Qwick
