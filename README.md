# Signalint website

Static Astro website for [Signalint](https://github.com/TranQui004/signalint),
published independently from the MCP server repository at
[tranqui004.github.io/signalint-site](https://tranqui004.github.io/signalint-site/).

The site uses Signalint's real schemas, fixture measurements, architecture, and
security documentation. GSAP supplies restrained reveal and payload-transition
motion with a reduced-motion fallback.

GSAP is used under its [Standard "No Charge" License](https://gsap.com/community/standard-license/): this documentation site is a permitted website use and is not a competing visual animation builder.

## Development

```sh
npm install
npm run dev
npm run build
```

The production build is deployed to GitHub Pages from `main`. Source content for
product behavior lives in the separate
[Signalint repository](https://github.com/TranQui004/signalint); do not duplicate
application source into this repository.

## Content structure

- `src/content/blog/en/` and `src/content/blog/vi/` hold one typed module per
  localized blog post.
- `src/content/docs/vi/` holds one module per Vietnamese documentation page;
  `src/pages/vi/docs/[slug].astro` turns those modules into static routes.
- `src/content/site/vi/` contains Vietnamese Home, changelog, and open-source
  copy so translation updates do not require editing layout components.
- `src/components/blog/`, `src/components/docs/`, and `src/components/i18n/`
  contain the corresponding reusable presentation components.

Blog comments use one GitHub Discussion per localized article. The comment card
opens that thread, where visitors authenticate with GitHub; the static site
stores no accounts or comment data. Discussions must remain enabled for
`TranQui004/signalint-site`.
