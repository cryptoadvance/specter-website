import { useState } from "react";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import BlinkPayButton from "@/components/BlinkPayButton";
import donateIcon from "@assets/desktop/donate.svg";
import codeIcon from "@assets/desktop/code.svg";
import communityIcon from "@assets/desktop/community.svg";
import supportedNetworksIcon from "@assets/desktop/supported-networks.svg";
import opensatsLogo from "@assets/opensats.svg";

// Funding transparency section.
// As a donor-funded non-profit we want to show what grants make possible.
// Per agreement with the funder and the grant recipient, we do NOT publish
// grant amounts or name individual recipients. We only reference what the
// funder has already disclosed publicly, and link to their announcement.
interface Funder {
  name: string;
  logo?: string;
  logoLinkUrl?: string;
  announcementUrl?: string;
  sourceLinks?: { label: string; href: string }[];
  // Plain-language summary of the funder's public grant announcement.
  summary: string;
  // What the grant directly funds, taken from the funder's public roadmap.
  fundedWork: { label: string; href?: string }[];
}

const funders: Funder[] = [
  {
    name: "OpenSats",
    logo: opensatsLogo,
    announcementUrl:
      "https://opensats.org/blog/seventeenth-wave-of-bitcoin-grants#specter-diy",
    summary:
      "OpenSats awarded Specter DIY a significant grant through their General Fund. The grant directly funds the ongoing development of Specter DIY and embit, the lightweight Bitcoin library that Specter DIY shares with other open-hardware projects such as Krux and SeedSigner. In line with OpenSats' disclosure policy, the grant amount is not published here; see their public announcement for details.",
    fundedWork: [
      {
        label: "Maintaining embit, the shared Bitcoin library used by Specter DIY, Krux and SeedSigner",
        href: "https://embit.rocks/#/",
      },
      {
        label: "Migrating firmware to LVGL v9 and MicroPython v1.26",
      },
      {
        label: "Reproducible builds for compilation and firmware signing",
      },
      {
        label: "Automated testing and continuous integration pipelines",
      },
      {
        label: "Expanded documentation and contributor onboarding guides",
      },
      {
        label: "A redesigned user interface informed by community feedback",
      },
      {
        label: "Porting Specter DIY to the ESP32-P4 board",
      },
      {
        label:
          "Advising and coordinating community work on future Specter DIY application development, security, and code quality reviews of current contributions to Specter DIY and Embit.",
      },
    ],
  },
  {
    name: "EINUNDZWANZIG",
    logo:
      "https://einundzwanzig.space/img/media/einundzwanzig-square-inverted.svg",
    logoLinkUrl: "https://x.com/_einundzwanzig_",
    sourceLinks: [
      {
        label: "EINUNDZWANZIG on X",
        href: "https://x.com/_einundzwanzig_",
      },
    ],
    summary:
      "EINUNDZWANZIG donated 5,000,000 sats to the Specter Association.",
    fundedWork: [],
  },
];

export default function Donate() {
  const [copiedBlinkAddress, setCopiedBlinkAddress] = useState(false);

  const copyBlinkAddress = async () => {
    try {
      await navigator.clipboard.writeText("specterassociation@blink.sv");
      setCopiedBlinkAddress(true);
      window.setTimeout(() => setCopiedBlinkAddress(false), 1500);
    } catch {
      setCopiedBlinkAddress(false);
    }
  };

  return (
    <Layout showNewsletter={true}>
      <SEO
        title="Donate to Specter"
        description="Support the Specter Association with a Lightning donation. Your sats fund open-source Bitcoin self-custody software and hardware. See how grants from OpenSats directly fund Specter DIY and embit development."
        path="/donate"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "DonateAction",
          agent: {
            "@type": "NGO",
            name: "Specter Association",
            url: "https://specter.solutions",
            description:
              "Non-profit association advancing open-source Bitcoin self-custody through the Specter project.",
          },
          recipient: {
            "@type": "NGO",
            name: "Specter Association",
          },
          url: "https://specter.solutions/donate",
        }}
      />

      {/* Header Section */}
      <header className="text-center py-16 px-4">
        <div className="flex justify-center mb-6">
          <img
            src={donateIcon}
            alt="Donate"
            className="w-20 h-20 mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Support Specter
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Specter is built and maintained by the Specter Association, a non-profit
          community of Bitcoin enthusiasts. Your donations keep the project
          independent, open-source and moving forward.
        </p>
      </header>

      <main className="container mx-auto px-4 space-y-16 pb-20">
        {/* Why Donate */}
        <section>
          <Card className="bg-specter-navy rounded-2xl p-8 md:p-12 shadow-2xl border-0">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Why donate?
            </h2>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-sm md:text-base space-y-4">
              <p>
                The Specter Association is a Swiss non-profit that holds and
                advances the Specter project, including Specter Desktop, the
                Bitcoin wallet software, and the Specter DIY hardware wallet
                firmware. Everything we release is free and open-source under
                the MIT license.
              </p>
              <p>
                Donations to the Association fund the work that keeps the
                project alive: hosting and infrastructure, security audits,
                documentation and the coordination of volunteers and
                contributors. They also let us respond to community needs
                without being dependent on a single commercial sponsor.
              </p>
              <p>
                If you use Specter to hold your own keys, run your own node,
                or build your own hardware wallet, donating is a direct way to
                give back to the tools that protect your sovereignty.
              </p>
            </div>
          </Card>
        </section>

        {/* How to Donate */}
        <section>
          <Card className="bg-specter-navy rounded-2xl p-8 md:p-12 shadow-2xl border-0">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              How to donate
            </h2>
            <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
              Send sats over the Lightning Network to the Specter Association
              using the button below. It is fast, has near-zero fees, and fits
              the Bitcoin ethos of the project.
            </p>

            <div className="bg-specter-dark rounded-xl p-8 border-0 text-center max-w-lg mx-auto">
              <h3 className="text-xl font-bold mb-4 text-white">
                Donate some sats
              </h3>
              <p className="text-gray-300 mb-6">
                Show your appreciation for the open-source projects you use.
              </p>
              <BlinkPayButton className="mt-4" />
            </div>

            <p className="text-xs text-gray-500 mt-6 text-center max-w-xl mx-auto">
              The Blink Pay Button forwards your Lightning payment directly to
              the Specter Association ({" "}
              <button
                type="button"
                onClick={copyBlinkAddress}
                className="text-gray-400 hover:text-specter-coral underline underline-offset-2 transition-colors"
                aria-label="Copy specterassociation@blink.sv"
              >
                specterassociation@blink.sv
              </button>
              {copiedBlinkAddress && (
                <span className="ml-2 text-specter-primary">Copied</span>
              )}
              ).
              You can use any Lightning-enabled wallet such as Blink, Wallet of
              Satoshi, Muun, Phoenix or Breez.
            </p>
          </Card>
        </section>

        {/* Where Donations Go */}
        <section>
          <Card className="bg-specter-navy rounded-2xl p-8 md:p-12 shadow-2xl border-0">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Where your donations go
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src={supportedNetworksIcon}
                  alt=""
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-3 text-white">
                  Infrastructure
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Hosting, domains, build pipelines and the services that
                  distribute Specter Desktop releases to users worldwide.
                </p>
              </div>
              <div className="text-center">
                <img
                  src={codeIcon}
                  alt=""
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-3 text-white">
                  Development
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Coordinating contributors, reviewing pull requests and
                  funding focused development work on Specter Desktop and the
                  Specter DIY firmware.
                </p>
              </div>
              <div className="text-center">
                <img
                  src={communityIcon}
                  alt=""
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-3 text-white">
                  Community
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Documentation, conference presence, workshops and the
                  onboarding of new users and developers into self-custody.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Funding Transparency */}
        <section>
          <Card className="bg-specter-navy rounded-2xl p-8 md:p-12 shadow-2xl border-0">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">
              Funding transparency
            </h2>
            <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
              As a donor-funded non-profit, we believe in showing what grants
              make possible. We only publish what our funders have already
              disclosed publicly, never grant amounts or individual recipients,
              to respect everyone's privacy.
            </p>

            <div className="space-y-6 max-w-3xl mx-auto">
              {funders.map((funder, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 bg-specter-dark rounded-xl p-6 md:p-8 border border-gray-700"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    {funder.logo && (
                      <div className="flex-shrink-0">
                        <a
                          href={funder.logoLinkUrl ?? funder.announcementUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:opacity-80 transition-opacity"
                          aria-label={`Visit ${funder.name} announcement`}
                        >
                          <img
                            src={funder.logo}
                            alt={`${funder.name} logo`}
                            className="w-24 h-24 object-contain"
                          />
                        </a>
                      </div>
                    )}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {funder.name}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {funder.summary}
                      </p>
                    </div>
                  </div>

                  {funder.fundedWork.length > 0 && (
                    <div className="border-t border-gray-700 pt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-specter-coral mb-4 text-center md:text-left">
                        What the grant funds
                      </h4>
                      <ul className="grid gap-3 md:grid-cols-2">
                        {funder.fundedWork.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                          >
                            <span className="text-specter-coral mt-1 flex-shrink-0">
                              ▸
                            </span>
                            {item.href ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-specter-coral transition-colors duration-200"
                              >
                                {item.label}
                              </a>
                            ) : (
                              <span>{item.label}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {funder.announcementUrl && (
                    <div className="border-t border-gray-700 pt-4">
                      <a
                        href={funder.announcementUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-specter-coral hover:underline text-sm"
                      >
                        Read {funder.name}'s grant announcement
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}

                  {funder.sourceLinks && funder.sourceLinks.length > 0 && (
                    <div className="border-t border-gray-700 pt-4 flex flex-wrap gap-x-4 gap-y-2">
                      {funder.sourceLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-specter-coral hover:underline text-sm"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-8 text-center max-w-2xl mx-auto">
              Want to make a major contribution or support a specific
              initiative? Reach out via the{" "}
              <a
                href="/contact"
                className="text-specter-coral hover:underline"
              >
                contact page
              </a>{" "}
              to discuss it with the Association.
            </p>
          </Card>
        </section>
      </main>
    </Layout>
  );
}
