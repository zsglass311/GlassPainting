---
name: verify-glasspainting
description: Drive the Glass Painting static website (glasspainting.homes) as a visitor would — homepage, estimate form, service-area pages, FAQ. Use when proving a site change works, before declaring a copy or layout edit done, or when asked to verify the live/local site.
---

# Verify Glass Painting

Static marketing site for Glass Painting (residential house painters in Braselton, GA). Primary surface is the **web UI**. There is no CLI, API, or app server of our own. Quote submissions POST to Web3Forms (`https://api.web3forms.com/submit`).

Repo root is the site root (`index.html`, `areas/`, `assets/`). Area pages load CSS/JS from `/assets/...`, so the site must be served from the repo root — opening files with `file://` breaks those paths.

Evidence lives in `.cursor/skills/verify-glasspainting/artifacts/` and **survives cleanup**. Runtime state (pid, port) lives in `.cursor/skills/verify-glasspainting/.run/` and is removed on stop.

## Launch

Default URL: `http://127.0.0.1:4173/`

```bash
.cursor/skills/verify-glasspainting/scripts/control-glasspainting launch
```

Ready when `curl -fsS http://127.0.0.1:4173/` returns HTML whose `<title>` contains `Glass Painting` and `http://127.0.0.1:4173/.run/pid` is **not** how you check — the helper writes `.cursor/skills/verify-glasspainting/.run/pid` instead.

Env overrides: `GLASSPAINTING_VERIFY_PORT` (default `4173`), `GLASSPAINTING_VERIFY_HOST` (default `127.0.0.1`).

Teardown:

```bash
.cursor/skills/verify-glasspainting/scripts/control-glasspainting stop
```

Kills only the pid the helper started. Does not delete artifacts.

Two instances can run side by side if they use different ports. Do not drive a copy of the site you did not start (production `https://glasspainting.homes/` is shared; never submit the live form from a verification run).

## Doctor

Read-only. Run first whenever anything looks off.

```bash
.cursor/skills/verify-glasspainting/scripts/control-glasspainting doctor
```

Pass means:

- The pid file exists, the process is alive, and it is a Python `http.server` we started.
- `GET /` returns 200 and the body includes the homepage heading `Residential House Painting in Braselton, Georgia`.
- `GET /assets/css/styles.css` and `GET /assets/js/main.js` return 200.
- `GET /areas/` and `GET /areas/braselton-ga/` return 200.

Fail means: stop, relaunch, or refuse to drive. Never attach to a random process on the port.

## Drive

Harness is `control-glasspainting` plus Chrome headless for screenshots, and `curl` for HTML assertions. Prefer ids, `aria-label`, visible link text, and route paths over coordinates.

| Handle | What it is |
|---|---|
| `#hero-title` | Homepage H1 |
| `#estimate`, `#quote-form` | Estimate form |
| `#f-name`, `#f-phone`, `#f-email`, `#f-project`, `#f-city`, `#f-details` | Form fields |
| `#form-error`, `#form-success` | Form result regions (`hidden` until used) |
| `#site-nav` | Main nav (`aria-label="Main"`) |
| `button.menu-btn` | Mobile menu (`aria-label="Open menu"` / `aria-expanded`) |
| `#services`, `#about`, `#why-us`, `#process`, `#area`, `#faq` | Homepage sections |
| `/areas/` | Service-area index |
| `/areas/<town>-ga/` | Town page, e.g. `/areas/braselton-ga/` |
| `tel:+17704037608` | Call links |
| `mailto:glasspaintingga@gmail.com` | Email links |

Common commands:

```bash
H=.cursor/skills/verify-glasspainting/scripts/control-glasspainting
$H get /                              # HTML to stdout
$H screenshot / artifacts/homepage/hero.png
$H screenshot /areas/braselton-ga/ artifacts/areas/braselton.png
$H assert-contains / "Residential House Painting in Braselton, Georgia"
$H assert-contains /areas/braselton-ga/ "House Painters in Braselton, Georgia"
```

**Quote form — never send a real lead.** `main.js` POSTs JSON to `form.action` (`https://api.web3forms.com/submit`). A verification run must not let that request leave the machine.

Allowed proofs:

- Fill `#f-name`, `#f-phone`, `#f-email`, `#f-project` and screenshot the filled form **without** clicking submit.
- Submit empty required fields and observe the browser's native validity (fields stay required; `#form-success` stays `hidden`).
- If you have a request interceptor (Playwright `page.route`, Chrome DevTools intercept), stub `https://api.web3forms.com/submit` to `{ "success": true }` and only then click `Request Free Estimate`. Proof is `#quote-form[hidden]` and `#form-success` visible, plus a log that the stub ran and **no** real `api.web3forms.com` response was used.
- To prove the failure UI, stub a non-OK response and require `#form-error` visible (`role="alert"`).

If you cannot intercept, **do not submit**. Record that the send path was skipped, not verified.

## Evidence

Put files under `.cursor/skills/verify-glasspainting/artifacts/<feature>/`. Keep them after `stop`.

Proof standards:

- Exercise the real visitor path (load the served page, click the real nav, fill the real form). Do not rewrite HTML or call Web3Forms from curl as a stand-in for the UI.
- Capture the action and the resulting state (screenshot before/after, plus the HTML snippet or heading that changed).
- For the form, also prove the side effect you actually caused: a stubbed POST body, or the explicit skip. A success screenshot without an intercept log is not proof of send.
- Record the feature file name and URL with every artifact (a one-line `proof.txt` next to the screenshots).

## Cleanup

```bash
.cursor/skills/verify-glasspainting/scripts/control-glasspainting stop
```

Removes `.run/` and the server process this run started. Leaves `artifacts/` in place. Never `pkill python` / `pkill http.server`.

## Helpers

`scripts/control-glasspainting` is executable. Invoke it from the **repo root**.

```text
control-glasspainting launch
control-glasspainting doctor
control-glasspainting get <url-path>
control-glasspainting assert-contains <url-path> <literal>
control-glasspainting screenshot <url-path> <artifact-relpath>
control-glasspainting stop
```

`url-path` starts with `/`. `artifact-relpath` is relative to `artifacts/`.
