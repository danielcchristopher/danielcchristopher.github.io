import Image from "next/image";
import { NativeLink } from "@/components/native-link";
import { PortfolioCover } from "@/components/portfolio-cover";
import { ProjectVisual } from "@/components/project-visual";
import { SiteHeader } from "@/components/site-header";
import { PageFooter } from "@/components/page-footer";
import { publicPath } from "@/lib/paths";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="portfolio-home">
        <section className="shell folio-cover">
          <div className="folio-imprint">
            <span>
              Portfolio <span aria-hidden="true">/</span> 2026
            </span>
            <span>Manchester, UK</span>
          </div>
          <h1 className="folio-name">
            <em>Daniel</em> <span>Christopher.</span>
          </h1>
          <div className="folio-introduction">
            <p>
              Interactive tools. Marketing ideas.
              <br />
              Questions worth investigating.
            </p>
            <span className="folio-introduction-rule" aria-hidden="true" />
            <NativeLink href="/profile" className="folio-person">
              <Image
                src={publicPath("/daniel-portrait.webp")}
                alt="Daniel Christopher"
                width={70}
                height={84}
                priority
              />
              <span>
                A little about me <span aria-hidden="true">↗</span>
                <small>English & German · Open to opportunities</small>
              </span>
            </NativeLink>
          </div>
          <PortfolioCover />
        </section>

        <section
          className="shell folio-selection"
          id="selected-work"
          aria-labelledby="folio-selection-title"
        >
          <header className="folio-section-title">
            <span>
              Keep exploring <span aria-hidden="true">↓</span>
            </span>
            <h2 id="folio-selection-title">
              A closer <em>look.</em>
            </h2>
            <NativeLink href="/work">
              All projects <span aria-hidden="true">↗</span>
            </NativeLink>
          </header>
          <div className="folio-duet">
            <article className="folio-study folio-study--dashboard">
              <NativeLink
                href="/olist-reconstruction"
                aria-label="Explore Olist, revisited"
              >
                <div className="folio-study-visual">
                  <ProjectVisual kind="olist" />
                </div>
                <div className="folio-study-title">
                  <span>01 / Data in use</span>
                  <h3>
                    Olist, <em>revisited.</em>
                  </h3>
                  <span aria-hidden="true">↗</span>
                </div>
                <p>
                  Explore orders, delivery timing and product categories in an
                  interactive dashboard.
                </p>
                <small>Independent rebuild from cleaned team data</small>
              </NativeLink>
            </article>
            <article className="folio-study folio-study--planning">
              <NativeLink
                href="/projects/mobile-route-planner"
                aria-label="Explore Mobile Route Planner"
              >
                <div className="folio-study-visual">
                  <ProjectVisual kind="planner" />
                </div>
                <div className="folio-study-title">
                  <span>02 / Mobile Route Planner</span>
                  <h3>
                    A different <em>route.</em>
                  </h3>
                  <span aria-hidden="true">↗</span>
                </div>
                <p>
                  Same visits. Different sequences and assignments. See what the
                  comparison changes.
                </p>
                <small>
                  Illustrative comparison · original assessment records kept
                  private
                </small>
              </NativeLink>
            </article>
          </div>
        </section>

        <section
          className="shell folio-contents"
          aria-labelledby="folio-contents-title"
        >
          <div className="folio-contents-heading">
            <span>Find your interest</span>
            <h2 id="folio-contents-title">
              The <em>collection.</em>
            </h2>
          </div>
          <nav aria-label="Browse project interests">
            <NativeLink href="/work?interest=digital#projects">
              <span>01</span>
              <strong>Digital builds</strong>
              <small>Tools you can try</small>
              <span aria-hidden="true">↗</span>
            </NativeLink>
            <NativeLink href="/work?interest=marketing#projects">
              <span>02</span>
              <strong>Marketing</strong>
              <small>Audiences, content & campaigns</small>
              <span aria-hidden="true">↗</span>
            </NativeLink>
            <NativeLink href="/work?interest=research#projects">
              <span>03</span>
              <strong>Research & analysis</strong>
              <small>Questions, methods & findings</small>
              <span aria-hidden="true">↗</span>
            </NativeLink>
          </nav>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
