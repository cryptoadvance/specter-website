import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink, type LucideIcon } from "lucide-react";

interface ContributionHeaderProps {
  number: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  children?: ReactNode;
}

export function ContributionHeader({
  number,
  label,
  title,
  description,
  icon: Icon,
  children,
}: ContributionHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(31,153,229,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(31,153,229,.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-specter-primary/10 blur-3xl" />
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <Link
          href="/contribute"
          className="inline-flex min-h-11 items-center gap-2 py-2 text-sm font-semibold text-gray-400 transition-colors hover:text-specter-coral"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All contribution paths
        </Link>
        <div className="mt-8 max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-specter-primary">
            <Icon className="h-4 w-4" aria-hidden="true" /> {number} / {label}
          </div>
          <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            {description}
          </p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </header>
  );
}

interface ExternalButtonProps {
  href: string;
  label: string;
  icon: LucideIcon;
  secondary?: boolean;
}

export function ExternalButton({
  href,
  label,
  icon: Icon,
  secondary = false,
}: ExternalButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-specter-primary focus:ring-offset-2 focus:ring-offset-specter-dark ${
        secondary
          ? "border border-gray-600 text-gray-200 hover:border-specter-primary hover:text-white"
          : "bg-specter-primary text-white hover:bg-blue-600"
      }`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
      <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
    </a>
  );
}
