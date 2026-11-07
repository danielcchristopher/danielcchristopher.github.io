import Image from "next/image";
import { SkillMatch } from "@/components/skill-match";
import { RoleFit } from "@/components/role-fit";
import { bcuModules } from "@/lib/bcu-projects";
import { pageMetadata } from "@/lib/page-metadata";
import { publicPath } from "@/lib/paths";
import { NativeLink } from "@/components/native-link";
import { PageFooter } from "@/components/page-footer";
import { SiteHeader } from "@/components/site-header";
export const metadata = pageMetadata(
  "About",
  "Meet Daniel Christopher: a Manchester based graduate with a background in Digital Marketing, Business Analytics and independent digital projects.",
  "/profile/",
);
export default function ProfilePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="about-page">
        <section className="shell about-opening" id="about">
          <div>
            <p className="portfolio-eyebrow">About</p>
            <h1>
              I’m <em>Daniel.</em>
            </h1>
            <p className="about-lead">
              I grew up in Germany and now live in Manchester. My interests
              connect customer research, marketing and making useful digital
              tools.
            </p>
            <p>
              I studied Digital Marketing at Birmingham City University before
              completing my Business Analytics MSc in Manchester. This portfolio
              brings my independent projects and coursework together.
            </p>
            <div className="portfolio-inline-actions">
              <NativeLink href="/work" className="portfolio-button">
                Explore my projects ↗
              </NativeLink>
              <a
                href={publicPath("/Daniel%20Christopher%20CV.pdf")}
                download="Daniel Christopher CV.pdf"
                className="portfolio-text-link"
              >
                Download CV ↓
              </a>
            </div>
            <ul className="about-facts">
              <li>Manchester, UK</li>
              <li>English & German</li>
              <li>Full UK right to work</li>
            </ul>
          </div>
          <figure>
            <Image
              src={publicPath("/daniel-portrait.webp")}
              alt="Daniel Christopher wearing a black suit on a staircase"
              width={1000}
              height={1500}
              sizes="(max-width: 760px) 220px, 330px"
              priority
            />
            <figcaption>Daniel Christopher · Manchester</figcaption>
          </figure>
        </section>
        <section className="shell about-education" id="education">
          <h2>My background.</h2>
          <div className="about-education-grid">
            <article id="marketing-foundation">
              <p className="portfolio-eyebrow">
                Birmingham City University · 2022 to 2024
              </p>
              <h3>BA (Hons) Digital Marketing</h3>
              <strong>2:1</strong>
              <p>
                Audience research, campaign planning, content strategy and
                digital measurement.
              </p>
              <NativeLink
                href="/work?interest=marketing#projects"
                className="portfolio-text-link"
              >
                See the marketing projects ↗
              </NativeLink>
            </article>
            <article>
              <p className="portfolio-eyebrow">
                Manchester Metropolitan University · 2025 to 2026
              </p>
              <h3>MSc Business Analytics</h3>
              <strong>Completed</strong>
              <p>
                Predicted Distinction, final award pending. Research,
                statistics, data management and decision modelling.
              </p>
              <NativeLink
                href="/work?interest=research#projects"
                className="portfolio-text-link"
              >
                See the research and analysis ↗
              </NativeLink>
            </article>
          </div>
        </section>
        <section className="shell about-detail">
          <details className="portfolio-disclosure" id="background">
            <summary>
              <span>
                <strong>My story and experience</strong>
                <small>
                  Germany, Manchester and the route into my projects
                </small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <div className="about-timeline" id="journey">
                <article>
                  <span>2004 to 2017</span>
                  <h3>Growing up in Germany</h3>
                  <p>
                    My German language and international perspective began here.
                    I moved to the UK in 2017 during Year 8.
                  </p>
                </article>
                <article>
                  <span>2017 to 2022</span>
                  <h3>School and college in Manchester</h3>
                  <p>
                    St Peter’s RC High School, followed by two years at Xaverian
                    College.
                  </p>
                </article>
                <article>
                  <span>2022 to 2026</span>
                  <h3>Marketing, then analytics</h3>
                  <p>
                    Two degrees connecting audience understanding, evidence and
                    practical projects.
                  </p>
                </article>
                <article id="experience">
                  <span>October 2025 to present</span>
                  <h3>Security Officer</h3>
                  <p>
                    SIA licensed work with Constant Security Services in
                    Manchester, requiring reliable shift work and accurate
                    incident and handover records.
                  </p>
                </article>
              </div>
              <p id="milestones">
                I also maintain my German through regular language practice,
                with more than 600 consecutive Duolingo days recorded in
                September 2026.
              </p>
            </div>
          </details>
          <details className="portfolio-disclosure" id="toolkit">
            <summary>
              <span>
                <strong>Tools, modules and training</strong>
                <small>Marketing, research, data and digital development</small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <div className="about-tool-grid">
                <div>
                  <h3>Digital and marketing</h3>
                  <p>
                    Next.js, React, TypeScript, GA4 training, audience research
                    and content planning.
                  </p>
                </div>
                <div>
                  <h3>Research and analysis</h3>
                  <p>
                    SPSS, Qualtrics, SAS Enterprise Miner, SQL, Excel, Power BI
                    and Python.
                  </p>
                </div>
              </div>
              <h3>Training and certifications</h3>
              <ul>
                <li>Google Data Analytics Professional Certificate</li>
                <li>Google Analytics (GA4)</li>
                <li>HackerRank SQL (Basic)</li>
                <li>DMI Certified Digital Marketing Associate</li>
                <li>HubSpot Content Marketing</li>
              </ul>
              <h3>Digital Marketing modules</h3>
              <ul className="bcu-modules">
                {bcuModules.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </details>
          <details className="portfolio-disclosure">
            <summary>
              <span>
                <strong>Skills and project evidence</strong>
                <small>Explore relevant roles or match a job description</small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <RoleFit />
              <section id="skills-match">
                <h3>Match a role to the evidence.</h3>
                <p>
                  This tool matches words in a job description to portfolio
                  examples. It is a guide to relevant work, not a hiring
                  assessment.
                </p>
                <SkillMatch />
              </section>
            </div>
          </details>
          <details className="portfolio-disclosure">
            <summary>
              <span>
                <strong>How I work with AI</strong>
                <small>
                  Development assistance, evidence and responsibility
                </small>
              </span>
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <p>
                I use AI assistance to develop and refine digital projects. I
                remain responsible for the questions, source evidence, decisions
                and claims presented here.
              </p>
              <NativeLink href="/ai-workflow" className="portfolio-text-link">
                Read about the development workflow ↗
              </NativeLink>
            </div>
          </details>
          <div className="about-closing" id="profile-contact">
            <h2>Have a project or opportunity in mind?</h2>
            <NativeLink href="/contact" className="portfolio-button">
              Get in touch ↗
            </NativeLink>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
