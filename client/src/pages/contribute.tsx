import { Link } from "wouter";
import {
  ArrowRight,
  Blocks,
  Braces,
  ExternalLink,
  Github,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import specterLogo from "@assets/Specter_logo_1756046218246.png";
import explodedShield from "@assets/specter-shield-exploded.png";

interface ProjectPath {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const paths: ProjectPath[] = [
  {
    number: "01",
    title: "Specter Desktop",
    description: "Build wallet features, integrations and standalone plugins.",
    href: "/contribute/desktop",
    icon: Blocks,
  },
  {
    number: "02",
    title: "Specter DIY",
    description: "Work on open hardware, firmware and the next device UI.",
    href: "/contribute/diy",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Other",
    description: "Improve the website, docs, design and community resources.",
    href: "/contribute/other",
    icon: Braces,
  },
];

export default function Contribute() {
  return (
    <Layout showNewsletter={false}>
      <SEO
        title="Contribute to Specter"
        description="Contribute code, plugins, firmware, hardware, design or documentation to Specter Desktop, Specter DIY and the open-source Specter ecosystem."
        path="/contribute"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Contribute to Specter",
          description:
            "Developer resources and community channels for contributing to the open-source Specter ecosystem.",
          url: "https://specter.solutions/contribute",
          isPartOf: {
            "@type": "WebSite",
            name: "Specter",
            url: "https://specter.solutions",
          },
        }}
      />

      <main className="overflow-hidden">
        <section className="relative border-b border-white/10">
          <div
            className="absolute inset-0 opacity-[0.07]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(31,153,229,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(31,153,229,.7) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "linear-gradient(to bottom, black 0%, transparent 90%)",
            }}
          />
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-specter-primary/10 blur-3xl md:left-auto md:right-20 md:translate-x-0" />

          <div className="container relative mx-auto grid min-h-[calc(100dvh-72px)] items-center gap-8 px-4 py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-4 lg:py-20">
            <div className="relative z-10 max-w-3xl">
              <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-specter-primary">
                <span className="h-px w-8 bg-specter-primary" />
                Open source / Community built
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Build what you want to <span className="text-specter-coral">trust.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                Specter is more than one codebase. Contribute to wallet software,
                open hardware, firmware, design or documentation and help make
                Bitcoin self-custody better for everyone.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#choose-project"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-specter-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-specter-primary focus:ring-offset-2 focus:ring-offset-specter-dark"
                >
                  Choose a project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/cryptoadvance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-200 transition-colors hover:border-specter-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-specter-primary focus:ring-offset-2 focus:ring-offset-specter-dark"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Explore on GitHub
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-widest text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> MIT licensed
                </span>
                <span>Pull requests welcome</span>
                <span>Global community</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[24.75rem] lg:justify-self-end">
              <div className="absolute inset-8 rounded-full border border-specter-primary/20" />
              <div className="absolute inset-20 rounded-full border border-dashed border-specter-coral/20" />
              <img
                src={explodedShield}
                alt="Exploded view of the Specter Shield and its open hardware components"
                className="relative z-10 w-full max-w-[24.75rem] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.65)]"
              />
              <div className="absolute bottom-2 right-2 z-20 flex items-center gap-3 rounded-lg border border-white/10 bg-specter-dark/90 px-4 py-3 backdrop-blur sm:bottom-8 sm:right-8">
                <img src={specterLogo} alt="" className="h-8 w-auto" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    Hardware + software
                  </div>
                  <div className="text-sm font-semibold text-white">Open by design</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="choose-project" className="container mx-auto scroll-mt-24 px-4 py-20">
          <div className="mb-10 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-specter-coral">
                Find your entry point
              </p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Choose a project</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-400">
              Start where your skills and curiosity fit. Each path has its own
              repositories, resources and community contacts.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {paths.map(({ number, title, description, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="group relative min-h-56 overflow-hidden rounded-xl border border-white/10 bg-specter-navy p-6 transition-all hover:-translate-y-1 hover:border-specter-primary/70 focus:outline-none focus:ring-2 focus:ring-specter-primary"
              >
                <span className="font-mono text-xs text-gray-500">/{number}</span>
                <Icon className="mt-7 h-8 w-8 text-specter-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-400">{description}</p>
                <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-specter-coral" />
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-specter-navy/40">
          <div className="container mx-auto px-4 py-20">
            <div className="mx-auto max-w-5xl rounded-2xl border border-specter-primary/30 bg-specter-navy p-6 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-specter-coral">
                Your first contribution
              </p>
              <div className="mt-7 grid gap-8 md:grid-cols-3">
                {[
                  ["1", "Explore", "Pick a project and read its setup and contribution notes."],
                  ["2", "Talk", "Join the relevant Telegram group and share what you want to work on."],
                  ["3", "Ship", "Start small, open a focused pull request and ask for feedback early."],
                ].map(([number, title, description]) => (
                  <div key={number}>
                    <span className="font-mono text-3xl font-bold text-specter-primary/50">{number}</span>
                    <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
