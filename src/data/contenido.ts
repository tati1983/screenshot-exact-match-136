import act1 from "../assets/act-1.jpg";
import act2 from "../assets/act-2.jpg";
import act3 from "../assets/act-3.jpg";

export const DEFINICION =
  "El ECA es un dispositivo de vinculación de organizaciones de base territorial para la generación y el fortalecimiento de acciones de impacto comunitario, en un proceso virtuoso de mejora, consolidación y proyección de espacios de trabajo genuinos y democráticos, en diálogo con los procesos de las economías regionales y las distintas formas de gobernanza.";

export const SICSAC_DEF =
  "Estructura de financiación de acciones socioterritoriales tendientes a reducir desigualdades y ampliar posibilidades hacia toda la comunidad, haciendo hincapié en infancias y adolescencias.";

export const LINEAS = [
  {
    n: "01",
    titulo: "Desarrollo artístico / cultural",
    texto:
      "Se materializa en la vinculación de distintos colectivos artístico/culturales de la ciudad, formalizados o no, como así también personas del sector cultural independiente, para el desarrollo de actividades escénicas, formativas y de generación de contenidos, en las distintas áreas artístico-culturales (música, teatro, circo, danza, letras, artes plásticas, audiovisuales y otras).",
  },
  {
    n: "02",
    titulo: "Desarrollo educacional",
    texto:
      "Apunta a la construcción de un proyecto educativo alternativo y asociativo, que interpele a todos los rangos etáreos y coexista entre los modelos de educación tradicional y sociocomunitaria.",
  },
  {
    n: "03",
    titulo: "Desarrollo antropológico / comunitario",
    texto:
      "Se asocia al trabajo comunitario y de fortalecimiento social apuntando hacia la intervención colectiva en cuestiones ambientales, de géneros y diversidades, así como a los diferentes activismos territorializados. Busca condensar su acción e impacto, a la vez que orienta y supervisa el proceso democrático del dispositivo todo.",
  },
  {
    n: "04",
    titulo: "Desarrollo productivo",
    texto:
      "El ECA busca dar trazabilidad y sustentabilidad a todos sus procesos de trabajo, entendiendo que los mismos no sólo generan un impacto directo en las personas participantes y en sus organizaciones, sino también en la economía local y regional.",
  },
] as const;

export const ACTIVIDADES = [
  {
    titulo: "Ciclo de teatro en la plaza",
    fecha: "Actividad en desarrollo",
    resumen: "Funciones al aire libre con colectivos escénicos del territorio.",
    img: act1,
  },
  {
    titulo: "Talleres para infancias y adolescencias",
    fecha: "Actividad en desarrollo",
    resumen: "Formación artística y educativa abierta al barrio.",
    img: act2,
  },
  {
    titulo: "Feria de producción local",
    fecha: "Actividad en desarrollo",
    resumen: "Organizaciones y productores de la economía regional.",
    img: act3,
  },
] as const;

export const ORGANIZACIONES = [
  {
    sigla: "OR1",
    nombre: "Organización 1",
    descripcion: "Descripción breve de la organización y su trabajo en el territorio.",
  },
  {
    sigla: "OR2",
    nombre: "Organización 2",
    descripcion: "Descripción breve de la organización y su trabajo en el territorio.",
  },
  {
    sigla: "OR3",
    nombre: "Organización 3",
    descripcion: "Descripción breve de la organización y su trabajo en el territorio.",
  },
] as const;
