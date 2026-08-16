import { useState } from "react";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import specterLogo from "@assets/Specter_logo_1756046218246.png";

interface BrandColor {
  name: string;
  value: string;
  meaning: string;
  usage: string;
  tailwindClass?: string;
}

const brandColors: BrandColor[] = [
  {
    name: "specter-dark",
    value: "#04070B",
    meaning: "Background black",
    usage: "Page background and main content areas",
    tailwindClass: "bg-specter-dark",
  },
  {
    name: "specter-dark-secondary",
    value: "#1E2734",
    meaning: "Secondary dark background",
    usage: "Content cards, boxes, and component backgrounds",
    tailwindClass: "bg-specter-dark-secondary",
  },
  {
    name: "specter-dark-accent",
    value: "#0C1A27",
    meaning: "Logo background accent",
    usage: "Logo container and brand presentation",
    tailwindClass: "bg-specter-dark-accent",
  },
  {
    name: "specter-light",
    value: "#FCFCFC",
    meaning: "Primary text color",
    usage: "Main text and primary content",
  },
  {
    name: "specter-light-secondary",
    value: "#D1D5DB",
    meaning: "Secondary text color",
    usage: "Secondary text and supporting details",
  },
  {
    name: "specter-primary",
    value: "#1F99E5",
    meaning: "Main blue",
    usage: "Primary buttons and section headings",
    tailwindClass: "bg-specter-primary",
  },
  {
    name: "specter-coral",
    value: "#FF7A7A",
    meaning: "Accent coral",
    usage: "Secondary buttons and alternative actions",
    tailwindClass: "bg-specter-coral",
  },
  {
    name: "specter-logo",
    value: "#E33630",
    meaning: "Logo red",
    usage: "Specter logo and brand identity",
  },
];

const diyColors: BrandColor[] = [
  {
    name: "specter-diy-background",
    value: "#192432",
    meaning: "Background color for DIY interface",
    usage: "Background for hardware wallet interface",
  },
  {
    name: "specter-diy-button",
    value: "#506072",
    meaning: "Button color for DIY interface",
    usage: "Button interactions in hardware wallet",
  },
  {
    name: "specter-diy-slider",
    value: "#2372B2",
    meaning: "Slider and interactive element color",
    usage: "Slider and interactive elements",
  },
];

const usageGuidelines = [
  {
    label: "specter-primary",
    title: "Primary actions",
    description:
      "Use for main call-to-action buttons like 'Submit', 'Continue', or 'Learn More'. This color draws focus to the most important action on the page.",
  },
  {
    label: "specter-coral",
    title: "Alternative actions",
    description:
      "Use for alternative actions like 'Cancel', 'Skip', or 'Back'. Use sparingly to avoid overwhelming the page.",
  },
  {
    label: "specter-primary (Headers & Titles)",
    title: "Headings",
    description:
      "Use for page titles and section headings. This makes key topics stand out and helps users navigate the site structure.",
  },
  {
    label: "specter-dark",
    title: "Page background",
    description:
      "Use for the main page background. Apply this to all full-width page areas.",
  },
  {
    label: "specter-dark-secondary",
    title: "Content surfaces",
    description:
      "Use for content cards, information boxes, and component backgrounds. This creates visual separation from the page background.",
  },
  {
    label: "specter-dark-accent",
    title: "Logo container",
    description:
      "Use only for the logo container area. Keep this space clean and separate from other content.",
  },
  {
    label: "specter-light",
    title: "Body text",
    description:
      "Use for main body text, headings, and important information. This ensures maximum readability.",
  },
  {
    label: "specter-light-secondary",
    title: "Supporting text",
    description:
      "Use for helper text, labels, dates, and supporting information that isn't the main focus.",
  },
  {
    label: "specter-logo",
    title: "Logo only",
    description:
      "Use only for the Specter logo. Do not use this color for buttons, text, or other UI elements.",
  },
];

const designPrinciples = [
  {
    title: "High Contrast",
    description:
      "Dark backgrounds paired with bright text ensure excellent readability. Users can quickly scan content and locate important buttons and information without eye strain.",
  },
  {
    title: "Clear Hierarchy",
    description:
      "Color creates visual hierarchy across the site. Blue draws attention to primary actions, while secondary text recedes. This guides users naturally through page content.",
  },
  {
    title: "Accessibility",
    description:
      "All color combinations meet WCAG AA contrast standards. Text remains legible for users with different vision abilities, ensuring an inclusive web experience.",
  },
  {
    title: "Consistency",
    description:
      "The same colors apply across all website pages and sections. This creates a unified brand experience and helps users understand interface patterns.",
  },
];

function ColorSwatch({ color, onCopy }: { color: BrandColor; onCopy: (value: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onCopy(color.value)}
      className="group text-left bg-specter-navy rounded-xl overflow-hidden border border-gray-700 hover:border-specter-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-specter-primary"
      aria-label={`Copy ${color.name} color value`}
    >
      <div
        className="h-24 w-full"
        style={{
          backgroundColor: color.value,
          boxShadow:
            color.value === "#FCFCFC" || color.value === "#D1D5DB"
              ? "inset 0 0 0 1px rgba(0,0,0,0.1)"
              : undefined,
        }}
      />
      <div className="p-4">
        <div className="text-white font-semibold text-sm mb-1">{color.name}</div>
        <div className="text-specter-primary font-mono text-xs mb-2 flex items-center justify-between">
          <span>{color.value}</span>
          <span className="text-gray-500 group-hover:text-specter-primary transition-colors">
            copy
          </span>
        </div>
        <div className="text-gray-400 text-xs leading-relaxed">{color.usage}</div>
      </div>
    </button>
  );
}

export default function BrandGuidelines() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <Layout showNewsletter={false}>
      <SEO
        title="Brand Guidelines"
        description="Official Specter brand guidelines: color palette, typography, design principles and usage. For contributors, partners and press working with the Specter brand."
        path="/brand-guidelines"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Specter Brand Guidelines",
          publisher: {
            "@type": "NGO",
            name: "Specter Association",
            url: "https://specter.solutions",
          },
          url: "https://specter.solutions/brand-guidelines",
        }}
      />

      <header className="text-center py-16 px-4">
        <div className="inline-flex items-center justify-center bg-specter-dark-accent rounded-2xl p-8 mb-8">
          <img
            src={specterLogo}
            alt="Specter Logo"
            className="h-24 w-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-specter-primary mb-4">
          Specter Brand Guidelines
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          The official reference for working with the Specter brand — color
          palette, typography, principles, and usage.
        </p>
      </header>

      <main className="container mx-auto px-4 space-y-16 pb-20 max-w-5xl">
        {/* Intro */}
        <section>
          <Card className="bg-specter-navy rounded-2xl p-8 shadow-2xl border-0 border-l-4 border-l-specter-primary">
            <p className="text-gray-300 leading-relaxed">
              These guidelines keep the Specter brand consistent across the
              website, the Specter DIY hardware wallet interface, marketing
              materials and documentation. Contributors, partners and press
              should follow them whenever the brand is represented publicly.
            </p>
          </Card>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Color Palette</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandColors.map((color) => (
              <ColorSwatch key={color.name} color={color} onCopy={handleCopy} />
            ))}
          </div>
          {copied && (
            <p className="text-specter-primary text-sm mt-4 text-center">
              Copied {copied} to clipboard
            </p>
          )}
        </section>

        {/* DIY Colors */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-4">
            Specter DIY Hardware Wallet Colors
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl">
            These colors are used exclusively within the Specter DIY Hardware
            Wallet interface and should not be used on the website or marketing
            materials.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diyColors.map((color) => (
              <ColorSwatch key={color.name} color={color} onCopy={handleCopy} />
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Typography</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-specter-navy rounded-2xl p-8 shadow-2xl border-0">
              <h3 className="text-xl font-bold text-white mb-3">
                Website & All Other Uses
              </h3>
              <p className="text-white text-lg mb-3">Sans-Serif</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Clean, readable typeface for the website, marketing materials,
                documentation, and all other brand applications. Ensures
                consistency everywhere.
              </p>
            </Card>
            <Card className="bg-specter-navy rounded-2xl p-8 shadow-2xl border-0">
              <h3 className="text-xl font-bold text-white mb-3">
                Specter DIY Hardware Wallet
              </h3>
              <p
                className="text-white text-lg mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
              >
                Montserrat
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Used throughout the Specter DIY Hardware Wallet interface. Bold,
                modern typeface that ensures clarity on device displays.
              </p>
            </Card>
          </div>
        </section>

        {/* Design Principles */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            Design Principles
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {designPrinciples.map((principle) => (
              <Card
                key={principle.title}
                className="bg-specter-navy rounded-2xl p-8 shadow-2xl border-0"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Button Styles */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-4">Button Styles</h2>
          <p className="text-gray-300 mb-6">
            Two button styles help users distinguish between primary and
            alternative actions:
          </p>
          <Card className="bg-specter-navy rounded-2xl p-8 shadow-2xl border-0">
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Primary Action
              </button>
              <button
                type="button"
                className="bg-specter-coral hover:bg-red-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Secondary Action
              </button>
            </div>
          </Card>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            Usage Guidelines
          </h2>
          <Card className="bg-specter-navy rounded-2xl p-8 shadow-2xl border-0">
            <ul className="space-y-4">
              {usageGuidelines.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 border-b border-gray-700 pb-4 last:border-b-0 last:pb-0"
                >
                  <strong className="text-specter-primary font-mono text-sm whitespace-nowrap sm:flex-shrink-0">
                    {item.label}
                  </strong>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Footer note */}
        <section>
          <p className="text-gray-500 text-sm text-center">
            Specter Brand Guidelines · Last updated January 2025
          </p>
          <p className="text-gray-500 text-sm text-center mt-2">
            For questions about brand usage, reach out via the{" "}
            <a
              href="/contact"
              className="text-specter-coral hover:underline"
            >
              contact page
            </a>
            .
          </p>
        </section>
      </main>
    </Layout>
  );
}