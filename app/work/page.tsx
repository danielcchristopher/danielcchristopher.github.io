import { EditorialTitle } from "@/components/editorial-title";
import { pageMetadata } from "@/lib/page-metadata";
import { PageFooter } from "@/components/page-footer";
import { SiteHeader } from "@/components/site-header";
import { NativeLink } from "@/components/native-link";
import { ProjectGallery } from "@/components/project-gallery";
import { InteractiveEvidenceLab } from "@/components/interactive-evidence-lab";
import { CaseQuickIndex } from "@/components/case-quick-index";
export const metadata = pageMetadata(
  "Projects",
  "Explore digital tools, marketing concepts, customer research and analytical projects by Daniel Christopher.",
  "/work/",
);
export default function WorkPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="projects-page">
        <section className="shell portfolio-page-intro">
          <p className="portfolio-eyebrow">The collection</p>
          <EditorialTitle text="Projects." />
          <p>Digital builds, marketing concepts and research.</p>
        </section>
        <section
          className="shell portfolio-projects"
          id="projects"
          aria-label="Browse projects"
        >
          <ProjectGallery />
        </section>
        <section className="shell portfolio-supporting">
          <h2>Looking for the supporting detail?</h2>
          <details className="portfolio-disclosure" id="case-index">
            <summary>
              <span>
                <strong>Compare the six MSc cases</strong>
                <small>Questions, findings and ownership</small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <CaseQuickIndex />
            </div>
          </details>
          <details className="portfolio-disclosure" id="visual-methods">
            <summary>
              <span>
                <strong>Explore the analytical models</strong>
                <small>Interactive diagrams with reported results</small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <InteractiveEvidenceLab />
            </div>
          </details>
          <details className="portfolio-disclosure">
            <summary>
              <span>
                <strong>Further writing</strong>
                <small>Digital transformation and technology</small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div className="portfolio-writing">
              <article id="shopify-transformation">
                <h3>Shopify digital transformation</h3>
                <p>
                  Individual coursework applying PESTLE, technochange and
                  Kotter’s change model to platform growth and merchant
                  capability.
                </p>
              </article>
              <article id="siemens-industry-4">
                <h3>Cyber physical systems at Siemens</h3>
                <p>
                  Individual coursework examining operations, workforce
                  capability, cybersecurity and sustainability.
                </p>
              </article>
              <NativeLink href="/ai-workflow" className="portfolio-text-link">
                How I work with AI ↗
              </NativeLink>
            </div>
          </details>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
