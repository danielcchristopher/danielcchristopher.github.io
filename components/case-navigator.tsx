"use client";
import { useEffect, useState } from "react";
const sections = [
  { id: "question", label: "Question" },
  { id: "approach", label: "Approach" },
  { id: "evidence", label: "Evidence" },
  { id: "implications", label: "Implications" },
  { id: "limits", label: "Limits" },
  { id: "next-iteration", label: "Next iteration" },
  { id: "contribution", label: "Contribution" },
];
export function CaseNavigator() {
  const [active, setActive] = useState("question");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const readingLine = Math.max(130, innerHeight * 0.3);
        let current = sections[0].id;
        for (const section of sections) {
          const target = document.getElementById(section.id);
          if (target && target.getBoundingClientRect().top <= readingLine)
            current = section.id;
        }
        setActive(current);
        frame = 0;
      });
    };
    const resize = new ResizeObserver(update);
    const main = document.getElementById("main-content");
    if (main) resize.observe(main);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <aside className="case-index" aria-label="Case study contents">
      <p>On this page</p>
      <nav>
        {sections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={active === section.id ? "active" : undefined}
            aria-current={active === section.id ? "location" : undefined}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
