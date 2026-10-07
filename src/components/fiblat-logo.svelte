<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";

  const POINT_COUNT = 160;
  const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
  const SPHERE_RADIUS = 10.5;

  const dots = Array.from({ length: POINT_COUNT }, (_, index) => {
    const depth = 1 - (2 * (index + 0.5)) / POINT_COUNT;
    const ring = Math.sqrt(1 - depth * depth);
    const angle = GOLDEN_ANGLE * index;
    return {
      depth,
      x: 12 + SPHERE_RADIUS * ring * Math.cos(angle),
      y: 12 - SPHERE_RADIUS * ring * Math.sin(angle),
    };
  }).filter(({ depth }) => depth > 0.05);

  let props: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg
  viewBox="0 0 24 24"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  {...props}
>
  <circle
    cx="12"
    cy="12"
    r="11.25"
    fill="none"
    stroke="currentColor"
    stroke-width="1"
  />
  {#each dots as { depth, x, y } (`${x.toFixed(2)},${y.toFixed(2)}`)}
    <circle
      cx={x.toFixed(2)}
      cy={y.toFixed(2)}
      r={(0.45 + 0.45 * depth).toFixed(2)}
    />
  {/each}
</svg>
