import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Instituto Servir – página inicial"
    >
      <Image
        src="/logos/mark-brand.png"
        alt=""
        width={584}
        height={335}
        className="h-11 w-auto transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
      />
      <span className="font-display text-xl font-semibold leading-none text-ink">
        Instituto
        <br />
        <span className="text-brand">Servir</span>
      </span>
    </Link>
  );
}
