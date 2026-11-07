import { pageMetadata } from "@/lib/page-metadata";
import { SiteHeader } from "@/components/site-header";
import { PageFooter } from "@/components/page-footer";
import { NativeLink } from "@/components/native-link";
export const metadata = pageMetadata(
  "How I work with AI",
  "How Daniel Christopher uses AI assistance in digital projects while checking sources, implementation and claims.",
  "/ai-workflow/",
);
export default function AiWorkflowPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="shell portfolio-page-intro">
          <p className="portfolio-eyebrow">Development approach</p>
          <h1>How I work with AI.</h1>
          <p>
            I use AI assistance for research, drafting and development. I remain
            responsible for the sources, decisions and claims in the finished
            project.
          </p>
        </section>
        <section className="shell portfolio-build-decisions">
          <div className="build-workflow" aria-label="Development workflow">
            <article>
              <span>01</span>
              <h2>Define</h2>
              <p>Set the question, audience and constraints.</p>
            </article>
            <article>
              <span>02</span>
              <h2>Build</h2>
              <p>Develop the implementation and supporting content.</p>
            </article>
            <article>
              <span>03</span>
              <h2>Check</h2>
              <p>Compare claims with sources and test the application.</p>
            </article>
            <article>
              <span>04</span>
              <h2>Refine</h2>
              <p>Use review findings to correct and improve the result.</p>
            </article>
          </div>
          <p className="study-scope">
            This diagram describes the intended process. It is not a record of
            independent reviews or a claim that AI output is automatically
            reliable.
          </p>
          <details className="portfolio-disclosure">
            <summary>
              <span>
                <strong>What I check</strong>
                <small>Evidence, ownership and the finished experience</small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <p>
                I check whether a source supports a statement, whether numbers
                reconcile, and whether the interface communicates the result
                clearly. Original coursework, later reconstructions and
                simulated demonstrations are identified separately.
              </p>
              <p>
                A successful build does not prove that an analysis is
                operationally valid or that real users understand it. Those
                require their own evidence.
              </p>
              <a
                className="portfolio-text-link"
                href="https://github.com/danielcchristopher/danielcchristopher.github.io/blob/main/CLAUDE.md"
              >
                Repository workflow notes ↗
              </a>
            </div>
          </details>
          <NativeLink href="/site-build" className="portfolio-text-link">
            Explore the portfolio build ↗
          </NativeLink>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
