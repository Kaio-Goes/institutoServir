import type { Metadata } from "next";
import { CopyPix } from "@/components/CopyPix";
import { Heart } from "@/components/Decor";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, PageHero, Photo } from "@/components/ui";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Faça sua doação",
  description:
    "Doe via PIX para o Instituto Servir e ajude a levar alimento, educação, cultura e acolhimento a famílias do Distrito Federal.",
};

const uses = [
  { title: "Sopa e cestas básicas", text: "Alimento e cuidado para famílias e pessoas em situação de rua." },
  { title: "Aulas e oficinas", text: "Materiais e estrutura para arte, ensino e capacitação." },
  { title: "Acolhimento", text: "Apoio emocional, psicológico e jurídico às mulheres atendidas." },
  { title: "Eventos comunitários", text: "Cultura, música e ações para crianças e idosos." },
];

export default function DoacaoPage() {
  return (
    <>
      <PageHero eyebrow="Faça sua doação" title="Cada doação é uma semente de esperança">
        Sua contribuição chega rápido e sem burocracia, direto na conta do instituto, via PIX.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr]">
        <Reveal from="left">
          <div className="toon-frame p-8 sm:p-10">
            <h2 className="font-display text-4xl font-semibold text-ink">Doe via PIX</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Abra o aplicativo do seu banco, escolha PIX com chave e cole a chave abaixo. Qualquer valor faz
              diferença.
            </p>
            <CopyPix value={site.pixKey} />
            <p className="mt-5 text-sm text-muted">
              Favorecido: Instituto Servir · CNPJ {site.cnpj}. Quer um comprovante ou doar de outra forma?{" "}
              <a
                href={whatsappLink("Olá! Quero fazer uma doação ao Instituto Servir.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand underline underline-offset-2"
              >
                Fale conosco
              </a>
              .
            </p>
          </div>
        </Reveal>

        <Reveal from="right" className="relative">
          <Photo
            src="/fotos/sopa-entrega-2.jpeg"
            alt="Voluntários do Instituto Servir entregando sopa"
            sizes="(min-width: 1024px) 480px, 100vw"
            className="min-h-80 h-full rotate-2"
          />
          <Heart className="absolute -right-4 -top-6 h-14 w-14 animate-float text-brand-deep" />
          <p className="absolute inset-x-4 bottom-4 rounded-2xl border-[3px] border-outline bg-brand px-5 py-3 font-display text-xl font-semibold text-outline">
            Uma sopa quente, uma cesta básica, um gesto de amor.
          </p>
        </Reveal>
      </section>

      <section className="bg-bg-2 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-display text-4xl font-semibold text-ink">Para onde vai a sua doação</h2>
          <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {uses.map((u, i) => (
              <li key={u.title}>
                <Reveal delay={i * 100} className="h-full">
                  <div className="toon-card group h-full p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-outline bg-brand text-outline transition-transform group-hover:-rotate-12 group-hover:scale-110">
                      <Icon name="heart" className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">{u.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{u.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <ButtonLink href="/transparencia" variant="ghost">
              Veja a prestação de contas
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
