import { publicPath } from "@/lib/paths";
import { NativeLink } from "@/components/native-link";

const buildDate = new Date();
const formattedBuildDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/London",
}).format(buildDate);
const buildDateParts = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "Europe/London",
}).formatToParts(buildDate);
const buildDateIso = ["year", "month", "day"]
  .map((part) => buildDateParts.find(({ type }) => type === part)?.value)
  .join("-");

export function PageFooter() {
  return (
    <footer className="page-footer">
      <div className="shell page-footer-inner">
        <div className="page-footer-invitation">
          <span className="portfolio-eyebrow">
            A project, a role or a question
          </span>
          <h2>
            Get in <em>touch.</em>
          </h2>
        </div>
        <div className="page-footer-actions">
          <a className="page-footer-email" href="mailto:dccchidera@gmail.com">
            dccchidera@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div>
            <NativeLink href="/contact">Contact details ↗</NativeLink>
            <a
              href={publicPath("/Daniel%20Christopher%20CV.pdf")}
              download="Daniel Christopher CV.pdf"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </div>
      <div className="shell page-footer-meta">
        <span>Daniel Christopher</span>
        <span>Manchester, UK · 2026</span>
        <span>
          Last updated <time dateTime={buildDateIso}>{formattedBuildDate}</time>
        </span>
      </div>
    </footer>
  );
}
