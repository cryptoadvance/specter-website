import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import hardwareBackgroundImage from "@assets/imgi_11_Specter_Signer-scaled_1755538028904.jpg";

// Hardware page specific images
import specterFirmwareImage from "@assets/hardware/IMG_0058.png";
import specterDiyBarebonesImage from "@assets/hardware/Specter-DIY-Barebones.png";
import specterShieldImage from "@assets/hardware/Specter-Shield.png";
import specterSignerInUseImage from "@assets/hardware/Specter_Signer_In_Use.jpg";


export default function Hardware() {
  return (
    <Layout className="bg-specter-dark text-white font-sans min-h-screen">


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
                    src={specterFirmwareImage}
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
                    src={specterDiyBarebonesImage}
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
                    src={specterShieldImage}
                    alt="Specter Shield"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-6 text-white">Specter Shield</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    An open-source extension board for the Specter DIY, the Specter Shield enables highly secure seed phrase encryption using smartcards.
                  </p>
                  <Link 
                    href="/vendors"
                    className="inline-block bg-transparent border-2 border-specter-coral text-specter-coral hover:bg-specter-coral hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Find vendors &gt;&gt;
                  </Link>
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
              src={specterSignerInUseImage}
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
    </Layout>
  );
}
