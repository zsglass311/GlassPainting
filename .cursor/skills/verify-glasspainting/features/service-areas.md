# Service areas

Service-area pages list the towns Glass Painting paints and give each town a page a local homeowner can land on from search.

## Sub-features

- `areas-index` lists the towns on `/areas/`.
- `areas-town` opens a town page such as `/areas/braselton-ga/`.
- `areas-home` returns to the homepage from crumbs or the logo.
- `areas-estimate` reaches `/#estimate` from a town page.

## How to get to it (user POV)

- Choose `Service Area` in the homepage nav (`/areas/`).
- Choose `Service Areas` in the nav on an area page.
- Choose a town chip on the homepage `#area` list (paths like `/areas/hoschton-ga/`).
- Open a town URL directly.

## Driving it with control-glasspainting

Preconditions:

- Local server is healthy.
- Doctor already fetched `/areas/` and `/areas/braselton-ga/`.

- **Index.** Open `/areas/`. Run `control-glasspainting assert-contains /areas/ "Areas We Serve Near Braselton"` and `control-glasspainting screenshot /areas/ service-areas/index.png`. Town links include `/areas/braselton-ga/` and `/areas/hoschton-ga/`.
- **Town page.** Open `/areas/braselton-ga/`. Run `control-glasspainting assert-contains /areas/braselton-ga/ "House Painters in Braselton, Georgia"` and `control-glasspainting screenshot /areas/braselton-ga/ service-areas/braselton.png`. The page states residential house painting, not craft glass art.
- **Back to home.** The logo `aria-label` is `Glass Painting homepage` and href is `/`. Crumbs include `Home`.
- **Estimate from town.** Follow `/#estimate`. You should land on the homepage form (same origin, hash). Confirm with `assert-contains / "Get a Free Estimate"` after navigating in a browser; `get /#estimate` via curl ignores the hash and still returns the homepage, which is enough for the HTML proof.
- **Proof.** `artifacts/service-areas/proof.txt` names `/areas/` and `/areas/braselton-ga/`.

## Gotchas

- Town directories need a trailing slash (`/areas/braselton-ga/`) because each town is `index.html` in a folder.
- Area pages load `/assets/css/styles.css` from the site root. Serving a subdirectory as the web root breaks CSS.
- Homepage nav label is `Service Area`; area-page nav label is `Service Areas`.
- Custom `404.html` is a GitHub Pages behavior. Local `http.server` does not serve it for unknown paths — fetch `/404.html` directly if you need to read that file.
