import { assert, describe, expect, it } from "vitest";

import { ViteCooklangRecipeLoaderPlugin } from "../src/index";
import { build } from "vite";
import path from "path";

const EXAMPLE_PROJECT_DIR = path.resolve(__dirname, "./example");

describe("integration", () => {
  it("builds", async () => {
    await build({
      root: EXAMPLE_PROJECT_DIR,
      base: "./",
      build: {
        rollupOptions: {
          // ...
          plugins: [ViteCooklangRecipeLoaderPlugin()],
        },
      },
    });

    expect(1 + 1).eq(2);
  });
});
