import type { ReactNode } from "react";

export function PageShell({
  kicker,
  title,
  lead,
  children,
}: {
  kicker: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">{kicker}</p>
      <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.9] tracking-tight text-balance">
        {title}
      </h1>
      {lead && (
        <p className="mt-6 max-w-[60ch] text-pretty text-muted-foreground">{lead}</p>
      )}
      <div className="mt-12">{children}</div>
    </main>
  );
}
