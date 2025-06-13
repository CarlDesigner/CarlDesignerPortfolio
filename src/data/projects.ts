import NextJS from "../components/icons/NextJS.astro";
import Tailwind from "../components/icons/Tailwind.astro";
import Shopify from "../components/icons/Shopify.astro";
import Astro from "../components/icons/Astro.astro";
import Wordpress from "../components/icons/Wordpress.astro";
import Woo from "../components/icons/Woo.astro";
import Elementor from "../components/icons/Elementor.astro";
import React from "../components/icons/React.astro";
import Firebase from "../components/icons/Firebase.astro";
import Mercadop from "../components/icons/Mercadop.astro";
import Javascript from "../components/icons/Javascript.astro";
import Cloudflare from "../components/icons/Cloudflare.astro";
import Tiktok from "../components/icons/Tiktok.astro";
import Bootstrap from "../components/icons/Bootstrap.astro";
import Strapi from "../components/icons/Strapi.astro";


export const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#000000] text-white",
    icon: Tailwind,
  },
  SHOPIFY: {
    name: "Shopify",
    class: "bg-[#000000] text-white",
    icon: Shopify,
  },
  ASTRO: {
    name: "Astro",
    class: "bg-[#000000] text-white",
    icon: Astro,
  },
  WORDPRESS: {
    name: "Wordpress",
    class: "bg-[#00000] text-white",
    icon: Wordpress,
  },
  WOO: {
    name: "Woocommerce",
    class: "bg-[#000000] text-white",
    icon: Woo,
  },
  ELEMENTOR: {
    name: "Elementor",
    class: "bg-[#000000] text-white",
    icon: Elementor,
  },
  REACT: {
    name: "React",
    class: "bg-[#000000] text-white",
    icon: React,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-[#000000] text-white",
    icon: Firebase,
  },
  MERCADOP: {
    name: "Mercado Pago",
    class: "bg-[#000000] text-white",
    icon: Mercadop,
  },
  JAVASCRIPT: {
    name: "Javascript",
    class: "bg-[#000000] text-white",
    icon: Javascript,
  },
  CLOUDFLARE: {
    name: "Cloudflare",
    class: "bg-[#000000] text-white",
    icon: Cloudflare,
  },
  TIKTOK: {
    name: "Tiktok Pixel",
    class: "bg-[#000000] text-white",
    icon: Tiktok,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class: "bg-[#000000] text-white",
    icon: Bootstrap,
  },
  STRAPI: {
    name: "Strapi",
    class: "bg-[#000000] text-white",
    icon: Strapi,
  },
};

export const PROJECTS = [
  {
    title: "Inbasik – Tienda de moda sostenible",
    description:
      "E‑commerce para Inbasik, una marca de moda urbana sostenible. Diseño moderno y navegación fluida que optimiza la experiencia de compra desde la selección hasta el checkout.",
    link: "https://inbasik.com/",
    /* github: "https://github.com/pheralb/svgl", */
    image: "/projects/proj2.webp",
    tags: [TAGS.SHOPIFY, TAGS.ASTRO, TAGS.TAILWIND, TAGS.JAVASCRIPT],
  },
  {
    title: "La Relojería Colombia",
    description:
      "La Relojería, tienda especializada en relojes originales. Diseño elegante y navegación clara, con catálogo por marcas y categorías, fichas de producto detalladas y un proceso de compra ágil. Desarrollado con WordPress, WooCommerce, Tailwind CSS y pasarela de pagos Wompi, con integración de base de datos para gestión de productos e inventario.",
    link: "https://larelojeriaco.com.co/",
    image: "/projects/proj1.webp",
    tags: [TAGS.WORDPRESS, TAGS.WOO, TAGS.CLOUDFLARE, TAGS.TIKTOK],
  },
  {
    title: "PC Masters Bogotá",
    description:
      "E‑commerce para PC Masters Bogotá, tienda de PCs y componentes gamer. Desarrollado con WordPress, WooCommerce y Elementor, utilizando librerías especializadas en comercio electrónico para lograr una tienda dinámica, con configurador de equipos, navegación por categorías y gestión eficiente de productos e inventario.",
    link: "https://pcmastersbogota.com.co/es_es/",
    image: "/projects/proj4.webp",
    tags: [TAGS.WOO, TAGS.ELEMENTOR, TAGS.MERCADOP, TAGS.BOOTSTRAP],
  },
  {
    title: "Relojeria",
    description:
      "E‑commerce desarrollado para Luryx, marca nacional con presencia física y digital. La tienda ofrece una navegación clara por categorías, productos destacados y funciones como carrito, comparador y filtros inteligentes. esarrollada con WordPress, WooCommerce y Elementor, integrando librerías de comercio ectrónico para una experiencia de compra moderna y eficiente.",
    link: "https://luryx.com.co/",
    image: "/projects/proj3.webp",
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.FIREBASE, TAGS.STRAPI],
  },
];