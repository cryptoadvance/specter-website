import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

// Import vendor logos
import clavaStackLogo from "@assets/BtcFrankenstein Logo 3.4.1_1755840288095.png";
import plebStyleLogo from "@assets/imgi_1_YwTqyo_1_400x400_1755840295047.png";
import bitcoinStoreLogo from "@assets/CalMPylj_400x400 (1)_1755840297048.jpg";
import cryptoguideLogo from "@assets/Cryptoguide_1755840305434.jpg";
import specterLogo from "@assets/Specter_logo_1756046218246.png";

export default function Vendors() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hardwareDropdownOpen, setHardwareDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [continentFilter, setContinentFilter] = useState("all");
  const [tagsFilter, setTagsFilter] = useState("all");

  const vendors = [
    {
      name: "ClavaStack",
      url: "https://clavastack.com/",
      continent: "europe",
      country: "Germany",
      tags: ["parts", "shield", "preassembled"],
      member: "Schnuartz",
      logo: clavaStackLogo
    },
    {
      name: "Pleb.style",
      url: "https://pleb.style/",
      continent: "europe",
      country: "Germany",
      tags: ["shield", "preassembled"],
      member: "None",
      logo: plebStyleLogo
    },
    {
      name: "Bitcoin-store.org",
      url: "https://bitcoin-store.org/",
      continent: "europe",
      country: "Switzerland",
      tags: ["parts", "preassembled"],
      member: "Thomas",
      logo: bitcoinStoreLogo
    },
    {
      name: "Cryptoguide.tips",
      url: "https://cryptoguide.tips/shop/",
      continent: "north-america",
      country: "Canada",
      tags: ["parts", "shield"],
      member: "Crypto Guide",
      logo: cryptoguideLogo
    }
  ];

  const filteredVendors = vendors.filter(vendor => {
    const continentMatch = continentFilter === 'all' || vendor.continent === continentFilter;
    const tagMatch = tagsFilter === 'all' || vendor.tags.includes(tagsFilter);
    return continentMatch && tagMatch;
  });

  const getTagLabel = (tag: string) => {
    const labels: { [key: string]: string } = {
      'parts': 'Parts',
      'shield': 'Shield',
      'preassembled': 'Preassembled'
    };
    return labels[tag] || tag;
  };

  return (
    <div className="bg-specter-dark text-white font-sans min-h-screen">
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
                <Link
                  href="/hardware"
                  onMouseEnter={() => setHardwareDropdownOpen(true)}
                  onMouseLeave={() => setHardwareDropdownOpen(false)}
                  className="flex items-center text-specter-coral font-medium hover:text-white transition-colors duration-200"
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
                      className="block px-4 py-2 text-specter-coral font-medium bg-specter-dark"
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
                <Link href="/" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
                  Home
                </Link>
                <Link href="/desktop" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
                  Desktop
                </Link>
                <Link href="/hardware" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
                  Hardware
                </Link>
                <span className="text-specter-coral font-medium py-2 text-left pl-4">
                  Vendors
                </span>
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            Specter Wallet Vendors
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Find vendors for the Specter Hardware Wallet.
          </p>
        </header>

        {/* Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 p-4 rounded-xl bg-specter-navy shadow-xl">
          {/* Continent Filter */}
          <div className="w-full sm:w-1/2">
            <label htmlFor="continent-filter" className="block text-sm font-medium text-gray-400 mb-2">Filter by Continent</label>
            <select 
              id="continent-filter"
              value={continentFilter}
              onChange={(e) => setContinentFilter(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base bg-specter-dark border border-gray-600 focus:outline-none focus:ring-2 focus:ring-specter-primary focus:border-specter-primary rounded-lg text-white"
            >
              <option value="all">All Continents</option>
              <option value="europe">Europe</option>
              <option value="north-america">North America</option>
            </select>
          </div>
          
          {/* Tags Filter */}
          <div className="w-full sm:w-1/2">
            <label htmlFor="tags-filter" className="block text-sm font-medium text-gray-400 mb-2">Filter by Product Type</label>
            <select 
              id="tags-filter"
              value={tagsFilter}
              onChange={(e) => setTagsFilter(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base bg-specter-dark border border-gray-600 focus:outline-none focus:ring-2 focus:ring-specter-primary focus:border-specter-primary rounded-lg text-white"
            >
              <option value="all">All Products</option>
              <option value="parts">Parts</option>
              <option value="shield">Shield</option>
              <option value="preassembled">Preassembled</option>

            </select>
          </div>
        </div>

        {/* Vendors List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor, index) => (
            <Card key={index} className="p-6 bg-specter-navy rounded-xl shadow-lg transition-transform transform hover:scale-105 border-0">
              {/* Logo */}
              <div className="mb-4">
                <img 
                  src={vendor.logo} 
                  alt={`${vendor.name} logo`}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-white">
                <a 
                  href={vendor.url} 
                  className="hover:underline hover:text-specter-coral transition-colors duration-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {vendor.name}
                </a>
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                {vendor.continent === 'europe' ? 'Europe' : 'North America'}, {vendor.country}
              </p>
              <p className="text-gray-500 text-xs mb-4">
                Association member: {vendor.member}
              </p>
              <div className="flex flex-wrap gap-2">
                {vendor.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-600 text-gray-300"
                  >
                    {getTagLabel(tag)}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Warning Section */}
        <div className="mt-12 p-6 rounded-xl bg-red-900/25 text-red-300 border border-red-900 text-center">
          <p className="text-lg font-medium">
            Buy at your own risk. Make sure yourself whether the shop is reputable or build the device yourself.
          </p>
        </div>

      </main>
    </div>
  );
}