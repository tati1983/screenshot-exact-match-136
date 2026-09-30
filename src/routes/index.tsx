import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroMural from "../assets/hero-mural.jpg";
import sicsac1 from "../assets/sicsac-1.jpg";
import sicsac2 from "../assets/sicsac-2.jpg";
import sicsac3 from "../assets/sicsac-3.jpg";
import videoThumb from "../assets/video-thumb.jpg";
import { ACTIVIDADES, DEFINICION, LINEAS, ORGANIZACIONES, SICSAC_DEF } from "../data/contenido";
import { EMAIL, IG_URL, WHATSAPP, YT_URL } from "../lib/links";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ECA — Un dispositivo para construir comunidad" },
      {
        name: "description",
        content:
          "El Espacio Cultural Asociativo vincula organizaciones de base territorial para generar acciones de impacto comunitario.",
      },
      { property: "og:title", content: "ECA — Un dispositivo para construir comunidad" },
      {
        property: "og:description",
        content:
          "El Espacio Cultural Asociativo vincula organizaciones de base territorial para generar acciones de impacto comunitario.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const CONCEPTOS = [
  {
    titulo: ["Espacio Cultural Asociativo.", "Un dispositivo para", "construir comunidad."],
    nota: {
      titulo: "Descripción del dispositivo",
      texto:
        "El ECA articula organizaciones de base territorial, colectivos y personas del sector independiente en una misma estructura de trabajo. No es un edificio ni una institución cerrada: es un dispositivo que vincula, ordena y potencia lo que ya existe en el territorio, generando condiciones para que cada acción tenga mayor alcance e impacto comunitario.",
    },
  },
  {
    titulo: ["Diversas comunidades,", "un sólo", "objetivo."],
    nota: {
      titulo: "Objetivo y fundamentación",
      texto:
        "Cada organización trae su historia, su territorio y su forma de trabajo. El ECA no las homogeneiza: las vincula alrededor de un objetivo común, el impacto comunitario. Esa diversidad es la fundamentación misma del dispositivo, porque permite abordar lo artístico, lo educativo, lo comunitario y lo productivo de manera integral y democrática.",
    },
  },
  {
    titulo: ["Sentar las bases,", "construir", "futuro."],
    nota: {
      titulo: "Misión y visión",
      texto:
        "Misión: generar y fortalecer acciones de impacto comunitario en un proceso virtuoso de mejora, consolidación y proyección de espacios de trabajo genuinos y democráticos. Visión: un territorio donde la cultura, la educación, el trabajo comunitario y la producción se sostengan colectivamente, en diálogo con las economías regionales y las distintas formas de gobernanza.",
    },
  },
];

const SICSAC_IMGS = [sicsac1, sicsac2, sicsac3];

function Index() {
  const [slide, setSlide] = useState(0);
  const [nota, setNota] = useState<null | { titulo: string; texto: string }>(null);
  const [sic, setSic] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % CONCEPTOS.length), 7000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setSic((s) => (s + 1) % SICSAC_IMGS.length), 4000);
    return () => clearInterval(id);
  }, []);

  const actual = CONCEPTOS[slide] ?? CONCEPTOS[0]!;

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroMural}
          alt="Mural comunitario y encuentro en el barrio"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/50 to-ink/30" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-5 pt-24 pb-20 sm:px-8">
          <p className="mb-5 font-mono text-[11px] tracking-[0.3em] uppercase text-primary">
            Espacio Cultural Asociativo
          </p>
          <button
            key={slide}
            onClick={() => setNota(actual.nota)}
            className="max-w-[18ch] animate-[rise_0.7s_var(--ease-soft)_both] text-left font-display text-[clamp(2.4rem,8vw,6.5rem)] leading-[0.9] tracking-tight text-background"
          >
            {actual.titulo.map((linea, i) => (
              <span key={linea} className={i === 1 ? "block text-primary" : "block"}>
                {linea}
              </span>
            ))}
            <span className="mt-6 block font-mono text-[11px] tracking-[0.25em] uppercase text-background/70">
              Leer la nota →
            </span>
          </button>

          <div className="mt-10 flex gap-2">
            {CONCEPTOS.map((c, i) => (
              <button
                key={c.nota.titulo}
                onClick={() => setSlide(i)}
                aria-label={c.nota.titulo}
                className={`h-1 w-12 rounded-full transition-colors ${
                  i === slide ? "bg-primary" : "bg-background/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DEFINICIÓN */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              ¿Qué es el ECA?
            </p>
          </div>
          <div className="lg:col-span-9">
            <blockquote className="max-w-[34ch] font-display text-[clamp(1.5rem,3.4vw,2.8rem)] leading-[1.08] tracking-tight text-balance">
              “{DEFINICION}”
            </blockquote>
          </div>
        </div>
      </section>

      {/* LÍNEAS DE DESARROLLO */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <h2 className="mb-8 font-display text-4xl tracking-tight sm:text-5xl">
          Líneas de desarrollo
        </h2>
        <div className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {LINEAS.map((l) => (
            <div key={l.n} className="bg-background p-6">
              <span className="font-mono text-[11px] text-primary">{l.n}</span>
              <h3 className="mt-4 font-display text-2xl tracking-tight">{l.titulo}</h3>
              <p className="mt-3 text-sm text-pretty text-muted-foreground">{l.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SICSAC */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <h2 className="mb-8 max-w-[20ch] font-display text-[clamp(1.8rem,4vw,3rem)] leading-[0.95] tracking-tight text-balance">
          ¿Cómo se financia este esquema de trabajo?
        </h2>
        <div className="relative overflow-hidden rounded-3xl bg-ink text-background">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary">
                SICSAC
              </p>
              <p className="mt-5 max-w-[46ch] text-pretty text-background/80">{SICSAC_DEF}</p>
              <h3 className="mt-10 max-w-[20ch] font-display text-[clamp(1.4rem,2.6vw,2.2rem)] leading-[1] tracking-tight text-balance">
                ¿Te gustaría que vos o tu empresa forme parte del SICSAC?
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/comunidad"
                  className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Saber más
                </Link>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-background/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-background/10"
                >
                  Escribinos por WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center rounded-full border border-background/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-background/10"
                >
                  Escribinos por email
                </a>
              </div>
            </div>
            <div className="relative min-h-[320px]">
              {SICSAC_IMGS.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="Acciones socioterritoriales del SICSAC"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
                    i === sic ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Actividades en desarrollo
          </h2>
          <Link
            to="/noticias"
            className="shrink-0 font-mono text-[11px] tracking-widest uppercase text-primary hover:underline"
          >
            Saber más →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ACTIVIDADES.map((a) => (
            <Link key={a.titulo} to="/noticias" className="group">
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
              <h3 className="mt-2 font-display text-2xl tracking-tight transition-colors group-hover:text-primary">
                {a.titulo}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">En Instagram</h2>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-mono text-[11px] tracking-widest uppercase text-primary hover:underline"
          >
            Ver perfil →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[sicsac1, sicsac2, sicsac3, videoThumb].map((src) => (
            <a key={src} href={IG_URL} target="_blank" rel="noreferrer">
              <img
                src={src}
                alt="Publicación de Instagram del ECA"
                loading="lazy"
                width={512}
                height={512}
                className="aspect-square w-full rounded-lg object-cover transition-opacity hover:opacity-80"
              />
            </a>
          ))}
        </div>
      </section>

      {/* ORGANIZACIONES */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <h2 className="mb-8 font-display text-4xl tracking-tight sm:text-5xl">
          Organizaciones que componen el ECA
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ORGANIZACIONES.map((o) => (
            <Link
              key={o.sigla}
              to="/organizaciones"
              className="rounded-2xl border border-border p-6 transition-colors hover:border-primary"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-lg bg-ink font-display text-base text-background">
                  {o.sigla}
                </span>
                <span className="font-display text-xl tracking-tight">{o.nombre}</span>
              </div>
              <p className="mt-4 text-sm text-pretty text-muted-foreground">{o.descripcion}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* VIDEO INSTITUCIONAL */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <img
              src={videoThumb}
              alt="Video institucional del ECA"
              loading="lazy"
              width={1280}
              height={720}
              className="aspect-video w-full rounded-2xl object-cover"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              Institucional
            </p>
            <h2 className="mt-4 max-w-[14ch] font-display text-4xl tracking-tight text-balance">
              Conocé el dispositivo en video
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Un recorrido por las líneas de desarrollo, las organizaciones y el trabajo en el
              territorio.
            </p>
            <a
              href={YT_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-ink-soft"
            >
              Ver en YouTube
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO + SUMATE */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              Contacto
            </p>
            <h2 className="mt-4 max-w-[18ch] font-display text-4xl tracking-tight text-balance">
              ¿Tenés alguna pregunta o querés conocer más del dispositivo?
            </h2>
            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const asunto = `Consulta de ${String(f.get("nombre") ?? "")}`;
                const cuerpo = `${String(f.get("mensaje") ?? "")}\n\nEmail: ${String(f.get("email") ?? "")}`;
                window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
              }}
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="mensaje">
                  Tu pregunta
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  placeholder="Contanos qué querés saber"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Enviar pregunta
              </button>
            </form>
          </div>

          <div className="rounded-3xl bg-ink p-8 text-background sm:p-10">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary">Sumate</p>
            <h2 className="mt-4 max-w-[18ch] font-display text-3xl tracking-tight text-balance">
              ¿Querés enterarte de nuestras actividades?
            </h2>
            <form
              className="mt-6 flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Suscripción a novedades")}&body=${encodeURIComponent(`Quiero sumarme a la lista de correos: ${String(f.get("mail") ?? "")}`)}`;
              }}
            >
              <input
                name="mail"
                type="email"
                required
                placeholder="Tu email"
                className="w-full rounded-lg border border-background/20 bg-background/5 px-3 py-2.5 text-sm placeholder:text-background/40 focus:ring-2 focus:ring-primary/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Sumarme a la lista de mails
              </button>
            </form>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-background/25 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-background/10"
              >
                Comunidad de WhatsApp
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-background/25 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-background/10"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NOTA MODAL */}
      {nota && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/70 p-5 backdrop-blur-sm"
          onClick={() => setNota(null)}
        >
          <div
            className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-background p-8 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary">Nota</p>
            <h3 className="mt-4 font-display text-3xl tracking-tight">{nota.titulo}</h3>
            <p className="mt-5 text-pretty text-muted-foreground">{nota.texto}</p>
            <button
              onClick={() => setNota(null)}
              className="mt-8 inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-ink-soft"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
