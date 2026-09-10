import {
  CalendarClock,
  Box,
  CirclePlay,
  CircleDot,
  Download,
  GitPullRequest,
  Github,
  LayoutDashboard,
  Play,
  Radio,
  SearchCheck,
  ShieldOff,
  TestTube2,
  Users,
  Wrench,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  ContributionHeader,
  ExternalButton,
} from "@/components/contribute/ContributionElements";

const DIY_TELEGRAM = "https://t.me/+krsXZnQp_O5iNTYy";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@SpecterWallet";
const BUILDER_CALL_PLAYLIST =
  "https://www.youtube.com/playlist?list=PLn2qRQUAAg0zFWTWeuZVo05tUnOGAmWkm";

const resources = [
  {
    title: "Specter DIY",
    description: "Production firmware, build instructions and open issues.",
    href: "https://github.com/cryptoadvance/specter-diy",
    label: "Open repository",
    icon: Github,
  },
  {
    title: "Specter Playground",
    description: "Experiment with the emerging interface, UI and UX improvements.",
    href: "https://github.com/k9ert/specter-playground",
    label: "Enter playground",
    icon: LayoutDashboard,
  },
  {
    title: "Live simulator",
    description: "Test new builds in your browser and share feedback before flashing a device.",
    href: "https://try.clavastack.com/simulators/",
    label: "Launch simulator",
    icon: Play,
  },
];

export default function ContributeDIY() {
  return (
    <Layout showNewsletter={false}>
      <SEO
        title="Contribute to Specter DIY"
        description="Contribute to Specter DIY hardware and firmware, join the weekly Builder Call, explore the Playground and test builds in the simulator."
        path="/contribute/diy"
      />
      <main>
        <ContributionHeader
          number="02"
          label="DIY"
          title="Hack on the hardware."
          description="Review firmware, improve cases and electronics, test experimental interfaces or help shape the next generation of the open-source Specter hardware wallet."
          icon={Wrench}
        >
          <ExternalButton
            href="https://github.com/cryptoadvance/specter-diy"
            label="DIY repository"
            icon={Github}
          />
          <ExternalButton href={DIY_TELEGRAM} label="Join DIY Telegram" icon={Users} secondary />
        </ContributionHeader>

        <section className="container mx-auto px-4 py-20">
          <div className="overflow-hidden rounded-2xl border border-specter-primary/30 bg-specter-navy">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 font-mono text-[11px] uppercase tracking-widest text-gray-500 sm:px-8">
              <span>builder_call.log</span>
              <span className="flex items-center gap-2 text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Weekly livestream
              </span>
            </div>
            <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[.75fr_1.25fr] lg:p-12">
              <div>
                <Radio className="h-9 w-9 text-red-400" aria-hidden="true" />
                <h2 className="mt-5 text-3xl font-bold text-white">Specter DIY Builder Call</h2>
                <div className="mt-5 inline-flex items-center gap-3 rounded-lg border border-specter-coral/30 bg-specter-dark px-4 py-3">
                  <CalendarClock className="h-5 w-5 text-specter-coral" aria-hidden="true" />
                  <span className="font-mono text-sm font-semibold text-white">
                    Every Thursday · 17:00 CET
                  </span>
                </div>
              </div>
              <div>
                <p className="leading-relaxed text-gray-300">
                  We meet every week to discuss firmware, hardware, UI and open
                  pull requests. The call is livestreamed on YouTube. Everyone is
                  welcome to listen, ask questions, test ideas or bring current work.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ExternalButton href={DIY_TELEGRAM} label="Request Builder group access" icon={Users} />
                  <ExternalButton href={YOUTUBE_CHANNEL} label="YouTube channel" icon={Play} secondary />
                  <ExternalButton
                    href={BUILDER_CALL_PLAYLIST}
                    label="Builder Call playlist"
                    icon={CirclePlay}
                    secondary
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-gray-500">
                  The DIY Builder group is restricted. New members must be accepted
                  before they can join the discussion and calls.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-specter-navy/40">
          <div className="container mx-auto px-4 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-specter-coral">Pick a starting point</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Build, experiment, test.</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {resources.map(({ title, description, href, label, icon: Icon }) => (
                <article key={title} className="rounded-xl border border-white/10 bg-specter-dark p-6">
                  <Icon className="h-7 w-7 text-specter-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-relaxed text-gray-400">{description}</p>
                  <div className="mt-5">
                    <ExternalButton href={href} label={label} icon={Icon} secondary />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-20 border-t border-white/10 pt-16">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-specter-primary">
                Contribute code
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold text-white md:text-4xl">
                Five ways to move Specter DIY forward.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
                You do not need to implement a complete feature. Reviewing,
                testing and documenting problems are valuable contributions too.
              </p>

              <ol className="mt-10 grid gap-5 md:grid-cols-2">
                <li className="order-5 rounded-xl border border-white/10 bg-specter-dark p-6 sm:col-span-2 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <GitPullRequest className="h-7 w-7 text-specter-primary" aria-hidden="true" />
                    <span className="font-mono text-3xl font-bold text-white/10">05</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">Open a pull request</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    Implement a focused improvement, explain the reason for the
                    change and open a PR early enough to receive useful feedback.
                  </p>
                </li>

                <li className="order-3 rounded-xl border border-white/10 bg-specter-dark p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <SearchCheck className="h-7 w-7 text-specter-coral" aria-hidden="true" />
                    <span className="font-mono text-3xl font-bold text-white/10">03</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">Review code</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    Read open PRs, ask questions and check behavior, security and
                    maintainability. A careful review helps changes ship safely.
                  </p>
                </li>

                <li className="order-2 rounded-xl border border-specter-primary/30 bg-specter-dark p-6 sm:col-span-2 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <TestTube2 className="h-7 w-7 text-green-400" aria-hidden="true" />
                    <span className="font-mono text-3xl font-bold text-white/10">02</span>
                  </div>
                  <div className="mt-5 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
                    <div>
                      <h3 className="text-xl font-bold text-white">Test code and new features</h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        Confirm that proposed changes work on real hardware and
                        report what you tested. GitHub Actions makes this easy:
                        every PR can provide a downloadable firmware build through
                        its workflow run.
                      </p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-specter-navy p-5 sm:p-6">
                      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-specter-primary">
                        Test a pull request
                      </h4>
                      <ol className="mt-5 space-y-4 text-sm text-gray-300">
                        <li className="flex gap-3">
                          <span className="font-mono text-specter-primary">1.</span>
                          <a
                            href="https://github.com/cryptoadvance/specter-diy/actions"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-specter-primary hover:text-specter-coral"
                          >
                            Open the PR's workflow run in GitHub Actions.
                          </a>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-mono text-specter-primary">2.</span>
                          <span className="flex items-start gap-2">
                            <Download className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                            Download the generated firmware artifact.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-mono text-specter-primary">3.</span>
                          Flash the build to your board via cable and test the changed behavior.
                        </li>
                        <li className="flex gap-3">
                          <span className="font-mono text-specter-primary">4.</span>
                          Add your result and hardware details to the PR.
                        </li>
                      </ol>

                      <div className="mt-6 border-t border-specter-coral/20 pt-6">
                        <div className="flex gap-3">
                          <ShieldOff className="mt-0.5 h-5 w-5 shrink-0 text-specter-coral" aria-hidden="true" />
                          <div>
                            <h4 className="font-semibold text-white">Disable the bootloader first</h4>
                            <p className="mt-2 text-sm leading-relaxed text-gray-400">
                              PR firmware cannot be flashed while the protected
                              bootloader is active. Remove bootloader protection
                              before testing; the linked guide walks through the process.
                            </p>
                          </div>
                        </div>
                        <div className="mt-5">
                          <ExternalButton
                            href="https://github.com/cryptoadvance/specter-bootloader/blob/fc6e61eeada07c36b00c99f18f74c26b95b36ddb/doc/remove_protection.md"
                            label="Bootloader removal guide"
                            icon={ShieldOff}
                            secondary
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="order-1 rounded-xl border border-white/10 bg-specter-dark p-6 sm:col-span-2 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <CircleDot className="h-7 w-7 text-specter-primary" aria-hidden="true" />
                    <span className="font-mono text-3xl font-bold text-white/10">01</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">Open issues</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-400">
                    Report things that do not work or could be improved. Include
                    reproducible steps, your board and firmware version, expected
                    behavior and what happened instead.
                  </p>
                  <div className="mt-6">
                    <ExternalButton
                      href="https://github.com/cryptoadvance/specter-diy/issues/new/choose"
                      label="Open an issue"
                      icon={CircleDot}
                      secondary
                    />
                  </div>
                </li>

                <li className="order-4 rounded-xl border border-specter-coral/30 bg-specter-dark p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <Box className="h-7 w-7 text-specter-coral" aria-hidden="true" />
                    <span className="font-mono text-3xl font-bold text-white/10">04</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">Design a case</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-400">
                    Design 3D-printed cases for Specter hardware wallets that anyone
                    can build, print and improve. Share the files and instructions
                    so the whole community can reproduce your design.
                  </p>
                  <div className="mt-6">
                    <ExternalButton
                      href="https://github.com/cryptoadvance/specter-diy/tree/master/docs/enclosures"
                      label="Explore case designs"
                      icon={Box}
                      secondary
                    />
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
