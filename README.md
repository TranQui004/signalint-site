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
