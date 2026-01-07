import services from "@/lib/services";

export const bannerTexts = {
  brand: "ServiCrep",
  location: {
    label: "Encuentra una ubicación",
    icon: "fas fa-map-marker-alt text-primary me-2",
  },
  email: {
    label: "servicrep04@gmail.com",
    icon: "fas fa-envelope text-primary me-2",
  },
  social: [
    { icon: "fab fa-facebook-f", label: "Facebook", href: "#" },
    { icon: "fab fa-instagram", label: "Instagram", href: "#" },
    { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "#" },
  ],
  nav: [
    { href: "/", label: "Inicio" },
    {
      href: "/nuestros-servicios",
      label: "Servicios",
      dropdown: [
        ...Object.entries(services).map(([, service]) => ({
          href: service.slug,
          label: service.title,
        })),
        { href: "/nuestros-servicios", label: "Ver todos los servicios" },
      ],
    },
    { href: "/colombia", label: "Cobertura" },
    {
      href: "/calidad",
      label: "Calidad",
      dropdown: [
        { href: "/calidad/imparcialidad", label: "Imparcialidad" },
        { href: "/calidad/confidencialidad", label: "Confidencialidad" },
        { href: "/calidad/quejas-y-apelaciones", label: "Quejas y apelaciones" },
      ],
    },
    { href: "/contacto", label: "Contacto" },
  ],
  cta: {
    label: "WhatsApp",
    href: "https://wa.me/573001234567", // Cambia al número real
    icon: "fab fa-whatsapp",
    style: {
      backgroundColor: "#25D366",
      border: "none",
      color: "#fff",
    },
  },
};
