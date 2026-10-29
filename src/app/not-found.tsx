import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-28 text-center">
      <p className="font-display text-8xl font-semibold text-brand">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Opa! Essa página se perdeu</h1>
      <p className="mt-4 text-lg text-muted">O endereço que você tentou acessar não existe ou foi movido.</p>
      <ButtonLink href="/" className="mt-8">
        Voltar para o início
      </ButtonLink>
    </section>
  );
}
