import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Photo, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Quem somos",
  description:
    "Conheça a história, a missão, a visão e os valores do Instituto Servir, organização social de Sobradinho II, DF.",
};

const values = [
  {
    title: "Solidariedade",
    text: "Acreditamos na força do apoio mútuo e no cuidado com o próximo.",
  },
  {
    title: "Respeito",
    text: "Valorizamos a diversidade e tratamos cada pessoa com dignidade.",
  },
  {
    title: "Comprometimento",
    text: "Atuamos com responsabilidade e dedicação em todos os nossos projetos.",
  },
  {
    title: "Inclusão",
    text: "Trabalhamos para que todos tenham acesso às mesmas oportunidades.",
  },
  {
    title: "Transparência",
    text: "Mantemos uma atuação ética, clara e aberta com parceiros e beneficiários.",
  },
  {
    title: "Amor ao próximo",
    text: "Todas as nossas ações são guiadas pelo desejo sincero de fazer o bem.",
  },
];

const fronts = [
  "Educação",
  "Cultura",
  "Acolhimento",
  "Apoio à infância",
  "Combate à fome",
];

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Mais do que ajudar, nós caminhamos juntos."
      >
        O Instituto Servir é uma organização sem fins lucrativos dedicada ao
        bem-estar social e ao desenvolvimento humano em Sobradinho II e em
        outras regiões do Distrito Federal.
      </PageHero>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-2">
        <Reveal
          from="left"
          className="space-y-5 text-lg leading-relaxed text-muted"
        >
          <h2 className="font-display text-4xl font-semibold text-ink">
            Nossa história
          </h2>
          <p>
            Acreditamos que é possível transformar vidas oferecendo
            oportunidades reais. Por isso, atuamos em diversas frentes e
            buscamos fortalecer vínculos, despertar talentos e garantir
            dignidade a quem mais precisa.
          </p>
          <p>
            Atendemos crianças, jovens, adultos, idosos e famílias inteiras,
            sempre com um olhar atento às necessidades de cada um. Nosso
            compromisso é construir pontes para um futuro mais justo.
          </p>
          <p>
            Com o engajamento da comunidade, o apoio de voluntários e a
            solidariedade de parceiros, o instituto cresce e impacta vidas com
            transparência, amor e dedicação. Somos movidos pela fé na
            transformação.
          </p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {fronts.map((f) => (
              <li
                key={f}
                className="toon-tag transition-transform hover:-rotate-3 hover:scale-110"
              >
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal from="right">
          <Photo
            src="/fotos/equipe-1.jpg"
            alt="Equipe do Instituto Servir"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[4/3] rotate-2"
          />
        </Reveal>
      </section>

      <section className="relative bg-bg-2 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2">
          <Reveal>
            <article className="toon-card h-full p-9">
              <h2 className="font-display text-3xl font-semibold text-brand">
                Missão
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Promover o desenvolvimento humano e social por meio de ações que
                levem educação, cultura, acolhimento e solidariedade à
                comunidade, oferecendo oportunidades reais, especialmente às
                pessoas em situação de vulnerabilidade.
              </p>
            </article>
          </Reveal>
          <Reveal delay={140}>
            <article className="toon-card h-full p-9">
              <h2 className="font-display text-3xl font-semibold text-brand">
                Visão
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Ser reconhecido como um catalisador de transformação social,
                referência na inclusão de crianças, jovens, famílias e idosos,
                por meio de programas que transformem vidas e fortaleçam laços
                comunitários.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Valores"
          title="O que guia cada ação"
          align="center"
        />
        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.title}>
              <Reveal delay={(i % 3) * 110} className="h-full">
                <div className="toon-card group h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-outline bg-brand text-outline transition-transform group-hover:-rotate-12 group-hover:scale-110">
                    <Icon name="heart" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/projetos">Conheça nossos projetos</ButtonLink>
          <ButtonLink href="/contato" variant="ghost">
            Quero ser voluntário
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
