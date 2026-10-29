"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { whatsappLink } from "@/lib/site";

const subjects = [
  "Quero ser voluntário(a)",
  "Quero fazer uma doação",
  "Parceria ou apoio institucional",
  "Outro assunto",
];

const field =
  "mt-2 w-full rounded-xl border-[3px] border-outline bg-bg-2 px-4 py-3 text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none";

export function ContactForm() {
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "").trim();

    if (!name || !message) {
      setError("Preencha seu nome e a mensagem para continuar.");
      return;
    }
    setError("");
    const text = `Olá! Meu nome é ${name}.\nAssunto: ${subject}\n\n${message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="name"
          className="font-display text-lg font-medium text-ink"
        >
          Seu nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={field}
          placeholder="Como podemos te chamar?"
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="font-display text-lg font-medium text-ink"
        >
          Assunto
        </label>
        <select
          id="subject"
          name="subject"
          className={field}
          defaultValue={subjects[0]}
        >
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="font-display text-lg font-medium text-ink"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={field}
          placeholder="Escreva aqui sua mensagem"
        />
      </div>
      {error && (
        <p role="alert" className="font-bold text-sky-soft">
          {error}
        </p>
      )}
      <button type="submit" className="toon-btn toon-btn-primary">
        <Icon name="whatsapp" className="h-5 w-5" />
        Enviar pelo WhatsApp
      </button>
      <p className="text-sm text-muted">
        Ao enviar, abriremos o WhatsApp com a sua mensagem já preenchida.
      </p>
    </form>
  );
}
