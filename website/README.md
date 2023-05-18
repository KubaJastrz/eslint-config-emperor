# Website

Live: https://kubajastrz.github.io/eslint-config-emperor/

Website uses [Astro](https://docs.astro.build/) as a static site generator.

```bash
pnpm install
pnpm dev
```

Styles are mostly a cut down version of the [docs Astro template](https://astro.new/docs?on=github), with [Tailwind CSS](https://tailwindcss.com/) sprinkled in some places.

[Preact](https://preactjs.com/) is used for the interactive parts of the website, like the Table of Contents.

## Generating the website

Data sources are defined in `src/content` directory.

Preset configs are read from a snapshot file, which is generated during the release. Some shenanigans are required to make it work with ESM, consult `astro.config.mjs` and `optimizeDeps` for details.

Plugin rules are read directly from their source code.

Markdown pages are defined as [Astro collections](https://docs.astro.build/en/guides/content-collections/) in `src/content/config.ts`.
