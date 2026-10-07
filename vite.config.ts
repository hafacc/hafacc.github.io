import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), svelte(), icons({ compiler: "svelte" })],
  // keeps the project logos as files rather than copies inside both the page and the script
  build: { target: "es2024", assetsInlineLimit: 0 },
});
