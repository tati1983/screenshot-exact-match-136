import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { to: "/institucional", label: "INSTITUCIONAL" },
  { to: "/noticias", label: "NOTICIAS" },
  { to: "/comunidad", label: "COMUNIDAD" },
  { to: "/organizaciones", label: "ORGANIZACIONES" },
] as const;

export const IG_URL = "https://instagram.com";
export const YT_URL = "https://youtube.com";
export const EMAIL = "eca.espacioculturalasociativo@gmail.com";
export const WHATSAPP = "https://wa.me/5493446317963";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md bg-ink font-display text-lg leading-none text-background">
            E
          </span>
          <span className="font-display text-xl leading-none tracking-tight">
            ECA<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] font-medium tracking-wide lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/buscador"
            className="hidden size-9 place-items-center rounded-md border border-border transition-colors hover:bg-ink hover:text-background sm:grid"
            aria-label="Buscador"
          >
            <span className="font-mono text-sm">⌕</span>
          </Link>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="grid size-9 place-items-center rounded-md border border-border transition-colors hover:bg-ink hover:text-background"
            aria-label="Instagram"
          >
            <span className="font-mono text-xs">IG</span>
          </a>
          <a
            href={YT_URL}
            target="_blank"
            rel="noreferrer"
            className="grid size-9 place-items-center rounded-md border border-border transition-colors hover:bg-ink hover:text-background"
            aria-label="YouTube"
          >
            <span className="font-mono text-xs">YT</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-md border border-border transition-colors hover:bg-ink hover:text-background lg:hidden"
            aria-label="Menú"
          >
            <span className="font-mono text-sm">≡</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <ul className="space-y-3 text-[13px] font-medium tracking-wide">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} onClick={() => setOpen(false)} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/buscador" onClick={() => setOpen(false)} className="hover:text-primary">
                BUSCADOR
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
