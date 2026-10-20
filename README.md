# thomaspwalter.com

Static site for DJ Thomas P. Walter. Built with Astro, deployed to SiteGround by GitHub Actions on every push to `main`.

## Where things are

- `src/content/pages/*.html` — the words on each page. Edit these to change copy. One file per page, plain HTML.
- `src/pages/*.astro` — one small file per page that wires the copy into the layout. You should not need to touch these.
- `src/layouts/Layout.astro` — the page shell (head tags, nav, footer).
- `src/components/` — nav, footer, and the "Let's see if I'm free" closing band.
- `public/css/site.css` — all the styling.
- `public/img/` — photos and the logo.

## Editing copy on GitHub

Open the file under `src/content/pages/`, click the pencil, change the text, click Commit changes. About two minutes later the change is live on the staging site.

## Deploy settings (GitHub → Settings)

Secrets: `SFTP_HOST`, `SFTP_USER`, `SFTP_KEY` (private key), optional `SFTP_PORT`.
Variables: `REMOTE_PATH` (the folder SiteGround gave the subdomain, e.g. `thomaspwalter.com/new/public_html`), `PUBLIC_STAGING` (`1` shows the staging banner; leave empty for the live site).

To go live, change `REMOTE_PATH` to the main site folder and clear `PUBLIC_STAGING`.

## Running it locally

```
npm install
npm run dev
```
