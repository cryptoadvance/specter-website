import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import hardwareBackgroundImage from "@assets/imgi_11_Specter_Signer-scaled_1755538028904.jpg";
import specterLogo from "@assets/Specter_logo_1756046218246.png";


export default function Hardware() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hardwareDropdownOpen, setHardwareDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

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
                      className="block px-4 py-2 text-specter-coral font-medium bg-specter-dark rounded-t-lg"
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
                <Link href="/" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
                  Home
                </Link>
                <Link href="/desktop" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
                  Desktop
                </Link>
                <span className="text-specter-coral font-medium py-2 text-left">
                  Hardware
                </span>
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
      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden" 
        style={{
          backgroundImage: `url(${hardwareBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-md">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Specter Hardware Wallet
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Open-source firmware on trust minimized signing devices.
            </p>
            <div>
              <a 
                href="https://github.com/cryptoadvance/specter-diy/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Specter Firmware
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="py-20 bg-specter-dark">
        <div className="container mx-auto px-4">
          
          <div className="mb-16">
            <p className="text-lg text-center max-w-4xl mx-auto mb-6">
              Specter Firmware enables you to build your own trust <strong>minimized signing devices.</strong>
            </p>
            <p className="text-lg text-center max-w-4xl mx-auto mb-6">
              It is <strong>FOSS</strong> free open source software under the MIT license.
            </p>
            <p className="text-lg text-center max-w-4xl mx-auto mb-12">
              Open source firmware and off-the-shelf hardware, for trust minimized <strong>bitcoin self-custody.</strong>
            </p>
          </div>

          {/* Specter Firmware Section */}
          <section className="mb-20">
            <Card className="bg-specter-navy rounded-xl shadow-2xl border-0 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-12 h-full">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-6 text-white">Specter Firmware</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Open source firmware for signing devices.
                  </p>
                  <a 
                    href="https://github.com/cryptoadvance/specter-diy/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent border-2 border-specter-coral text-specter-coral hover:bg-specter-coral hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Specter Firmware &gt;&gt;
                  </a>
                </div>
                <div className="md:col-span-2 flex items-end">
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/03/IMG_0058.png" 
                    alt="Specter Firmware" 
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </Card>
          </section>



          {/* Specter DIY Section */}
          <section className="mb-20">
            <Card className="bg-specter-navy rounded-xl shadow-2xl border-0 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-12 h-full">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-6 text-white">Specter DIY</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Very easy to build from off-the-shelf components to minimize supply chain risk.
                  </p>
                  <Link 
                    href="/build-guide"
                    className="inline-block bg-transparent border-2 border-specter-coral text-specter-coral hover:bg-specter-coral hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Build Instructions &gt;&gt;
                  </Link>
                </div>
                <div className="md:col-span-2 flex items-end">
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/02/Specter-DIY-Barebones.png" 
                    alt="Specter DIY Barebones" 
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* DIY Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-specter-navy rounded-xl p-6 border-0">
              <h3 className="text-xl font-bold mb-4 text-white">Signing Device</h3>
              <p className="text-gray-300">
                The Specter DIY uses the STM Discovery Board and Waveshare QR Code Scanner to create a signing device purely from off-the-shelf components, minimizing supply-chain risks.
              </p>
            </Card>
            
            <Card className="bg-specter-navy rounded-xl p-6 border-0">
              <h3 className="text-xl font-bold mb-4 text-white">Temporary Seed Mode</h3>
              <p className="text-gray-300">
                To eliminate the need for a built-in secure element, Specter DIY can operate in Temporary Seed Mode. In this mode, seed words are deleted each time the device is powered off and must be re-imported with each use.
              </p>
            </Card>
            
            <Card className="bg-specter-navy rounded-xl p-6 border-0">
              <h3 className="text-xl font-bold mb-4 text-white">Easy Seed Import</h3>
              <p className="text-gray-300">
                The smartphone-sized touchscreen display makes it simple to enter the Bitcoin seed phrase. Additionally, SeedQR codes are supported for added convenience.
              </p>
            </Card>
          </div>



          {/* Specter Shield Section */}
          <section className="mb-20">
            <Card className="bg-specter-navy rounded-xl shadow-2xl border-0 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-12 h-full">
                <div className="md:col-span-2 flex items-end">
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/01/Specter-Shield.png" 
                    alt="Specter Shield" 
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-6 text-white">Specter Shield</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    An open-source extension board for the Specter DIY, the Specter Shield enables highly secure seed phrase encryption using smartcards.
                  </p>
                  <a 
                    href="#"
                    className="inline-block bg-transparent border-2 border-specter-coral text-specter-coral hover:bg-specter-coral hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Order Specter Shield &gt;&gt;
                  </a>
                </div>
              </div>
            </Card>
          </section>

          {/* Shield Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-specter-navy rounded-xl p-6 border-0">
              <h3 className="text-xl font-bold mb-4 text-white">Secure Element</h3>
              <p className="text-gray-300">
                With the Specter Shield, you can encrypt your Bitcoin seed phrase securely using a secure chip. Even if an attacker gains physical access to the device, they are limited to 10 PIN attempts to access the seed phrase.
              </p>
            </Card>
            
            <Card className="bg-specter-navy rounded-xl p-6 border-0">
              <h3 className="text-xl font-bold mb-4 text-white">Multiple Smartcards</h3>
              <p className="text-gray-300">
                Support for multiple smartcards allows you to manage multiple seed phrases, functioning like several independent hardware wallets.
              </p>
            </Card>
            
            <Card className="bg-specter-navy rounded-xl p-6 border-0">
              <h3 className="text-xl font-bold mb-4 text-white">Family Hardware Wallet</h3>
              <p className="text-gray-300">
                The Specter Shield can be shared among family members. Each member can use their own smartcard with a unique seed phrase, eliminating the need to purchase multiple hardware wallets.
              </p>
            </Card>
          </div>



          {/* Usage Image */}
          <div className="mb-20 text-center">
            <img 
              src="https://specter.solutions/wp-content/uploads/2022/02/Specter_Signer_In_Use-scaled.jpg" 
              alt="Specter Signer In Use" 
              className="w-full max-w-4xl mx-auto h-auto rounded-lg"
            />
          </div>



          {/* Firmware Features - moved to bottom */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Firmware Features</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Embit Library</h3>
                <p className="text-gray-300">
                  Specter firmware uses our <a href="https://embit.rocks/#/" className="text-specter-coral hover:underline">Embit bitcoin library</a>. It is designed to run either with Python 3 on a PC or with MicroPython on embedded devices.
                </p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Liquid Support</h3>
                <p className="text-gray-300">
                  Use Specter Hardware wallets in singlesig or multisig wallets for self custody of Liquid assets.
                </p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Intuitive Interaction</h3>
                <p className="text-gray-300">
                  Interface optimized for a 4inch touch display.
                </p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Anti-phishing words</h3>
                <p className="text-gray-300">
                  Seed displayed after each pin entry verifies the device was not tampered with.
                </p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Secure Element</h3>
                <p className="text-gray-300">Shield board enables smart cards to encrypt wallet seeds. Multiple cards are acting like separate hardware wallets.</p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Airgapped</h3>
                <p className="text-gray-300">
                  Use QR codes to stay completely offline.
                </p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">QR Code Wallet Import</h3>
                <p className="text-gray-300">Scan QR code to import wallet descriptor to the device.</p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Temporary Seed</h3>
                <p className="text-gray-300">
                  Private keys can be stored locally in device memory.
                </p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Added Entropy</h3>
                <p className="text-gray-300">
                  Use coin-flips to introduce extra randomness to key generation.
                </p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Key Generation</h3>
                <p className="text-gray-300">Securely generate seed words using the microcontrollers true random number generator and entropy from koordinates and timestamps of every display touch.</p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Pin Generation</h3>
                <p className="text-gray-300">
                  Lock device access with a pin.
                </p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">PSBT</h3>
                <p className="text-gray-300">
                  Partially signed bitcoin transaction support.
                </p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Verify Addresses</h3>
                <p className="text-gray-300">
                  Verify and export receive addresses.
                </p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">SeedQR</h3>
                <p className="text-gray-300">
                  Import Seeds instant into the device by just scanning classic or compact seedQR Codes.
                </p>
              </Card>
              
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">BIP85</h3>
                <p className="text-gray-300">
                  Derive child seed phrases from your primary seed phrase for use on less secure devices, such as hot wallets, lightning wallets, etc.
                </p>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://github.com/cryptoadvance/specter-diy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border-2 border-specter-coral text-specter-coral hover:bg-specter-coral hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                View GitHub for full details &gt;&gt;
              </a>
            </div>
          </section>

        </div>
      </main>
      {/* Footer */}
      <footer className="bg-specter-navy py-16 mt-20">
        <div className="container mx-auto px-4">
          
          
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="https://github.com/cryptoadvance/specter-desktop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/spectersupport" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/specterwallet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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

          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay up to date with Specter
            </h4>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            © 2022 | Specter Solutions AG | 
            <a href="https://specter.solutions/imprint/" className="hover:text-specter-coral mx-2">Imprint</a> | 
            <a href="https://specter.solutions/privacy-policy/" className="hover:text-specter-coral mx-2">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}