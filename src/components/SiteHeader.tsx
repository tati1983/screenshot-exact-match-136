import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { IG_URL, YT_URL } from "../lib/links";
import { InstagramIcon, YoutubeIcon } from "./SocialIcons";

const NAV = [
  { to: "/institucional", label: "INSTITUCIONAL" },
  { to: "/noticias", label: "NOTICIAS" },
  { to: "/comunidad", label: "COMUNIDAD" },
  { to: "/organizaciones", label: "ORGANIZACIONES" },
] as const;

const iconBtn =
  "grid size-9 place-items-center rounded-md border border-border transition-colors hover:bg-ink hover:text-background";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <span className="grid size-9 place-items-center rounded-md bg-ink font-display text-lg leading-none text-background">
              E
            </span>
            <span className="font-display text-xl leading-none tracking-tight">
              ECA<span className="text-primary">.</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <a href={IG_URL} target="_blank" rel="noreferrer" className={iconBtn} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={YT_URL} target="_blank" rel="noreferrer" className={iconBtn} aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-7">
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
            <Link to="/buscador" className={iconBtn} aria-label="Buscador">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </Link>
            <button onClick={() => setOpen((v) => !v)} className={`${iconBtn} lg:hidden`} aria-label="Menú">
              <span className="font-mono text-sm">≡</span>
            </button>
          </div>
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
          </ul>
        </nav>
      )}
    </header>
  );
}
