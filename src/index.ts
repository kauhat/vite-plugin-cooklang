// import { realpath, realpathSync } from 'fs'
import { resolve } from "path";
// import { cwd } from 'process'
import { Plugin, TransformResult } from "vite";
import { loadEnv } from "vite";
import { createFilter, FilterPattern } from "@rollup/pluginutils";
import { Recipe } from "@cooklang/cooklang-ts";

export type ViteCooklangPluginOptions = {
  include?: FilterPattern;
  exclude?: FilterPattern;
};

export function ViteCooklangRecipeLoaderPlugin(
  options: ViteCooklangPluginOptions = {}
): Plugin {
  const fileRegex = /\.cook$/;

  const filter = createFilter(options.include ?? fileRegex, options.exclude);

  // const loadedRecipes: Map<string, Recipe> = new Map()

  return {
    name: "cooklang-loader",
    // enforce: 'pre',

    transform(source: string, id: string): TransformResult | null {
      // Check the file name contains ".cook" extension.
      if (!filter(id)) {
        return null;
      }

      // Resolve the imported path.
      const [path, _query] = id.split("?", 2);

      // Parse the recipe...
      const recipe = new Recipe(source);
      // loadedRecipes.set(path, recipe)

      // Add
      recipe.metadata["_import_path"] = path;
      recipe.metadata["_import_query"] = _query;

      //
      return {
        code: recipeToJS(recipe, true),
        map: null,
        // deps: ['@cooklang/cooklang-ts'],
        // dynamicDeps: ['@cooklang/cooklang-ts'],
      };
    },
  };
}

// export default ViteCooklangRecipeLoaderPlugin;

function recipeToJS(recipe: Recipe, includeSource = false) {
  const { ingredients, cookwares, metadata, steps, shoppingList } = recipe;

  return (
    (!includeSource
      ? ""
      : `export const source = ${JSON.stringify(recipe.toCooklang())}\n\n`) +
    `
  export const recipe = ${JSON.stringify(recipe)}
  export default recipe
  `
  );
}
