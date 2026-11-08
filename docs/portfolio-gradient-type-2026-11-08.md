# Portfolio gradients and typography

8 November 2026. Starting commit 9e96167.

Replaced the plain black canvas with a shared navy, blue and petrol green gradient. The light theme uses pale blue, warm paper and sage. Featured projects, contact, dashboard selections, primary actions, the monogram and footer share related gradient tokens. Theme surfaces and secondary text colours were adjusted together.

Replaced Space Grotesk with self hosted variable Manrope, retaining Newsreader italic for display accents. Reduced the main title weight and eased tracking. Project questions now use medium weight sans serif, reserving the serif treatment for titles. Removed the old opacity fade from the theme and search controls because it weakened their contrast on hover. The pointer light remains active on eligible devices. The canvas is static, and increased contrast preferences suppress its background image.

Manrope was obtained from the official Google Fonts repository, converted from the original variable TTF to WOFF2, and bundled with its OFL licence. No runtime font service was added. Source: https://github.com/google/fonts/tree/main/ofl/manrope

## Verification

Real in app browser measurements covered 19 portfolio page families at 390px in light mode and 1440px in dark mode. All used the new font and gradient, with no document or H1 overflow. Six key routes also passed width and header control checks at 320px. Screenshot review covered the home page, mobile navigation, Contact, Route & Margin introduction, marketing, collection, About, credit analysis, Olist figures and chart, keyboard skip link, and footer. This is separate from the wider DOM checks, not a screenshot review of every page in every theme.

The theme control cycled through dark, auto and light. Navigation from the mobile menu reached Contact. The pointer light had opacity 1, pointer events none and updated to the inspected position 850,280. Existing reduced motion source rules remain intact; physical touch hardware and an operating system reduced motion switch were not exercised.

Numerical sampling of the gradient stops and overlay colours gave minimum secondary text contrast of 5.81 in dark mode and 5.64 in light mode, with feature captions at 5.40 and white primary action text at 7.03. These are checks of the changed palette, not a full accessibility certification.

ESLint, TypeScript and the production build passed. The export inspection covered 30 HTML pages, 1,063 internal links and 311 image or script references, with no missing destinations, broken anchors, duplicate IDs or unexpected H1 counts. Shared presentation styles parsed without duplicate selectors in the same at rule context. The existing Route & Margin verifier passed 1,080 per trip reconciliation checks plus eligibility, tie, crossover and account total checks. Application calculations and datasets were not edited.
