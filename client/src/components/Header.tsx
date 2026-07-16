import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import specterLogo from "@assets/Specter_logo_1756046218246.png";

interface HeaderProps {
  onHomeClick?: () => void; // For home page scroll functionality
}

type DropdownKey = "desktop" | "hardware" | "docs";

export default function Header({ onHomeClick }: HeaderProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const isActive = (path: string) => location === path;
  const isHardwareActive = () => ['/hardware', '/vendors', '/build-guide'].includes(location);
  const isDesktopActive = () => ['/desktop', '/downloads'].includes(location);

  const toggleDropdown = (key: DropdownKey) => {
    setOpenDropdown((current) => (current === key ? null : key));
  };

  useEffect(() => {
    const closeOnOutsideOrEscape = (event: MouseEvent | KeyboardEvent) => {
      if (event.type === "keydown" && (event as KeyboardEvent).key === "Escape") {
        setOpenDropdown(null);
        return;
      }
      if (event.type === "mousedown" && navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideOrEscape);
    document.addEventListener("keydown", closeOnOutsideOrEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideOrEscape);
      document.removeEventListener("keydown", closeOnOutsideOrEscape);
    };
  }, []);

  const handleHomeClick = () => {
    if (onHomeClick && location === '/') {
      onHomeClick();
    }
    setMobileMenuOpen(false);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-specter-primary shadow-lg sticky top-0 z-50">
      <nav ref={navRef} className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src={specterLogo}
                alt="Specter Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {/* Home Link */}
            {location === '/' ? (
              <button
                onClick={onHomeClick}
                className="text-white hover:text-specter-coral transition-colors duration-200"
              >
                Home
              </button>
            ) : (
              <Link
                href="/"
                className="text-white hover:text-specter-coral transition-colors duration-200"
              >
                Home
              </Link>
            )}

            {/* Desktop Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("desktop")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "desktop"}
                className={`flex items-center transition-colors duration-200 ${
                  isDesktopActive()
                    ? 'text-specter-coral font-medium'
                    : 'text-white hover:text-specter-coral'
                }`}
              >
                Desktop
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === "desktop" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-specter-navy rounded-lg shadow-lg border border-gray-600 z-50">
                  <Link
                    href="/desktop"
                    className={`block px-4 py-2 transition-colors duration-200 rounded-t-lg ${
                      isActive('/desktop')
                        ? 'text-specter-coral font-medium bg-specter-dark'
                        : 'text-white hover:bg-specter-dark hover:text-specter-coral'
                    }`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Desktop Overview
                  </Link>
                  <Link
                    href="/downloads"
                    className={`block px-4 py-2 transition-colors duration-200 rounded-b-lg ${
                      isActive('/downloads')
                        ? 'text-specter-coral font-medium bg-specter-dark'
                        : 'text-white hover:bg-specter-dark hover:text-specter-coral'
                    }`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Downloads
                  </Link>
                </div>
              )}
            </div>

            {/* Hardware Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("hardware")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "hardware"}
                className={`flex items-center transition-colors duration-200 ${
                  isHardwareActive()
                    ? 'text-specter-coral font-medium'
                    : 'text-white hover:text-specter-coral'
                }`}
              >
                Hardware
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === "hardware" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-specter-navy rounded-lg shadow-lg border border-gray-600 z-50">
                  <Link
                    href="/hardware"
                    className={`block px-4 py-2 transition-colors duration-200 rounded-t-lg ${
                      isActive('/hardware')
                        ? 'text-specter-coral font-medium bg-specter-dark'
                        : 'text-white hover:bg-specter-dark hover:text-specter-coral'
                    }`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Hardware Overview
                  </Link>
                  <Link
                    href="/vendors"
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      isActive('/vendors')
                        ? 'text-specter-coral font-medium bg-specter-dark'
                        : 'text-white hover:bg-specter-dark hover:text-specter-coral'
                    }`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Vendors
                  </Link>
                  <Link
                    href="/build-guide"
                    className={`block px-4 py-2 transition-colors duration-200 rounded-b-lg ${
                      isActive('/build-guide')
                        ? 'text-specter-coral font-medium bg-specter-dark'
                        : 'text-white hover:bg-specter-dark hover:text-specter-coral'
                    }`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Build Guide
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Link */}
            <Link
              href="/contact"
              className={`transition-colors duration-200 ${
                isActive('/contact')
                  ? 'text-specter-coral font-medium'
                  : 'text-white hover:text-specter-coral'
              }`}
            >
              Contact
            </Link>

            {/* Docs Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("docs")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "docs"}
                className="flex items-center text-white hover:text-specter-coral transition-colors duration-200"
              >
                Docs
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === "docs" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-specter-navy rounded-lg shadow-lg border border-gray-600 z-50">
                  <a
                    href="https://docs.specter.solutions/desktop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-white hover:bg-specter-dark hover:text-specter-coral transition-colors duration-200 rounded-t-lg"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Desktop Docs
                  </a>
                  <a
                    href="https://docs.specter.solutions/diy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-white hover:bg-specter-dark hover:text-specter-coral transition-colors duration-200 rounded-b-lg"
                    onClick={() => setOpenDropdown(null)}
                  >
                    DIY Docs
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-2">
              {/* Home Link */}
              {location === '/' ? (
                <button
                  onClick={handleHomeClick}
                  className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left"
                >
                  Home
                </button>
              ) : (
                <Link
                  href="/"
                  className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left"
                  onClick={handleMobileMenuClose}
                >
                  Home
                </Link>
              )}

              {/* Desktop Links */}
              <Link
                href="/desktop"
                className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left"
                onClick={handleMobileMenuClose}
              >
                Desktop
              </Link>

              <Link
                href="/downloads"
                className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left pl-4"
                onClick={handleMobileMenuClose}
              >
                Downloads
              </Link>

              {/* Hardware Links */}
              {isActive('/hardware') ? (
                <span className="text-specter-coral font-medium py-2 text-left">
                  Hardware
                </span>
              ) : (
                <Link
                  href="/hardware"
                  className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left"
                  onClick={handleMobileMenuClose}
                >
                  Hardware
                </Link>
              )}

              <Link
                href="/vendors"
                className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left pl-4"
                onClick={handleMobileMenuClose}
              >
                Vendors
              </Link>

              <Link
                href="/build-guide"
                className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left pl-4"
                onClick={handleMobileMenuClose}
              >
                Build Guide
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left"
                onClick={handleMobileMenuClose}
              >
                Contact
              </Link>

              {/* Docs Links */}
              <a
                href="https://docs.specter.solutions/desktop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left"
                onClick={handleMobileMenuClose}
              >
                Desktop Docs
              </a>

              <a
                href="https://docs.specter.solutions/diy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left"
                onClick={handleMobileMenuClose}
              >
                DIY Docs
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
