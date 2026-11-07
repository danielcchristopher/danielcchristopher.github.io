"use client";
import { useEffect } from "react";

export function SiteEffects() {
  useEffect(() => {
    let frame = 0;
    const revealTarget = (hash: string) => {
      let target: HTMLElement | null;
      try {
        target = document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch {
        return;
      }
      if (!target) return;
      let ancestor: HTMLElement | null = target;
      while (ancestor) {
        if (ancestor instanceof HTMLDetailsElement) ancestor.open = true;
        ancestor = ancestor.parentElement;
      }
      requestAnimationFrame(() => target?.scrollIntoView({ block: "start" }));
    };
    const revealHash = () => {
      if (location.hash) revealTarget(location.hash);
    };
    const revealAnchor = (event: MouseEvent) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.defaultPrevented
      )
        return;
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
          : null;
      if (link) revealTarget(link.getAttribute("href") ?? "");
    };
    const navigation = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (navigation?.type !== "back_forward") revealHash();
    const progress = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const available = document.documentElement.scrollHeight - innerHeight;
        document.documentElement.style.setProperty(
          "--scroll-progress",
          String(available > 0 ? Math.min(1, scrollY / available) : 0),
        );
        frame = 0;
      });
    };
    progress();
    window.addEventListener("scroll", progress, { passive: true });
    window.addEventListener("resize", progress);
    window.addEventListener("hashchange", revealHash);
    document.addEventListener("click", revealAnchor);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", progress);
      window.removeEventListener("resize", progress);
      window.removeEventListener("hashchange", revealHash);
      document.removeEventListener("click", revealAnchor);
    };
  }, []);
  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  );
}
