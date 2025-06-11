import NextJS from "../components/icons/NextJS.astro";
import Tailwind from "../components/icons/Tailwind.astro";

export const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
};

export const PROJECTS = [
  {
    title: "Ecommerce",
    description:
      "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
    link: "https://svgl.vercel.app/",
    github: "https://github.com/pheralb/svgl",
    image: "/projects/proj1.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "Ropa",
    description:
      "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    link: "https://adventjs.dev",
    image: "/projects/proj2.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "Relojeria",
    description:
      "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    link: "https://adventjs.dev",
    image: "/projects/proj3.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
];