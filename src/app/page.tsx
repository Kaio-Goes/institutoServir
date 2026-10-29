import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import {
  Cloud,
  Heart,
  Sparkle,
  Squiggle,
  Star,
  Wave,
} from "@/components/Decor";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import {
  ButtonLink,
  Photo,
  ProjectCard,
  SectionHeading,
} from "@/components/ui";
import { galleryPhotos, projects } from "@/lib/projects";
import { whatsappLink } from "@/lib/site";

const facts = [
  { value: 60, label: "mulheres atendidas na Roda de Conversa" },
  { value: projects.length, label: "projetos e ações sociais" },
  { value: 5, label: "documentos oficiais abertos ao público" },
];

const marquee = [
  "Amor ao próximo",
  "Solidariedade",
  "Educação",
  "Acolhimento",
  "Cultura",
  "Inclusão",
  "Transparência",
  "Esperança",
];

const ways = [
  {
    icon: "heart" as const,
    title: "Doe via PIX",
    text: "Qualquer valor vira sopa quente, cesta básica, material e cuidado para quem precisa.",
    href: "/doacao",
    cta: "Quero doar",
  },
  {
    icon: "whatsapp" as const,
    title: "Seja voluntário",
    text: "Use seu tempo e seus talentos para transformar vidas. Há lugar para você na nossa equipe.",
    href: whatsappLink("Olá! Quero ser voluntário(a) no Instituto Servir."),
    cta: "Chamar no WhatsApp",
    external: true,
  },
  {
    icon: "mail" as const,
    title: "Seja parceiro",
    text: "Empresas, igrejas e instituições podem apoiar projetos e ampliar o impacto na comunidade.",
    href: "/contato",
    cta: "Falar com a equipe",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute -left-32 top-10 h-96 w-96 animate-blob bg-brand/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 bottom-0 h-96 w-96 animate-blob bg-pop/25 blur-3xl"
          aria-hidden="true"
        />

        <Cloud className="absolute left-[6%] top-16 hidden h-14 w-24 animate-float-slow text-surface-2 sm:block" />
        <Cloud className="absolute right-[40%] top-8 hidden h-10 w-16 animate-float text-surface-2 md:block" />
        <Star className="absolute left-[44%] top-24 h-9 w-9 animate-twinkle text-brand" />
        <Sparkle className="absolute bottom-24 left-[8%] h-7 w-7 animate-twinkle text-sky-soft" />
        <Sparkle className="absolute right-[6%] top-1/3 h-6 w-6 animate-twinkle text-sky-soft" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-28 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="rise toon-tag -rotate-2 !px-4 !py-1.5 !text-sm">
              <span className="inline-flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4" />
                Sobradinho II · Distrito Federal
              </span>
            </p>
            <h1 className="rise-2 mt-6 font-display text-5xl font-semibold leading-[1.05] sm:text-7xl">
              <span className="gradient-text">Faça parte dessa</span>
              <span className="relative mt-1 block w-fit text-brand">
                transformação
                <Squiggle className="absolute -bottom-3 left-0 h-4 w-full" />
              </span>
            </h1>
            <p className="rise-3 mt-8 max-w-xl text-lg leading-relaxed text-muted">
              O Instituto Servir transforma vidas por meio do acolhimento, da
              capacitação e da educação, apoiando famílias em situação de
              vulnerabilidade com amor e dignidade.
            </p>
            <div className="rise-3 mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/doacao">
                <Icon name="heart" className="h-5 w-5" />
                Doe agora
              </ButtonLink>
              <ButtonLink href="/projetos" variant="ghost">
                Conheça os projetos
              </ButtonLink>
            </div>
          </div>

          <div className="animate-pop relative">
            <div className="toon-frame relative aspect-[4/3] rotate-2 transition-transform duration-500 hover:rotate-0">
              <Image
                src="/fotos/equipe-2.jpg"
                alt="Equipe do Instituto Servir reunida com a comunidade"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="toon-frame absolute -bottom-10 -left-6 hidden w-44 -rotate-6 animate-float sm:block">
              <Image
                src="/fotos/sopa-entrega-2.jpeg"
                alt="Entrega de sopa às famílias"
                width={400}
                height={300}
                className="h-32 w-full object-cover"
              />
            </div>
            <div className="absolute -right-3 -top-7 flex h-28 w-28 animate-wiggle flex-col items-center justify-center rounded-full border-[3px] border-outline bg-brand text-center text-outline shadow-[4px_4px_0_var(--color-pop)]">
              <span className="font-display text-4xl font-semibold leading-none">
                60
              </span>
              <span className="mt-1 text-[11px] font-extrabold leading-tight">
                mulheres
                <br />
                atendidas
              </span>
            </div>
            <Heart className="absolute -bottom-6 right-10 h-12 w-12 animate-float-slow text-brand-deep" />
          </div>
        </div>
        <Wave className="absolute bottom-[-1px] left-0 text-brand" />
      </section>

      <section
        aria-label="Valores"
        className="overflow-hidden border-b-[3px] border-outline bg-brand py-4 text-outline"
      >
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-2xl font-semibold hover:[animation-play-state:paused]">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((word, i) => (
            <span key={i} className="flex items-center gap-10">
              {word}
              <Star className="h-6 w-6 text-bg" />
            </span>
          ))}
        </div>
      </section>

      <section
        aria-label="Instituto em números"
        className="mx-auto max-w-6xl px-5 py-20"
      >
        <dl className="grid gap-6 sm:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 120}>
              <div className="toon-card p-7 text-center">
                <dt className="font-display text-6xl font-semibold text-brand">
                  <CountUp to={f.value} />
                </dt>
                <dd className="mt-2 font-semibold text-muted">{f.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 lg:grid-cols-2">
        <Reveal from="left" className="relative">
          <Photo
            src="/fotos/criancas.png"
            alt="Crianças atendidas pelo Instituto Servir"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[5/4] -rotate-2"
          />
          <div className="absolute -bottom-6 right-6 rotate-3 rounded-2xl border-[3px] border-outline bg-brand px-5 py-3 font-display text-xl font-semibold text-outline shadow-[4px_4px_0_var(--color-pop)]">
            Amor ao próximo
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Quem somos"
            title="Uma ponte entre necessidades e soluções"
          >
            O Instituto Servir nasceu com um propósito claro: ser instrumento de
            amor ao próximo, cuidado e esperança. Somos uma organização sem fins
            lucrativos que leva educação, cultura, alimentação, apoio emocional
            e assistência comunitária a quem mais precisa.
          </SectionHeading>
          <Reveal delay={150}>
            <ul className="mt-6 flex flex-wrap gap-3">
              {["Solidariedade", "Respeito", "Inclusão", "Transparência"].map(
                (v) => (
                  <li
                    key={v}
                    className="flex items-center gap-2 rounded-full border-2 border-line bg-surface px-4 py-2 font-display font-medium text-ink transition-transform hover:-rotate-3 hover:scale-105"
                  >
                    <Icon name="check" className="h-4 w-4 text-brand" />
                    {v}
                  </li>
                ),
              )}
            </ul>
            <ButtonLink href="/quem-somos" variant="ghost" className="mt-8">
              Nossa história e valores
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-bg-2 py-24">
        <Wave className="absolute left-0 top-[-1px] text-bg" flip />
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Projetos sociais"
            title="Arte, alimento, saúde e educação para todas as idades"
          >
            Cada ação nasce da escuta da comunidade e chega onde a necessidade é
            maior.
          </SectionHeading>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <ButtonLink href="/projetos">
              Ver todos os projetos
              <Icon name="arrow" className="h-5 w-5" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Como ajudar"
          title="Cada gesto é uma semente de esperança"
          align="center"
        >
          Você pode fazer parte de várias formas. Escolha a que cabe na sua
          vida.
        </SectionHeading>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 130}>
              <div className="toon-card group h-full p-8">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-outline bg-brand text-outline transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                  <Icon name={w.icon} className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                  {w.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{w.text}</p>
                {w.external ? (
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-display text-lg font-semibold text-brand transition-all hover:gap-4"
                  >
                    {w.cta}
                    <Icon name="arrow" className="h-5 w-5" />
                  </a>
                ) : (
                  <Link
                    href={w.href}
                    className="mt-6 inline-flex items-center gap-2 font-display text-lg font-semibold text-brand transition-all hover:gap-4"
                  >
                    {w.cta}
                    <Icon name="arrow" className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative bg-bg-2 py-24">
        <Wave className="absolute left-0 top-[-1px] text-bg" flip />
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Galeria"
            title="Momentos que mostram o nosso trabalho"
          />
          <div className="mt-14 grid auto-rows-[170px] grid-cols-2 gap-5 sm:auto-rows-[210px] md:grid-cols-4">
            {galleryPhotos.map((photo, i) => (
              <Reveal
                key={photo.src}
                delay={(i % 4) * 90}
                className={`${i === 0 ? "col-span-2 row-span-2" : ""} ${i === 3 ? "md:row-span-2" : ""}`}
              >
                <Photo
                  src={photo.src}
                  alt={photo.alt}
                  sizes={
                    i === 0
                      ? "(min-width: 768px) 50vw, 100vw"
                      : "(min-width: 768px) 25vw, 50vw"
                  }
                  className={`h-full !shadow-[5px_5px_0_var(--color-pop)] ${
                    i % 2 === 0 ? "rotate-1" : "-rotate-1"
                  } hover:scale-[1.03]`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-24 lg:grid-cols-2">
        <Reveal from="left">
          <div className="relative h-full overflow-hidden rounded-3xl border-[3px] border-outline bg-brand p-10 text-outline shadow-[8px_8px_0_var(--color-pop)]">
            <Sparkle className="absolute right-6 top-6 h-10 w-10 animate-twinkle text-white" />
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Transparência é um compromisso
            </h2>
            <p className="mt-4 text-lg font-semibold leading-relaxed">
              Publicamos termos de fomento, planilhas de custos e projetos
              técnicos para que você acompanhe como cada recurso é aplicado.
            </p>
            <ButtonLink href="/transparencia" variant="light" className="mt-8">
              Ver prestação de contas
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal from="right">
          <div className="toon-frame h-full p-10">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Vamos conversar?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Quer ajudar, receber apoio ou conhecer o instituto? Fale com a
              nossa equipe, respondemos com carinho.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink
                href={whatsappLink("Olá! Vim pelo site do Instituto Servir.")}
                external
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                WhatsApp
              </ButtonLink>
              <ButtonLink href="/contato" variant="ghost">
                Outros contatos
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
