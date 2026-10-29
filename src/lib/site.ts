export const site = {
  name: "Instituto Servir",
  url: "https://institutoservirbethel.com.br",
  tagline: "Transformando vidas com acolhimento, educação e esperança.",
  description:
    "Instituto social em Sobradinho II, Distrito Federal, que transforma vidas por meio de acolhimento, capacitação, educação e projetos sociais para famílias em situação de vulnerabilidade.",
  cnpj: "36.629.410/0001-43",
  pixKey: "36.629.410/0001-43",
  phoneDisplay: "(61) 99518-3709",
  whatsappNumber: "5561995183709",
  email: "institutoservirdf@gmail.com",
  address: "Setor Habitacional Contagem (Sobradinho II) – DF",
  cep: "73.090-165",
  instagram: "https://www.instagram.com/institutoservirr/",
  facebook: "https://www.facebook.com/InstitutoServirBSB",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const nav = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/projetos", label: "Projetos" },
  { href: "/transparencia", label: "Transparência" },
  { href: "/contato", label: "Contato" },
] as const;
