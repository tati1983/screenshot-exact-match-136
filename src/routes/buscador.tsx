import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "../components/PageShell";
import { ACTIVIDADES, LINEAS, ORGANIZACIONES } from "../data/contenido";

export const Route = createFileRoute("/buscador")({
  head: () => ({
    meta: [
      { title: "Buscador — ECA" },
      { name: "description", content: "Buscá actividades, organizaciones y líneas de desarrollo del ECA." },
      { property: "og:title", content: "Buscador — ECA" },
      {
        property: "og:description",
        content: "Buscá actividades, organizaciones y líneas de desarrollo del ECA.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/buscador" },
    ],
    links: [{ rel: "canonical", href: "/buscador" }],
  }),
  component: Buscador,
});

type Item = { titulo: string; texto: string; to: "/noticias" | "/organizaciones" | "/institucional" };

function Buscador() {
  const [q, setQ] = useState("");

  const items: Item[] = useMemo(
    () => [
      ...ACTIVIDADES.map((a) => ({ titulo: a.titulo, texto: a.resumen, to: "/noticias" as const })),
      ...ORGANIZACIONES.map((o) => ({
        titulo: o.nombre,
        texto: o.descripcion,
        to: "/organizaciones" as const,
      })),
      ...LINEAS.map((l) => ({ titulo: l.titulo, texto: l.texto, to: "/institucional" as const })),
    ],
    [],
  );

  const term = q.trim().toLowerCase();
  const results = term
    ? items.filter((i) => `${i.titulo} ${i.texto}`.toLowerCase().includes(term))
    : items;

  return (
    <PageShell kicker="Buscador" title="Buscá en el ECA">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Actividades, organizaciones, líneas de desarrollo…"
        className="w-full max-w-xl rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
      />
      <ul className="mt-10 space-y-6">
        {results.map((r) => (
          <li key={r.titulo}>
            <Link to={r.to} className="group block">
              <h2 className="font-display text-2xl tracking-tight transition-colors group-hover:text-primary">
                {r.titulo}
              </h2>
              <p className="mt-1 max-w-[70ch] text-sm text-pretty text-muted-foreground">
                {r.texto}
              </p>
            </Link>
          </li>
        ))}
        {results.length === 0 && (
          <li className="text-sm text-muted-foreground">No encontramos resultados.</li>
        )}
      </ul>
    </PageShell>
  );
}
