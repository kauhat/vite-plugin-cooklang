import { build } from "vite";
import { describe, expect, it } from "vitest";
import path from "path";

const EXAMPLE_PROJECT_DIR = path.resolve(__dirname, "./example");

describe("integration", () => {
  it("builds", async () => {
    const output = await build({
      root: EXAMPLE_PROJECT_DIR,
      base: "./",
    });

    expect(output).not.toBeNull;
  });
});
