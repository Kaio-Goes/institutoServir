import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Instituto Servir pelo WhatsApp, e-mail ou redes sociais. Seja voluntário, doe ou conheça nossos projetos em Sobradinho II, DF.",
};

const channels = [
  {
    icon: "whatsapp" as const,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappLink("Olá! Vim pelo site do Instituto Servir."),
  },
  { icon: "mail" as const, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
  { icon: "instagram" as const, label: "Instagram", value: "@institutoservirr", href: site.instagram },
  { icon: "facebook" as const, label: "Facebook", value: "InstitutoServirBSB", href: site.facebook },
];

const row =
  "flex items-center gap-4 rounded-2xl border-[3px] border-outline bg-surface p-4 shadow-[4px_4px_0_var(--color-pop)]";
const bubble =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-outline bg-brand text-outline";

export default function ContatoPage() {
  return (
    <>
      <PageHero eyebrow="Contato" title="Vamos transformar vidas juntos?">
        Quer usar seu tempo, seus talentos e seu coração para ajudar? Fale com a gente e saiba como fazer parte.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr]">
        <Reveal from="left">
          <h2 className="font-display text-4xl font-semibold text-ink">Onde nos encontrar</h2>
          <ul className="mt-8 space-y-5">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`${row} group transition-transform hover:-translate-y-1 hover:rotate-1`}
                >
                  <span className={`${bubble} transition-transform group-hover:-rotate-12`}>
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-extrabold uppercase tracking-wider text-brand">{c.label}</span>
                    <span className="block break-all font-bold text-ink">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className={`${row} items-start`}>
              <span className={bubble}>
                <Icon name="pin" className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs font-extrabold uppercase tracking-wider text-brand">Endereço</span>
                <span className="block font-bold text-ink">{site.address}</span>
                <span className="block text-muted">CEP {site.cep}</span>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal from="right">
          <div id="mensagem" className="toon-frame p-8 sm:p-10">
            <h2 className="font-display text-4xl font-semibold text-ink">Envie uma mensagem</h2>
            <p className="mb-7 mt-2 text-muted">Respondemos com carinho assim que possível.</p>
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
