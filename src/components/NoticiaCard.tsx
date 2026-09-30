import { Link } from "@tanstack/react-router";
import type { Noticia } from "../lib/noticias";

export function NoticiaCard({ n }: { n: Noticia }) {
  return (
    <Link to="/noticias/$slug" params={{ slug: n.slug }} className="group block">
      {n.imagen && (
        <img
          src={n.imagen}
          alt={n.titulo}
          loading="lazy"
          width={1024}
          height={768}
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
      )}
      {n.volanta && (
        <p className="mt-4 font-mono text-[11px] tracking-widest uppercase text-primary">{n.volanta}</p>
      )}
      <h3 className="mt-2 font-display text-2xl tracking-tight transition-colors group-hover:text-primary">
        {n.titulo}
      </h3>
      <p className="mt-2 text-sm text-pretty text-muted-foreground">{n.extracto}</p>
    </Link>
  );
}
