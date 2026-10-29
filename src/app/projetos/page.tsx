import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, PageHero, Photo } from "@/components/ui";
import { projects } from "@/lib/projects";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projetos sociais",
  description:
    "Roda de Conversa, Sopa e Alimentos, Oração nos Hospitais, Templos Fortes e mais: conheça os projetos sociais do Instituto Servir.",
};

export default function ProjetosPage() {
  return (
    <>
      <PageHero
        eyebrow="Projetos sociais"
        title="Ações que chegam onde a necessidade é maior"
      >
        Arte, ensino, alimentação, saúde e esporte para todas as idades, com
        aulas gratuitas, eventos culturais e cuidado especial com as famílias
        que atendemos.
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-28 px-5 py-20">
        {projects.map((p, i) => (
          <section
            key={p.slug}
            id={p.slug}
            className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2"
          >
            <Reveal
              from={i % 2 === 1 ? "right" : "left"}
              className={i % 2 === 1 ? "lg:order-2" : ""}
            >
              <Photo
                src={p.image}
                alt={p.imageAlt}
                fit={p.fit}
                sizes="(min-width: 1024px) 560px, 100vw"
                className={`aspect-[4/3] ${i % 2 === 1 ? "rotate-2" : "-rotate-2"}`}
              />
              {p.gallery.length > 0 && (
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {p.gallery.slice(0, 3).map((g, gi) => (
                    <Photo
                      key={g.src}
                      src={g.src}
                      alt={g.alt}
                      sizes="180px"
                      className={`aspect-[4/3] !shadow-[4px_4px_0_var(--color-pop)] ${gi % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
                    />
                  ))}
                </div>
              )}
            </Reveal>
            <Reveal from={i % 2 === 1 ? "left" : "right"}>
              <span className="toon-tag -rotate-2">{p.tag}</span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
                {p.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {p.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href={whatsappLink(
                    `Olá! Quero saber mais sobre o projeto ${p.title}.`,
                  )}
                  external
                  variant="ghost"
                >
                  Saiba mais
                </ButtonLink>
                {(p.slug === "roda-de-conversa" ||
                  p.slug === "templos-fortes") && (
                  <ButtonLink href="/transparencia#projetos">
                    Ver documentos
                  </ButtonLink>
                )}
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </>
  );
}
