import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import {
  FaBox,
  FaChrome,
  FaEnvelopeOpenText,
  FaGithub,
  FaGlobe,
  FaNpm,
} from "react-icons/fa";
import { SiPolars, SiPypi } from "react-icons/si";
import { TbBraces, TbHierarchy3 } from "react-icons/tb";
import ExternalAnchor from "../components/external-anchor";
import FiblatLogo from "../components/fiblat-logo";
import HafaLogo from "../components/hafa-logo";
import HilbertLogo from "../components/hilbert-logo";
import Project from "../components/project";
import ThemeButton from "../components/theme-button";
import asciiMath from "../images/ascii-math.svg";
import splash from "../images/irina-shishkina-FMlZAUFmkvw-unsplash.jpg";
import kip from "../images/kip.svg";
import remarkableLogo from "../images/remarkable-logo.svg";
import repub from "../images/repub.svg";
import riso from "../images/riso-logo.svg";
import scenicRoute from "../images/scenic-route.svg";
import {
  AUTHOR_GITHUB,
  ORG_GITHUB,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "../lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  sameAs: [AUTHOR_GITHUB, ORG_GITHUB],
};

interface Svg {
  src: string;
}

function FooterIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactElement;
}): ReactElement {
  return (
    <ExternalAnchor
      href={href}
      aria-label={label}
      className="p-1 hover:text-teal-600 dark:hover:text-teal-400"
    >
      {icon}
    </ExternalAnchor>
  );
}

export default function Hero(): ReactElement {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built from constants
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="fixed z-50 w-full shadow-sm bg-white/80 backdrop-blur-sm backdrop-saturate-150 transition-[opacity,visibility] duration-500 opacity-0 scroll-show dark:bg-zinc-800/80 dark:backdrop-brightness-150">
        <div className="max-w-4xl h-full mx-auto my-2 px-6 flex items-center justify-between dark:text-zinc-100">
          <Link href="/">
            <span className="flex items-center">
              <HafaLogo
                width={28}
                height={28}
                className="text-[#14151a] dark:text-zinc-100"
              />
              <span className="font-cursive text-4xl pl-2">hafa</span>
            </span>
          </Link>
          <ThemeButton />
        </div>
      </header>
      <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
        <Image
          src={splash}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
        <h1 className="relative text-8xl font-bold text-white transition-opacity duration-500 scroll-hide font-cursive select-none">
          hafa
        </h1>
      </div>
      <main className="min-h-screen max-w-4xl mx-auto flex flex-col items-center pb-32">
        <section aria-labelledby="apps" className="w-full">
          <div className="reveal flex flex-col items-center gap-3 py-8 mt-4">
            <h2
              id="apps"
              className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              Apps
            </h2>
            <span className="h-1 w-16 rounded-full bg-linear-to-r from-teal-400 to-teal-500" />
          </div>
          <ul className="px-4 w-full columns-1 md:columns-2 lg:columns-3 gap-6">
            <Project
              tint="from-white to-cyan-50 dark:from-zinc-800 dark:to-cyan-950/30"
              logo={
                <Image
                  src={(scenicRoute as Svg).src}
                  alt="Scenic Route logo"
                  height={72}
                  width={72}
                />
              }
              name="Scenic Route"
              description="Navigation for taking the scenic route."
              buttons={[
                {
                  text: "Website",
                  href: "https://scenic.hafa.cc/",
                  icon: <FaGlobe />,
                },
                {
                  text: "Github",
                  href: "https://github.com/hafacc/scenic-route",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-teal-50 dark:from-zinc-800 dark:to-teal-950/30"
              logo={
                <Image
                  src={(kip as Svg).src}
                  alt="kip logo"
                  height={72}
                  width={72}
                />
              }
              name="kip"
              description="Friends-only space sharing. List a spare room or your whole place, mark the dates it's free, and let friends book it. No money changes hands."
              buttons={[
                {
                  text: "Website",
                  href: "https://kip.hafa.cc/",
                  icon: <FaGlobe />,
                },
                {
                  text: "Github",
                  href: "https://github.com/hafacc/kip",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-sky-50 dark:from-zinc-800 dark:to-sky-950/30"
              logo={
                <Image
                  src={(repub as Svg).src}
                  alt="repub logo"
                  height={72}
                  width={72}
                />
              }
              name="rePub"
              description={`rePub is an open source chrome extension
            for converting web pages into ePubs for reading on reMarkable. In
            contrast to the "Read on reMarkable" extension, this allows more
            customization and allows you to include images.`}
              buttons={[
                {
                  text: "Chrome",
                  href: "https://chrome.google.com/webstore/detail/repub/blkjpagbjaekkpojgcgdapmikoaolpbl",
                  icon: <FaChrome />,
                },
                {
                  text: "Github",
                  href: "https://github.com/hafacc/repub",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-indigo-50 dark:from-zinc-800 dark:to-indigo-950/30"
              logo={
                <Image
                  src={(riso as Svg).src}
                  alt="Risograph logo"
                  height={72}
                  width={72}
                />
              }
              name="Spot Color Separation"
              description="Website for separating an image into spot colors. Intended for decomposing images for a Risograph."
              buttons={[
                {
                  text: "Website",
                  href: "https://hafa.cc/color-separation/",
                  icon: <FaGlobe />,
                },
                {
                  text: "Github",
                  href: "https://github.com/hafacc/color-separation",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-blue-50 dark:from-zinc-800 dark:to-blue-950/30"
              logo={<span className="text-6xl">🐀</span>}
              name="Loose RAT Helper"
              description="Helper for finding 'loose' (homophone) Remote Associates Tests given a starting word."
              buttons={[
                {
                  text: "Website",
                  href: "https://hafa.cc/loose-rat/",
                  icon: <FaGlobe />,
                },
                {
                  text: "Github",
                  href: "https://github.com/hafacc/loose-rat",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-violet-50 dark:from-zinc-800 dark:to-violet-950/30"
              logo={
                <Image
                  src={(asciiMath as Svg).src}
                  alt="ascii math logo"
                  height={72}
                  width={72}
                />
              }
              name="Ascii Math Unicode"
              description="Ascii math unicode is an open source chrome extension for converting highlighted ascii math into unicode math expressions."
              buttons={[
                {
                  text: "Chrome",
                  href: "https://chrome.google.com/webstore/detail/ascii-math-unicode/llehdcbaonklonjlfgeggamnebgggoab",
                  icon: <FaChrome />,
                },
                {
                  text: "Github",
                  href: "https://github.com/hafacc/asciimath-unicode",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-purple-50 dark:from-zinc-800 dark:to-purple-950/30"
              logo={<span className="text-6xl">🎹</span>}
              name="Synesthizer"
              description="A synesthetic synthesizer that converts images into piano compositions."
              buttons={[
                {
                  text: "Website",
                  href: "https://hafa.cc/synesthizer/",
                  icon: <FaGlobe />,
                },
                {
                  text: "Github",
                  href: "https://github.com/hafacc/synesthizer",
                  icon: <FaGithub />,
                },
              ]}
            />
          </ul>
        </section>
        <section aria-labelledby="libraries" className="w-full">
          <div className="reveal flex flex-col items-center gap-3 py-8 mt-4">
            <h2
              id="libraries"
              className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              Libraries
            </h2>
            <span className="h-1 w-16 rounded-full bg-linear-to-r from-teal-400 to-teal-500" />
          </div>
          <ul className="px-4 w-full columns-1 md:columns-2 lg:columns-3 gap-6">
            <Project
              tint="from-white to-sky-50 dark:from-zinc-800 dark:to-sky-950/30"
              logo={
                <TbHierarchy3
                  size={72}
                  className="text-sky-600 dark:text-sky-400"
                  aria-hidden="true"
                />
              }
              name="d3-dag"
              description="Lightweight, TypeScript-first layered layout algorithms for directed acyclic graphs on the web."
              buttons={[
                {
                  text: "NPM",
                  href: "https://www.npmjs.com/package/d3-dag",
                  icon: <FaNpm />,
                },
                {
                  text: "Github",
                  href: "https://github.com/erikbrinkman/d3-dag",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-indigo-50 dark:from-zinc-800 dark:to-indigo-950/30"
              logo={
                <FaEnvelopeOpenText
                  size={72}
                  className="text-indigo-600 dark:text-indigo-400"
                  aria-hidden="true"
                />
              }
              name="mhtml-stream"
              description="Parse MHTML data as a stream using WHATWG streams and async iterators."
              buttons={[
                {
                  text: "NPM",
                  href: "https://www.npmjs.com/package/mhtml-stream",
                  icon: <FaNpm />,
                },
                {
                  text: "Github",
                  href: "https://github.com/erikbrinkman/mhtml-stream",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-teal-50 dark:from-zinc-800 dark:to-teal-950/30"
              logo={
                <span className="flex gap-3 text-6xl">
                  <span>🫖</span>
                  <span>🍺</span>
                </span>
              }
              name="teapub"
              description="Pure TypeScript library for generating ePub files from preact components."
              buttons={[
                {
                  text: "NPM",
                  href: "https://www.npmjs.com/package/teapub",
                  icon: <FaNpm />,
                },
                {
                  text: "Github",
                  href: "https://github.com/erikbrinkman/teapub",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-violet-50 dark:from-zinc-800 dark:to-violet-950/30"
              logo={
                <Image
                  src={(remarkableLogo as Svg).src}
                  alt="reMarkable logo"
                  height={72}
                  width={72}
                  className="dark:invert"
                />
              }
              name="rmapi-js"
              description="JavaScript implementation of the reMarkable cloud API."
              buttons={[
                {
                  text: "NPM",
                  href: "https://www.npmjs.com/package/rmapi-js",
                  icon: <FaNpm />,
                },
                {
                  text: "Github",
                  href: "https://github.com/erikbrinkman/rmapi-js",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-cyan-50 dark:from-zinc-800 dark:to-cyan-950/30"
              logo={
                <TbBraces
                  size={72}
                  className="text-cyan-600 dark:text-cyan-400"
                  aria-hidden="true"
                />
              }
              name="asciimath-parser"
              description="Fast, extensible, memory-efficient asciimath parser for Rust."
              buttons={[
                {
                  text: "Crates",
                  href: "https://crates.io/crates/asciimath-parser",
                  icon: <FaBox />,
                },
                {
                  text: "Github",
                  href: "https://github.com/erikbrinkman/asciimath-parser",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-blue-50 dark:from-zinc-800 dark:to-blue-950/30"
              logo={<span className="text-6xl">🃏</span>}
              name="cfr"
              description="Counterfactual regret minimization solver for two-player zero-sum games with incomplete information, as a Rust library and binary."
              buttons={[
                {
                  text: "Crates",
                  href: "https://crates.io/crates/cfr",
                  icon: <FaBox />,
                },
                {
                  text: "Github",
                  href: "https://github.com/erikbrinkman/cfr",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-teal-50 dark:from-zinc-800 dark:to-teal-950/30"
              logo={
                <FiblatLogo
                  width={72}
                  height={72}
                  className="text-teal-600 dark:text-teal-400"
                  aria-hidden="true"
                />
              }
              name="fiblat"
              description="Small python package for generating uniformly spaced points on a sphere."
              buttons={[
                {
                  text: "PyPI",
                  href: "https://pypi.org/project/fiblat/",
                  icon: <SiPypi />,
                },
                {
                  text: "Github",
                  href: "https://github.com/hafacc/fibonacci_lattice",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-indigo-50 dark:from-zinc-800 dark:to-indigo-950/30"
              logo={
                <HilbertLogo
                  width={72}
                  height={72}
                  className="text-indigo-600 dark:text-indigo-400"
                  aria-hidden="true"
                />
              }
              name="hilbert-bytes"
              description="Python library for converting between d-dimensional points and their index on a Hilbert curve."
              buttons={[
                {
                  text: "PyPI",
                  href: "https://pypi.org/project/hilbert-bytes/",
                  icon: <SiPypi />,
                },
                {
                  text: "Github",
                  href: "https://github.com/hafacc/hilbert-bytes",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-sky-50 dark:from-zinc-800 dark:to-sky-950/30"
              logo={<span className="text-6xl">🍩</span>}
              name="homeotopy"
              description="Python library for computing homeomorphisms between common continuous spaces."
              buttons={[
                {
                  text: "PyPI",
                  href: "https://pypi.org/project/homeotopy/",
                  icon: <SiPypi />,
                },
                {
                  text: "Github",
                  href: "https://github.com/hafacc/homeotopy",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-violet-50 dark:from-zinc-800 dark:to-violet-950/30"
              logo={
                <SiPolars
                  size={72}
                  className="text-[#0075ff]"
                  aria-hidden="true"
                />
              }
              name="polars-avro"
              description="Polars IO plugin for reading and writing Apache Avro files, built on arrow-avro."
              buttons={[
                {
                  text: "PyPI",
                  href: "https://pypi.org/project/polars-avro/",
                  icon: <SiPypi />,
                },
                {
                  text: "Github",
                  href: "https://github.com/hafacc/polars-avro",
                  icon: <FaGithub />,
                },
              ]}
            />
            <Project
              tint="from-white to-cyan-50 dark:from-zinc-800 dark:to-cyan-950/30"
              logo={<span className="text-6xl">🧣</span>}
              name="scarfs"
              description="Find an approximate fixed point of a bounded vector-valued function."
              buttons={[
                {
                  text: "PyPI",
                  href: "https://pypi.org/project/scarfs/",
                  icon: <SiPypi />,
                },
                {
                  text: "Github",
                  href: "https://github.com/erikbrinkman/scarfs",
                  icon: <FaGithub />,
                },
              ]}
            />
          </ul>
        </section>
        <footer className="my-8 space-y-2 w-full text-zinc-600 dark:text-zinc-400">
          <div className="text-md flex justify-center">
            <FooterIcon
              href={ORG_GITHUB}
              label="Github"
              icon={<FaGithub aria-hidden="true" />}
            />
          </div>
          <div className="text-center text-sm">
            Hero photo by{" "}
            <ExternalAnchor
              className="hover:text-teal-400"
              href="https://unsplash.com/@whoisrobinhood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Irina Shishkina
            </ExternalAnchor>{" "}
            on{" "}
            <ExternalAnchor
              className="hover:text-teal-400"
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </ExternalAnchor>
          </div>
        </footer>
      </main>
    </div>
  );
}
