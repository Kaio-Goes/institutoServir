import Link from "next/link";
import { Wave } from "@/components/Decor";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { nav, site, whatsappLink } from "@/lib/site";

const social = [
  { href: site.instagram, label: "Instagram do Instituto Servir", icon: "instagram" as const },
  { href: site.facebook, label: "Facebook do Instituto Servir", icon: "facebook" as const },
  { href: whatsappLink(), label: "WhatsApp do Instituto Servir", icon: "whatsapp" as const },
];

export function Footer() {
  return (
    <footer className="relative mt-10 bg-bg-2">
      <Wave className="absolute -top-[39px] left-0 text-bg-2 sm:-top-[63px]" flip />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 pt-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm leading-relaxed text-muted">{site.tagline}</p>
          <div className="mt-6 flex gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-outline bg-surface text-brand shadow-[3px_3px_0_var(--color-pop)] transition-transform hover:-translate-y-1 hover:rotate-6 hover:bg-brand hover:text-outline"
              >
                <Icon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="font-display text-xl font-semibold text-brand">Navegue</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition-colors hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/doacao" className="font-bold text-brand hover:underline">
                Faça sua doação
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-xl font-semibold text-brand">Fale conosco</h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                {site.phoneDisplay} (WhatsApp)
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-brand">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span>
                {site.address}
                <br />
                CEP {site.cep}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© Instituto Servir · CNPJ {site.cnpj}. Todos os direitos reservados.</p>
          <p>Organização sem fins lucrativos · Sobradinho II, DF</p>
        </div>
      </div>
    </footer>
  );
}
