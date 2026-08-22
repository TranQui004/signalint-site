## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Release and deployment

This site deploys automatically when a PR is merged to `main`. The deploy job runs
via GitHub Pages on every push to main (and as a preview-only build on PRs).

**Tag and branch push ordering (applies to the signalint main repo, documented
here for cross-repo awareness).** Never push a version tag in the same operation
as, or before confirming success of, the corresponding branch push to main. If
a branch push is rejected by branch protection, do not push the tag either — wait
until the commit is on main through a merged PR.

**Tag that has touched the release pipeline.** If a tag has triggered any part of
a release workflow, do not delete, move, or force-push that tag without stopping
and asking a maintainer first. A tag force-push is in the same "do not bypass"
category as bypassing branch protection.

**Retrying a normal merge is almost always the right move.** If CI passes but a
merge is blocked for a transient reason, wait and retry `gh pr merge` rather than
reaching for any bypass mechanism (`--admin` or equivalent).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)