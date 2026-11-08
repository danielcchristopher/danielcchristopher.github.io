import { EditorialTitle } from "@/components/editorial-title";
import { publicPath } from "@/lib/paths";
import { pageMetadata } from "@/lib/page-metadata";
import { CopyEmail } from "@/components/copy-email";
import { NativeLink } from "@/components/native-link";
import { SiteHeader } from "@/components/site-header";
import { PageFooter } from "@/components/page-footer";
export const metadata = pageMetadata(
  "Contact",
  "Get in touch with Daniel Christopher about a project, analyst role, digital marketing opportunity or related work.",
  "/contact/",
);
export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="portfolio-contact">
        <section className="shell portfolio-page-intro">
          <p className="portfolio-eyebrow">Contact</p>
          <EditorialTitle text="Get in touch." />
          <p>
            I’m open to analyst, digital marketing and related opportunities.
            Have a role, project or idea in mind?
          </p>
        </section>
        <section className="shell contact-options">
          <div className="contact-email-card">
            <span className="portfolio-eyebrow">Email</span>
            <a
              href="mailto:dccchidera@gmail.com"
              className="contact-email-address"
            >
              dccchidera@gmail.com
            </a>
            <div className="portfolio-inline-actions">
              <a
                href="mailto:dccchidera@gmail.com"
                className="portfolio-button"
              >
                Write an email ↗
              </a>
              <CopyEmail />
            </div>
            <p>
              Manchester, UK · Available immediately
              <br />
              Open to remote or hybrid work · Full UK right to work
            </p>
          </div>
          <div className="contact-secondary">
            <a
              href="https://www.linkedin.com/in/daniel-christopher-3a42a0254"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>
                Daniel Christopher <span aria-hidden="true">↗</span>
              </strong>
            </a>
            <a
              href="https://github.com/danielcchristopher"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>
                danielcchristopher <span aria-hidden="true">↗</span>
              </strong>
            </a>
            <a
              href={publicPath("/Daniel%20Christopher%20CV.pdf")}
              download="Daniel Christopher CV.pdf"
            >
              <span>CV</span>
              <strong>
                Download my CV <span aria-hidden="true">↓</span>
              </strong>
            </a>
          </div>
        </section>
        <div className="shell contact-next">
          <NativeLink href="/work" className="portfolio-text-link">
            Explore the projects ↗
          </NativeLink>
          <NativeLink href="/profile" className="portfolio-text-link">
            More about me ↗
          </NativeLink>
        </div>
      </main>
      <PageFooter />
    </>
  );
}
