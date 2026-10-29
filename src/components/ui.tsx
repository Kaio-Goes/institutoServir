import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Cloud, Heart, Sparkle, Star, Wave } from "@/components/Decor";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/lib/projects";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  external?: boolean;
  className?: string;
};

const variants = {
  primary: "toon-btn toon-btn-primary",
  ghost: "toon-btn toon-btn-ghost",
  light: "toon-btn toon-btn-light",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: ButtonProps) {
  const classes = `${variants[variant]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <span className="toon-tag -rotate-2">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{children}</p>
      )}
    </Reveal>
  );
}

export function Photo({
  src,
  alt,
  sizes,
  className = "",
  fit = "cover",
  tilt = "",
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  fit?: "cover" | "contain";
  tilt?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`toon-frame relative transition-transform duration-300 hover:rotate-0 ${tilt} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        {...(priority
          ? { loading: "eager" as const, fetchPriority: "high" as const }
          : {})}
        className={
          fit === "contain" ? "bg-white object-contain" : "object-cover"
        }
      />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-bg-2">
      <div
        className="absolute -left-20 top-0 h-80 w-80 animate-blob bg-brand/15 blur-2xl"
        aria-hidden="true"
      />
      <Cloud className="absolute right-[8%] top-10 h-14 w-24 animate-float text-surface-2" />
      <Star className="absolute right-[22%] top-24 h-9 w-9 animate-twinkle text-brand" />
      <Heart
        className="absolute bottom-16 right-[12%] hidden h-10 w-10 animate-float-slow text-brand-deep sm:block"
        style={{ "--r": "-8deg" } as React.CSSProperties}
      />
      <Sparkle className="absolute left-[46%] top-12 h-6 w-6 animate-twinkle text-sky-soft" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:pt-24">
        <span className="rise toon-tag -rotate-2">{eyebrow}</span>
        <h1 className="rise-2 mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
          <span className="gradient-text">{title}</span>
        </h1>
        {children && (
          <p className="rise-3 mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {children}
          </p>
        )}
      </div>
      <Wave className="absolute bottom-[-1px] left-0 text-bg" />
    </section>
  );
}

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 3) * 120} className="h-full">
      <article className="toon-card group flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden border-b-[3px] border-outline bg-surface-2">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className={`transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1 ${
              project.fit === "contain"
                ? "bg-white object-contain"
                : "object-cover"
            }`}
          />
          <span className="toon-tag absolute left-4 top-4 -rotate-3">
            {project.tag}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl font-semibold text-ink">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 leading-relaxed text-muted">
            {project.summary}
          </p>
          <Link
            href={`/projetos#${project.slug}`}
            className="mt-5 inline-flex items-center gap-2 font-display text-lg font-semibold text-brand transition-all hover:gap-4"
          >
            Conhecer o projeto
            <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
