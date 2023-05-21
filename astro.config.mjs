import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react(), mdx()],
  compressHTML: true,
  trailingSlash: "always",
});
