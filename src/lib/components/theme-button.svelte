<script lang="ts">
  import { onMount } from "svelte";
  import FaAdjust from "~icons/fa6-solid/circle-half-stroke";
  import FaMoon from "~icons/fa6-solid/moon";
  import FaSun from "~icons/fa6-solid/sun";

  type Theme = "dark" | "light" | undefined;

  // undefined follows the system preference, which the CSS resolves on its own
  let theme = $state<Theme>();
  let toggled = false;

  function show(next: Theme): void {
    theme = next;
    if (next === undefined) {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = next;
    }
  }

  function load(): void {
    const stored = localStorage.getItem("theme");
    show(stored === "dark" || stored === "light" ? stored : undefined);
  }

  function save(next: Theme): void {
    show(next);
    if (next === undefined) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", next);
    }
  }

  // the first toggle always inverts the current (possibly system) theme; a
  // second toggle returns to following the system preference
  function toggle(): void {
    if (theme === undefined) {
      const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
      save(prefersDark ? "light" : "dark");
    } else if (toggled) {
      save(undefined);
      toggled = false;
    } else {
      save(theme === "dark" ? "light" : "dark");
      toggled = true;
    }
  }

  const title = $derived(
    theme === undefined
      ? "System Theme"
      : theme === "dark"
        ? "Dark Theme"
        : "Light Theme",
  );

  onMount(load);
</script>

<!-- keeps other tabs in sync -->
<svelte:window onstorage={load} />

<button
  type="button"
  onclick={toggle}
  {title}
  aria-label="Change theme, currently {theme ?? "system"}"
  class="size-11 flex justify-center items-center rounded-full outline-none ring-teal-600 text-zinc-600 hover:bg-zinc-300 focus-visible:ring-3 dark:ring-teal-400 dark:text-zinc-400 dark:hover:bg-zinc-700"
>
  {#if theme === undefined}
    <FaAdjust aria-hidden="true" />
  {:else if theme === "dark"}
    <FaMoon aria-hidden="true" />
  {:else}
    <FaSun aria-hidden="true" />
  {/if}
</button>
