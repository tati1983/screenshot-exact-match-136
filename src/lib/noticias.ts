import { queryOptions } from "@tanstack/react-query";
import act1 from "../assets/act-1.jpg";
import act2 from "../assets/act-2.jpg";
import act3 from "../assets/act-3.jpg";
import sicsac1 from "../assets/sicsac-1.jpg";
import sicsac2 from "../assets/sicsac-2.jpg";
import sicsac3 from "../assets/sicsac-3.jpg";
import videoThumb from "../assets/video-thumb.jpg";

/**
 * Dirección del WordPress que administra las noticias (tipo de contenido "noticia",
 * con "show_in_rest" activo). Mientras esté vacía, el sitio muestra noticias de ejemplo.
 * La volanta se toma del campo personalizado "volanta" (ACF).
 */
export const WP_URL = "";

export type Noticia = {
  slug: string;
  titulo: string;
  volanta: string;
  extracto: string;
  imagen: string;
  contenido: string;
  fecha: string;
};

type WpNoticia = {
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  acf?: { volanta?: string };
  _embedded?: { "wp:featuredmedia"?: { source_url: string }[] };
};

const limpiar = (html: string) =>
  html.replace(/<[^>]+>/g, "").replace(/&#8230;|\[&hellip;\]/g, "…").replace(/&nbsp;/g, " ").trim();

async function fetchNoticias(): Promise<Noticia[]> {
  if (!WP_URL) return EJEMPLOS;
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/noticia?_embed&per_page=100`);
  if (!res.ok) throw new Error(`WordPress respondió ${res.status}`);
  const data = (await res.json()) as WpNoticia[];
  return data.map((n) => ({
    slug: n.slug,
    titulo: limpiar(n.title.rendered),
    volanta: n.acf?.volanta ?? "",
    extracto: limpiar(n.excerpt.rendered),
    imagen: n._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
    contenido: n.content.rendered,
    fecha: n.date,
  }));
}

export const noticiasQuery = () =>
  queryOptions({ queryKey: ["noticias"], queryFn: fetchNoticias, staleTime: 60_000 });

const cuerpo = (img: string) => `
<p>Texto de ejemplo. Este contenido se reemplaza automáticamente por el desarrollo de la noticia cargado en WordPress, con encabezados, párrafos e imágenes.</p>
<h2>Un encuentro en el territorio</h2>
<p>Las organizaciones que componen el ECA se reunieron para compartir una jornada de trabajo colectivo, abierta a toda la comunidad.</p>
<img src="${img}" alt="" />
<h2>Próximos pasos</h2>
<p>La actividad continuará en las próximas semanas. Seguí las novedades en nuestras redes.</p>`;

const EJEMPLOS: Noticia[] = [
  ["ciclo-teatro-plaza", "Ciclo de teatro en la plaza", "Funciones al aire libre con colectivos escénicos del territorio.", act1],
  ["talleres-infancias", "Talleres para infancias y adolescencias", "Formación artística y educativa abierta al barrio.", act2],
  ["feria-produccion-local", "Feria de producción local", "Organizaciones y productores de la economía regional.", act3],
  ["mural-colectivo", "Mural colectivo en el centro cultural", "Vecinos y vecinas pintaron juntos una nueva obra.", sicsac1],
  ["musica-y-circo", "Ensayos abiertos de música y circo", "Jóvenes del territorio preparan su muestra anual.", sicsac2],
  ["festival-comunitario", "Festival comunitario de primavera", "Una noche de música, comida y encuentro.", sicsac3],
  ["jornada-organizaciones", "Jornada de organizaciones", "Encuentro de trabajo entre las organizaciones del ECA.", videoThumb],
].map(([slug, titulo, extracto, imagen], i) => ({
  slug,
  titulo,
  extracto,
  imagen,
  volanta: "Actividad en desarrollo",
  contenido: cuerpo(imagen),
  fecha: new Date(2026, 8, 30 - i).toISOString(),
}));
