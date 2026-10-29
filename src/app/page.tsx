const acoes = [
  { titulo: "Acolhimento", texto: "Atendimento humanizado para pessoas e famílias em situação de vulnerabilidade." },
  { titulo: "Educação", texto: "Projetos educativos que ampliam oportunidades e formam cidadãos." },
  { titulo: "Apoio social", texto: "Distribuição de alimentos, itens essenciais e orientação social." },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-800">
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold text-emerald-700">Instituto Servir</span>
          <div className="hidden gap-6 text-sm sm:flex">
            <a href="#sobre" className="hover:text-emerald-700">Sobre</a>
            <a href="#acoes" className="hover:text-emerald-700">Ações</a>
            <a href="#contato" className="hover:text-emerald-700">Contato</a>
          </div>
        </nav>
      </header>

      <section className="bg-emerald-50 px-6 py-24 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-6xl">
          Transformando vidas com dignidade e esperança
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          O Instituto Servir apoia pessoas em situação de vulnerabilidade com acolhimento, educação e solidariedade.
        </p>
        <a href="#contato" className="mt-8 inline-block rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white hover:bg-emerald-700">
          Quero ajudar
        </a>
      </section>

      <section id="sobre" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Quem somos</h2>
        <p className="mt-4 text-slate-600">
          Somos uma organização dedicada a criar oportunidades e garantir direitos básicos, atuando junto às comunidades que mais precisam.
        </p>
      </section>

      <section id="acoes" className="bg-slate-50 px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Nossas ações</h2>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-3">
          {acoes.map((a) => (
            <div key={a.titulo} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-700">{a.titulo}</h3>
              <p className="mt-2 text-slate-600">{a.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Entre em contato</h2>
        <form className="mt-8 space-y-4">
          <input className="w-full rounded-lg border p-3" placeholder="Nome" />
          <input type="email" className="w-full rounded-lg border p-3" placeholder="E-mail" />
          <textarea className="w-full rounded-lg border p-3" rows={4} placeholder="Mensagem" />
          <button type="button" className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700">
            Enviar
          </button>
        </form>
      </section>

      <footer className="border-t py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Instituto Servir. Todos os direitos reservados.
      </footer>
    </main>
  );
}
