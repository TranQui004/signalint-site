# Signalint website

Static Astro website for [Signalint](https://github.com/TranQui004/signalint),
published independently from the MCP server repository at
[tranqui004.github.io/signalint-site](https://tranqui004.github.io/signalint-site/).

The site uses Signalint's real schemas, fixture measurements, architecture, and
security documentation. GSAP supplies restrained reveal and payload-transition
motion with a reduced-motion fallback.

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
