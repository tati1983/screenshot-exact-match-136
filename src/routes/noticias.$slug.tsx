import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { noticiasQuery } from "../lib/noticias";

export const Route = createFileRoute("/noticias/$slug")({
  loader: async ({ context, params }) => {
    const todas = await context.queryClient.ensureQueryData(noticiasQuery());
    const noticia = todas.find((n) => n.slug === params.slug);
    if (!noticia) throw notFound();
    return { noticia };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Noticia no encontrada — ECA" }, { name: "robots", content: "noindex" }] };
    const n = loaderData.noticia;
    return {
      meta: [
        { title: `${n.titulo} — ECA` },
        { name: "description", content: n.extracto },
        { property: "og:title", content: n.titulo },
        { property: "og:description", content: n.extracto },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/noticias/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/noticias/${params.slug}` }],
    };
  },
  notFoundComponent: NoticiaNoEncontrada,
  component: NoticiaPage,
});

function NoticiaNoEncontrada() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-32 text-center">
      <h1 className="font-display text-4xl tracking-tight">No encontramos esta noticia</h1>
      <Link to="/noticias" className="mt-6 inline-block font-mono text-[11px] tracking-widest uppercase text-primary">
        ← Volver a noticias
      </Link>
    </main>
  );
}

function NoticiaPage() {
  const { noticia } = Route.useLoaderData();

  return (
    <article>
      <section className="relative grid min-h-[80vh] place-items-center overflow-hidden">
        {noticia.imagen && (
          <img src={noticia.imagen} alt={noticia.titulo} className="absolute inset-0 size-full object-cover" />
        )}
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative mx-auto max-w-5xl px-5 text-center">
          {noticia.volanta && (
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">{noticia.volanta}</p>
          )}
          <h1 className="mt-5 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.92] tracking-tight text-balance text-background">
            {noticia.titulo}
          </h1>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="nota-contenido" dangerouslySetInnerHTML={{ __html: noticia.contenido }} />
        <Link to="/noticias" className="mt-12 inline-block font-mono text-[11px] tracking-widest uppercase text-primary hover:underline">
          ← Todas las noticias
        </Link>
      </div>
    </article>
  );
}
