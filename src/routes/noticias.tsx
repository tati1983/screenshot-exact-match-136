import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { ACTIVIDADES } from "../data/contenido";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Noticias y actividades — ECA" },
      {
        name: "description",
        content: "Actividades en desarrollo y novedades del Espacio Cultural Asociativo.",
      },
      { property: "og:title", content: "Noticias y actividades — ECA" },
      {
        property: "og:description",
        content: "Actividades en desarrollo y novedades del Espacio Cultural Asociativo.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <PageShell
      kicker="Noticias"
      title="Actividades en desarrollo"
      lead="Lo que está pasando en el ECA y en las organizaciones que lo componen."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {ACTIVIDADES.map((a) => (
          <article key={a.titulo}>
            <img
              src={a.img}
              alt={a.titulo}
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <p className="mt-4 font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
              {a.fecha}
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight">{a.titulo}</h2>
            <p className="mt-2 text-sm text-pretty text-muted-foreground">{a.resumen}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
