# Vite Cooklang Loader

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
import { ViteCooklangRecipeLoaderPlugin } from "vite-plugin-cooklang";

export default defineConfig({
  plugins: [ViteCooklangRecipeLoaderPlugin()],
});
```

## Usage

Recipes are loaded using the [Cooklang-TS](https://github.com/cooklang/cooklang-ts) library and have the below properties:

```js
import recipe from "./test/example/recipes/Easy Pancakes.cook";

const {
    ingredients,
    cookwares,
    metadata,
    steps,
    shoppingList
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
