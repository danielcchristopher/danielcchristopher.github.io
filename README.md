# Daniel Christopher Portfolio

A statically exported Next.js portfolio configured for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Run the full validation before pushing:

```bash
npm run check
```

## GitHub Pages deployment

1. Push the project to the repository's `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.

The included workflow deploys automatically. It uses `/` for a user-site
repository such as `danielcchristopher.github.io`, and automatically adds the
repository name as the base path for a project site.

## Current presentation

The main portfolio layouts and shared interaction states live in `app/portfolio.css`.
The personal cover and selected project compositions use `app/folio-cover.css`,
with the selectable project preview in `components/portfolio-cover.tsx`.
Marketing narratives use `app/bcu.css`. Original analytical charts retain their
existing component styles. The former entry page stylesheet has been replaced.

Project browsing is driven by `lib/portfolio-projects.ts`. Actual output,
reported results and factual outlines are distinguished in
`components/project-visual.tsx`. Do not replace unavailable original evidence
with an invented screenshot. The route planner assessment records remain private.

The review and verification record is in
`docs/portfolio-audit-2026-11-07.md`.
The subsequent visual direction and verification are recorded in
`docs/portfolio-art-direction-2026-11-07.md`.
