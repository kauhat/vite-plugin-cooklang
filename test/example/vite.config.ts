import { defineConfig } from "vite";
import { ViteCooklangRecipeLoaderPlugin } from "../../src/index";

export default defineConfig({
  plugins: [ViteCooklangRecipeLoaderPlugin()],
});
