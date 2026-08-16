import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import specterLogo from "@assets/Specter_logo_1756046218246.png";

interface HeaderProps {
  onHomeClick?: () => void;
}

type DropdownKey = "desktop" | "hardware" | "docs";

interface NavItem {
  label: string;
  href: string;
}

const desktopLinks: NavItem[] = [
  { label: "Desktop Overview", href: "/desktop" },
  { label: "Downloads", href: "/downloads" },
];

const hardwareLinks: NavItem[] = [
  { label: "Hardware Overview", href: "/hardware" },
  { label: "Vendors", href: "/vendors" },
  { label: "Build Guide", href: "/build-guide" },
];

const docsLinks: { label: string; href: string }[] = [
  { label: "Desktop Docs", href: "https://docs.specter.solutions/desktop/" },
  { label: "DIY Docs", href: "https://docs.specter.solutions/diy/" },
];

export default function Header({ onHomeClick }: HeaderProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const isActive = (path: string) => location === path;
  const isHardwareActive = () =>
    ["/hardware", "/vendors", "/build-guide"].includes(location);
  const isDesktopActive = () => ["/desktop", "/downloads"].includes(location);

  const toggleDropdown = (key: DropdownKey) => {
    setOpenDropdown((current) => (current === key ? null : key));
  };

  const closeDropdown = () => setOpenDropdown(null);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Close dropdown on Escape or click outside the nav
  useEffect(() => {
    const handler = (event: MouseEvent | KeyboardEvent) => {
      if (
        event.type === "keydown" &&
        (event as KeyboardEvent).key === "Escape"
      ) {
        closeDropdown();
        return;
      }
      if (
        event.type === "mousedown" &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", handler);
    };
  }, []);

  // Close everything on route change
  useEffect(() => {
    closeDropdown();
    setMobileMenuOpen(false);
  }, [location]);

  const handleHomeClick = () => {
    if (onHomeClick && location === "/") {
      onHomeClick();
    }
    closeMobileMenu();
    closeDropdown();
  };

  const dropdownClasses = (key: DropdownKey) =>
    `absolute top-full mt-2 w-48 bg-specter-navy rounded-lg shadow-lg border border-gray-600 z-50 origin-top transition-all duration-200 ${
      key === "docs" ? "right-0" : "left-0"
    } ${
      openDropdown === key
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`;

  const chevronClasses = (key: DropdownKey) =>
    `ml-1 h-4 w-4 transition-transform duration-200 ${
      openDropdown === key ? "rotate-180" : ""
    }`;

  return (
    <header className="bg-specter-primary shadow-lg sticky top-0 z-50">
      <nav ref={navRef} className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeDropdown}>
              <img
                src={specterLogo}
                alt="Specter Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Home Link */}
            {location === "/" ? (
              <button
                onClick={handleHomeClick}
                className="text-white hover:text-specter-coral transition-colors duration-200"
              >
                Home
              </button>
            ) : (
              <Link
                href="/"
                className="text-white hover:text-specter-coral transition-colors duration-200"
                onClick={closeDropdown}
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
                    ? "text-specter-coral font-medium"
                    : "text-white hover:text-specter-coral"
                }`}
              >
                Desktop
                <ChevronDown className={chevronClasses("desktop")} />
              </button>
              <div className={dropdownClasses("desktop")}>
                {desktopLinks.map((item, idx) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      idx === 0 ? "rounded-t-lg" : ""
                    } ${
                      idx === desktopLinks.length - 1 ? "rounded-b-lg" : ""
                    } ${
                      isActive(item.href)
                        ? "text-specter-coral font-medium bg-specter-dark"
                        : "text-white hover:bg-specter-dark hover:text-specter-coral"
                    }`}
                    onClick={closeDropdown}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Hardware Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("hardware")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "hardware"}
                className={`flex items-center transition-colors duration-200 ${
                  isHardwareActive()
                    ? "text-specter-coral font-medium"
                    : "text-white hover:text-specter-coral"
                }`}
              >
                Hardware
                <ChevronDown className={chevronClasses("hardware")} />
              </button>
              <div className={dropdownClasses("hardware")}>
                {hardwareLinks.map((item, idx) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      idx === 0 ? "rounded-t-lg" : ""
                    } ${
                      idx === hardwareLinks.length - 1 ? "rounded-b-lg" : ""
                    } ${
                      isActive(item.href)
                        ? "text-specter-coral font-medium bg-specter-dark"
                        : "text-white hover:bg-specter-dark hover:text-specter-coral"
                    }`}
                    onClick={closeDropdown}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Link */}
            <Link
              href="/contact"
              className={`transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-specter-coral font-medium"
                  : "text-white hover:text-specter-coral"
              }`}
              onClick={closeDropdown}
            >
              Contact
            </Link>

            {/* Donate Link */}
            <Link
              href="/donate"
              className={`transition-colors duration-200 ${
                isActive("/donate")
                  ? "text-specter-coral font-medium"
                  : "text-white hover:text-specter-coral"
              }`}
              onClick={closeDropdown}
            >
              Donate
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
                <ChevronDown className={chevronClasses("docs")} />
              </button>
              <div className={dropdownClasses("docs")}>
                {docsLinks.map((item, idx) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block px-4 py-2 text-white hover:bg-specter-dark hover:text-specter-coral transition-colors duration-200 ${
                      idx === 0 ? "rounded-t-lg" : ""
                    } ${
                      idx === docsLinks.length - 1 ? "rounded-b-lg" : ""
                    }`}
                    onClick={closeDropdown}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="text-xl" />
            ) : (
              <Menu className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-1">
            {/* Home */}
            {location === "/" ? (
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
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            )}

            {/* Desktop section */}
            <button
              onClick={() => toggleDropdown("desktop")}
              className={`flex items-center justify-between text-left transition-colors duration-200 py-2 ${
                isDesktopActive()
                  ? "text-specter-coral font-medium"
                  : "text-white hover:text-specter-coral"
              }`}
            >
              Desktop
              <ChevronDown className={chevronClasses("desktop")} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 pl-4 ${
                openDropdown === "desktop"
                  ? "max-h-48 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {desktopLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 text-left transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-specter-coral font-medium"
                      : "text-white hover:text-specter-coral"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Hardware section */}
            <button
              onClick={() => toggleDropdown("hardware")}
              className={`flex items-center justify-between text-left transition-colors duration-200 py-2 ${
                isHardwareActive()
                  ? "text-specter-coral font-medium"
                  : "text-white hover:text-specter-coral"
              }`}
            >
              Hardware
              <ChevronDown className={chevronClasses("hardware")} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 pl-4 ${
                openDropdown === "hardware"
                  ? "max-h-48 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {hardwareLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 text-left transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-specter-coral font-medium"
                      : "text-white hover:text-specter-coral"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`text-left transition-colors duration-200 py-2 ${
                isActive("/contact")
                  ? "text-specter-coral font-medium"
                  : "text-white hover:text-specter-coral"
              }`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>

            {/* Donate */}
            <Link
              href="/donate"
              className={`text-left transition-colors duration-200 py-2 ${
                isActive("/donate")
                  ? "text-specter-coral font-medium"
                  : "text-white hover:text-specter-coral"
              }`}
              onClick={closeMobileMenu}
            >
              Donate
            </Link>

            {/* Docs section */}
            <button
              onClick={() => toggleDropdown("docs")}
              className="flex items-center justify-between text-left text-white hover:text-specter-coral transition-colors duration-200 py-2"
            >
              Docs
              <ChevronDown className={chevronClasses("docs")} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 pl-4 ${
                openDropdown === "docs"
                  ? "max-h-48 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {docsLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-left text-white hover:text-specter-coral transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}