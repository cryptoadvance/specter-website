import { Link } from "wouter";
import { Braces, FileText, Github, Globe2, MessageCircle, Palette, Play, Send, Video } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  ContributionHeader,
  ExternalButton,
} from "@/components/contribute/ContributionElements";

export default function ContributeOther() {
  return (
    <Layout showNewsletter={false}>
      <SEO
        title="Other Ways to Contribute to Specter"
        description="Improve the Specter website, documentation, brand and community resources through focused open-source contributions."
        path="/contribute/other"
      />
      <main>
        <ContributionHeader
          number="03"
          label="Other"
          title="Contribute beyond the product."
          description="Code is not the only contribution. Improve the website, clarify documentation, test releases, report bugs or help keep the Specter brand consistent."
          icon={Braces}
        />

        <section className="container mx-auto px-4 py-20">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-specter-navy p-6 sm:p-8">
              <Globe2 className="h-8 w-8 text-specter-primary" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-bold text-white">Improve this website</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                Fix content, accessibility and responsive behavior, improve SEO or
                propose a new page. Small, focused pull requests are easiest to review.
              </p>
              <div className="mt-7">
                <ExternalButton
                  href="https://github.com/cryptoadvance/specter-website"
                  label="View website source"
                  icon={Github}
                />
              </div>
            </article>

            <article className="rounded-xl border border-specter-coral/30 bg-specter-navy p-6 sm:p-8">
              <Video className="h-8 w-8 text-specter-coral" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-bold text-white">Create a tutorial</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                Have a useful tutorial for Specter, Specter DIY or Specter Desktop?
                Send it to Schnuartz. We are happy to publish high-quality videos
                on the Specter YouTube channel, as long as they are useful and not AI slop.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ExternalButton href="https://t.me/schnuartz" label="Message Schnuartz" icon={Send} />
                <ExternalButton href="https://www.youtube.com/@SpecterWallet" label="Visit YouTube" icon={Play} secondary />
              </div>
            </article>

            <article className="rounded-xl border border-white/10 bg-specter-navy p-6 sm:p-8">
              <Palette className="h-8 w-8 text-specter-coral" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-bold text-white">Use the Specter brand</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                Follow the official logo, color and design guidance when creating
                interfaces, conference material, tutorials or community resources.
              </p>
              <Link
                href="/brand-guidelines"
                className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-600 px-4 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:border-specter-coral hover:text-white"
              >
                <Palette className="h-4 w-4" aria-hidden="true" /> Brand guidelines
              </Link>
            </article>

            <article className="rounded-xl border border-white/10 bg-specter-navy p-6 sm:p-8">
              <FileText className="h-8 w-8 text-specter-primary" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-bold text-white">Write and clarify</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                Better setup instructions, examples and troubleshooting notes help
                users become contributors. Documentation improvements are valuable PRs.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ExternalButton href="https://docs.specter.solutions/desktop/" label="Desktop docs" icon={FileText} secondary />
                <ExternalButton href="https://docs.specter.solutions/diy/" label="DIY docs" icon={FileText} secondary />
              </div>
            </article>

            <article className="rounded-xl border border-specter-primary/30 bg-specter-dark p-6 sm:p-8">
              <MessageCircle className="h-8 w-8 text-specter-primary" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-bold text-white">Have another idea?</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                If your contribution does not fit a repository yet, talk to the
                Association. We can connect you with the right maintainer or project.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-specter-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Contact Association
              </Link>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
