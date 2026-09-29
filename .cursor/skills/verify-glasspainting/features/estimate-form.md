# Estimate form

The estimate form lets a homeowner send name, phone, email, and project type so Glass Painting can schedule a free visit. Verification fills the real fields and must not email the business.

## Sub-features

- `form-present` shows required fields and the submit label `Request Free Estimate`.
- `form-required` blocks an empty submit via native validity; `#form-success` stays hidden.
- `form-fill` accepts name, phone, email, project type, optional city and details.
- `form-send-stubbed` shows Thank You only when Web3Forms is intercepted.
- `form-error-stubbed` shows `#form-error` when the stubbed request fails.

## How to get to it (user POV)

- Land on `/` — the form is in the hero, id `estimate`.
- Choose `Free Estimate` or `Request a Free Estimate`.
- From an area page, choose `Free Estimate` (`/#estimate`) or `Request a Free Estimate`.
- From a service card, choose `Get an interior quote` or `Get an exterior quote` (`#estimate`).

## Driving it with control-glasspainting

Preconditions:

- Local server is healthy.
- You will not POST to `https://api.web3forms.com/submit` without an interceptor.

- **See the form.** Run `control-glasspainting assert-contains / "id=\"quote-form\""` and `control-glasspainting assert-contains / "Request Free Estimate"`. Confirm fields `#f-name`, `#f-phone`, `#f-email`, `#f-project` (required) and `#f-city`, `#f-details` (optional). `#form-success` and `#form-error` exist and are `hidden`.
- **Fill without sending.** In a browser on `http://127.0.0.1:4173/#estimate`, type a throwaway name, phone, email, and choose `Interior painting`. Screenshot the filled form to `artifacts/estimate-form/filled.png`. Do not click submit unless the next step's interceptor is in place.
- **Native required.** Click submit with required fields empty. The browser keeps the user on the form. `#form-success` remains `hidden`. Screenshot to `artifacts/estimate-form/required.png`.
- **Stubbed success (optional).** Intercept `POST https://api.web3forms.com/submit` to `{ "success": true }`, then click `Request Free Estimate`. `#quote-form` becomes `hidden` and `#form-success` is visible with heading `Thank You!`. Save the intercept log next to `artifacts/estimate-form/success.png`.
- **Stubbed failure (optional).** Intercept with a non-OK body. `#form-error` (`role="alert"`) is visible and still offers `tel:+17704037608`.
- **Proof.** `artifacts/estimate-form/proof.txt` must say whether send was skipped or stubbed. A Thank You screenshot without a stub log is invalid.

## Gotchas

- `main.js` `preventDefault`s submit and fetches JSON. A plain HTML POST is not the real path.
- Hidden `botcheck` must stay unchecked. If it is ticked, the script returns without sending and shows no error.
- If `access_key` is missing or starts with `YOUR_`, the script shows `#form-error` and never fetches. That is a config failure, not visitor success.
- Do not use curl to POST a test lead to Web3Forms. That emails `glasspaintingga@gmail.com`.
- Success UI is a sibling of the form (`#form-success`), not a new page.
