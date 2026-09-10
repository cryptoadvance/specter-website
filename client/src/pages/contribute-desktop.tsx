import {
  Blocks,
  Code2,
  Github,
  MessageCircle,
  Send,
  Terminal,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  ContributionHeader,
  ExternalButton,
} from "@/components/contribute/ContributionElements";

const DESKTOP_REPOSITORY = "https://github.com/cryptoadvance/specter-desktop";
const DESKTOP_TELEGRAM = "https://t.me/+WCoYRnHHgQMyYjhi";

export default function ContributeDesktop() {
  return (
    <Layout showNewsletter={false}>
      <SEO
        title="Contribute to Specter Desktop"
        description="Build Specter Desktop features and plugins, explore developer documentation and join the private developer community."
        path="/contribute/desktop"
      />
      <main>
        <ContributionHeader
          number="01"
          label="Desktop"
          title="Extend the wallet."
          description="Work on the Specter Desktop core or build a focused plugin. Python, Flask and frontend contributors can improve Bitcoin self-custody without starting from zero."
          icon={Terminal}
        >
          <ExternalButton href={DESKTOP_REPOSITORY} label="Desktop repository" icon={Github} />
          <ExternalButton
            href={`${DESKTOP_REPOSITORY}/blob/master/docs/development.md`}
            label="Development guide"
            icon={Code2}
            secondary
          />
        </ContributionHeader>

        <section className="container mx-auto px-4 py-20">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-specter-navy p-6 sm:p-8">
              <Blocks className="h-8 w-8 text-specter-coral" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-bold text-white">Build a plugin</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                Specter Desktop's extension system lets you add integrations,
                services and complete workflows without coupling them to the main
                application. Existing extensions are useful working examples.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ExternalButton
                  href={`${DESKTOP_REPOSITORY}/tree/master/docs/extensions`}
                  label="Extension resources"
                  icon={Blocks}
                />
                <ExternalButton
                  href={`${DESKTOP_REPOSITORY}/tree/master/src/cryptoadvance/specterext`}
                  label="Example extensions"
                  icon={Code2}
                  secondary
                />
              </div>
            </article>

            <article className="rounded-xl border border-white/10 bg-specter-navy p-6 sm:p-8">
              <Github className="h-8 w-8 text-specter-primary" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-bold text-white">Improve the core</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                Fix an issue, improve hardware-wallet support, write tests or refine
                the wallet interface. Share your plan early so maintainers can point
                you toward the right part of the codebase.
              </p>
              <div className="mt-7">
                <ExternalButton
                  href={`${DESKTOP_REPOSITORY}/issues`}
                  label="Browse open issues"
                  icon={Github}
                />
              </div>
            </article>
          </div>
        </section>

        <section className="border-y border-white/10 bg-specter-navy/40">
          <div className="container mx-auto grid gap-10 px-4 py-20 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-specter-primary">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Developer community
              </div>
              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">Talk before you build.</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                Meet maintainers, discuss ideas and join the developer community.
              </p>
            </div>

            <div className="rounded-xl border border-specter-primary/30 bg-specter-dark p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-white">Specter Developer Community</h3>
                <MessageCircle className="h-6 w-6 text-specter-primary" aria-hidden="true" />
              </div>
              <p className="mt-4 leading-relaxed text-gray-300">
                The Specter Desktop developer community is open to everyone. You
                can join the group directly to discuss ideas, ask questions and
                follow the weekly calls. If you would like to talk to someone
                personally, Schnuartz is happy to help.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ExternalButton href={DESKTOP_TELEGRAM} label="Join the group" icon={MessageCircle} />
                <ExternalButton href="https://t.me/schnuartz" label="Schnuartz on Telegram" icon={Send} secondary />
                <ExternalButton href="https://x.com/schnuartz" label="Schnuartz on X" icon={MessageCircle} secondary />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
