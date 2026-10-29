import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Transparência",
  description:
    "Prestação de contas do Instituto Servir: parcerias, valores, vigências e documentos oficiais dos projetos Roda de Conversa e Templos Fortes.",
};

type Doc = { label: string; href: string };

const rodaDocs: Doc[] = [
  {
    label: "Roda de Conversa – documento assinado",
    href: "/docs/roda-de-conversa-assinado.pdf",
  },
];

const templosDocs: Doc[] = [
  { label: "Extrato da proposta", href: "/docs/extrato-proposta.pdf" },
  {
    label: "Projeto técnico pedagógico",
    href: "/docs/projeto-tecnico-pedagogico.pdf",
  },
  {
    label: "Planilha de custos",
    href: "/docs/planilha-de-custos-proposta-26900-2025.pdf",
  },
  { label: "Termo de fomento", href: "/docs/termo-de-fomento.pdf" },
];

function Docs({ docs }: { docs: Doc[] }) {
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
      {docs.map((d) => (
        <li key={d.href}>
          <a
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border-[3px] border-outline bg-surface-2 px-4 py-3 font-display text-lg font-medium text-ink transition-all hover:-translate-y-1 hover:rotate-1 hover:bg-brand hover:text-outline"
          >
            <Icon
              name="download"
              className="h-5 w-5 shrink-0 text-brand group-hover:text-outline"
            />
            {d.label}
            <span className="ml-auto text-xs font-extrabold">PDF</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border-2 border-line bg-bg-2 p-4">
      <dt className="text-xs font-extrabold uppercase tracking-wider text-brand">
        {label}
      </dt>
      <dd className="mt-1 font-semibold text-ink">{value}</dd>
    </div>
  );
}

export default function TransparenciaPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparência"
        title="Cada recurso, aberto para quem quiser conferir"
      >
        Em conformidade com a Lei nº 13.019/2014 (MROSC), apresentamos as
        informações das parcerias firmadas e os documentos oficiais de cada
        projeto.
      </PageHero>

      <div id="projetos" className="mx-auto max-w-5xl space-y-12 px-5 py-20">
        <Reveal>
          <article className="toon-frame p-8 sm:p-10">
            <span className="toon-tag -rotate-2">
              Governo do Distrito Federal · SEJUS
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Roda de Conversa para Mulheres “Desabafe Aqui”
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Terapia Comunitária Integrativa, apoio psicossocial e jurídico,
              além de capacitação em cidadania digital para 60 mulheres em
              situação de vulnerabilidade social.
            </p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <Fact
                label="Parceria"
                value="Termo de Fomento TF-26-SEJUS/2025 (Plano de Trabalho nº 1657)"
              />
              <Fact label="Valor total do recurso" value="R$ 100.000,00" />
              <Fact
                label="Vigência"
                value="2 meses (janeiro e fevereiro de 2026)"
              />
              <Fact
                label="Local de execução"
                value="Sobradinho II, Vila Rabelo, Vale das Acácias e Morro do Sansão"
              />
            </dl>
            <h3 className="mt-8 font-display text-2xl font-semibold text-ink">
              Aplicação do recurso
            </h3>
            <ul className="mt-3 space-y-2 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Recursos humanos:</strong>{" "}
                coordenador geral, terapeutas, psicólogo, advogado, instrutor
                digital e equipe de apoio logístico e limpeza.
              </li>
              <li>
                <strong className="text-ink">Alimentação:</strong> kit lanche
                para as participantes em todos os encontros.
              </li>
              <li>
                <strong className="text-ink">Logística e monitoria:</strong>{" "}
                espaço de acolhimento para os filhos das participantes, com
                monitores e material lúdico.
              </li>
              <li>
                <strong className="text-ink">Insumos:</strong> materiais
                didáticos das aulas digitais e itens do “Dia da Beleza”.
              </li>
            </ul>
            <Docs docs={rodaDocs} />
          </article>
        </Reveal>

        <Reveal>
          <article className="toon-frame p-8 sm:p-10">
            <span className="toon-tag -rotate-2">
              Emenda individual · Proposta 026900/2025
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Templos Fortes
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Projeto que usa o jiu-jitsu como ferramenta de inclusão social no
              Distrito Federal: o instituto executa a iniciativa e a comunidade
              se beneficia com acesso gratuito, desenvolvimento pessoal e
              redução da vulnerabilidade social.
            </p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <Fact
                label="Beneficiário"
                value={`Instituto Servir · CNPJ ${site.cnpj}`}
              />
              <Fact label="Valor" value="R$ 400.000,00" />
              <Fact label="Vigência" value="10/08/2025 a 10/08/2028" />
              <Fact
                label="Programa"
                value="Código 4200020250002 · órgão 42000 (Ministério da Cultura)"
              />
              <Fact
                label="Emenda individual"
                value="40820009 · Parlamentar Leila Barros"
              />
              <Fact label="Nº da proposta" value="026900/2025" />
            </dl>
            <Docs docs={templosDocs} />
          </article>
        </Reveal>

        <Reveal>
          <aside className="flex flex-col items-start gap-5 rounded-3xl border-[3px] border-outline bg-brand p-8 text-outline shadow-[8px_8px_0_var(--color-pop)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="font-display text-3xl font-semibold">
                Precisa de outro documento?
              </h2>
              <p className="mt-2 font-semibold">
                Fale com a nossa equipe e enviaremos o que for necessário.
              </p>
            </div>
            <ButtonLink href="/contato" variant="light">
              Entrar em contato
            </ButtonLink>
          </aside>
        </Reveal>
      </div>
    </>
  );
}
