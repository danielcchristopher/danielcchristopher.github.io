import { pageMetadata } from "@/lib/page-metadata";
import { publicPath } from "@/lib/paths";
import { SiteHeader } from "@/components/site-header";
import { PageFooter } from "@/components/page-footer";
import { NativeLink } from "@/components/native-link";
import { HeroField } from "@/components/hero-field";

const liveUrl = "/bakery/";

export const metadata = pageMetadata(
  "Cotton & Crumb | Bakery brand and website",
  "A fictional Manchester sourdough bakery: brand, website design and a working preorder system with no backend, built with React, TypeScript, Tailwind CSS and GSAP.",
  "/cotton-and-crumb/",
);

export default function CottonAndCrumbPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero site-build-hero">
          <HeroField motif="corner" />
          <div className="shell">
            <small>
              Independent brand, design and build · fictional business
            </small>
            <h1>
              A bakery site that takes orders.
              <br />
              <span>With no backend behind it.</span>
            </h1>
            <p>
              Cotton & Crumb is a fictional wood fired sourdough bakery in New
              Islington, Manchester. I created the brand, designed the site as
              a bakery counter and built a working preorder system that anyone
              can try.
            </p>
            <div className="site-build-links">
              <a
                className="arrow-link"
                href={publicPath(liveUrl)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the live site ↗
              </a>
              <NativeLink className="arrow-link" href="/work">
                Explore the work ↗
              </NativeLink>
            </div>
          </div>
        </section>
        <section className="shell" aria-label="Site preview">
          <figure className="case-visual">
            <figcaption>
              <span>Live recording · desktop width</span>
              <strong>A bakery counter on screen.</strong>
            </figcaption>
            <video
              src={publicPath("/media/cotton-and-crumb-demo.mp4")}
              poster={publicPath("/previews/cotton-and-crumb.jpg")}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Cotton and Crumb: the home page, the bake process section, adding a loaf to the basket and choosing a collection slot"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <p className="visual-caveat">
              Cotton & Crumb is fictional. Photography is from Unsplash.
            </p>
          </figure>
        </section>
        <section
          className="shell site-build-intro"
          aria-label="Project details"
        >
          <p className="overline">Type / ownership</p>
          <div>
            <h2>A fictional business, built properly.</h2>
            <p>
              There is no real bakery, no real orders and no payments. The
              project shows how I approach a small business online end to end:
              brand and tone of voice, design direction, ordering rules, motion,
              accessibility and performance.
            </p>
          </div>
        </section>
        <section
          className="shell site-build-grid"
          aria-label="Website build details"
        >
          <article>
            <span>01 / Brand</span>
            <h2>A shop counter, not a template.</h2>
            <p>
              The first version looked like every other bakery template, so I
              rebuilt it around a shop counter: a striped awning, a red ticket
              machine showing what is now baking, a split flap stock board and
              loaves on wooden shelves with kraft paper price tags.
            </p>
          </article>
          <article>
            <span>02 / Ordering</span>
            <h2>A preorder flow with real rules.</h2>
            <p>
              Customers choose a collection day and a 30 minute slot, with an
              8pm cutoff in UK time that stays correct across clock changes.
              Stock and slot limits, a receipt style confirmation with a
              calendar download and an owner Kitchen view complete the flow.
              Orders are kept in the browser, so there is nothing to run or pay
              for.
            </p>
          </article>
          <article>
            <span>03 / Engineering</span>
            <h2>Static pages, then hydrated.</h2>
            <p>
              Built with Vite, React 19, TypeScript, Tailwind CSS v4, React
              Router, GSAP ScrollTrigger and Lenis. Pages are prerendered to
              static HTML and then hydrated, and the ordering and time rules
              are pure functions covered by 171 automated tests.
            </p>
          </article>
          <article>
            <span>04 / Quality</span>
            <h2>Accessible and fast on mobile.</h2>
            <p>
              Measured locally on the production build, Lighthouse on mobile
              scored 100 for accessibility, best practices and SEO on the home
              and order pages. The whole flow works by keyboard and every
              motion has a reduced motion fallback.
            </p>
          </article>
        </section>
        <section className="shell site-build-close">
          <p className="overline">What this does not claim</p>
          <h2>No real customers or invented outcomes.</h2>
          <p>
            Cotton & Crumb demonstrates brand, design and engineering skills.
            It does not claim a client, sales or a commercial result. Orders
            live in one browser only; shared stock, payments and email
            confirmations would need a real backend.
          </p>
          <NativeLink href="/contact" className="arrow-link">
            Discuss a digital or marketing project ↗
          </NativeLink>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
