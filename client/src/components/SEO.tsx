import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://specter.solutions";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const SITE_NAME = "Specter";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEO({
  title,
  description,
  path = "",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd,
}: SEOProps) {
  // Avoid "Specter Desktop — Specter" — only append site name if not already present
  const fullTitle = title
    ? title.includes(SITE_NAME)
      ? title
      : `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — Open-Source Bitcoin Self-Custody`;

  const url = `${SITE_URL}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  // react-helmet-async's own client-side DOM patching doesn't re-run reliably
  // on client-side route changes in this app (only the initially hydrated
  // page's tags stick around). These effects don't affect prerendering/SSR —
  // that path already emits correct tags per route at build time — they just
  // guarantee the live SPA keeps <title>/description/canonical in sync as
  // wouter swaps pages without a full page reload.
  useEffect(() => {
    document.title = fullTitle;
  }, [fullTitle]);

  useEffect(() => {
    if (!description) return;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [description]);

  useEffect(() => {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [url]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
