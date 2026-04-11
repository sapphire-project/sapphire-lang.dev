# sapphire-website

The marketing and landing page for the [Sapphire programming language](https://github.com/sapphire-project/sapphire).

Built with [Astro](https://astro.build) and Tailwind CSS. Deployed on Cloudflare Pages.

## Development

```sh
npm install
npm run dev       # http://localhost:4321
```

## Build & deploy

```sh
npm run build     # outputs to dist/
```

Deploys automatically via Cloudflare Pages on push to `main`.
Build command: `npm run build` — output directory: `dist`.

## Structure

```
src/
  components/
    Hero.astro          # Hero section with code example
    FeatureGrid.astro   # Language feature cards
    InstallBlock.astro  # Get started / install steps
    CodeTabs.astro      # Tabbed code examples
    Nav.astro
    Footer.astro
  layouts/
    Base.astro
  pages/
    index.astro
  shiki/
    sapphire.tmLanguage.json  # Syntax highlighting grammar for Sapphire
```
