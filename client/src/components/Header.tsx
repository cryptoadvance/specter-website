import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import specterLogo from "@assets/Specter_logo_1756046218246.png";

interface HeaderProps {
  onHomeClick?: () => void; // For home page scroll functionality
}

export default function Header({ onHomeClick }: HeaderProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hardwareDropdownOpen, setHardwareDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const isActive = (path: string) => location === path;
  const isHardwareActive = () => ['/hardware', '/vendors', '/build-guide'].includes(location);
  const isDesktopActive = () => ['/desktop', '/downloads'].includes(location);

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
      <nav className="container mx-auto px-4 py-3">
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
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                className={`flex items-center transition-colors duration-200 ${
                  isDesktopActive() 
                    ? 'text-specter-coral font-medium' 
                    : 'text-white hover:text-specter-coral'
                }`}
              >
                Desktop
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {desktopDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-specter-navy rounded-lg shadow-lg border border-gray-600 z-50">
                  <Link 
                    href="/desktop" 
                    className={`block px-4 py-2 transition-colors duration-200 rounded-t-lg ${
                      isActive('/desktop')
                        ? 'text-specter-coral font-medium bg-specter-dark'
                        : 'text-white hover:bg-specter-dark hover:text-specter-coral'
                    }`}
                    onClick={() => setDesktopDropdownOpen(false)}
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
                    onClick={() => setDesktopDropdownOpen(false)}
                  >
                    Downloads
                  </Link>
                </div>
              )}
            </div>

            {/* Hardware Dropdown */}
            <div className="relative">
              <button
                onClick={() => setHardwareDropdownOpen(!hardwareDropdownOpen)}
                className={`flex items-center transition-colors duration-200 ${
                  isHardwareActive()
                    ? 'text-specter-coral font-medium'
                    : 'text-white hover:text-specter-coral'
                }`}
              >
                Hardware
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {hardwareDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-specter-navy rounded-lg shadow-lg border border-gray-600 z-50">
                  <Link
                    href="/hardware"
                    className={`block px-4 py-2 transition-colors duration-200 rounded-t-lg ${
                      isActive('/hardware')
                        ? 'text-specter-coral font-medium bg-specter-dark'
                        : 'text-white hover:bg-specter-dark hover:text-specter-coral'
                    }`}
                    onClick={() => setHardwareDropdownOpen(false)}
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
                    onClick={() => setHardwareDropdownOpen(false)}
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
                    onClick={() => setHardwareDropdownOpen(false)}
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
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
