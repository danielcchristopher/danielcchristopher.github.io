# Portfolio evidence and usability review

7 November 2026. Expert assessment by the implementation agent, not a study with real participants.

## Scope and starting point

Starting commit: 176fe81. The checkout was clean. The live site was inspected before editing at desktop width and at a 390px mobile width. The home page, project collection, analytical case template, marketing collection, independent prototype pages, profile and contact page were reviewed. Source tracing covered the static routes, project data, navigation, search, filters, disclosures, theme preference, original figures, 3D components and standalone demonstration.

## Findings recorded before implementation

| Priority | Location | Visitor problem | Consequence | Correction |
| --- | --- | --- | --- | --- |
| High | Home and Projects openings | Large slogans and stacked introductory sections delay the first project. At 390px, Projects shows no usable project preview in the first screen. | Visitors must scroll before finding out what was made. | Use a compact introduction and bring selected artifacts forward. |
| High | Navigation | Work and Marketing overlap, while every desktop destination requires opening a menu. | The site structure is unclear and discovery takes extra actions. | Use Projects, About and Contact with visible desktop navigation and project categories. |
| High | Project previews | Mailchimp and Peaky Blinders share the same generic blocks and phone. Reporting projects share the same generic documents. | Attractive shapes are mistaken for evidence and do not explain the work. | Prefer available original figures and actual application captures. Use project specific factual outlines only where original assets cannot be published. |
| High | Analytical case openings | Plain English and Key finding repeat the same explanation before figures appear. | The first screen is prose despite the evidence being available. | Put a concise question and result beside the relevant visual, then make methods optional. |
| High | Evidence provenance | The original marketing assets were not found in the repository or targeted local asset search. The route planner contains private assessment data. | Publishing decorative replacements or private records would misrepresent the work. | State those boundaries and show an accurate outline of the actual deliverables or comparison design. |
| Medium | Profile | The first mobile screen is dominated by a large portrait and a broad slogan. Long biography sections repeat background and training. | Practical information is delayed. | Bring the short introduction and key facts together; retain deeper background on demand. |
| Medium | Contact | Repeated contact actions and an oversized heading precede the visible email address. | The simplest action is surrounded by unnecessary choices. | Put the address and primary contact actions early. |
| Medium | Shared visual system | Multiple generations of CSS control heading sizes, layout widths, tilt and pointer lighting. | Some pages remain unbalanced even when new sections are well aligned. | Consolidate the current entry and case layouts into an intentional scoped system; remove unnecessary pointer effects. |
| Medium | Project filtering | Category and search state are held mainly in component memory. | Returning from a project can lose the browsing context. | Keep shareable browsing state in the URL and restore it through browser navigation. |
| Medium | Three.js | Existing model components already provide controls and fallbacks. Hero models are decorative while the artifacts are below the fold. | More 3D would add work without answering a project question. | Retain explanatory models on demand and remove competing decorative hero motion. |
| Low | Identity and metadata | Personal portfolio remains in the home label, title and social preview. | It does not follow the requested naming. | Use Portfolio consistently. |

## Reference principles

[Adham Dannaway](https://www.adhamdannaway.com/) places concrete disciplines beside a recognisable identity and gives project previews explicit destinations. The useful principles here are readable navigation and immediate identification of the work. Its identity and artwork are not copied.

[Rauno Freiberg](https://rauno.me/) names specific projects and uses deliberately consistent interaction. The useful principles are concise project naming and careful state changes. Its horizontal navigation and oversized introduction are not suitable for this collection and are not copied.

Both original sites were inspected in the browser. Simon Pan's site returned an access error and was not used as a design reference.

## Implementation direction

Use a compact editorial layout, visible project evidence and a consistent blue accent within the existing light and dark palette. Organise navigation around Projects, About and Contact. Pair short explanations with actual outputs and maintain readable line lengths. Replace interchangeable concept art with original figures, application previews or explicitly labelled project outlines. Preserve ownership, scope and numerical findings. Keep detailed methods and existing 3D models available without making them the default reading path.

## Implemented changes

The opening now pairs Daniel's name and scope with an actual Route & Margin route board capture. Projects use one collection with Digital builds, Marketing, and Research & analysis filters. Desktop navigation exposes Projects, About and Contact; mobile navigation describes the destination of each choice. Category and search selections survive project visits and browser Back through URL state.

Project previews use actual application captures, original dissertation and coursework figures, or charts of reported results. Missing original marketing assets are explicitly identified beside factual outlines. The private mobile planning assessment stays private. A small interactive example explains recorded order, resequencing and reassignment using four illustrative visits, without claiming measured savings.

Analytical case openings put the question, result and visual together. Methods, detailed evidence, contribution and further development are available through labelled disclosures. Ownership and material limits remain visible. About, Contact, the website build, AI workflow and service analysis have shorter, more concrete introductions. Search no longer contains the outdated model version description.

The visual system uses consistent card proportions, captions, focus rings, selected states and expanded states. Shared entry layouts are scoped in portfolio.css; the superseded personal portfolio stylesheet was removed. Existing specialist visualization styles remain. Decorative hero motion and pointer tilt were removed. Explanatory 3D models remain available on demand with a user selectable static diagram. The database model now follows the six table names and Location connections in the original ERD.

## Automated verification

* ESLint, TypeScript and the production static build pass. Next generates 30 static pages.
* A static export inspection checked 30 HTML files, 1,081 local link destinations and 286 image or script references, with no missing local destinations, missing anchors, duplicate IDs or unexpected H1 counts. Standalone demos are excluded from these portfolio markup checks.
* The current portfolio and marketing stylesheets parse successfully and contain no repeated selectors in the same at rule context.
* The unchanged Route & Margin verification passes 1,080 per trip reconciliation checks across all plans, both cost allocations, three scenarios and five price pairs. Eligibility, service shortfall, ties, crossover prices and account totals also pass.
* The three Olist aggregate generation tests pass, including rejection of unreconciled data. The original dashboard reconstruction and analytical calculation sources were preserved.
* The three restaurant analysis tests pass in an isolated environment with the declared dependencies. Recalculation confirms 68 lunch bills and 176 dinner bills, with mean bill per cover rounding to 7.32 and 8.11 respectively, as displayed.
* The public RouteAndMargin.html demonstration is unchanged from the starting commit. No private mobile assessment HTML was added to the public repository.

## Browser verification before publication

These are checks in the permitted in app browser, separate from the automated results above.

* Reviewed the new home, Projects, marketing, analytical case, mobile planning example, About and Contact at desktop size and 390px mobile width. Reviewed home and Contact at 320px. Light and dark presentations were inspected on representative pages, rather than every combination of route, size and theme.
* Tested project filters with 15 total projects, three digital builds, four marketing projects and eight research or analysis projects. Search, no result recovery, project navigation and restoration of category and query through browser Back worked after hydration.
* Tested the mobile menu, search modal, Escape dismissal and return of keyboard focus. Disclosures operated through Enter; revisiting the same evidence link reopened a closed section.
* Inspected and corrected mobile name wrapping, preview image sizing, the contact action gap, and the mobile search field's accessible name. Measured document and preview widths at 390px and 320px with no horizontal document overflow in the reviewed layouts.
* Tested all three planning example states. The same four illustrative visits remain present while sequence or technician assignment changes.
* Tested live WebGL rotation, reset and pause. Switched to the six labelled static database tables, confirmed rotation controls became inactive, returned to 3D, then switched to the neural model and its labelled static view.
* Corrected the case contents indicator so a long expanded evidence section continues to highlight Evidence while its model is being inspected.
* The email copy action reported success. CV links point to the existing PDF, which is unchanged in this redesign; a fresh completed PDF download was not part of this pass.

## Limits and outstanding evidence

This is an expert review and implementation check, not a real participant study or a timed ten second comprehension test. Desktop and mobile emulation do not establish physical device coverage. Deliberate pointer hover and the operating system reduced motion preference were reviewed in source rather than independently exercised in this final pass. A static view was exercised; an actual hardware WebGL failure was not forced.

The browser later lost its connection to the local preview and returned a blocked internal error document. No alternate browser or rendering method was used to bypass that restriction. The successful preview inspections above occurred before that interruption. Final automated checks continued separately; source inspection is not described as visual verification.

Original public marketing assets remain the main evidence gap. Their absence is labelled in the interface. Replacing these outlines with permission cleared original deliverables would provide stronger evidence than additional decoration.
