# Vite Cooklang Loader

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]

This plugin enables loading of Cooklang markup files.

## Setup

### Install this package

```bash
npm install --save-dev vite-plugin-cooklang
# OR
yarn add -D vite-plugin-cooklang
```

### Update your config

Add the plugin to your Vite config as below:

```js
// vite.config.js
import { defineConfig } from "vite";
import cooklang from "vite-plugin-cooklang";

export default defineConfig({
  plugins: [cooklang()],
});
```

## Usage

Recipes are loaded using the [Cooklang-TS](https://github.com/cooklang/cooklang-ts) library and have the below properties:

```js
import recipe from "./test/example/recipes/Easy Pancakes.cook";

const {
  //
  ingredients,
  cookwares,
  metadata,
  steps,
  shoppingList,
} = recipe;
```

See the [test project](./test/example) for an example of using this plugin.

## TODO

- [x] Write a readme.
- [ ] Test both inline `Recipe` class and JSON transformer approaches.
- [ ] More tests!

## Thanks

- The [Cooklang-TS](https://github.com/cooklang/cooklang-ts) TypeScript library
- The [Cooklang](https://github.com/cooklang) project and it's contributors
- [UnJS Project Starter Template](https://github.com/unjs/template)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/vite-plugin-cooklang?style=flat-square
[npm-version-href]: https://npmjs.com/package/vite-plugin-cooklang
[npm-downloads-src]: https://img.shields.io/npm/dm/vite-plugin-cooklang?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/vite-plugin-cooklang
[github-actions-src]: https://img.shields.io/github/actions/workflow/status/kauhat/vite-plugin-cooklang/ci.yml?branch=main&style=flat-square
[github-actions-href]: https://github.com/kauhat/vite-plugin-cooklang/actions?query=workflow%3Aci
