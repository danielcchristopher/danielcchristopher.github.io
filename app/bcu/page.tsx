import { EditorialTitle } from "@/components/editorial-title";
import { pageMetadata } from "@/lib/page-metadata";
import { PageFooter } from "@/components/page-footer";
import { SiteHeader } from "@/components/site-header";
import { NativeLink } from "@/components/native-link";
import { bcuModules, bcuProjects } from "@/lib/bcu-projects";
import { ProjectVisual } from "@/components/project-visual";
import type { ProjectVisualKind } from "@/lib/portfolio-projects";
export const metadata = pageMetadata(
  "Marketing projects",
  "Audience research and campaign proposals from Daniel Christopher’s Digital Marketing degree. Contributions and available evidence are identified.",
  "/bcu/",
);
const visual: Record<string, ProjectVisualKind> = {
  "flock-together": "nature",
  nandos: "research",
  mailchimp: "campaign",
  "peaky-blinders": "peaky",
};
const roles: Record<string, string> = {
  "flock-together":
    "Research into nature, social connection and comparable organisations.",
  nandos:
    "Coursework combining observation, survey research and secondary sources.",
  mailchimp:
    "Team research and planning connecting audiences, creative ideas and content.",
  "peaky-blinders":
    "Four person team proposal drawing on audience research and a digital audit.",
};
const scope: Record<string, string> = {
  "flock-together":
    "Small exploratory research supporting a team proposal. My credited role was research; no measured campaign impact is claimed.",
  nandos:
    "Academic exercise. The retained record does not establish sole ownership of every activity or representative customer results.",
  mailchimp:
    "Team campaign concept. Proposed targets are not achieved results; no live automation or A/B test is claimed.",
  "peaky-blinders":
    "Four person coursework proposal. No BBC commission, campaign launch or audience growth is claimed.",
};
export default function BcuPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="marketing-page">
        <section className="shell portfolio-page-intro">
          <NativeLink
            href="/work?interest=marketing#projects"
            className="portfolio-text-link"
          >
            ← All marketing projects
          </NativeLink>
          <p className="portfolio-eyebrow">
            BA (Hons) Digital Marketing · Birmingham City University
          </p>
          <EditorialTitle text="Marketing projects." />
          <p>
            Audience research and campaign planning from my degree. These are
            coursework proposals, with contributions and limits identified.
          </p>
          <nav
            className="marketing-jump-links"
            aria-label="Jump to a marketing project"
          >
            <a href="#flock-together">Flock Together</a>
            <a href="#nandos">Nando’s</a>
            <a href="#mailchimp">Mailchimp</a>
            <a href="#peaky-blinders">Peaky Blinders</a>
          </nav>
        </section>
        <section className="shell marketing-projects">
          {bcuProjects.map((project) => (
            <article
              className="marketing-project"
              id={project.id}
              key={project.id}
            >
              <div className="marketing-project-opening">
                <header>
                  <p className="portfolio-eyebrow">{project.ownership}</p>
                  <h2>{project.title}</h2>
                  <p className="marketing-project-summary">{project.summary}</p>
                  <div className="marketing-role">
                    <span>My involvement</span>
                    <p>{roles[project.id]}</p>
                  </div>
                </header>
                <ProjectVisual kind={visual[project.id]} />
              </div>
              <p className="marketing-scope">{scope[project.id]}</p>
              <details className="portfolio-disclosure">
                <summary>
                  <span>
                    <strong>Brief, contribution and evidence</strong>
                    <small>
                      Open the question, approach and retained evidence
                    </small>
                  </span>
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="marketing-evidence-columns">
                  <div>
                    <h3>The brief</h3>
                    <p>{project.question}</p>
                    <h3>My contribution</h3>
                    <p>{project.contribution}</p>
                  </div>
                  <div>
                    <h3>Evidence and output</h3>
                    <p>{project.evidence}</p>
                    <p>{project.outcome}</p>
                    <h3>Scope</h3>
                    <p>{project.limits}</p>
                  </div>
                  <p className="marketing-skills">{project.skills}</p>
                </div>
              </details>
            </article>
          ))}
          <article className="marketing-project" id="ai-gen-z">
            <p className="portfolio-eyebrow">Further research writing</p>
            <h2>AI and Generation Z marketing</h2>
            <p>
              Exploratory writing on personalisation, chatbots, predictive
              analytics, trust and privacy. Completed empirical findings are not
              verified for this retained draft.
            </p>
            <NativeLink href="/research-case" className="portfolio-text-link">
              Explore the later MSc study ↗
            </NativeLink>
          </article>
        </section>
        <section className="shell portfolio-supporting" id="modules">
          <details className="portfolio-disclosure">
            <summary>
              <span>
                <strong>Degree modules</strong>
                <small>Accelerated two year programme · 360 credits</small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <ul className="bcu-modules">
                {bcuModules.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p>
                Module titles were checked against the transcript. Project
                descriptions draw on retained coursework and its earlier
                evidence review.
              </p>
            </div>
          </details>
          <NativeLink href="/work" className="portfolio-text-link">
            Explore all projects ↗
          </NativeLink>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
