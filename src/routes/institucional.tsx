import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import videoThumb from "../assets/video-thumb.jpg";

export const Route = createFileRoute("/institucional")({
  head: () => ({
    meta: [
      { title: "Institucional — ECA" },
      {
        name: "description",
        content: "Misión, visión y video institucional del Espacio Cultural Asociativo.",
      },
      { property: "og:title", content: "Institucional — ECA" },
      {
        property: "og:description",
        content: "Misión, visión y video institucional del Espacio Cultural Asociativo.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/institucional" },
    ],
    links: [{ rel: "canonical", href: "/institucional" }],
  }),
  component: Institucional,
});

function Institucional() {
  return (
    <PageShell
      kicker="Institucional"
      title="Sentar las bases, construir futuro"
      lead="El ECA es un dispositivo de vinculación de organizaciones de base territorial para la generación y el fortalecimiento de acciones de impacto comunitario."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <img
            src={videoThumb}
            alt="Video institucional del ECA"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full rounded-2xl object-cover"
          />
        </div>
        <div className="space-y-8 lg:col-span-5">
          <div>
            <h2 className="font-display text-3xl tracking-tight">Misión</h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Generar y fortalecer acciones de impacto comunitario mediante el trabajo asociativo
              entre organizaciones de base territorial, en un proceso virtuoso de mejora,
              consolidación y proyección de espacios de trabajo genuinos y democráticos.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-tight">Visión</h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Un territorio donde la cultura, la educación, el trabajo comunitario y la producción
              se sostengan entre todas las organizaciones, en diálogo con las economías regionales y
              las distintas formas de gobernanza.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
