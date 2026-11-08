# Shared portfolio design and pointer light

8 November 2026. Starting commit 4659baf. The checkout was clean before this pass.

## What the review found

The pointer light had been removed during the earlier cleanup. Several project pages still used the older heading and rounded preview treatment. The shared footer retained a legacy display rule with a 52svh minimum height and a paragraph as large as 9vw. On the inspected Contact page, this created a large wall of text after the contact actions. Research and dashboard pages also retained older introductory layouts and inconsistent spacing.

## Implementation

Restored the pointer light in the shared site effects component. Movement updates its position through an animation frame without rerendering the page. It does not intercept clicks. Source rules disable it for coarse pointers and reduced motion, and hide it when the window or document loses activity. It runs on portfolio pages without changing the identity of standalone project applications.

A shared editorial title now gives project, marketing, research, dashboard, contact, workflow and error pages the same typographic language as the home page. Project names and numerical findings are unchanged. The home masthead and personal About introduction retain their deliberate variations.

Preview frames, primary action colour, control corners, labels and the compact footer now share their definitions. Removed retired footer, pointer and page hero selectors from five older stylesheet layers, rather than leaving competing definitions active. Supporting research sections use the same heading scale and tighter workflow layout. The dissertation now opens beside its original figure. The dashboard uses the shared accent and clearer numerical typography.

The standalone Route & Margin HTML, its calculations, the analytical datasets and the Python calculation sources are unchanged. The separate PC build guide retains its own identity. No original marketing artwork was invented or published in this pass.

## Real browser checks

Opened the current Contact footer, a project case, the dissertation and Olist before editing. After implementation, checked 19 portfolio addresses at desktop width and 390px, including all six analytical case families, both independent project pages, home, collection, About, Contact, marketing, dissertation, Olist, website build, restaurant analysis, AI workflow and the error page. DOM measurements found no horizontal document overflow and all visible header controls remained within the mobile viewport. Six selected addresses also passed document and title width checks at 320px.

Screenshot inspection covered project headers and figures, the shared footer, dissertation results, Olist metrics, marketing, mobile planning, mobile credit analysis and the narrow workflow page. This is separate from the wider route measurements and does not claim a screenshot review of every route in every theme.

The pointer light visibly appeared in the desktop browser. Its recorded coordinates changed from 315,280 near the project heading to 325,589 near the footer; it had opacity 1 and pointer events none. Keyboard search opened, returned the Mailchimp collection result, closed with Escape and restored focus. The planning example switched to Reshared. Olist changed from 98,582 orders for all data to 44,550 for 2017, then restored all six metric values exactly when All data was selected. The new dissertation result link reached its results section.

Both themes were inspected on representative pages. Physical touch hardware, an actual operating system reduced motion switch, and every hover target were not exercised. Their source and media rules were checked. These are implementation checks, not a participant study or a claim that the visual design is final.

## Automated checks

ESLint, TypeScript and the production build passed. Next generated 30 static pages. The export inspection checked 1,087 local links and 287 image or script references, with no missing destinations, duplicate IDs, missing anchors or unexpected H1 counts. Current presentation stylesheets parse without repeated selectors in the same at rule context. Route & Margin passed its existing 1,080 per trip reconciliation checks and its eligibility, ranking, tie, crossover and account total checks.
