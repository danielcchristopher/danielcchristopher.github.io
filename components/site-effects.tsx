"use client";
import { useEffect, useRef } from "react";

export function SiteEffects() {
  const spotlight = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const light = spotlight.current;
    if (!light) return;
    const preference = matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    let x = 0;
    let y = 0;
    const hide = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      delete light.dataset.active;
    };
    const move = (event: PointerEvent) => {
      if (
        !preference.matches ||
        document.hidden ||
        event.pointerType === "touch"
      )
        return;
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        light.style.setProperty("--spotlight-x", `${x}px`);
        light.style.setProperty("--spotlight-y", `${y}px`);
        light.dataset.active = "true";
        frame = 0;
      });
    };
    const leave = (event: PointerEvent) => {
      if (!event.relatedTarget) hide();
    };
    const visibility = () => {
      if (document.hidden) hide();
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerout", leave);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("blur", hide);
    preference.addEventListener("change", hide);
    return () => {
      hide();
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerout", leave);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("blur", hide);
      preference.removeEventListener("change", hide);
    };
  }, []);
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
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span />
      </div>
      <div ref={spotlight} className="cursor-spotlight" aria-hidden="true" />
    </>
  );
}
