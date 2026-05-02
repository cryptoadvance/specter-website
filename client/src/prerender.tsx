// Server-side prerender entrypoint used by vite-prerender-plugin at build time.
// Renders each route to static HTML so search engines and AI crawlers see real
// content rather than an empty <div id="root">.

import { renderToString } from "react-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { Router } from "wouter";
import App from "./App";

interface FilledContext {
  helmet: HelmetServerState;
}

type HeadElement = {
  type: string;
  props: Record<string, string>;
  children?: string;
};

// Parse helmet's serialized HTML strings into HeadElement objects that
// vite-prerender-plugin understands. Strips Helmet's data-rh attribute and
// decodes basic HTML entities in attribute values.
function parseTagString(str: string): HeadElement[] {
  const elements: HeadElement[] = [];
  const tagRegex =
    /<(meta|link|script|base)\b([^>]*?)(?:\/>|>([\s\S]*?)<\/\1\s*>)/g;

  let m: RegExpExecArray | null;
  while ((m = tagRegex.exec(str)) !== null) {
    const [, type, attrsStr, children] = m;
    const props: Record<string, string> = {};
    const attrRegex = /([\w:-]+)="([^"]*)"/g;
    let am: RegExpExecArray | null;
    while ((am = attrRegex.exec(attrsStr)) !== null) {
      const [, key, val] = am;
      if (key === "data-rh") continue;
      props[key] = val
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&apos;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
    }
    const el: HeadElement = { type, props };
    if (children !== undefined && children !== "") el.children = children;
    elements.push(el);
  }
  return elements;
}

// All known top-level routes — used so the plugin discovers every page even
// if no <a> link points at it from the home page.
const ROUTES = [
  "/",
  "/desktop",
  "/hardware",
  "/downloads",
  "/vendors",
  "/build-guide",
  "/contact",
  "/imprint",
];

export async function prerender(data: { url: string }) {
  const helmetContext = {} as FilledContext;

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <Router ssrPath={data.url}>
        <App />
      </Router>
    </HelmetProvider>,
  );

  const { helmet } = helmetContext;

  // Extract <title> contents from helmet's serialized output and decode entities
  // (the prerender plugin re-encodes the string when emitting <title>, so we must
  // hand it the raw text, not pre-encoded HTML).
  const titleStr = helmet.title.toString();
  const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/.exec(titleStr);
  const title = (titleMatch ? titleMatch[1] : "")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

  const elements = new Set<HeadElement>([
    ...parseTagString(helmet.meta.toString()),
    ...parseTagString(helmet.link.toString()),
    ...parseTagString(helmet.script.toString()),
    ...parseTagString(helmet.noscript.toString()),
  ]);

  return {
    html,
    head: {
      lang: "en",
      title,
      elements,
    },
    links: new Set(ROUTES),
  };
}
