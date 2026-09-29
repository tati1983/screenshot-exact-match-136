import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { ORGANIZACIONES } from "../data/contenido";

export const Route = createFileRoute("/organizaciones")({
  head: () => ({
    meta: [
      { title: "Organizaciones — ECA" },
      {
        name: "description",
        content: "Organizaciones de base territorial que componen el Espacio Cultural Asociativo.",
      },
      { property: "og:title", content: "Organizaciones — ECA" },
      {
        property: "og:description",
        content: "Organizaciones de base territorial que componen el Espacio Cultural Asociativo.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/organizaciones" },
    ],
    links: [{ rel: "canonical", href: "/organizaciones" }],
  }),
  component: Organizaciones,
});

function Organizaciones() {
  return (
    <PageShell
      kicker="Organizaciones"
      title="Las que componen el ECA"
      lead="Cada organización aporta su recorrido y su trabajo territorial. Reemplazá estos datos con los logos y descripciones reales cuando los tengas."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ORGANIZACIONES.map((o) => (
          <article key={o.sigla} className="rounded-2xl border border-border p-6">
            <span className="grid size-14 place-items-center rounded-lg bg-ink font-display text-lg text-background">
              {o.sigla}
            </span>
            <h2 className="mt-5 font-display text-xl tracking-tight">{o.nombre}</h2>
            <p className="mt-3 text-sm text-pretty text-muted-foreground">{o.descripcion}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
