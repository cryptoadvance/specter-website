import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Desktop() {
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
                Specter <span className="text-specter-primary">Desktop</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Secure your bitcoin. Verify your transactions. Protect your privacy.
              </p>
            </div>

            {/* Main Feature Card */}
            <Card className="bg-specter-navy rounded-xl p-8 md:p-12 shadow-2xl border-0 mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/02/Home-Specter_Add_Device.png" 
                    alt="Specter Desktop - Add your devices interface" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Desktop Wallet</h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    A desktop GUI for Bitcoin Core optimised to work with air-gapped hardware wallets.
                  </p>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li>• Multi-signature wallet support</li>
                    <li>• Hardware wallet integration</li>
                    <li>• Privacy-focused design</li>
                    <li>• Full Bitcoin Core compatibility</li>
                  </ul>
                  <a 
                    href="https://specter.solutions/downloads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Download Specter Desktop
                  </a>
                </div>
              </div>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Multi-Signature Support</h3>
                <p className="text-gray-300">
                  Create and manage multi-signature wallets with ease. Perfect for enhanced security and shared custody solutions.
                </p>
              </Card>
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Hardware Integration</h3>
                <p className="text-gray-300">
                  Seamlessly connect with popular hardware wallets including Ledger, Trezor, and Specter DIY devices.
                </p>
              </Card>
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Privacy First</h3>
                <p className="text-gray-300">
                  Built with privacy in mind. Your keys, your coins, your privacy. No third-party services required.
                </p>
              </Card>
              <Card className="bg-specter-navy rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold mb-4 text-white">Open Source</h3>
                <p className="text-gray-300">
                  Fully open source and auditable. Community-driven development with transparency at its core.
                </p>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="bg-specter-navy rounded-xl p-8 border-0">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to get started?</h3>
                <p className="text-gray-300 mb-6">
                  Download Specter Desktop and take control of your Bitcoin security today.
                </p>
                <a 
                  href="https://specter.solutions/downloads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent border-2 border-specter-coral text-specter-coral hover:bg-specter-coral hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                >
                  Get Specter Desktop
                </a>
              </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}