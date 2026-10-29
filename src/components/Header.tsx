"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-outline bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full border-2 px-4 py-1.5 font-display text-base font-medium transition-all hover:-rotate-2 hover:scale-105 ${
                  active
                    ? "border-outline bg-brand text-outline shadow-[3px_3px_0_var(--color-pop)]"
                    : "border-transparent text-ink hover:border-line hover:bg-surface"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/doacao" className="toon-btn toon-btn-primary hidden !px-5 !py-2 sm:inline-flex">
            <Icon name="heart" className="h-4 w-4" />
            Doe agora
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-outline bg-surface text-ink shadow-[3px_3px_0_var(--color-pop)] lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="animate-pop border-t-[3px] border-outline bg-bg-2 px-5 pb-6 pt-3 lg:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b-2 border-line py-3.5 font-display text-xl font-medium text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/doacao" onClick={() => setOpen(false)} className="toon-btn toon-btn-primary mt-5 w-full">
            <Icon name="heart" className="h-5 w-5" />
            Doe agora
          </Link>
        </nav>
      )}
    </header>
  );
}
