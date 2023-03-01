import { Plugin, TransformResult } from "vite";
import { createFilter, FilterPattern } from "@rollup/pluginutils";
import { Recipe } from "@cooklang/cooklang-ts";

export type ViteCooklangPluginOptions = {
  include?: FilterPattern;
  exclude?: FilterPattern;
};

export default function ViteCooklangRecipeLoaderPlugin(
  options: ViteCooklangPluginOptions = {}
): Plugin {
  const fileRegex = /\.cook$/;

  const filter = createFilter(options.include ?? fileRegex, options.exclude);

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

      const code = sourceToJSONTransform(source, path, true);
      // const code = sourceToRecipeTransform(source, path, true)

      //
      return {
        code,
        map: null,
        // deps: ['@cooklang/cooklang-ts'],
        // dynamicDeps: ['@cooklang/cooklang-ts'],
      };
    },
  };
}

function sourceToJSONTransform(
  source: string,
  path: string,
  includeSource: boolean
) {
  // Parse the recipe...
  const recipe = new Recipe(source);

  // Add some extra metadata...
  recipe.metadata["import_path"] = path;

  return (
    (includeSource
      ? `export const source = ${JSON.stringify(recipe.toCooklang())}\n\n`
      : ``) +
    `
  export const recipe = ${JSON.stringify(recipe)}

  export default recipe
  `
  );
}

function sourceToRecipeTransform(
  source: string,
  path: string,
  includeSource: boolean
) {
  return `import { Recipe } from "@cooklang/cooklang-ts";

  export const path = ${JSON.stringify(path)}

  export const source = ${JSON.stringify(source)}

  // Parse the recipe...
  export const recipe = new Recipe(source)

  // Add some extra metadata...
  recipe.metadata["import_path"] = path;

  export default recipe
  `;
}
