import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import specterDiyImage from "@assets/Specter_diy_startscreen_1756029214790.png";
import specterShieldImage from "@assets/Specter_Shield_vorne_Smarcard_removed_1756029281093.png";
import specterShieldLiteImage from "@assets/Front_Smartcard_Kabel_removed_orange-scaled_1756029302530.png";
import specterShieldLiteBatteryImage from "@assets/Specter Shield Lite von hinten ohne case_1756030601602.png";
import specterLogo from "@assets/Specter_logo_1756046218246.png";

export default function BuildGuide() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hardwareDropdownOpen, setHardwareDropdownOpen] = useState(false);

  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Initialize filtering when component mounts
    filterElements('all');
    
    // Add event listeners for part links
    const partLinks = document.querySelectorAll('.case-section ul a');
    partLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = (link as HTMLAnchorElement).getAttribute('href')?.substring(1);
        if (targetId) {
          filterElements('all');
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
              highlightTarget(targetId);
            }, 300);
          }
        }
      });
    });
  }, []);

  const filterElements = (filter: string) => {
    setActiveFilter(filter);
    
    const caseSections = document.querySelectorAll('.case-section');
    const partsList = document.getElementById('parts-list');
    const legendSection = document.getElementById('legend-section');
    
    // Handle case sections
    caseSections.forEach(section => {
      const sectionElement = section as HTMLElement;
      const caseType = sectionElement.dataset.case;
      if (filter === 'all' || caseType === filter || (filter === 'specter-shield-lite-battery' && caseType === 'specter-shield-lite')) {
        sectionElement.style.display = 'block';
      } else {
        sectionElement.style.display = 'none';
      }
    });

    // Handle legend visibility
    if (legendSection) {
      legendSection.style.display = 'block';
    }

    // Filter individual parts within the legend
    if (partsList) {
      const parts = partsList.querySelectorAll('li[data-cases]');
      parts.forEach(part => {
        const partElement = part as HTMLElement;
        const requiredCases = partElement.dataset.cases?.split(' ') || [];
        if (filter === 'all' || requiredCases.includes(filter) || (filter === 'specter-shield-lite-battery' && requiredCases.includes('specter-shield-lite'))) {
          partElement.style.display = 'block';
        } else {
          partElement.style.display = 'none';
        }
      });
    }
  };

  const highlightTarget = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.classList.add('highlight');
      setTimeout(() => {
        targetElement.classList.remove('highlight');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-specter-dark text-white">
      {/* Header */}
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
              <button 
                onClick={() => window.location.href = '/'}
                className="text-white hover:text-specter-coral transition-colors duration-200"
              >
                Home
              </button>
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

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => window.location.href = '/'}
                  className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left"
                >
                  Home
                </button>
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
        </nav>
      </header>

      {/* Build Guide Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-specter-coral mb-4">Build Guide</h1>
          <p className="text-lg text-gray-300">Navigation has been synchronized with the home page</p>
        </div>
      </div>
    </div>
  );
}