import Image from "next/image";
import { NativeLink } from "@/components/native-link";
import { SiteHeader } from "@/components/site-header";
import { PageFooter } from "@/components/page-footer";
import { publicPath } from "@/lib/paths";

const selectedWork = [
  {
    title: "Olist online orders dashboard",
    href: "/powerbi",
    summary: "Cleaned 98,582 ecommerce orders and built a Power BI dashboard on delivery, sellers and customer satisfaction.",
    tools: ["Power BI", "DAX", "Excel"],
    ownership: "Four person MSc team project",
  },
  {
    title: "Gym membership churn",
    href: "/churn",
    summary: "Compared three models to predict which members would leave. The best was right 95.6% of the time.",
    tools: ["SAS Enterprise Miner"],
    ownership: "Individual MSc project",
  },
  {
    title: "Merchant database",
    href: "/sql",
    summary: "Found delivery fees missing for 99.7% of 1,000 merchant records, then designed a six table SQL database.",
    tools: ["SQL", "ERD"],
    ownership: "Four person MSc team project",
  },
  {
    title: "Personalisation, trust and loyalty",
    href: "/dissertation",
    summary: "My own survey of 139 UK online shoppers on whether personalisation builds loyalty through trust.",
    tools: ["Qualtrics", "SPSS"],
    ownership: "Individual MSc dissertation",
  },
  {
    title: "Cotton & Crumb",
    href: "/cotton-and-crumb",
    summary: "A bakery brand and website for a made up business, with an online preorder system for collection slots.",
    tools: ["Branding", "Website"],
    ownership: "Individual project",
  },
];

const toolkit = [
  "SQL",
  "Power BI and DAX",
  "Excel",
  "SPSS",
  "SAS Enterprise Miner",
  "Python (Pandas)",
  "Qualtrics",
  "Google Analytics (GA4)",
  "Google Ads (basic)",
  "Mailchimp",
  "Shopify",
  "Canva",
];

const certificates = [
  "Google Data Analytics Professional Certificate",
  "Google Analytics (GA4)",
  "DMI Certified Digital Marketing Associate",
  "HubSpot Content Marketing",
  "HackerRank SQL (Basic)",
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="portfolio-home plain-home">
        <section className="shell plain-intro" aria-labelledby="plain-intro-title">
          <Image
            src={publicPath("/daniel-portrait.webp")}
            alt=""
            width={88}
            height={106}
            priority
          />
          <div>
            <h1 id="plain-intro-title">Daniel Christopher</h1>
            <p>
              MSc Business Analytics (Merit) and BA Digital Marketing graduate in
              Manchester, looking for junior data, insight and marketing roles.
              Native German speaker.
            </p>
            <ul className="plain-actions">
              <li>
                <a className="portfolio-button" href={publicPath("/Daniel Christopher CV.pdf")}>
                  Download my CV
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/daniel-christopher-3a42a0254">LinkedIn</a>
              </li>
              <li>
                <a href="mailto:dccchidera@gmail.com">dccchidera@gmail.com</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="shell plain-section" aria-labelledby="selected-work-title">
          <h2 id="selected-work-title">Selected work</h2>
          <ul className="plain-cards">
            {selectedWork.map((project) => (
              <li key={project.href}>
                <NativeLink href={project.href}>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="plain-tags" aria-label="Tools used">
                    {project.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                  <small>{project.ownership}</small>
                </NativeLink>
              </li>
            ))}
          </ul>
          <NativeLink href="/work" className="portfolio-text-link">
            More projects
          </NativeLink>
        </section>

        <section className="shell plain-section" aria-labelledby="toolkit-title">
          <h2 id="toolkit-title">Tools I have used</h2>
          <ul className="plain-tags plain-toolkit">
            {toolkit.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <h3>Certificates</h3>
          <ul className="plain-list">
            {certificates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
