import { pageMetadata } from "@/lib/page-metadata";
import { SiteHeader } from "@/components/site-header";
import { PageFooter } from "@/components/page-footer";
import { NativeLink } from "@/components/native-link";
import { ProjectVisual } from "@/components/project-visual";
export const metadata = pageMetadata(
  "This portfolio",
  "The website itself: a Next.js and TypeScript build bringing digital projects, marketing and research into one collection.",
  "/site-build/",
);
export default function SiteBuildPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="shell study-header">
          <NativeLink href="/work" className="portfolio-text-link">
            ← All projects
          </NativeLink>
          <div className="study-opening">
            <div>
              <p className="portfolio-eyebrow">
                Independent digital build · ongoing
              </p>
              <h1>This portfolio.</h1>
              <p className="study-question">
                A place to explore what I’ve made.
              </p>
              <p className="study-result">
                I direct the content, design and development with AI assistance.
                The site brings digital tools, marketing concepts and research
                together in a working Next.js application.
              </p>
              <div className="portfolio-inline-actions">
                <a
                  href="https://github.com/danielcchristopher/danielcchristopher.github.io"
                  className="portfolio-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inspect the source ↗
                </a>
                <NativeLink href="/work" className="portfolio-text-link">
                  Try the project collection ↗
                </NativeLink>
              </div>
            </div>
            <ProjectVisual kind="web" priority />
          </div>
          <p className="study-scope">
            Independent project. This demonstrates the website and its
            implementation, with no client commission, traffic growth or
            commercial outcome claimed.
          </p>
        </section>
        <section className="shell portfolio-build-decisions">
          <h2>A few decisions behind the interface.</h2>
          <div className="build-decisions-grid">
            <article>
              <span>01</span>
              <h3>Show the work early</h3>
              <p>
                Real application previews and original figures take priority.
                Where original assets are unavailable, the boundary is stated.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Keep browsing context</h3>
              <p>
                Project categories and search terms stay in the URL so a
                filtered collection can be shared and revisited.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Make detail optional</h3>
              <p>
                Methods and evidence remain available without becoming the
                default reading experience.
              </p>
            </article>
          </div>
          <details className="portfolio-disclosure">
            <summary>
              <span>
                <strong>Implementation and checks</strong>
                <small>Framework, interaction and publication</small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <p>
                Built with Next.js, React and TypeScript, with static export to
                GitHub Pages. Shared components handle project previews,
                navigation and evidence disclosure. Existing analytical models
                use Three.js on demand with static fallbacks.
              </p>
              <p>
                Source checks cover lint, TypeScript, the production build and
                local links. Browser checks inspect the actual layout and
                interactions at desktop and mobile widths.
              </p>
              <NativeLink href="/ai-workflow" className="portfolio-text-link">
                How I work with AI ↗
              </NativeLink>
            </div>
          </details>
          <NativeLink href="/contact" className="portfolio-text-link">
            Discuss a project ↗
          </NativeLink>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
