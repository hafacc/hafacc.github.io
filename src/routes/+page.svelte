<script lang="ts">
  import { onMount } from "svelte";
  import FiblatLogo from "#lib/components/fiblat-logo.svelte";
  import HafaLogo from "#lib/components/hafa-logo.svelte";
  import HilbertLogo from "#lib/components/hilbert-logo.svelte";
  import Project from "#lib/components/project.svelte";
  import ThemeButton from "#lib/components/theme-button.svelte";
  import asciiMath from "#lib/images/ascii-math.svg";
  import colorSeparation from "#lib/images/color-separation.svg";
  import splash from "#lib/images/irina-shishkina-FMlZAUFmkvw-unsplash.jpg";
  import kip from "#lib/images/kip.svg";
  import looseRat from "#lib/images/loose-rat.svg";
  import remarkableLogo from "#lib/images/remarkable-logo.svg";
  import repub from "#lib/images/repub.svg";
  import scenicRoute from "#lib/images/scenic-route.svg";
  import FaChrome from "~icons/fa6-brands/chrome";
  import FaGithub from "~icons/fa6-brands/github";
  import FaNpm from "~icons/fa6-brands/npm";
  import FaBox from "~icons/fa6-solid/box";
  import FaEnvelopeOpenText from "~icons/fa6-solid/envelope-open-text";
  import FaGlobe from "~icons/fa6-solid/globe";
  import SiPolars from "~icons/simple-icons/polars";
  import SiPypi from "~icons/simple-icons/pypi";
  import TbBraces from "~icons/tabler/braces";
  import TbHierarchy3 from "~icons/tabler/hierarchy-3";

  function markScrolled(): void {
    document.documentElement.dataset.scroll = (scrollY > 0).toString();
  }

  onMount(markScrolled);
</script>

<svelte:window onscroll={markScrolled} />

<div class="bg-zinc-50 dark:bg-zinc-900">
  <header
    class="fixed z-50 w-full shadow-sm bg-white/80 backdrop-blur-sm backdrop-saturate-150 transition-opacity duration-500 motion-reduce:transition-none opacity-0 scroll-show dark:bg-zinc-800/80 dark:backdrop-brightness-150"
  >
    <div
      class="max-w-4xl h-full mx-auto my-2 px-6 flex items-center justify-between dark:text-zinc-100"
    >
      <a
        href="/"
        class="rounded-sm outline-none focus-visible:ring-3 ring-teal-600 dark:ring-teal-400"
      >
        <span class="flex items-center">
          <HafaLogo width="28" height="28" />
          <span class="font-cursive text-4xl pl-2">hafa</span>
        </span>
      </a>
      <ThemeButton />
    </div>
  </header>
  <div
    class="relative h-screen w-full flex justify-center items-center overflow-hidden"
  >
    <img
      src={splash}
      alt=""
      fetchpriority="high"
      class="hero-zoom absolute inset-0 size-full object-cover object-center"
    >
    <div
      class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"
    ></div>
    <h1
      class="relative text-8xl font-bold text-white text-shadow-lg text-shadow-black/60 transition-opacity duration-500 motion-reduce:transition-none scroll-hide font-cursive select-none"
    >
      hafa
    </h1>
  </div>
  <main class="min-h-screen max-w-4xl mx-auto flex flex-col items-center pb-32">
    <section aria-labelledby="apps" class="w-full">
      <div class="reveal flex flex-col items-center gap-3 py-8 mt-4">
        <h2
          id="apps"
          class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Apps
        </h2>
        <span
          class="h-1 w-16 rounded-full bg-linear-to-r from-teal-400 to-teal-500"
        ></span>
      </div>
      <ul class="px-4 w-full columns-1 md:columns-2 lg:columns-3 gap-6">
        <Project
          tint="from-white to-cyan-50 dark:from-zinc-800 dark:to-cyan-950/30"
          name="Scenic Route"
          description="Navigation for taking the scenic route."
          buttons={[
            { text: "Website", href: "https://scenic.hafa.cc/", icon: FaGlobe },
            {
              text: "Github",
              href: "https://github.com/hafacc/scenic-route",
              icon: FaGithub,
            },
          ]}
        >
          <img src={scenicRoute} alt="" height="72" width="72">
        </Project>
        <Project
          tint="from-white to-teal-50 dark:from-zinc-800 dark:to-teal-950/30"
          name="kip"
          description="Friends-only space sharing. List a spare room or your whole place, mark the dates it's free, and let friends book it. No money changes hands."
          buttons={[
            { text: "Website", href: "https://kip.hafa.cc/", icon: FaGlobe },
            {
              text: "Github",
              href: "https://github.com/hafacc/kip",
              icon: FaGithub,
            },
          ]}
        >
          <img src={kip} alt="" height="72" width="72">
        </Project>
        <Project
          tint="from-white to-sky-50 dark:from-zinc-800 dark:to-sky-950/30"
          name="rePub"
          description='rePub is an open source chrome extension for converting web pages into ePubs for reading on reMarkable. In contrast to the "Read on reMarkable" extension, this allows more customization and allows you to include images.'
          buttons={[
            {
              text: "Chrome",
              href: "https://chrome.google.com/webstore/detail/repub/blkjpagbjaekkpojgcgdapmikoaolpbl",
              icon: FaChrome,
            },
            {
              text: "Github",
              href: "https://github.com/hafacc/repub",
              icon: FaGithub,
            },
          ]}
        >
          <img src={repub} alt="" height="72" width="72">
        </Project>
        <Project
          tint="from-white to-indigo-50 dark:from-zinc-800 dark:to-indigo-950/30"
          name="Spot Color Separation"
          description="Website for separating an image into spot colors. Intended for decomposing images for a Risograph."
          buttons={[
            {
              text: "Website",
              href: "https://hafa.cc/color-separation/",
              icon: FaGlobe,
            },
            {
              text: "Github",
              href: "https://github.com/hafacc/color-separation",
              icon: FaGithub,
            },
          ]}
        >
          <img src={colorSeparation} alt="" height="72" width="72">
        </Project>
        <Project
          tint="from-white to-blue-50 dark:from-zinc-800 dark:to-blue-950/30"
          name="Loose RAT Helper"
          description="Helper for finding 'loose' (homophone) Remote Associates Tests given a starting word."
          buttons={[
            {
              text: "Website",
              href: "https://looserat.hafa.cc/",
              icon: FaGlobe,
            },
            {
              text: "Github",
              href: "https://github.com/hafacc/loose-rat",
              icon: FaGithub,
            },
          ]}
        >
          <img src={looseRat} alt="" height="72" width="72">
        </Project>
        <Project
          tint="from-white to-violet-50 dark:from-zinc-800 dark:to-violet-950/30"
          name="Ascii Math Unicode"
          description="Type asciimath, get unicode."
          buttons={[
            { text: "Website", href: "https://ascii.hafa.cc/", icon: FaGlobe },
            {
              text: "Chrome",
              href: "https://chrome.google.com/webstore/detail/ascii-math-unicode/llehdcbaonklonjlfgeggamnebgggoab",
              icon: FaChrome,
            },
            {
              text: "Github",
              href: "https://github.com/hafacc/asciimath-unicode",
              icon: FaGithub,
            },
          ]}
        >
          <img src={asciiMath} alt="" height="72" width="72">
        </Project>
        <Project
          tint="from-white to-purple-50 dark:from-zinc-800 dark:to-purple-950/30"
          name="Synesthizer"
          description="A synesthetic synthesizer that converts images into piano compositions."
          buttons={[
            {
              text: "Website",
              href: "https://hafa.cc/synesthizer/",
              icon: FaGlobe,
            },
            {
              text: "Github",
              href: "https://github.com/hafacc/synesthizer",
              icon: FaGithub,
            },
          ]}
        >
          <span class="text-6xl">🎹</span>
        </Project>
      </ul>
    </section>
    <section aria-labelledby="libraries" class="w-full">
      <div class="reveal flex flex-col items-center gap-3 py-8 mt-4">
        <h2
          id="libraries"
          class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Libraries
        </h2>
        <span
          class="h-1 w-16 rounded-full bg-linear-to-r from-teal-400 to-teal-500"
        ></span>
      </div>
      <ul class="px-4 w-full columns-1 md:columns-2 lg:columns-3 gap-6">
        <Project
          tint="from-white to-sky-50 dark:from-zinc-800 dark:to-sky-950/30"
          name="d3-dag"
          description="Lightweight, TypeScript-first layered layout algorithms for directed acyclic graphs on the web."
          buttons={[
            {
              text: "NPM",
              href: "https://www.npmjs.com/package/d3-dag",
              icon: FaNpm,
            },
            {
              text: "Github",
              href: "https://github.com/erikbrinkman/d3-dag",
              icon: FaGithub,
            },
          ]}
        >
          <TbHierarchy3
            class="size-18 text-sky-600 dark:text-sky-400"
            aria-hidden="true"
          />
        </Project>
        <Project
          tint="from-white to-indigo-50 dark:from-zinc-800 dark:to-indigo-950/30"
          name="mhtml-stream"
          description="Parse MHTML data as a stream using WHATWG streams and async iterators."
          buttons={[
            {
              text: "NPM",
              href: "https://www.npmjs.com/package/mhtml-stream",
              icon: FaNpm,
            },
            {
              text: "Github",
              href: "https://github.com/erikbrinkman/mhtml-stream",
              icon: FaGithub,
            },
          ]}
        >
          <FaEnvelopeOpenText
            class="size-18 text-indigo-600 dark:text-indigo-400"
            aria-hidden="true"
          />
        </Project>
        <Project
          tint="from-white to-teal-50 dark:from-zinc-800 dark:to-teal-950/30"
          name="teapub"
          description="Pure TypeScript library for generating ePub files from preact components."
          buttons={[
            {
              text: "NPM",
              href: "https://www.npmjs.com/package/teapub",
              icon: FaNpm,
            },
            {
              text: "Github",
              href: "https://github.com/erikbrinkman/teapub",
              icon: FaGithub,
            },
          ]}
        >
          <span class="flex gap-3 text-6xl">
            <span>🫖</span>
            <span>🍺</span>
          </span>
        </Project>
        <Project
          tint="from-white to-violet-50 dark:from-zinc-800 dark:to-violet-950/30"
          name="rmapi-js"
          description="JavaScript implementation of the reMarkable cloud API."
          buttons={[
            {
              text: "NPM",
              href: "https://www.npmjs.com/package/rmapi-js",
              icon: FaNpm,
            },
            {
              text: "Github",
              href: "https://github.com/erikbrinkman/rmapi-js",
              icon: FaGithub,
            },
          ]}
        >
          <img
            src={remarkableLogo}
            alt=""
            height="72"
            width="72"
            class="dark:invert"
          >
        </Project>
        <Project
          tint="from-white to-cyan-50 dark:from-zinc-800 dark:to-cyan-950/30"
          name="asciimath-parser"
          description="Fast, extensible, memory-efficient asciimath parser for Rust."
          buttons={[
            {
              text: "Crates",
              href: "https://crates.io/crates/asciimath-parser",
              icon: FaBox,
            },
            {
              text: "Github",
              href: "https://github.com/erikbrinkman/asciimath-parser",
              icon: FaGithub,
            },
          ]}
        >
          <TbBraces
            class="size-18 text-cyan-600 dark:text-cyan-400"
            aria-hidden="true"
          />
        </Project>
        <Project
          tint="from-white to-blue-50 dark:from-zinc-800 dark:to-blue-950/30"
          name="cfr"
          description="Counterfactual regret minimization solver for two-player zero-sum games with incomplete information, as a Rust library and binary."
          buttons={[
            {
              text: "Crates",
              href: "https://crates.io/crates/cfr",
              icon: FaBox,
            },
            {
              text: "Github",
              href: "https://github.com/erikbrinkman/cfr",
              icon: FaGithub,
            },
          ]}
        >
          <span class="text-6xl">🃏</span>
        </Project>
        <Project
          tint="from-white to-teal-50 dark:from-zinc-800 dark:to-teal-950/30"
          name="fiblat"
          description="Small python package for generating uniformly spaced points on a sphere."
          buttons={[
            {
              text: "PyPI",
              href: "https://pypi.org/project/fiblat/",
              icon: SiPypi,
            },
            {
              text: "Github",
              href: "https://github.com/hafacc/fibonacci_lattice",
              icon: FaGithub,
            },
          ]}
        >
          <FiblatLogo
            width="72"
            height="72"
            class="text-teal-600 dark:text-teal-400"
          />
        </Project>
        <Project
          tint="from-white to-indigo-50 dark:from-zinc-800 dark:to-indigo-950/30"
          name="hilbert-bytes"
          description="Python library for converting between d-dimensional points and their index on a Hilbert curve."
          buttons={[
            {
              text: "PyPI",
              href: "https://pypi.org/project/hilbert-bytes/",
              icon: SiPypi,
            },
            {
              text: "Github",
              href: "https://github.com/hafacc/hilbert-bytes",
              icon: FaGithub,
            },
          ]}
        >
          <HilbertLogo
            width="72"
            height="72"
            class="text-indigo-600 dark:text-indigo-400"
          />
        </Project>
        <Project
          tint="from-white to-sky-50 dark:from-zinc-800 dark:to-sky-950/30"
          name="homeotopy"
          description="Python library for computing homeomorphisms between common continuous spaces."
          buttons={[
            {
              text: "PyPI",
              href: "https://pypi.org/project/homeotopy/",
              icon: SiPypi,
            },
            {
              text: "Github",
              href: "https://github.com/hafacc/homeotopy",
              icon: FaGithub,
            },
          ]}
        >
          <span class="text-6xl">🍩</span>
        </Project>
        <Project
          tint="from-white to-violet-50 dark:from-zinc-800 dark:to-violet-950/30"
          name="polars-avro"
          description="Polars IO plugin for reading and writing Apache Avro files, built on arrow-avro."
          buttons={[
            {
              text: "PyPI",
              href: "https://pypi.org/project/polars-avro/",
              icon: SiPypi,
            },
            {
              text: "Github",
              href: "https://github.com/hafacc/polars-avro",
              icon: FaGithub,
            },
          ]}
        >
          <SiPolars class="size-18 text-[#0075ff]" aria-hidden="true" />
        </Project>
        <Project
          tint="from-white to-cyan-50 dark:from-zinc-800 dark:to-cyan-950/30"
          name="scarfs"
          description="Find an approximate fixed point of a bounded vector-valued function."
          buttons={[
            {
              text: "PyPI",
              href: "https://pypi.org/project/scarfs/",
              icon: SiPypi,
            },
            {
              text: "Github",
              href: "https://github.com/erikbrinkman/scarfs",
              icon: FaGithub,
            },
          ]}
        >
          <span class="text-6xl">🧣</span>
        </Project>
      </ul>
    </section>
    <footer class="my-8 space-y-2 w-full text-zinc-600 dark:text-zinc-400">
      <div class="text-md flex justify-center">
        <a
          href="https://github.com/hafacc"
          target="_blank"
          rel="noopener noreferrer"
          class="size-11 flex justify-center items-center rounded-full outline-none focus-visible:ring-3 ring-teal-600 hover:text-teal-700 dark:ring-teal-400 dark:hover:text-teal-400"
        >
          <FaGithub aria-hidden="true" />
          <span class="sr-only">Github (opens in a new tab)</span>
        </a>
      </div>
      <div class="text-center text-sm">
        Hero photo by
        <a
          class="underline hover:text-teal-700 dark:hover:text-teal-400 rounded-sm outline-none focus-visible:ring-3 ring-teal-600 dark:ring-teal-400"
          href="https://unsplash.com/@whoisrobinhood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
          >Irina Shishkina<span class="sr-only"> (opens in a new tab)</span></a
        >
        on
        <a
          class="underline hover:text-teal-700 dark:hover:text-teal-400 rounded-sm outline-none focus-visible:ring-3 ring-teal-600 dark:ring-teal-400"
          href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
          >Unsplash<span class="sr-only"> (opens in a new tab)</span></a
        >
      </div>
    </footer>
  </main>
</div>
