import { EMAIL, IG_URL, YT_URL } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-3 sm:px-8">
        <div>
          <span className="font-display text-2xl tracking-tight">
            ECA<span className="text-primary">.</span>
          </span>
          <p className="mt-4 max-w-[30ch] text-sm text-pretty text-background/60">
            Espacio Cultural Asociativo. Un dispositivo de vinculación de organizaciones de base
            territorial.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-background/50">
            Contactos
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="tel:+5493446317963" className="transition-colors hover:text-primary">
                +54 9 3446 317963
              </a>
            </li>
            <li>
              <a href="tel:+5491126416230" className="transition-colors hover:text-primary">
                +54 9 11 2641-6230
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-primary">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-background/50">
            Seguinos
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-md border border-background/20 transition-colors hover:bg-background/10"
              aria-label="Instagram"
            >
              <span className="font-mono text-xs">IG</span>
            </a>
            <a
              href={YT_URL}
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-md border border-background/20 transition-colors hover:bg-background/10"
              aria-label="YouTube"
            >
              <span className="font-mono text-xs">YT</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-5 py-5 font-mono text-[11px] tracking-widest uppercase text-background/40 sm:px-8">
          <span>© {new Date().getFullYear()} ECA — Espacio Cultural Asociativo</span>
          <span>Hecho en el territorio</span>
        </div>
      </div>
    </footer>
  );
}
