import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { SICSAC_DEF } from "../data/contenido";
import { EMAIL, WHATSAPP } from "../lib/links";
import sicsac1 from "../assets/sicsac-1.jpg";

export const Route = createFileRoute("/comunidad")({
  head: () => ({
    meta: [
      { title: "Comunidad y SICSAC — ECA" },
      {
        name: "description",
        content:
          "SICSAC: estructura de financiación de acciones socioterritoriales del Espacio Cultural Asociativo.",
      },
      { property: "og:title", content: "Comunidad y SICSAC — ECA" },
      {
        property: "og:description",
        content:
          "SICSAC: estructura de financiación de acciones socioterritoriales del Espacio Cultural Asociativo.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/comunidad" },
    ],
    links: [{ rel: "canonical", href: "/comunidad" }],
  }),
  component: Comunidad,
});

function Comunidad() {
  return (
    <PageShell kicker="Comunidad" title="SICSAC" lead={SICSAC_DEF}>
      <div className="grid gap-10 lg:grid-cols-2">
        <img
          src={sicsac1}
          alt="Acciones socioterritoriales del SICSAC"
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full rounded-2xl object-cover"
        />
        <div>
          <h2 className="max-w-[20ch] font-display text-3xl tracking-tight text-balance">
            ¿Te gustaría que vos o tu empresa forme parte del SICSAC?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            El aporte de personas y empresas sostiene acciones socioterritoriales que reducen
            desigualdades y amplían posibilidades hacia toda la comunidad, con énfasis en infancias
            y adolescencias.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Escribinos por WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-ink hover:text-background"
            >
              Escribinos por email
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
