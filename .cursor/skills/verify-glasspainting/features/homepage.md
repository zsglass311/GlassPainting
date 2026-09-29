# Homepage

The homepage tells a visitor they have reached Glass Painting, a family-owned residential house painter in Braselton, Georgia, and gives them a phone number, email, and a path to a free estimate.

## Sub-features

- `home-identity` shows the business name and the Braselton residential-painting heading.
- `home-contact` exposes call and email links with the published numbers.
- `home-nav` jumps to Services, About, Process, FAQ, and Service Area.
- `home-cta` reaches the estimate form from the Free Estimate control.

## How to get to it (user POV)

- Open the site root `/`.
- Choose the Glass Painting logo (homepage `aria-label` is `Glass Painting, back to top`).
- From an area page, choose the logo (`aria-label` is `Glass Painting homepage`) or crumbs `Home`.

## Driving it with control-glasspainting

Preconditions:

- Local server is healthy at `http://127.0.0.1:4173/`.
- `control-glasspainting doctor` passed.

- **Load home.** Open `/`. Run `control-glasspainting assert-contains / "Residential House Painting in Braselton, Georgia"` and `control-glasspainting screenshot / homepage/hero.png`. The H1 and the name Glass Painting are visible.
- **Contact.** Confirm `tel:+17704037608` and `mailto:glasspaintingga@gmail.com` on the page. Run `control-glasspainting assert-contains / "tel:+17704037608"` and `control-glasspainting assert-contains / "mailto:glasspaintingga@gmail.com"`.
- **Jump to services.** Follow `#services`. Run `control-glasspainting assert-contains / "Interior &amp; Exterior House Painting"` (the services H2). A screenshot is optional; the section id is `#services`.
- **Reach estimate.** Follow `#estimate` or the header link whose text is `Free Estimate`. Run `control-glasspainting assert-contains / "Get a Free Estimate"` and `control-glasspainting screenshot / homepage/estimate.png`. `#quote-form` is in the document.
- **Proof.** Write `artifacts/homepage/proof.txt` naming this feature and `http://127.0.0.1:4173/`. The screenshots show Glass Painting and the estimate heading.

## Gotchas

- Homepage logo href is `#top`, not `/`. Area-page logos use `/`.
- Main nav on the homepage says `Service Area` and points at `/areas/`. Area pages say `Service Areas`.
- `python3 -m http.server` does not rewrite extensionless URLs; `/areas` without the trailing slash may 301/404 depending on the server. Use `/areas/`.
- Production DNS is `glasspainting.homes`. Do not treat a live fetch as this verification instance.
