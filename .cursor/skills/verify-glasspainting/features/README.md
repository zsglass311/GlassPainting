# Glass Painting verification map

This directory is the maintained source for verifying visitor-facing behavior of the Glass Painting website. Read this index before driving the site, then use the matching feature file as the recipe.

## Baseline preconditions

- Serve the repo root with `control-glasspainting launch` at `http://127.0.0.1:4173/` (or the `GLASSPAINTING_VERIFY_PORT` you launched).
- Run `control-glasspainting doctor` and require the homepage H1, `/assets/css/styles.css`, `/assets/js/main.js`, `/areas/`, and `/areas/braselton-ga/`.
- Never drive `https://glasspainting.homes/` as the verification instance. Production is shared and the estimate form emails the business.
- Never POST to `https://api.web3forms.com/submit` from a verification run unless a request interceptor swallowed the call.

## Driving conventions

- Start every recipe from the launched local URL unless its preconditions say otherwise.
- Prefer ids (`#quote-form`, `#hero-title`), `aria-label`, and visible link text over CSS position or click coordinates.
- Treat helper commands as literal. Keep quoted strings unchanged.
- Area pages depend on absolute `/assets/` URLs; `file://` open is not a valid drive.
- Restore nothing: the site is static. Do not delete proof artifacts during cleanup.

## Proof and skip reporting

- Capture the visitor action and the resulting state, not only the final screen.
- Page proof includes a screenshot with the Glass Painting name visible and an HTML assertion (`assert-contains`).
- Form send proof includes the intercept log. A Thank You screenshot without that log is not verification of send.
- Record the feature file and URL in `artifacts/<feature>/proof.txt`.
- Report an unreachable path with the command you ran and what was missing.
- Do not report a skipped entry point as verified through a different path.

## Feature entry contract

Each feature file starts with an H1 title and one paragraph describing the visitor-visible behavior. It then uses exactly four H2 sections in this order.

1. `Sub-features`
2. `How to get to it (user POV)`
3. `Driving it with control-glasspainting`
4. `Gotchas`

## Features

- [Homepage](./homepage.md) covers identity, contact, and in-page section jumps.
- [Estimate form](./estimate-form.md) covers filling the quote form without sending a real Web3Forms lead.
- [Service areas](./service-areas.md) covers the area index and a town page.
- [FAQ](./faq.md) covers opening a question on the homepage FAQ.
