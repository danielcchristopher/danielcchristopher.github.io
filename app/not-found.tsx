import { NativeLink } from "@/components/native-link";
import { PageFooter } from "@/components/page-footer";
import { SiteHeader } from "@/components/site-header";
import { EditorialTitle } from "@/components/editorial-title";

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="shell portfolio-page-intro">
          <div>
            <p className="portfolio-eyebrow">404 · Page not found</p>
            <EditorialTitle text="Page not found." />
            <p>
              The address may have changed. Return to the projects or the
              portfolio home page.
            </p>
            <div className="profile-links">
              <NativeLink className="arrow-link" href="/">
                Portfolio home
              </NativeLink>
              <NativeLink className="arrow-link" href="/work">
                View projects
              </NativeLink>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </>
  );
}
