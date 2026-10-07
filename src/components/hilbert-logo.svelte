<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";

  const HILBERT_ORDER_3 =
    "M1.5 1.5 L1.5 4.5 L4.5 4.5 L4.5 1.5 L7.5 1.5 L10.5 1.5 L10.5 4.5 L7.5 4.5 L7.5 7.5 L10.5 7.5 L10.5 10.5 L7.5 10.5 L4.5 10.5 L4.5 7.5 L1.5 7.5 L1.5 10.5 L1.5 13.5 L4.5 13.5 L4.5 16.5 L1.5 16.5 L1.5 19.5 L1.5 22.5 L4.5 22.5 L4.5 19.5 L7.5 19.5 L7.5 22.5 L10.5 22.5 L10.5 19.5 L10.5 16.5 L7.5 16.5 L7.5 13.5 L10.5 13.5 L13.5 13.5 L16.5 13.5 L16.5 16.5 L13.5 16.5 L13.5 19.5 L13.5 22.5 L16.5 22.5 L16.5 19.5 L19.5 19.5 L19.5 22.5 L22.5 22.5 L22.5 19.5 L22.5 16.5 L19.5 16.5 L19.5 13.5 L22.5 13.5 L22.5 10.5 L22.5 7.5 L19.5 7.5 L19.5 10.5 L16.5 10.5 L13.5 10.5 L13.5 7.5 L16.5 7.5 L16.5 4.5 L13.5 4.5 L13.5 1.5 L16.5 1.5 L19.5 1.5 L19.5 4.5 L22.5 4.5 L22.5 1.5";

  let props: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  {...props}
>
  <path d={HILBERT_ORDER_3} />
</svg>
