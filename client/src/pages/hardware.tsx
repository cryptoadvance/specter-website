import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import hardwareBackgroundImage from "@assets/imgi_11_Specter_Signer-scaled_1755538028904.jpg";

export default function Hardware() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                  src="https://specter.solutions/wp-content/uploads/2020/09/SpecterSolutions_Logo%402x-180x15.png" 
                  alt="Specter Solutions Logo" 
                  className="h-6"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-specter-coral transition-colors duration-200">
                Home
              </Link>
              <Link href="/desktop" className="text-white hover:text-specter-coral transition-colors duration-200">
                Desktop
              </Link>
              <span className="text-specter-coral font-medium">
                Hardware
              </span>
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden" 
        style={{
          backgroundImage: `url(${hardwareBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Specter Hardware
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Open-source firmware on trust minimized signing devices.
          </p>
          <a 
            href="https://github.com/cryptoadvance/specter-diy/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >Specter Firmware</a>
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
            <Card className="bg-specter-navy rounded-xl p-8 md:p-12 shadow-2xl border-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
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
                <div>
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/03/IMG_0058.png" 
                    alt="Specter Firmware" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* Firmware Features */}
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

          {/* Specter DIY Section */}
          <section className="mb-20">
            <Card className="bg-specter-navy rounded-xl p-8 md:p-12 shadow-2xl border-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Specter DIY</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Very easy to build from off-the-shelf components to minimize supply chain risk.
                  </p>
                  <a 
                    href="https://github.com/cryptoadvance/specter-diy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent border-2 border-specter-coral text-specter-coral hover:bg-specter-coral hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Build Instructions &gt;&gt;
                  </a>
                </div>
                <div>
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/02/Specter-DIY-Barebones.png" 
                    alt="Specter DIY Barebones" 
                    className="w-full h-auto"
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
              <h3 className="text-xl font-bold mb-4 text-white">Stateless</h3>
              <p className="text-gray-300">
                To remove the need for a built in secure element Specter DIY can be run in agnostic mode, seed words are deleted every time the device is powered off and re-imported with each use.
              </p>
            </Card>
            
            <Card className="bg-specter-navy rounded-xl p-6 border-0">
              <h3 className="text-xl font-bold mb-4 text-white">3D Printed Case</h3>
              <p className="text-gray-300 mb-4">
                Case designed by Seedsigner. Purchase a case or 3D print your own.
              </p>
              <a 
                href="https://github.com/cryptoadvance/specter-diy/tree/master/docs/enclosures"
                target="_blank"
                rel="noopener noreferrer"
                className="text-specter-coral hover:underline"
              >
                Download &gt;&gt;
              </a>
            </Card>
          </div>

          {/* Components Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Components</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <div className="space-y-6">
                  <Card className="bg-specter-navy rounded-xl p-6 border-0">
                    <h3 className="text-xl font-bold mb-2 text-white">Developer Board</h3>
                    <p className="text-gray-300">STM Discovery board (STM32F469I)</p>
                  </Card>
                  
                  <Card className="bg-specter-navy rounded-xl p-6 border-0">
                    <h3 className="text-xl font-bold mb-2 text-white">QR Code Scanner</h3>
                    <p className="text-gray-300">Waveshare Barcode Scanner</p>
                  </Card>
                  
                  <Card className="bg-specter-navy rounded-xl p-6 border-0">
                    <h3 className="text-xl font-bold mb-2 text-white">3D Printable Case</h3>
                    <p className="text-gray-300">Barebones case designed by Seedsigner</p>
                  </Card>
                </div>
              </div>
              <div>
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/03/IMG_0064.png" 
                  alt="Specter Barebones Exploded" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Specter Shield Section */}
          <section className="mb-20">
            <Card className="bg-specter-navy rounded-xl p-8 md:p-12 shadow-2xl border-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Specter Shield</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Open Source Extension board with QR Code Scanner, Battery and Smart Card Reader.
                  </p>
                  <a 
                    href="#"
                    className="inline-block bg-transparent border-2 border-specter-coral text-specter-coral hover:bg-specter-coral hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Order Specter Shield &gt;&gt;
                  </a>
                </div>
                <div>
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/01/Specter-Shield.png" 
                    alt="Specter Shield" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* Shield Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-specter-navy rounded-xl p-6 border-0">
              <h3 className="text-xl font-bold mb-4 text-white">Optimized Usability</h3>
              <p className="text-gray-300">
                The Specter Shield extension board combined with the STM Discovery Board enables full functionality of the Specter Firmware. With integrated QR code scanner, battery and Smart Cards it provides an optimized user experience.
              </p>
            </Card>
            
            <Card className="bg-specter-navy rounded-xl p-6 border-0">
              <h3 className="text-xl font-bold mb-4 text-white">Smart Card Reader</h3>
              <p className="text-gray-300">
                Smart Cards are an alternative to a secure element, secrets stored on the card leave the device stateless. Your funds are secure and quickly accessible.
              </p>
            </Card>
            
            <Card className="bg-specter-navy rounded-xl p-6 border-0">
              <h3 className="text-xl font-bold mb-4 text-white">3D Printed Case</h3>
              <p className="text-gray-300 mb-4">
                Case designed by Geometrick. Purchase a case or 3D print your own.
              </p>
              <a 
                href="https://github.com/cryptoadvance/specter-diy/blob/master/shield/3dprinting.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-specter-coral hover:underline"
              >
                Download &gt;&gt;
              </a>
            </Card>
          </div>

          {/* Shield Components Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Components Specter Shield</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <div className="space-y-6">
                  <Card className="bg-specter-navy rounded-xl p-6 border-0">
                    <h3 className="text-xl font-bold mb-2 text-white">Developer Board</h3>
                    <p className="text-gray-300">STM Discovery board (STM32F469I)</p>
                  </Card>
                  
                  <Card className="bg-specter-navy rounded-xl p-6 border-0">
                    <h3 className="text-xl font-bold mb-2 text-white">Battery</h3>
                    <p className="text-gray-300">1400 mAh 3.7v</p>
                  </Card>
                  
                  <Card className="bg-specter-navy rounded-xl p-6 border-0">
                    <h3 className="text-xl font-bold mb-2 text-white">Specter Shield</h3>
                    <p className="text-gray-300">QR code scanner<br />Smart card Reader</p>
                  </Card>
                  
                  <Card className="bg-specter-navy rounded-xl p-6 border-0">
                    <h3 className="text-xl font-bold mb-2 text-white">Smart Card</h3>
                    <p className="text-gray-300">NXP J3H145 Dual Interface Java card</p>
                  </Card>
                  
                  <Card className="bg-specter-navy rounded-xl p-6 border-0">
                    <h3 className="text-xl font-bold mb-2 text-white">3D Printable Case</h3>
                    <p className="text-gray-300">Designed by Specter & Geometrick</p>
                  </Card>
                </div>
              </div>
              <div>
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/02/Specter-Shield-Exploded-566x1024.png" 
                  alt="Specter Shield Exploded" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Usage Image */}
          <div className="mb-20 text-center">
            <img 
              src="https://specter.solutions/wp-content/uploads/2022/02/Specter_Signer_In_Use-scaled.jpg" 
              alt="Specter Signer In Use" 
              className="w-full max-w-4xl mx-auto h-auto rounded-lg"
            />
          </div>

          {/* Comparison Section - moved here to be below hardware wallets */}
          <section className="mb-20">
            <Card className="bg-specter-navy rounded-xl p-8 border-0 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                
                {/* Left side - Title and Hardware Images */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-8 text-white">Specter Signer Comparison</h2>
                  <div className="flex justify-center items-center space-x-4 mb-8">
                    <div className="text-center">
                      <img 
                        src="https://specter.solutions/wp-content/uploads/2022/02/Specter-DIY-Barebones.png" 
                        alt="Specter DIY" 
                        className="w-24 h-auto mx-auto mb-2"
                      />
                      <span className="text-sm text-gray-300">DIY</span>
                    </div>
                    <div className="text-center">
                      <img 
                        src="https://specter.solutions/wp-content/uploads/2022/01/Specter-Shield.png" 
                        alt="Specter Shield" 
                        className="w-24 h-auto mx-auto mb-2"
                      />
                      <span className="text-sm text-gray-300">Shield</span>
                    </div>
                  </div>
                </div>

                {/* Middle and Right - Features Table */}
                <div className="md:col-span-2">
                  <div className="space-y-6">
                    
                    {/* Header Row */}
                    <div className="grid grid-cols-3 gap-4 pb-4 border-b border-gray-600">
                      <div className="text-white font-semibold">Feature</div>
                      <div className="text-white font-semibold text-center">DIY</div>
                      <div className="text-white font-semibold text-center">Shield</div>
                    </div>

                    {/* Feature Rows */}
                    <div className="grid grid-cols-3 gap-4 items-center py-2">
                      <div className="text-white">4" Touch Display</div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center py-2">
                      <div className="text-white">True Random Number Generation + Coin Flip Added Randomness</div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center py-2">
                      <div className="text-white">Smart Card Secure Element</div>
                      <div className="text-center">
                        <span className="text-gray-500">-</span>
                      </div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center py-2">
                      <div className="text-white">Agnostic Mode</div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center py-2">
                      <div className="text-white">Airgapped PSBT QR Code Operation</div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center py-2">
                      <div className="text-white">Liquid Support</div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center py-2">
                      <div className="text-white">Integrated Battery</div>
                      <div className="text-center">
                        <span className="text-gray-500">-</span>
                      </div>
                      <div className="text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </Card>
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