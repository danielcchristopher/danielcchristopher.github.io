import Image from "next/image";
import { NativeLink } from "@/components/native-link";
import { PortfolioCover } from "@/components/portfolio-cover";
import { ProjectVisual } from "@/components/project-visual";
import { SiteHeader } from "@/components/site-header";
import { PageFooter } from "@/components/page-footer";
import { publicPath } from "@/lib/paths";
import { portfolioProjects } from "@/lib/portfolio-projects";

const countIn = (category: string) =>
  portfolioProjects.filter((project) => project.category === category).length;

const toolkit = [
  "Excel",
  "SQL",
  "Power BI",
  "Python",
  "SPSS",
  "Google Analytics",
  "HubSpot",
  "React",
];

const toolGroups = [
  {
    title: "Data and BI",
    tools: ["Excel", "Power BI", "Power Query", "DAX", "SQL", "KPI reporting", "Relational design (ERD, DFD)"],
  },
  {
    title: "Statistics and research",
    tools: ["SPSS", "SAS Enterprise Miner", "Qualtrics", "Python (Pandas)", "Regression", "Mediation", "Classification"],
  },
  {
    title: "Digital marketing",
    tools: ["Google Analytics (GA4)", "HubSpot", "Audience research", "Content planning", "Campaign planning", "Market research"],
  },
  {
    title: "Web and digital builds",
    tools: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GSAP", "Vite", "Git and GitHub"],
  },
];

const certificates = [
  "Google Data Analytics Professional Certificate",
  "Google Analytics (GA4)",
  "DMI Certified Digital Marketing Associate",
  "HubSpot Content Marketing",
  "HackerRank SQL (Basic)",
];

const proof = [
  { value: String(portfolioProjects.length), label: "projects across data, marketing and builds" },
  { value: "98,582", label: "orders explored in the Olist dashboard" },
  { value: "139", label: "UK shoppers surveyed for my MSc dissertation" },
  { value: "1,080", label: "scenario checks passed by Route & Margin" },
];

const method = [
  { step: "Question", text: "Start with the decision someone actually has to make.", href: "/research-case", example: "Trust & loyalty" },
  { step: "Evidence", text: "Gather the data, research or audience insight that bears on it.", href: "/bcu#mailchimp", example: "Campaign research" },
  { step: "Build", text: "Turn it into something people can use: a model, tool or campaign.", href: "/projects/route-and-margin", example: "Route & Margin" },
  { step: "Decide", text: "Show the trade offs plainly, with limits stated.", href: "/olist-reconstruction", example: "Olist dashboard" },
];

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
            <span>Analytics · Digital marketing · Digital builds</span>
            <span>Manchester, UK</span>
          </div>
          <h1 className="folio-name">
            <em>Daniel</em> <span>Christopher.</span>
          </h1>
          <div className="folio-introduction">
            <div className="folio-pitch">
              <p>
                MSc Business Analytics and BA Digital Marketing graduate. I
                use data, research and creative thinking to build tools,
                campaigns and insight people can act on.
              </p>
              <ul className="folio-toolkit" aria-label="Skills and tools">
                {toolkit.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
                <li className="folio-toolkit-more">
                  <a href="#toolkit">Full toolkit ↓</a>
                </li>
              </ul>
            </div>
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
          <dl className="folio-proof">
            {proof.map((item) => (
              <div key={item.label}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          className="shell folio-tools"
          id="toolkit"
          aria-labelledby="folio-tools-title"
        >
          <header>
            <span>Toolkit</span>
            <h2 id="folio-tools-title">
              What I work <em>with.</em>
            </h2>
          </header>
          <div className="folio-tools-grid">
            {toolGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="folio-certs">
            <strong>Certifications</strong>
            <ul>
              {certificates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="shell folio-selection"
          id="selected-work"
          aria-labelledby="folio-selection-title"
        >
          <header className="folio-section-title">
            <span>
              Two more builds <span aria-hidden="true">↓</span>
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
                <ul className="folio-tags" aria-label="Tools used">
                  <li>Python</li>
                  <li>Power BI</li>
                  <li>Dashboard design</li>
                </ul>
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
                  <span>02 / Built after an analyst interview</span>
                  <h3>
                    A different <em>route.</em>
                  </h3>
                  <span aria-hidden="true">↗</span>
                </div>
                <p>
                  Same visits. Different sequences and assignments. See what the
                  comparison changes.
                </p>
                <ul className="folio-tags" aria-label="Tools used">
                  <li>Google OR Tools</li>
                  <li>MapLibre GL</li>
                  <li>Route optimisation</li>
                </ul>
                <small>
                  Unprompted follow up to a planning analyst interview ·
                  district level locations
                </small>
              </NativeLink>
            </article>
          </div>
        </section>

        <section className="shell folio-method" aria-labelledby="folio-method-title">
          <header>
            <span>How I work</span>
            <h2 id="folio-method-title">
              From question to <em>decision.</em>
            </h2>
          </header>
          <ol>
            {method.map((item, index) => (
              <li key={item.step}>
                <span>0{index + 1}</span>
                <strong>{item.step}</strong>
                <p>{item.text}</p>
                <NativeLink href={item.href}>
                  See it in {item.example} <span aria-hidden="true">↗</span>
                </NativeLink>
              </li>
            ))}
          </ol>
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
              <small>
                Tools you can try · {countIn("Digital builds")} projects
              </small>
              <span aria-hidden="true">↗</span>
            </NativeLink>
            <NativeLink href="/work?interest=marketing#projects">
              <span>02</span>
              <strong>Marketing</strong>
              <small>
                Audiences, content & campaigns · {countIn("Marketing")} projects
              </small>
              <span aria-hidden="true">↗</span>
            </NativeLink>
            <NativeLink href="/work?interest=research#projects">
              <span>03</span>
              <strong>Research & analysis</strong>
              <small>
                Questions, methods & findings · {countIn("Research and analysis")} projects
              </small>
              <span aria-hidden="true">↗</span>
            </NativeLink>
          </nav>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
