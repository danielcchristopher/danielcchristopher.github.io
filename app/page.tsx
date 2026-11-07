import Image from "next/image";
import { ProjectGallery, ProjectTile } from "@/components/project-gallery";
import { NativeLink } from "@/components/native-link";
import { SiteHeader } from "@/components/site-header";
import { PageFooter } from "@/components/page-footer";
import { portfolioProjects } from "@/lib/portfolio-projects";
import { publicPath } from "@/lib/paths";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="portfolio-home">
        <section className="shell portfolio-home-opening">
          <div className="portfolio-introduction">
            <p className="portfolio-eyebrow">Portfolio · Manchester, UK</p>
            <h1>
              Daniel <br />
              Christopher.
            </h1>
            <p className="portfolio-home-lead">
              I build interactive tools, develop marketing concepts and
              investigate customer questions.
            </p>
            <div className="portfolio-inline-actions">
              <NativeLink href="/work" className="portfolio-button">
                Explore projects <span aria-hidden="true">↗</span>
              </NativeLink>
              <NativeLink href="/profile" className="portfolio-text-link">
                About me
              </NativeLink>
            </div>
            <p className="portfolio-availability">
              <i />
              Open to opportunities
            </p>
          </div>
          <div className="portfolio-feature">
            <h2 className="portfolio-eyebrow">Featured digital build</h2>
            <ProjectTile project={portfolioProjects[0]} priority />
          </div>
        </section>
        <section className="shell portfolio-selection" id="selected-work">
          <header className="portfolio-section-heading">
            <div>
              <p className="portfolio-eyebrow">More to explore</p>
              <h2>Different kinds of work.</h2>
            </div>
            <NativeLink href="/work" className="portfolio-text-link">
              All projects ↗
            </NativeLink>
          </header>
          <ProjectGallery featured />
        </section>
        <section className="shell portfolio-about-strip">
          <Image
            src={publicPath("/daniel-portrait.webp")}
            alt="Daniel Christopher"
            width={1000}
            height={1500}
            sizes="150px"
          />
          <div>
            <p className="portfolio-eyebrow">A little background</p>
            <h2>
              Marketing training.
              <br />
              Analytical curiosity.
            </h2>
            <p>
              I studied Digital Marketing at Birmingham City University and
              Business Analytics in Manchester. This collection brings my
              coursework and independent builds together.
            </p>
            <NativeLink href="/profile" className="portfolio-text-link">
              Meet Daniel ↗
            </NativeLink>
          </div>
          <div className="portfolio-location-note">
            <strong>Manchester, UK</strong>
            <span>English & German</span>
            <NativeLink href="/contact" className="portfolio-text-link">
              Get in touch ↗
            </NativeLink>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
