import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { PageShell } from "../components/PageShell";
import { NoticiaCard } from "../components/NoticiaCard";
import { noticiasQuery } from "../lib/noticias";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Noticias y actividades — ECA" },
      { name: "description", content: "Todas las noticias y actividades del Espacio Cultural Asociativo." },
      { property: "og:title", content: "Noticias y actividades — ECA" },
      { property: "og:description", content: "Todas las noticias y actividades del Espacio Cultural Asociativo." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(noticiasQuery()),
  component: Noticias,
});

function Noticias() {
  const { data } = useSuspenseQuery(noticiasQuery());
  const [visibles, setVisibles] = useState(6);

  return (
    <PageShell
      kicker="Noticias"
      title="Actividades en desarrollo"
      lead="Lo que está pasando en el ECA y en las organizaciones que lo componen."
    >
      <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
        {data.slice(0, visibles).map((n) => (
          <NoticiaCard key={n.slug} n={n} />
        ))}
      </div>
      {visibles < data.length && (
        <div className="mt-14 text-center">
          <button
            onClick={() => setVisibles((v) => v + 6)}
            className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-ink-soft"
          >
            Mostrar más
          </button>
        </div>
      )}
    </PageShell>
  );
}
