# FAQ

The homepage FAQ lets a visitor open common questions in place, including free estimates, license, service area, and that the company paints houses not commercial buildings.

## Sub-features

- `faq-reach` jumps to `#faq` from the main nav.
- `faq-open` expands a `details.faq-item` from its `summary`.
- `faq-phone` still offers `(770) 403-7608` beside the list.

## How to get to it (user POV)

- Choose `FAQ` in the main nav (`#faq` on the homepage, `/#faq` from area pages).
- Scroll to Common Questions.

## Driving it with control-glasspainting

Preconditions:

- Local server is healthy.

- **Reach FAQ.** Run `control-glasspainting assert-contains / "id=\"faq\""` and `control-glasspainting assert-contains / "Do you offer free estimates?"`.
- **Open a question.** In a browser, click the summary `Do you paint commercial buildings or apartments?`. The `details` element becomes open and the answer contains `single-family homes`. Screenshot `artifacts/faq/commercial.png`.
- **Phone.** Run `control-glasspainting assert-contains / "Do you offer free estimates?"` is not enough for the phone; also `assert-contains / "tel:+17704037608"` in the FAQ section's button.
- **Proof.** `artifacts/faq/proof.txt` plus the open-question screenshot. Curl cannot toggle `details`; if you only asserted HTML, say so — the open state is unverified.

## Gotchas

- FAQ items are native `details`/`summary`, not a JS accordion. Screenshot the open state; `open` is not in the static HTML.
- Curl of `/#faq` returns the full homepage. Use a browser (or a screenshot of `#faq`) for the jump.
