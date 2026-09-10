import { Link } from "wouter";
import { useEffect, useRef } from "react";
import nostrIcon from "@assets/Nostr_logo_weiß.png";

interface FooterProps {
  showNewsletter?: boolean;
}

export default function Footer({ showNewsletter = false }: FooterProps) {
  const newsletterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showNewsletter || !newsletterRef.current) return;

    const newsletterContainer = newsletterRef.current;
    if (newsletterContainer.querySelector(".emailoctopus-form")) return;

    const script = document.createElement("script");
    script.src =
      "https://eomail6.com/form/c51600a0-81ab-11f0-b46e-69c761b60369.js";
    script.async = true;
    script.setAttribute("data-form", "c51600a0-81ab-11f0-b46e-69c761b60369");
    newsletterContainer.appendChild(script);

    return () => {
      newsletterContainer.replaceChildren();
    };
  }, [showNewsletter]);

  return (
    <footer className="bg-specter-navy py-16 mt-20">
      <div className="container mx-auto px-4">
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="https://github.com/cryptoadvance/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://primal.net/p/nprofile1qqsgquu9u3hf8xdl25mjvt9ymnj3zu97z7q9279wu5v3st8wxhjzr9shj3xk0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nostr"
            className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
          >
            <span
              aria-hidden="true"
              className="block h-6 w-6 bg-current"
              style={{
                maskImage: `url(${nostrIcon})`,
                WebkitMaskImage: `url(${nostrIcon})`,
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskSize: "145%",
                WebkitMaskSize: "145%",
                filter:
                  "drop-shadow(1px 0 0 currentColor) drop-shadow(-1px 0 0 currentColor) drop-shadow(0 1px 0 currentColor) drop-shadow(0 -1px 0 currentColor)",
              }}
            />
          </a>
          <a
            href="https://t.me/spectersupport"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931L23.93 3.821c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693L18.953 5.78c.595-.394 1.136-.176.691.218z"/>
            </svg>
          </a>
          <a 
            href="https://x.com/SpecterDIY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
          >
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/company/cryptoadvance" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="https://www.youtube.com/channel/UCg36aDMyesRu5bQxyuY25tQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* Newsletter Signup - Only show if showNewsletter is true */}
        {showNewsletter && (
          <div className="text-center mb-12">
            <h4 className="text-xl font-semibold mb-4 text-white">
              Stay up to date<br />with Specter
            </h4>
            {/* EmailOctopus form will be loaded here */}
            <div ref={newsletterRef} className="max-w-md mx-auto">
              {/* The EmailOctopus script will inject the form here */}
            </div>
          </div>
        )}

        {/* Copyright and Legal */}
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} | Specter Association</p>
          <div className="flex justify-center space-x-4 flex-wrap gap-y-2">
            <Link
              href="/imprint"
              className="hover:text-specter-coral transition-colors"
            >
              Imprint
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/donate"
              className="hover:text-specter-coral transition-colors"
            >
              Donate
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/brand-guidelines"
              className="hover:text-specter-coral transition-colors"
            >
              Brand Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
