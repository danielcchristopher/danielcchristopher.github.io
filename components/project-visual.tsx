import Image from "next/image";
import type { ProjectVisualKind } from "@/lib/portfolio-projects";
import { publicPath } from "@/lib/paths";

const originals: Partial<
  Record<
    ProjectVisualKind,
    { src: string; alt: string; label: string; note: string; screen?: boolean }
  >
> = {
  web: {
    src: "/previews/portfolio-home.png",
    alt: "The working portfolio home page with the Route and Margin map preview and direct project navigation",
    label: "Working website",
    note: "Home page · independent digital build",
    screen: true,
  },
  route: {
    src: "/previews/route-board.png",
    alt: "Route and Margin Routes view showing the reserve vehicle, four delivery stops and the simulated shift contribution",
    label: "Working application",
    note: "Route replay · simulated dispatch",
    screen: true,
  },
  olist: {
    src: "/previews/olist-dashboard.png",
    alt: "The Olist dashboard with recorded monthly order counts and delivery statistics",
    label: "Working dashboard",
    note: "Independent rebuild from cleaned team data",
    screen: true,
  },
  trust: {
    src: "/evidence/dissertation-mediation.jpg",
    alt: "Original dissertation diagram reporting the personalisation, trust and loyalty paths and the bootstrap interval",
    label: "Original dissertation figure",
    note: "Survey associations · not causal effects",
  },
  data: {
    src: "/evidence/sql-relational-schema.jpg",
    alt: "The team’s original proposed database schema linking Location, Delivery, Status, Promotion, Reviews and Scan",
    label: "Original team figure",
    note: "Proposed relational schema · coursework",
  },
  churn: {
    src: "/evidence/sas-roc-train-validation-test.jpg",
    alt: "Original SAS ROC charts comparing three classifiers across train, validation and test partitions",
    label: "Original SAS output",
    note: "Model comparison · individual coursework",
  },
};
const outlines: Partial<
  Record<
    ProjectVisualKind,
    { title: string; steps: [string, string][]; note: string }
  >
> = {
  peaky: {
    title: "Peaky Blinders campaign proposal",
    steps: [
      ["Research", "Fan interviews & social audit"],
      ["Planning", "Personas, journey & RACE funnel"],
      ["Proposed activity", "Social, BBC channels & events"],
    ],
    note: "Proposal outline · original deck not published",
  },
  nature: {
    title: "Flock Together audience research",
    steps: [
      ["Context", "Nature, connection & mental health"],
      ["My research", "Comparable organisations & questions"],
      ["Team output", "Audience insight & campaign proposal"],
    ],
    note: "Research outline · my credited role was research",
  },
  research: {
    title: "Nando’s customer research",
    steps: [
      ["Observe", "Dining behaviour at three locations"],
      ["Ask", "Survey research"],
      ["Compare", "Observations & secondary sources"],
    ],
    note: "Method outline · original fieldwork assets not published",
  },
  web: {
    title: "From source code to a working site",
    steps: [
      ["Build", "Next.js, React & TypeScript"],
      ["Check", "Types, links & production export"],
      ["Publish", "GitHub Pages"],
    ],
    note: "Build outline · this website is the artifact",
  },
  decision: {
    title: "Test the assumptions before choosing",
    steps: [
      ["Prepare", "Audit & clean the business data"],
      ["Compare", "Margin scenarios from 60% to 70%"],
      ["Decide", "Optimise location & configuration"],
    ],
    note: "Model outline · original spreadsheet not published",
  },
  powerbi: {
    title: "The ecommerce reporting model",
    steps: [
      ["Source", "Eight cleaned Olist tables"],
      ["Model", "Relationships & a DAX date table"],
      ["Report", "Delivery, sellers & satisfaction"],
    ],
    note: "Model outline · original PBIX not published",
  },
};

export function ProjectVisual({
  kind,
  priority = false,
}: {
  kind: ProjectVisualKind;
  priority?: boolean;
}) {
  const original = originals[kind];
  if (original)
    return (
      <figure
        className={`evidence-preview ${original.screen ? "evidence-preview--screen" : "evidence-preview--original"}`}
      >
        <div className="evidence-media">
          <Image
            src={publicPath(original.src)}
            alt={original.alt}
            width={1280}
            height={720}
            sizes="(max-width: 700px) 100vw, 50vw"
            priority={priority}
          />
        </div>
        <figcaption>
          <strong>{original.label}</strong>
          <span>{original.note}</span>
        </figcaption>
      </figure>
    );
  if (kind === "campaign")
    return (
      <figure className="evidence-preview evidence-preview--campaign">
        <div className="evidence-media campaign-composition">
          <svg
            viewBox="0 0 640 390"
            role="img"
            aria-label="A new illustration of the proposal structure. A Jenga style stack connects a small business audience, the creative idea, video and social formats. It is not original campaign artwork."
          >
            <text x="30" y="42" className="campaign-small">
              MAILCHIMP / CONTENT PROPOSAL
            </text>
            <text x="30" y="126" className="campaign-display">
              Audience.
            </text>
            <text x="30" y="192" className="campaign-display">
              Idea.
            </text>
            <text x="30" y="258" className="campaign-display">
              Content.
            </text>
            <text x="30" y="326" className="campaign-small">
              SMALL BUSINESSES & FREELANCERS
            </text>
            <text x="30" y="350" className="campaign-small">
              JENGA AS THE CREATIVE METAPHOR
            </text>
            <g stroke="#edf1ff" strokeWidth="2" strokeLinejoin="round">
              <path d="M355 290l175-29 75 40-175 30z" fill="#b8c7f5" />
              <path d="M355 290l75 41v43l-75-41z" fill="#183aa1" />
              <path d="M430 331l175-30v43l-175 30z" fill="#2348d7" />
              <path d="M360 238l175-29 75 40-175 30z" fill="#b8c7f5" />
              <path d="M360 238l75 41v43l-75-41z" fill="#183aa1" />
              <path d="M435 279l175-30v43l-175 30z" fill="#2348d7" />
              <path d="M350 186l175-29 75 40-175 30z" fill="#b8c7f5" />
              <path d="M350 186l75 41v43l-75-41z" fill="#183aa1" />
              <path d="M425 227l175-30v43l-175 30z" fill="#2348d7" />
              <path d="M397 124l144-24 75 40-144 25z" fill="#b8c7f5" />
              <path d="M397 124l75 41v43l-75-41z" fill="#183aa1" />
              <path d="M472 165l144-25v43l-144 25z" fill="#2348d7" />
            </g>
            <g fill="#fff" fontSize="16" transform="skewY(-9)">
              <text x="455" y="421">
                AUDIENCE
              </text>
              <text x="470" y="370">
                IDEA
              </text>
              <text x="468" y="317">
                VIDEO
              </text>
              <text x="500" y="258">
                SOCIAL
              </text>
            </g>
          </svg>
        </div>
        <figcaption>
          <strong>Illustration of the proposal structure</strong>
          <span>Team coursework · original campaign assets not published</span>
        </figcaption>
      </figure>
    );
  if (kind === "loans")
    return (
      <figure className="evidence-preview">
        <div
          className="evidence-media evidence-plot"
          role="img"
          aria-label="Reported standardised coefficients: loan amount positive .767 and income negative .488. The outcome is a loan to income ratio."
        >
          <p>Two reported model coefficients</p>
          <svg viewBox="0 0 560 245" aria-hidden="true">
            <path d="M280 35v155" stroke="currentColor" opacity=".3" />
            <text x="24" y="70">
              Loan amount
            </text>
            <rect
              x="280"
              y="48"
              width={0.767 * 170}
              height="28"
              rx="4"
              className="evidence-positive"
            />
            <text x="532" y="70" textAnchor="end">
              +.767
            </text>
            <text x="24" y="145">
              Income
            </text>
            <rect
              x={280 - 0.488 * 170}
              y="123"
              width={0.488 * 170}
              height="28"
              rx="4"
              className="evidence-negative"
            />
            <text x="532" y="145" textAnchor="end">
              −.488
            </text>
            <text x="110" y="220" textAnchor="middle">
              −1
            </text>
            <text x="280" y="220" textAnchor="middle">
              0
            </text>
            <text x="450" y="220" textAnchor="middle">
              +1
            </text>
          </svg>
        </div>
        <figcaption>
          <strong>Reported SPSS results</strong>
          <span>
            The ratio contains loan size and income; interpretation needs care.
          </span>
        </figcaption>
      </figure>
    );
  if (kind === "service")
    return (
      <figure className="evidence-preview">
        <div className="evidence-media service-evidence">
          <p>Mean bill per cover</p>
          <div>
            <span>
              Lunch <small>68 bills</small>
            </span>
            <i style={{ width: `${(7.32 / 10) * 100}%` }} />
            <strong>7.32</strong>
          </div>
          <div>
            <span>
              Dinner <small>176 bills</small>
            </span>
            <i style={{ width: `${(8.11 / 10) * 100}%` }} />
            <strong>8.11</strong>
          </div>
          <small>Dataset units · common scale from 0 to 10</small>
        </div>
        <figcaption>
          <strong>Reproduced Python results</strong>
          <span>244 public sample bills · descriptive comparison</span>
        </figcaption>
      </figure>
    );
  if (kind === "planner")
    return (
      <figure className="evidence-preview">
        <div className="evidence-media planner-outline">
          <p>What changes between the comparisons?</p>
          <div>
            <span>Recorded order</span>
            <b>A → C</b>
            <b>B → D</b>
          </div>
          <div>
            <span>Resequenced</span>
            <b>C → A</b>
            <b>D → B</b>
          </div>
          <div>
            <span>Reshared</span>
            <b>A → B</b>
            <b>C → D</b>
          </div>
          <small>Two example technicians · four illustrative visits</small>
        </div>
        <figcaption>
          <strong>Comparison design</strong>
          <span>Illustration only · assessment records remain private</span>
        </figcaption>
      </figure>
    );
  const outline = outlines[kind];
  if (!outline) return null;
  return (
    <figure className={`evidence-preview evidence-preview--${kind}`}>
      <div className="evidence-media evidence-outline">
        <p>{outline.title}</p>
        <ol>
          {outline.steps.map(([title, detail], i) => (
            <li key={title}>
              <span aria-hidden="true">0{i + 1}</span>
              <div>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <figcaption>
        <strong>What the project contains</strong>
        <span>{outline.note}</span>
      </figcaption>
    </figure>
  );
}
