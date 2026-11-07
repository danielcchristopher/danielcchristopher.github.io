import { publicPath } from '@/lib/paths';
import { pageMetadata } from '@/lib/page-metadata';
import { CopyEmail } from '@/components/copy-email';
import { NativeLink } from '@/components/native-link';
import { SiteHeader } from '@/components/site-header';
import { HeroField } from '@/components/hero-field';

export const metadata = pageMetadata(
  'Contact',
  'Contact Daniel Christopher about analyst roles, digital marketing and other opportunities. Based in Manchester with full UK right to work.',
  '/contact/',
);

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="contact-page">
        <section className="contact-hero">
          <HeroField motif="corner" />
          <div className="shell">
            <p className="overline">Contact · Manchester, UK</p>
            <h1>
              Let’s talk
              <br />
              <span>about working together.</span>
            </h1>
            <p className="contact-intro">
              I’m open to analyst, digital marketing and related opportunities. Based in Manchester, available immediately and open to remote or hybrid work. Have a role, project or idea in mind? Get in touch.
            </p>
            <CopyEmail />
            <div className="recruiter-actions"><a href="mailto:dccchidera@gmail.com">Email Daniel ↗</a><NativeLink href="/profile#skills-match">Match a job description to my evidence ↗</NativeLink><a href={publicPath('/Daniel%20Christopher%20CV.pdf')} download="Daniel Christopher CV.pdf">Download CV ↗</a></div>
          </div>
        </section>

        <section className="contact-links">
          <div className="shell">
            <a href="mailto:dccchidera@gmail.com" className="contact-row" data-reveal>
              <span>Email</span>
              <strong>dccchidera@gmail.com</strong>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-christopher-3a42a0254"
              target="_blank"
              rel="noreferrer"
              className="contact-row"
              data-reveal
            >
              <span>LinkedIn</span>
              <strong>Daniel Christopher</strong>
            </a>
            <a href={publicPath('/Daniel%20Christopher%20CV.pdf')} className="contact-row" download="Daniel Christopher CV.pdf">
              <span>CV</span>
              <strong>Download my CV</strong>
              <span>PDF</span>
            </a>
            <div className="contact-row contact-location" data-reveal>
              <span>Based in</span>
              <strong>Manchester, United Kingdom</strong>
              <span>UK</span>
            </div>
          </div>
        </section>

        <footer className="contact-footer">
          <div className="shell">
            <span>Daniel Christopher · 2026</span>
            <NativeLink href="/work">View the work</NativeLink>
          </div>
        </footer>
      </main>
    </>
  );
}
