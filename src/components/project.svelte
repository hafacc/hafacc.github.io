<script lang="ts">
  import type { Component, Snippet } from "svelte";
  import type { SVGAttributes } from "svelte/elements";

  interface Button {
    text: string;
    href: string;
    icon: Component<SVGAttributes<SVGSVGElement>>;
  }

  let {
    name,
    description,
    buttons,
    tint = "from-white to-zinc-100 dark:from-zinc-800 dark:to-zinc-700/40",
    children,
  }: {
    name: string;
    description: string;
    buttons: Button[];
    tint?: string;
    children?: Snippet;
  } = $props();
</script>

<li
  class="reveal mb-6 break-inside-avoid flex flex-col rounded-xl overflow-hidden bg-white ring-1 ring-zinc-200 shadow-sm transition-shadow hover:shadow-md hover:ring-2 hover:ring-teal-400/50 dark:bg-zinc-800 dark:ring-zinc-700/50 dark:shadow-none"
>
  <div
    class="bg-linear-to-br {tint} h-40 flex shrink-0 justify-center items-center"
    aria-hidden="true"
  >
    {@render children?.()}
  </div>
  <div class="flex flex-col gap-4 p-4">
    <h3
      class="text-2xl font-semibold text-center md:text-left dark:text-zinc-100"
    >
      {name}
    </h3>
    <p class="text-zinc-600 dark:text-zinc-400">{description}</p>
    <div class="flex flex-wrap gap-4">
      {#each buttons as { text, href, icon: Icon } (text)}
        <a
          {href}
          target="_blank"
          rel="noopener noreferrer"
          class="grow rounded-lg px-4 py-2 transition-colors bg-zinc-100 text-zinc-700 hover:bg-teal-50 hover:text-teal-700 space-x-2 flex justify-center items-center dark:bg-zinc-700/60 dark:text-zinc-300 dark:hover:bg-teal-950/50 dark:hover:text-teal-300 outline-none focus-visible:ring-3 ring-teal-600 dark:ring-teal-400"
        >
          <span>{text}<span class="sr-only"> (opens in a new tab)</span></span>
          <Icon aria-hidden="true" />
        </a>
      {/each}
    </div>
  </div>
</li>
