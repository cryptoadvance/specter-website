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
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
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

      // Filter case list entries within the legend
      const allLegendSections = partsList.querySelectorAll('div[data-cases]');
      allLegendSections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const requiredCases = sectionElement.dataset.cases?.split(' ') || [];
        if (filter === 'all' || requiredCases.includes(filter) || (filter === 'specter-shield-lite-battery' && requiredCases.includes('specter-shield-lite'))) {
          sectionElement.style.display = 'block';
        } else {
          sectionElement.style.display = 'none';
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
              <Link href="/" className="text-white hover:text-specter-coral transition-colors duration-200">
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                  className="flex items-center text-white hover:text-specter-coral transition-colors duration-200"
                >
                  Desktop
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {desktopDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-specter-navy rounded-lg shadow-lg border border-gray-600 z-50">
                    <Link 
                      href="/desktop" 
                      className="block px-4 py-2 text-white hover:bg-specter-dark hover:text-specter-coral transition-colors duration-200 rounded-t-lg"
                      onClick={() => setDesktopDropdownOpen(false)}
                    >
                      Desktop Overview
                    </Link>
                    <Link 
                      href="/downloads" 
                      className="block px-4 py-2 text-white hover:bg-specter-dark hover:text-specter-coral transition-colors duration-200 rounded-b-lg"
                      onClick={() => setDesktopDropdownOpen(false)}
                    >
                      Downloads
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setHardwareDropdownOpen(!hardwareDropdownOpen)}
                  className="flex items-center text-specter-coral font-medium hover:text-white transition-colors duration-200"
                >
                  Hardware
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {hardwareDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-specter-navy rounded-lg shadow-lg border border-gray-600 z-50">
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
                      className="block px-4 py-2 text-specter-coral font-medium bg-specter-dark rounded-b-lg"
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
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-specter-primary border-t border-specter-navy">
            <div className="px-4 py-2 space-y-1">
              <Link 
                href="/" 
                className="block py-2 text-white hover:text-specter-coral transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/desktop" 
                className="block py-2 text-white hover:text-specter-coral transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Desktop Overview
              </Link>
              <Link 
                href="/downloads" 
                className="block py-2 text-white hover:text-specter-coral transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Downloads
              </Link>
              <Link 
                href="/hardware" 
                className="block py-2 text-white hover:text-specter-coral transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hardware Overview
              </Link>
              <Link 
                href="/vendors" 
                className="block py-2 text-white hover:text-specter-coral transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vendors
              </Link>
              <Link 
                href="/build-guide" 
                className="block py-2 text-specter-coral font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Build Guide
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 text-white hover:text-specter-coral transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            Specter DIY Build Guide
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            A step-by-step guide to building your own Specter hardware wallet from scratch.
          </p>
          
          <div className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
            <p>
              This guide features a few of the most popular Specter hardware wallet cases. There are many more options available for building your own wallet. You can find more information and resources on the official Specter GitHub pages:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-1 mx-auto max-w-fit">
              <li><a href="https://github.com/cryptoadvance/specter-diy/blob/master/docs/shopping.md" target="_blank" className="text-specter-link hover:underline">Shopping Guide</a></li>
              <li><a href="https://github.com/cryptoadvance/specter-diy/tree/master/docs/enclosures" target="_blank" className="text-specter-link hover:underline">More Case Enclosures</a></li>
              <li><a href="https://github.com/cryptoadvance/specter-diy/blob/master/docs/assembly.md" target="_blank" className="hover:underline text-specter-link">Assembly Instructions</a></li>
              <li><a href="https://github.com/cryptoadvance/specter-diy/tree/master/shield" target="_blank" className="hover:underline text-specter-link">Shield GitHub Page</a></li>
            </ul>
          </div>
        </header>

        {/* Filter Controls */}
        <div className="mb-8 flex flex-wrap justify-center items-center gap-2">
          <h3 className="text-lg font-semibold text-white mr-4">Filter by Case:</h3>
          <button 
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'all' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="all"
            onClick={() => filterElements('all')}
          >
            Show All
          </button>
          <button 
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-diy' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-diy"
            onClick={() => filterElements('specter-diy')}
          >
            Specter DIY
          </button>
          <button 
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-shield"
            onClick={() => filterElements('specter-shield')}
          >
            Specter Shield
          </button>
          <button 
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield-lite' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-shield-lite"
            onClick={() => filterElements('specter-shield-lite')}
          >
            Specter Shield Lite
          </button>
          <button 
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield-lite-battery' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-shield-lite-battery"
            onClick={() => filterElements('specter-shield-lite-battery')}
          >
            Shield Lite (Batteries)
          </button>
        </div>

        {/* Specter DIY Section */}
        <div className="bg-specter-navy rounded-xl shadow-lg border-0 mb-12 case-section overflow-hidden" data-case="specter-diy">
          <div className="grid md:grid-cols-3 gap-12 h-full">
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-gray-700 pb-2">Specter DIY</h2>
              <p className="text-gray-400 text-sm mb-4">A simple 3D printed case with QR-Code scanner using micro USB.</p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Case Name: Specter DIY</h3>
              <p className="text-gray-300 mb-4">A simple 3D-printed case designed to snap together.</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Parts</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li><a href="#part-developer-board" className="hover:underline text-specter-link">Developer Board</a></li>
                <li><a href="#part-gm65-scanner-board" className="hover:underline text-specter-link">GM65 Scanner with board</a></li>
                <li><a href="#part-pins" className="hover:underline text-specter-link">PINs</a></li>
                <li><a href="#case-specter-diy" className="hover:underline text-specter-link">Specter DIY Case</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Tools</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Mini-USB Cable</li>
                <li>Cross-head screwdriver</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">For Use</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Micro USB Cable</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">How to Build</h3>
              <ul className="list-disc list-inside text-specter-link space-y-2">
                <li><a href="https://github.com/cryptoadvance/specter-diy/tree/master/docs/enclosures/snapcase" target="_blank" className="hover:underline">Specter DIY Official Build Guide</a></li>
              </ul>
            </div>
            <div className="md:col-span-2 flex items-end">
              <img 
                src={specterDiyImage} 
                alt="Specter DIY Hardware Wallet"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* Specter Shield Section */}
        <div className="bg-specter-navy rounded-xl shadow-lg border-0 mb-12 case-section overflow-hidden" data-case="specter-shield">
          <div className="grid md:grid-cols-3 gap-12 h-full">
            <div className="md:col-span-2 flex items-end">
              <img 
                src={specterShieldImage} 
                alt="Specter Shield Hardware Wallet with Smart Card"
                className="w-full h-auto block"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-gray-700 pb-2">Specter Shield</h2>
              <p className="text-gray-400 text-sm mb-4">
                An enhanced version with a secure element and a battery.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Case Name: Alternative 3D printed case</h3>
              <p className="text-gray-300 mb-4">
                This is a more print-friendly case for the Specter Shield that provides access to all ports.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Parts</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li><a href="#part-developer-board" className="hover:underline text-specter-link">Developer Board</a></li>
                <li><a href="#part-gm65-scanner" className="hover:underline text-specter-link">GM65 Scanner</a></li>
                <li><a href="#part-specter-shield-board" className="hover:underline text-specter-link">Specter Shield Extension Board</a></li>
                <li><a href="#part-smart-card" className="hover:underline text-specter-link">Smart Card</a></li>
                <li><a href="#part-rechargeable-battery" className="hover:underline text-specter-link">Rechargeable battery</a></li>
                <li><a href="#case-specter-shield" className="hover:underline text-specter-link">Specter Shield Case</a></li>
                <li><a href="#part-screws-shield" className="hover:underline text-specter-link">8x M3 flathead screws (4x 6mm, 2x 8mm, 2x 10mm or 8x 10mm)</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Tools</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Mini-USB Cable</li>
                <li>Cross-head screwdriver</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">For Use</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Micro USB Cable</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">How to Build</h3>
              <ul className="list-disc list-inside text-specter-link space-y-2">
                <li><a href="https://github.com/cryptoadvance/specter-diy/blob/master/shield/Alternative_3D_Printed_Case/Assembly_Instructions.pdf" target="_blank" className="hover:underline">Assembly Instructions</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specter Shield Lite Section */}
        <div className="bg-specter-navy rounded-xl shadow-lg border-0 mb-12 case-section overflow-hidden" data-case="specter-shield-lite">
          <div className="grid md:grid-cols-3 gap-12 h-full">
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-gray-700 pb-2" id="shield-lite">Specter Shield Lite</h2>
              <p className="text-gray-400 text-sm mb-4">A streamlined, low-cost version of the Shield.</p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Case Name: Specter Shield Lite Case</h3>
              <p className="text-gray-300 mb-4">A case designed to fit the more compact Shield Lite board.</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Parts</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li><a href="#part-developer-board" className="hover:underline text-specter-link">Developer Board</a></li>
                <li>
                  <a href="#part-gm65-scanner" className="hover:underline text-specter-link">GM65</a> or <a href="#part-m3y-scanner" className="hover:underline text-specter-link">M3Y Scanner</a>
                </li>
                <li><a href="#part-specter-shield-lite-board" className="hover:underline text-specter-link">Specter Shield Lite Board</a></li>
                <li><a href="#part-smart-card" className="hover:underline text-specter-link">Smart Card</a></li>
                <li><a href="#case-specter-shield-lite" className="hover:underline text-specter-link">3D-printed Case</a></li>
                <li>
                  <a href="#part-screws-lite" className="hover:underline text-specter-link">
                    8x M3 countersunk head screws<br/>
                    (2x 16mm, 2x 12mm, 2x 10mm, 2x 6mm or 6x 12mm, 2x 10mm)
                  </a>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Tools</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Mini-USB Cable</li>
                <li>Cross-head screwdriver</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">For Use</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Micro USB Cable</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">How to Build</h3>
              <ul className="list-disc list-inside text-specter-link space-y-2">
                <li><a href="https://www.youtube.com/watch?v=NWD0xLyAras&t=332s" target="_blank" className="hover:underline">Specter Shield Lite Build Guide</a></li>
              </ul>
            </div>
            <div className="md:col-span-2 flex items-end">
              <img 
                src={specterShieldLiteImage} 
                alt="Specter Shield Lite Hardware Wallet"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* Specter Shield Lite with Batteries Section */}
        <div className="bg-specter-navy rounded-xl shadow-lg border-0 mb-12 case-section overflow-hidden" data-case="specter-shield-lite-battery">
          <div className="grid md:grid-cols-3 gap-12 h-full">
            <div className="md:col-span-2 flex items-end">
              <img 
                src={specterShieldLiteBatteryImage} 
                alt="Specter Shield Lite with Batteries (internal view)"
                className="w-full h-auto block"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-gray-700 pb-2">Specter Shield Lite with Batteries</h2>
              <p className="text-gray-400 text-sm mb-4">A portable version of the Specter Shield Lite with a built-in AAA batteries and USB-C Port.</p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Case Name: Specter Shield Lite with Batteries Case</h3>
              <p className="text-gray-300 mb-4">A case designed specifically to accommodate the batteries and USB-C</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Parts</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li><a href="#shield-lite" className="hover:underline text-specter-link">Specter Shield Lite</a></li>
                <li><a href="#part-usb-c-module" className="hover:underline text-specter-link">USB-C Power Module</a></li>
                <li><a href="#part-switch" className="hover:underline text-specter-link">Switch</a></li>
                <li><a href="#part-contact-springs" className="hover:underline text-specter-link">Contact Springs</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Tools</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Mini-USB Cable</li>
                <li>Cross-head screwdriver</li>
                <li>Soldering iron</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">For Use</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Micro USB Cable</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">How to Build</h3>
              <ul className="list-disc list-inside text-specter-link space-y-2">
                <li><a href="https://www.youtube.com/watch?v=NWD0xLyAras&t=332s" target="_blank" className="hover:underline">Specter Shield Lite with Batteries Case Instructions</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filter Controls for Legend */}
        <div className="mb-8 flex flex-wrap justify-center items-center gap-2">
          <h3 className="text-lg font-semibold text-white mr-4">Filter Legend by Case:</h3>
          <button 
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'all' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="all"
            onClick={() => filterElements('all')}
          >
            Show All
          </button>
          <button 
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-diy' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-diy"
            onClick={() => filterElements('specter-diy')}
          >
            Specter DIY
          </button>
          <button 
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-shield"
            onClick={() => filterElements('specter-shield')}
          >
            Specter Shield
          </button>
          <button 
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield-lite' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-shield-lite"
            onClick={() => filterElements('specter-shield-lite')}
          >
            Specter Shield Lite
          </button>
          <button 
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield-lite-battery' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-shield-lite-battery"
            onClick={() => filterElements('specter-shield-lite-battery')}
          >
            Shield Lite (Batteries)
          </button>
        </div>
        
        {/* Legend Section */}
        <div className="bg-specter-navy rounded-xl shadow-lg p-6 sm:p-8 mb-12" id="legend-section">
          <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-gray-700 pb-2">Legend of Parts</h2>
          <p className="text-gray-400 text-sm mb-4">A list of all the parts and components with short descriptions and links to a few suppliers.</p>

          <ul className="list-none text-gray-300 space-y-8" id="parts-list">
            <li id="part-developer-board" data-cases="specter-diy specter-shield specter-shield-lite specter-shield-lite-battery">
              <h3 className="text-xl font-semibold text-white mb-2">Developer Board</h3>
              <p className="text-gray-400 mb-4">This is the main Smartphone Developer Board that runs the Specter firmware. The STM32F469I-DISCO is the recommended model.</p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://eu.mouser.com/ProductDetail/STMicroelectronics/STM32F469I-DISCO?qs=kWQV1gtkNndotCjy2DKZ4w%3D%3D" target="_blank" className="hover:underline">Mouser</a></li>
                <li><a href="https://de.rs-online.com/web/p/entwicklungstools-microcontroller/9092865" target="_blank" className="hover:underline">RS-Online</a></li>
                <li><a href="https://www.digikey.com/en/products/detail/stmicroelectronics/STM32F469I-DISCO/5428811" target="_blank" className="hover:underline">Digi-Key</a></li>
              </ul>
            </li>
            
            <li id="part-gm65-scanner-board" data-cases="specter-diy">
              <h3 className="text-xl font-semibold text-white mb-2">GM65 Scanner with board</h3>
              <p className="text-gray-400 mb-4">A QR code scanner module used for air-gapped transactions.</p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://www.waveshare.com/barcode-scanner-module.htm" target="_blank" className="hover:underline">Waveshare</a></li>
                <li><a href="https://www.sunsky-online.com/de/p/ZY14328032/Waveshare-Barcode-Scanner-Module-1D-2D-Codes-Reader.htm" target="_blank" className="hover:underline">Sunsky-Online</a></li>
              </ul>
            </li>
            
            <li id="part-gm65-scanner" data-cases="specter-shield specter-shield-lite specter-shield-lite-battery">
              <h3 className="text-xl font-semibold text-white mb-2">GM65 or GM65-S Scanner</h3>
              <p className="text-gray-400 mb-4">A standard GM65 barcode scanner for reading QR codes.</p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://www.alibaba.com/product-detail/Original-GM65-S-Barcode-QR-Code_1601114566992.html?spm=a2700.galleryofferlist.normal_offer.d_image.51f213a0IJ52CF&priceId=aecebae476e543e7aaebb0c257c58836" target="_blank" className="hover:underline">Alibaba</a></li>
                <li><a href="https://de.aliexpress.com/item/33008958186.html?spm=a2g0o.productlist.main.8.3abc2cc23LfGCp&algo_pvid=859a7d84-4e23-4bb6-9133-d65418377045&pdp_ext_f=%7B%22order%22%3A%227%22%2C%22eval%22%3A%221%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A33008958186%7C_p_origin_prod%3A" target="_blank" className="hover:underline">AliExpress</a></li>
                <li><a href="https://cryptoguide.tips/product/gm65-barcode-scanner/" target="_blank" className="hover:underline">Cryptoguide.tips</a></li>
              </ul>
            </li>
            
            <li id="part-m3y-scanner" data-cases="specter-shield-lite specter-shield-lite-battery">
              <h3 className="text-xl font-semibold text-white mb-2">M3Y -W</h3>
              <p className="text-gray-400 mb-4">An OEM barcode scan module for QR code reading.</p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://www.alibaba.com/product-detail/M3Y-W-OEM-Barcode-Scan-Module_1601368712449.html?spm=a2756.trade-list-buyer.0.0.374776e9PKaVPA" target="_blank" className="hover:underline">Alibaba</a></li>
              </ul>
            </li>
            
            <li id="part-pins" data-cases="specter-diy">
              <h3 className="text-xl font-semibold text-white mb-2">PINs</h3>
              <p className="text-gray-400 mb-4">These pins are used to connect the Developer Board to the Shield boards and need to be bent to an L-shape for proper fitting.</p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://eu.mouser.com/ProductDetail/Samtec/DW-02-10-T-S-571?qs" target="_blank" className="hover:underline">Mouser</a></li>
                <li><a href="https://www.amazon.com/gp/product/B015KA0RRU/" target="_blank" className="hover:underline">Amazon</a></li>
              </ul>
            </li>

            <li id="part-specter-shield-board" data-cases="specter-shield">
              <h3 className="text-xl font-semibold text-white mb-2">Specter Shield Board</h3>
              <p className="text-gray-400 mb-4">The main PCB for the Specter Shield, which includes secure element support.</p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://www.pcbway.com/project/shareproject/Specter_Shield_v1_0_0_2024_Update_ea6f25c5.html" target="_blank" className="hover:underline">PCBWay</a></li>
                <li><a href="https://cryptoguide.tips/product/specter-shield-board/" target="_blank" className="hover:underline">Cryptoguide.tips</a></li>
                <li><a href="https://clavastack.com/produkt/specter-shield-board/" target="_blank" className="hover:underline">Clavastack</a></li>
              </ul>
            </li>

            <li id="part-specter-shield-lite-board" data-cases="specter-shield-lite specter-shield-lite-battery">
              <h3 className="text-xl font-semibold text-white mb-2">Specter Shield Lite Board</h3>
              <p className="text-gray-400 mb-4">A compact and simplified version of the Specter Shield PCB.</p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://www.pcbway.com/project/shareproject/Specter_Shield_Lite_ad02f25b.html" target="_blank" className="hover:underline">PCBWay</a></li>
                <li><a href="https://cryptoguide.tips/product/specter-shield-lite-board/" target="_blank" className="hover:underline">Cryptoguide.tips</a></li>
                <li><a href="https://clavastack.com/produkt/specter-shield-lite-board/" target="_blank" className="hover:underline">Clavastack</a></li>
              </ul>
            </li>

            <li id="part-smart-card" data-cases="specter-shield specter-shield-lite specter-shield-lite-battery">
              <h3 className="text-xl font-semibold text-white mb-2">Smart Card</h3>
              <p className="text-gray-400 mb-4">A secure element card used to store cryptographic keys.</p>
              <div className="mt-4">
                <h4 className="font-semibold text-lg text-gray-200">Preflashed:</h4>
                <ul className="list-disc list-inside text-specter-link space-y-1 ml-4">
                  <li><a href="https://cryptoguide.tips/product/j3h145-javacard/" target="_blank" className="hover:underline">Cryptoguide.tips</a></li>
                  <li><a href="https://clavastack.com/produkt/smartcard/" target="_blank" className="hover:underline">Clavastack</a></li>
                  <li><a href="https://clavastack.com/produkt/smartcard/" target="_blank" className="hover:underline">Clavastack (printed)</a></li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-lg text-gray-200">Raw:</h4>
                <ul className="list-disc list-inside text-specter-link space-y-1 ml-4">
                  <li><a href="https://www.alibaba.com/product-detail/J3H145-JCOP3-SecID-P60-JavaCard-Contact_1600717536549.html" target="_blank" className="hover:underline">Alibaba</a></li>
                  <li><a href="https://de.aliexpress.com/item/1005001306297920.html" target="_blank" className="hover:underline">AliExpress</a></li>
                </ul>
              </div>
            </li>
            
            <li id="part-rechargeable-battery" data-cases="specter-shield">
              <h3 className="text-xl font-semibold text-white mb-2">Rechargeable battery</h3>
              <p className="text-gray-400 mb-4">A rechargeable battery to make the Specter Shield portable.</p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://www.amazon.de/dp/B095YC5PW8" target="_blank" className="hover:underline">Amazon.de</a></li>
              </ul>
            </li>
            
            <li id="part-usb-c-module" data-cases="specter-shield-lite-battery">
              <h3 className="text-xl font-semibold text-white mb-2">USB-C Power Module</h3>
              <p className="text-gray-400 mb-4">A module for providing USB-C power to the Specter Shield Lite with Batteries.</p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://de.aliexpress.com/item/1005007510399629.html?gatewayAdapt=usa2deu4itemAdapt" target="_blank" className="hover:underline">AliExpress</a></li>
              </ul>
            </li>
            
            <li id="part-switch" data-cases="specter-shield-lite-battery">
              <h3 className="text-xl font-semibold text-white mb-2">Switch</h3>
              <p className="text-gray-400 mb-4">A switch to turn the device on and off.</p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://de.aliexpress.com/item/10000003088863.html?gatewayAdapt=usa2deu4itemAdapt" target="_blank" className="hover:underline">AliExpress</a></li>
              </ul>
            </li>
            
            <li id="part-contact-springs" data-cases="specter-shield-lite-battery">
              <h3 className="text-xl font-semibold text-white mb-2">Contact Springs</h3>
              <p className="text-gray-400 mb-4">Springs used for battery contacts.</p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://de.aliexpress.com/item/1005005681174972.html?gatewayAdapt=usa2deu4itemAdapt" target="_blank" className="hover:underline">AliExpress</a></li>
              </ul>
            </li>
            
            <li id="part-screws-shield" data-cases="specter-shield">
              <h3 className="text-xl font-semibold text-white mb-2">Screws (Specter Shield)</h3>
              <p className="text-gray-400 mb-4">
                M3 flathead screws
                4x 6mm,
                2x 8mm,
                2x 10mm,
                - or 8x 10mm
              </p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://www.amazon.de/Drenky-Senkkopfschrauben-Gewindeschrauben-Steckdosen-Regelgewinde/dp/B0CN6CLQT1/" target="_blank" className="hover:underline">Amazon.de</a></li>
                <li><a href="https://de.aliexpress.com/item/1005004020339065.html" target="_blank" className="hover:underline">AliExpress</a></li>
              </ul>
            </li>
            
            <li id="part-screws-lite" data-cases="specter-shield-lite specter-shield-lite-battery">
              <h3 className="text-xl font-semibold text-white mb-2">Screws (Specter Shield Lite)</h3>
              <p className="text-gray-400 mb-4">
                M3 countersunk head Screws 
                2x 16mm, 2x 12mm, 2x 10mm, 2x 6mm
                - or 6x 12mm, 2x 10mm
              </p>
              <ul className="list-disc list-inside text-specter-link space-y-1">
                <li><a href="https://1aschrauben.de/SPAX-Senkkopf-Kreuzschlitz-Z-kleiner-Kopf-Vollgewinde-YELLOX-A2L-PZ1-3x10-1000-Stk" target="_blank" className="hover:underline">10mm - 1aschrauben.de</a></li>
                <li><a href="https://1aschrauben.de/SPAX-Senkkopf-Kreuzschlitz-Z-kleiner-Kopf-Vollgewinde-YELLOX-A2L-PZ1-3x12-1000-Stk" target="_blank" className="hover:underline">12mm - 1aschrauben.de</a></li>
              </ul>
            </li>
            
            <li>
              <h3 className="text-xl font-semibold text-white mb-2">Cases</h3>
              <p className="text-gray-400 mb-4">3D-printed cases to house and protect the Specter hardware wallet components.</p>
              
              <div className="mt-4" data-cases="specter-diy" id="case-specter-diy">
                <h4 className="font-semibold text-lg text-gray-200">Specter DIY:</h4>
                <p className="text-gray-400 text-sm mb-2">A simple 3D-printed case designed to snap together.</p>
                <h5 className="font-semibold text-md text-gray-300 ml-4">Print Files:</h5>
                <ul className="list-disc list-inside text-specter-link space-y-1 ml-8">
                  <li><a href="https://github.com/cryptoadvance/specter-diy/tree/master/docs/enclosures/snapcase" target="_blank" className="hover:underline">GitHub</a></li>
                </ul>
                <h5 className="font-semibold text-md text-gray-300 ml-4 mt-2">Buy:</h5>
                <ul className="list-disc list-inside text-specter-link space-y-1 ml-8">
                  <li><a href="https://bitcoin-store.org/products/specter-diy?variant=48150933045560" target="_blank" className="hover:underline">Bitcoin Store</a></li>
                  <li><a href="https://clavastack.com/en/product/einzelteil-snapcase-fuer-specter-diy/" target="_blank" className="hover:underline">Clavastack</a></li>
                </ul>
              </div>
              
              <div className="mt-4" data-cases="specter-shield-lite" id="case-specter-shield-lite">
                <h4 className="font-semibold text-lg text-gray-200">Specter Shield Lite Case:</h4>
                <p className="text-gray-400 text-sm mb-2">A case designed to fit the more compact Shield Lite board and would work with Batteries and USB-C as well.</p>
                <h5 className="font-semibold text-md text-gray-300 ml-4">Print Files:</h5>
                <ul className="list-disc list-inside text-specter-link space-y-1 ml-8">
                  <li><a href="https://www.printables.com/model/1054878-specter-shield-lite-case/comments" target="_blank" className="hover:underline">Printables.com</a></li>
                </ul>
                <h5 className="font-semibold text-md text-gray-300 ml-4 mt-2">Buy:</h5>
                <ul className="list-disc list-inside text-specter-link space-y-1 ml-8">
                  <li><a href="https://cryptoguide.tips/product/specter-shield-lite-case/" target="_blank" className="hover:underline">Cryptoguide.tips</a></li>
                  <li><a href="https://clavastack.com/en/product/specter-shield-lite-case/" target="_blank" className="hover:underline">Clavastack</a></li>
                </ul>
              </div>
              

              
              <div className="mt-4" data-cases="specter-shield" id="case-specter-shield">
                <h4 className="font-semibold text-lg text-gray-200">Alternative 3D printed case:</h4>
                <p className="text-gray-400 text-sm mb-2">A more print-friendly case for the Specter Shield that provides access to all ports.</p>
                <h5 className="font-semibold text-md text-gray-300 ml-4">Print Files:</h5>
                <ul className="list-disc list-inside text-specter-link space-y-1 ml-8">
                  <li><a href="https://github.com/cryptoadvance/specter-diy/tree/master/shield/Alternative_3D_Printed_Case" target="_blank" className="hover:underline">GitHub</a></li>
                </ul>
                <h5 className="font-semibold text-md text-gray-300 ml-4 mt-2">Buy:</h5>
                <ul className="list-disc list-inside text-specter-link space-y-1 ml-8">
                  <li><a href="https://clavastack.com/produkt/specter-shield-case/" target="_blank" className="hover:underline">Clavastack</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}