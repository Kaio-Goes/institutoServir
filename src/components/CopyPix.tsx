"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

export function CopyPix({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-6 rounded-2xl border-[3px] border-dashed border-brand bg-bg-2 p-5">
      <p className="text-xs font-extrabold uppercase tracking-wider text-brand">
        Chave PIX (CNPJ)
      </p>
      <p className="mt-1 break-all font-display text-3xl font-semibold text-ink sm:text-4xl">
        {value}
      </p>
      <button
        type="button"
        onClick={copy}
        className="toon-btn toon-btn-primary mt-5"
      >
        <Icon
          name={copied ? "check" : "copy"}
          className={`h-5 w-5 ${copied ? "animate-pop" : ""}`}
        />
        {copied ? "Chave copiada!" : "Copiar chave PIX"}
      </button>
      <p role="status" aria-live="polite" className="sr-only">
        {copied ? "Chave PIX copiada para a área de transferência" : ""}
      </p>
    </div>
  );
}
