import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({ adapter: adapter(), compilerOptions: { runes: true } }),
    icons({ compiler: "svelte" }),
  ],
  // keeps the project logos as files rather than copies inside both the page and the script
  build: { target: "es2024", assetsInlineLimit: 0 },
});
