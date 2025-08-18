import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hardware() {
  return (
    <div className="bg-specter-dark text-white font-sans min-h-screen">
      {/* Header */}
      <header className="bg-specter-primary shadow-lg">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img 
                src="https://specter.solutions/wp-content/uploads/2020/09/SpecterSolutions_Logo%402x-180x15.png" 
                alt="Specter Solutions Logo" 
                className="h-6"
              />
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-specter-coral">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Specter <span className="text-specter-primary">Hardware</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Trust minimised signing devices running Specter open source firmware.
              </p>
            </div>

            {/* Main Feature Card */}
            <Card className="bg-specter-navy rounded-xl p-8 md:p-12 shadow-2xl border-0 mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/03/IMG_0062.png" 
                    alt="Specter DIY Hardware Wallet" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Specter DIY</h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Build your own open source hardware wallet with minimal trust requirements.
                  </p>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Fully open source hardware and firmware</li>
                    <li>• Air-gapped operation for maximum security</li>
                    <li>• QR code based communication</li>
                    <li>• DIY assembly with common components</li>
                  </ul>
                  <a 
                    href="https://github.com/cryptoadvance/specter-diy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Build Guide & Code
                  </a>
                </div>
              </div>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Open Source Hardware</h3>
                <p className="text-gray-300">
                  Complete hardware schematics and PCB designs available. Build from verified components you can trust.
                </p>
              </Card>
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Air-Gapped Security</h3>
                <p className="text-gray-300">
                  Never connects to the internet. All communication via QR codes for maximum security isolation.
                </p>
              </Card>
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">QR Communication</h3>
                <p className="text-gray-300">
                  Secure transaction signing through QR code scanning. No cables, no wireless, no attack vectors.
                </p>
              </Card>
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">DIY Assembly</h3>
                <p className="text-gray-300">
                  Build using readily available components. Full assembly instructions and community support included.
                </p>
              </Card>
            </div>

            {/* Technical Specifications */}
            <Card className="bg-specter-navy rounded-xl p-8 border-0 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-white">Technical Specifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-specter-primary">Hardware</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• ESP32 microcontroller</li>
                    <li>• SD card storage</li>
                    <li>• Camera module for QR scanning</li>
                    <li>• OLED display</li>
                    <li>• Physical buttons for navigation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-specter-primary">Features</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Multi-signature support</li>
                    <li>• BIP39 seed phrase generation</li>
                    <li>• Custom derivation paths</li>
                    <li>• Secure element integration (optional)</li>
                    <li>• Community firmware updates</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-specter-navy rounded-xl p-8 border-0">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to build your own?</h3>
                <p className="text-gray-300 mb-6">
                  Join the community of builders creating their own hardware wallets with Specter DIY.
                </p>
                <div className="space-x-4">
                  <a 
                    href="https://github.com/cryptoadvance/specter-diy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent border-2 border-specter-coral text-specter-coral hover:bg-specter-coral hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Build Guide
                  </a>
                  <a 
                    href="https://t.me/spectersupport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Join Community
                  </a>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}