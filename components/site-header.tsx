"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NativeLink } from "@/components/native-link";
import { PortfolioCommand } from "@/components/portfolio-command";
import { ThemeSwitch } from "@/components/theme-switch";

const navigation = [
  { label: "Projects", href: "/work", detail: "Apps, campaigns and research" },
  { label: "About", href: "/profile", detail: "My background and experience" },
  { label: "Contact", href: "/contact", detail: "Email, LinkedIn and CV" },
];
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
  }, [open]);
  function current(href: string) {
    const p = pathname?.replace(/\/$/, "");
    if (href === "/work") return !!p && p !== "/profile" && p !== "/contact";
    return p === href;
  }
  return (
    <>
      <header className="portfolio-header">
        <div className="shell portfolio-header-inner">
          <NativeLink
            href="/"
            className="portfolio-wordmark"
            aria-label="Daniel Christopher home"
          >
            Daniel Christopher<span>Portfolio</span>
          </NativeLink>
          <nav className="portfolio-desktop-nav" aria-label="Main navigation">
            {navigation.map((n) => (
              <NativeLink
                key={n.href}
                href={n.href}
                aria-current={current(n.href) ? "page" : undefined}
              >
                {n.label}
              </NativeLink>
            ))}
          </nav>
          <div className="portfolio-header-actions">
            <ThemeSwitch />
            <PortfolioCommand onOpen={() => setOpen(false)} />
            <button
              type="button"
              className="portfolio-menu-trigger"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen(!open)}
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      <dialog
        className="portfolio-menu"
        id="site-menu"
        ref={dialog}
        aria-label="Main menu"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <div className="portfolio-menu-top">
          <span>Daniel Christopher</span>
          <button type="button" onClick={() => setOpen(false)}>
            Close menu <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {navigation.map((n, i) => (
            <NativeLink
              key={n.href}
              href={n.href}
              aria-current={current(n.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="menu-number">0{i + 1}</span>
              <span>
                <strong>{n.label}</strong>
                <small>{n.detail}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </NativeLink>
          ))}
        </nav>
        <p>Manchester, UK · English & German</p>
      </dialog>
    </>
  );
}
