import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import specterLogo from "@assets/Specter_logo_1756046218246.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hardwareDropdownOpen, setHardwareDropdownOpen] = useState(false);

  return (
    <header className="bg-specter-primary shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={specterLogo} 
              alt="Specter Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-specter-coral transition-colors duration-200">
              Home
            </Link>
            <Link href="/desktop" className="text-white hover:text-specter-coral transition-colors duration-200">
              Desktop
            </Link>
            <div className="relative">
              <Link
                href="/hardware"
                onMouseEnter={() => setHardwareDropdownOpen(true)}
                onMouseLeave={() => setHardwareDropdownOpen(false)}
                className="flex items-center text-white hover:text-specter-coral transition-colors duration-200"
              >
                Hardware
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {hardwareDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-specter-navy rounded-lg shadow-lg border border-gray-600 z-50"
                  onMouseEnter={() => setHardwareDropdownOpen(true)}
                  onMouseLeave={() => setHardwareDropdownOpen(false)}
                >
                  <Link 
                    href="/hardware" 
                    className="block px-4 py-2 text-white hover:bg-specter-dark hover:text-specter-coral transition-colors duration-200 rounded-t-lg"
                    onClick={() => setHardwareDropdownOpen(false)}
                  >
                    Hardware Overview
                  </Link>
                  <Link 
                    href="/vendors" 
                    className="block px-4 py-2 text-white hover:bg-specter-dark hover:text-specter-coral transition-colors duration-200"
                    onClick={() => setHardwareDropdownOpen(false)}
                  >
                    Vendors
                  </Link>
                  <Link 
                    href="/build-guide" 
                    className="block px-4 py-2 text-white hover:bg-specter-dark hover:text-specter-coral transition-colors duration-200 rounded-b-lg"
                    onClick={() => setHardwareDropdownOpen(false)}
                  >
                    Build Guide
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" className="text-white hover:text-specter-coral transition-colors duration-200">
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
      </nav>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2">
            <Link href="/" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
              Home
            </Link>
            <Link href="/desktop" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
              Desktop
            </Link>
            <Link href="/hardware" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
              Hardware
            </Link>
            <Link href="/vendors" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left pl-4">
              Vendors
            </Link>
            <Link href="/build-guide" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left pl-4">
              Build Guide
            </Link>
            <Link href="/contact" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
