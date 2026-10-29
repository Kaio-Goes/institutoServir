export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  fit?: "cover" | "contain";
  gallery: { src: string; alt: string }[];
  tag: string;
};

export const projects: Project[] = [
  {
    slug: "roda-de-conversa",
    title: "Roda de Conversa",
    tag: "Mulheres · SEJUS/GDF",
    summary:
      "Parceria com a SEJUS/GDF para atender 60 mulheres em situação de vulnerabilidade, com apoio emocional, psicológico, jurídico e cidadania digital.",
    image: "/fotos/roda-de-conversa-1.png",
    imageAlt: "Cartaz do projeto Roda de Conversa para Mulheres, Desabafe Aqui",
    fit: "contain",
    gallery: [],
  },
  {
    slug: "sopa-e-alimentos",
    title: "Sopa e Alimentos",
    tag: "Combate à fome",
    summary:
      "Uma sopa quente, uma cesta básica, um gesto de amor. Levamos alimento, escuta e cuidado às ruas e comunidades.",
    image: "/fotos/sopa-entrega-1.jpeg",
    imageAlt: "Voluntários entregando sopa à comunidade",
    gallery: [
      { src: "/fotos/galinhada.png", alt: "Galinhada solidária" },
      { src: "/fotos/cestas-1.jpg", alt: "Entrega de cestas básicas" },
      { src: "/fotos/sopa-1.jpeg", alt: "Distribuição de sopa" },
    ],
  },
  {
    slug: "oracao-nos-hospitais",
    title: "Oração nos Hospitais",
    tag: "Cuidado e fé",
    summary:
      "Oramos com fé por pacientes, familiares e profissionais da saúde, levando consolo, paz e esperança onde muitos só veem dor.",
    image: "/fotos/oracao-hospital-1.jpeg",
    imageAlt: "Voluntários orando com pacientes em hospital",
    gallery: [
      {
        src: "/fotos/oracao-hospital-2.jpeg",
        alt: "Visita à ala de pediatria",
      },
      { src: "/fotos/oracao-hospital-3.jpeg", alt: "Visita em hospital" },
    ],
  },
  {
    slug: "cultura-e-eventos",
    title: "Eventos culturais e comunitários",
    tag: "Arte e música",
    summary:
      "Música e arte que libertam. Criamos oportunidades para jovens descobrirem talento e propósito, com peças teatrais e eventos nas comunidades.",
    image: "/fotos/peca-teatral.jpeg",
    imageAlt: "Peça teatral apresentada pelo Instituto Servir",
    gallery: [
      { src: "/fotos/arte-rosto.jpeg", alt: "Pintura artística no rosto" },
      { src: "/fotos/peca-2.jpg", alt: "Apresentação teatral" },
      { src: "/fotos/bazar.jpg", alt: "Equipe no bazar solidário" },
    ],
  },
  {
    slug: "templos-fortes",
    title: "Templos Fortes",
    tag: "Esporte · Jiu-jitsu",
    summary:
      "O jiu-jitsu como ferramenta de inclusão social no DF, com acesso gratuito, desenvolvimento pessoal e redução da vulnerabilidade.",
    image: "/fotos/jiujitsu-2.png",
    imageAlt: "Logotipo do projeto de jiu-jitsu Templos Fortes",
    fit: "contain",
    gallery: [],
  },
  {
    slug: "dia-das-criancas",
    title: "Dia das Crianças",
    tag: "Infância",
    summary:
      "Ação especial do instituto para as crianças das comunidades que atendemos, com equipe, voluntários e muito carinho.",
    image: "/fotos/equipe-2.jpg",
    imageAlt:
      "Equipe do Instituto Servir com crianças em ação do Dia das Crianças",
    gallery: [
      { src: "/fotos/doces.jpeg", alt: "Entrega de doces às crianças" },
    ],
  },
];

export const galleryPhotos = [
  {
    src: "/fotos/equipe-2.jpg",
    alt: "Equipe e comunidade reunidas em ação do instituto",
  },
  {
    src: "/fotos/roda-de-conversa-1.png",
    alt: "Roda de conversa com mulheres",
  },
  { src: "/fotos/sopa-entrega-1.jpeg", alt: "Entrega de sopa" },
  { src: "/fotos/oracao-hospital-1.jpeg", alt: "Oração em hospital" },
  { src: "/fotos/peca-teatral.jpeg", alt: "Peça teatral" },
  { src: "/fotos/cestas-1.jpg", alt: "Cestas básicas" },
  { src: "/fotos/criancas.png", alt: "Crianças atendidas pelo instituto" },
  { src: "/fotos/bazar.jpg", alt: "Equipe no bazar solidário" },
];
