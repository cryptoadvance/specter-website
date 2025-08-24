import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import desktopImage from "@assets/imgi_39_Specter_Desktop_In_Use2-scaled_1756034442973.png";

export default function Desktop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hardwareDropdownOpen, setHardwareDropdownOpen] = useState(false);

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
              <span className="text-specter-coral font-medium">
                Desktop
              </span>
              <div className="relative">
                <button
                  onClick={() => setHardwareDropdownOpen(!hardwareDropdownOpen)}
                  className="flex items-center text-white hover:text-specter-coral transition-colors duration-200"
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
                <span className="text-specter-coral font-medium py-2 text-left">
                  Desktop
                </span>
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

      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-b from-specter-dark to-specter-navy py-20 px-4">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Specter Desktop
          </h1>
          <h5 className="text-xl text-gray-300 mb-8 leading-relaxed">
            Secure your bitcoin. Verify your transactions. Protect your privacy.
          </h5>
          <a 
            href="https://specter.solutions/downloads/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-8"
          >
            Download
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-specter-dark">
        <div className="container mx-auto px-4 py-16">
          
          {/* Introduction Text */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-gray-300 mb-4 text-lg">
              Specter Desktop is <strong>FOSS</strong> free open source software under the MIT license.
            </p>
            <p className="text-gray-300 mb-4 text-lg">
              It exists to empower you, to hold your own keys and follow <strong>self sovereign</strong> best practices.
            </p>
            <p className="text-gray-300 mb-12 text-lg">
              Your Bitcoin node, on your hardware, paired with your signing devices, creating secure wallets for <strong>bitcoin self-custody.</strong>
            </p>
          </div>

          {/* Add Devices Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/02/Desktop-Specter_Add_Device-1024x602.png" 
                  alt="Specter Desktop Add Device" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Add your signing devices.</h3>
                <p className="text-lg text-gray-300">
                  All common hardware wallets are supported: Specter DIY, Seedsigner, BitBox, Trezor, Keystone, Coldcard, Jade, Ledger, KeepKey.. the list keeps growing.
                </p>
              </div>
            </div>
          </section>

          {/* Coordinate Wallets Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Coordinate secure wallets.</h3>
                <p className="text-lg text-gray-300 mb-6">
                  A multi-sig scheme offers a high degree of security, a single-sig cold storage wallet is safe for smaller amounts and convenient to operate.
                </p>
                <p className="text-lg text-gray-300">
                  Define your optimal set up and use Specter Desktop to coordinate the wallet best suited to your needs.
                </p>
              </div>
              <div>
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/02/Desktop-Specter_Add_New_Wallet-1024x602.png" 
                  alt="Specter Desktop Add New Wallet" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Bitcoin Core Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/02/bitcoin_core-1024x728.png" 
                  alt="Bitcoin Core" 
                  className="w-full max-w-lg h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Run Bitcoin Core.</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Leverage the powerful functionality of Bitcoin Core, the solid foundation for a secure set-up.
                </p>
                <p className="text-lg text-gray-300">
                  Rely on your own node to verify transactions and protect your privacy.
                </p>
              </div>
            </div>
          </section>

          {/* Fast Start Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="space-y-8">
                <div className="p-6 rounded-xl">
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2021/12/Fast.svg" 
                    alt="Fast" 
                    className="w-16 h-16 mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-white">Get started fast!</h3>
                  <p className="text-gray-300 mb-4">
                    One click to install Bitcoin Core directly from Specter Desktop, get your node set up quickly.
                  </p>
                  <p className="text-gray-300">
                    Run Bitcoin Core as a pruned mode to conserve storage space.
                  </p>
                </div>
                <div className="p-6 rounded-xl">
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/01/QR-Code.svg" 
                    alt="QR Code" 
                    className="w-16 h-16 mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-white">Signing experience.</h3>
                  <p className="text-gray-300">
                    QR codes enable a fast and intuitive signing experience via PSBT. SD cards and USB connected devices are also supported.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <img 
                  src={desktopImage} 
                  alt="Specter Desktop In Use" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Coin Control Features */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-white text-center">Coin Control Features</h2>

            {/* Send */}
            <div className="bg-specter-navy rounded-xl p-8 border-0 mb-16">
              <div className="grid md:grid-cols-3 gap-12 items-end">
                <div className="pb-0">
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2021/12/Send.svg" 
                    alt="Send" 
                    className="w-16 h-16 mb-6"
                  />
                  <h3 className="text-3xl font-bold mb-6 text-white">Send</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Create, sign and broadcast transactions through Specter Desktop.
                  </p>
                  <p className="text-lg text-gray-300">
                    PSBTs (Partially Signed Bitcoin Transactions) can be signed air-gapped via QR codes or SD card, or directly with USB connected signing devices.
                  </p>
                </div>
                <div className="md:col-span-2 pb-0">
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/02/Specter_Send_Transaction.png" 
                    alt="Specter Send Transaction" 
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>

            {/* Receive */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/02/Specter_Receive_Transaction.png" 
                  alt="Specter Receive Transaction" 
                  className="w-full max-w-lg h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2021/12/Receive.svg" 
                  alt="Receive" 
                  className="w-16 h-16 mb-6"
                />
                <h3 className="text-3xl font-bold mb-6 text-white">Receive</h3>
                <p className="text-lg text-gray-300 mb-6">
                  View all receive addresses to send funds to your wallets.
                </p>
                <p className="text-lg text-gray-300">
                  Verify your wallet receive addresses match across Specter Desktop and your signing devices. This can be done via QR code or directly with USB connected signing devices.
                </p>
              </div>
            </div>

            {/* Optimize and Other Features */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-specter-navy rounded-xl p-8 border-0">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2021/12/Adjust.svg" 
                  alt="Adjust" 
                  className="w-16 h-16 mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-white">Optimise your transactions.</h3>
                <p className="text-gray-300 mb-3">
                  Fine tune each transaction for quick confirmation time or to minimize fees.
                </p>
                <p className="text-gray-300 mb-3">
                  Specify a transaction fee and Specter Desktop will estimate the confirmation speed.
                </p>
                <p className="text-gray-300 mb-3">
                  Add multiple recipients to one transaction.
                </p>
                <p className="text-gray-300">
                  Speed-up transactions with RBF (Replace-by-Fee).
                </p>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/liquid-articles.svg" 
                  alt="Articles" 
                  className="w-16 h-16 mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-white">Articles to Specter Liquid integration.</h3>
                <p className="text-gray-300 mb-3">
                  View the full history of incoming and outgoing transactions.
                </p>
                <p className="text-gray-300 mb-3">
                  Label individual UTXO's (Unspent Transaction Outputs).
                </p>
                <p className="text-gray-300 mb-3">
                  Use the search function to find all matching labels or specific UTXO's.
                </p>
                <p className="text-gray-300">
                  Order transactions by label, amount, date, confirmations or TxID.
                </p>
              </div>
            </div>

            {/* Select Coins */}
            <div className="bg-specter-navy rounded-xl p-8 border-0 text-center max-w-4xl mx-auto">
              <img 
                src="https://specter.solutions/wp-content/uploads/2022/01/select-coins.svg" 
                alt="Select Coins" 
                className="w-16 h-16 mb-6 mx-auto"
              />
              <h3 className="text-2xl font-bold mb-4 text-white">Select coins for spending.</h3>
              <p className="text-gray-300 mb-3">
                Use coin selection to spend from specific UTXO's and control your onchain visibility.
              </p>
              <p className="text-gray-300">
                Freeze or unfreeze specific UTXO's to control sending and improve your onchain privacy.
              </p>
            </div>
          </section>

          {/* Liquid Network Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-white text-center">Liquid Network</h2>

            <div className="mb-16 text-center">
              <img 
                src="https://specter.solutions/wp-content/uploads/2022/02/liquid-network.png" 
                alt="Liquid Network" 
                className="w-full max-w-5xl mx-auto h-auto rounded-lg shadow-lg mb-8"
              />
              <h3 className="text-3xl font-bold mb-6 text-white">Self-Custody Liquid assets.</h3>
              <p className="text-lg text-gray-300 mb-4 max-w-4xl mx-auto">
                Set up a Liquid Elements node from within Specter Desktop.
              </p>
              <p className="text-lg text-gray-300 mb-4 max-w-4xl mx-auto">
                Create Multisig wallets with Specter DIY/Specter Shield and the Blockstream Jade to self-custody Liquid assets.
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                Create hot wallets (only recommended for testing and smaller amounts).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-specter-navy rounded-xl p-8 border-0">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/liquid.svg" 
                  alt="Liquid" 
                  className="w-16 h-16 mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-white">Use confidential transactions on Liquid.</h3>
                <p className="text-gray-300 mb-6">
                  All transactions are blinded by default on Liquid, keeping sensitive data out of public view. Test how this can become part of your workflow.
                </p>
                <a 
                  href="https://liquid.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-specter-coral hover:underline"
                >
                  Read more at Liquid.net &gt;&gt;
                </a>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/articles.svg" 
                  alt="Articles" 
                  className="w-16 h-16 mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-white">Blog posts - why is Liquid interesting?</h3>
                <div className="space-y-2">
                  <a 
                    href="https://specter.solutions/liquid-for-bitcoiners-1-4-confidential-transactions/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-specter-coral hover:underline text-sm"
                  >
                    Confidential Transactions &gt;&gt;
                  </a>
                  <a 
                    href="https://specter.solutions/liquid-for-bitcoiners-2-4-stablecoin-self-custody/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-specter-coral hover:underline text-sm"
                  >
                    Stablecoin Self-Custody &gt;&gt;
                  </a>
                  <a 
                    href="https://specter.solutions/liquid-for-bitcoiners-3-4-stablecoins-for-working-capital-stability-remittances-and-bitcoin-backed-loans/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-specter-coral hover:underline text-sm"
                  >
                    Working Capital Stability, Remittances & Bitcoin-Backed Loans &gt;&gt;
                  </a>
                  <a 
                    href="https://specter.solutions/liquid-for-bitcoiners-4-4-financial-securities-infrastructure/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-specter-coral hover:underline text-sm"
                  >
                    Financial Securities Infrastructure &gt;&gt;
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Plugins & Extensions Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-white text-center">Plugins & Extensions</h2>

            <div className="mb-16 text-center">
              <img 
                src="https://specter.solutions/wp-content/uploads/2022/02/Swan.png" 
                alt="Swan" 
                className="w-full max-w-5xl mx-auto h-auto rounded-lg shadow-lg mb-8"
              />
              <h3 className="text-3xl font-bold mb-6 text-white">Swan Integration.</h3>
              <p className="text-lg text-gray-300 mb-4 max-w-4xl mx-auto">
                The integration enables auto withdrawals from a Swan account to be sent directly to your self-custody wallet. Stack with Swan and secure with Specter.
              </p>
              <div className="mb-8">
                <a 
                  href="https://www.swanbitcoin.com/Specter/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-specter-coral hover:underline"
                >
                  Sign up at Swan
                </a>
                <span className="text-gray-300"> to support Specter development.</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-specter-navy rounded-xl p-8 border-0">
                <h3 className="text-2xl font-bold mb-4 text-white">Keeping your XPub Private.</h3>
                <p className="text-gray-300">
                  Specter reserves addresses for your Swan withdrawals and is keeping your wallet XPub private.
                </p>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0">
                <h3 className="text-2xl font-bold mb-4 text-white">New Plugins & Extensions.</h3>
                <p className="text-gray-300 mb-4">
                  Further extensions are in development.
                </p>
                <p className="text-gray-300 mb-4">
                  If you want to build an extension tool or service integration please contact Moritz.
                </p>
                <a 
                  href="https://specter.solutions/desktop/#contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-specter-coral hover:underline"
                >
                  Contact &gt;&gt;
                </a>
              </div>
            </div>
          </section>

          {/* Securely Connected Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-white text-center">Securely Connected</h2>

            <div className="mb-16 text-center">
              <img 
                src="https://specter.solutions/wp-content/uploads/2022/02/Specter_Desktop_In_Use-scaled.jpg" 
                alt="Specter Desktop In Use 2" 
                className="w-full max-w-5xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/tor.svg" 
                  alt="Tor" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Use Tor to protect your privacy.</h3>
                <p className="text-gray-300 mb-4">
                  Enable Tor to anonymize your connections. Use the built in quick setup or create a custom configuration.
                </p>
                <p className="text-gray-300">
                  Run Specter as a Tor hidden service and access your wallets securely from anywhere.
                </p>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/securely.svg" 
                  alt="Securely" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Securely access your wallets.</h3>
                <p className="text-gray-300">
                  Add an extra layer of security and password protect your Specter wallets for remote access.
                </p>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/connect.svg" 
                  alt="Connect" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Connect to your node in a box.</h3>
                <p className="text-gray-300 mb-4">
                  As an alternative to a local Bitcoin Core instance, you can connect Specter Desktop to your MyNode, RoninDojo, Raspiblitz or Umbrel node package.
                </p>
                <p className="text-gray-300">
                  However, Specter is optimized to run locally alongside Bitcoin Core.
                </p>
              </div>
            </div>
          </section>

          {/* Wallet Backups Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-white text-center">Wallet Backups</h2>

            <div className="bg-specter-navy rounded-xl p-8 border-0 mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/02/import_export.svg" 
                    alt="Import/Export" 
                    className="w-16 h-16 mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-white">Backup your multi-sig.</h3>
                  <p className="text-gray-300">
                    Export a PDF Backup from Specter Desktop, it is recommended you keep this with each device/seed word back-up especially for multi-sig wallets.
                  </p>
                </div>
                <div className="flex flex-col h-full">
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/02/Specter_Backup_File-1-1024x511.png" 
                    alt="Specter Backup File" 
                    className="w-full h-auto rounded-lg shadow-lg mt-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/backup.svg" 
                  alt="Backup" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Backup Specter wallet data.</h3>
                <p className="text-gray-300 mb-4">
                  Export Specter format creates a JSON file of an individual wallet with complete data including UTXO labels.
                </p>
                <p className="text-gray-300">
                  Specter Data Backup exports a .zip with your complete Specter Desktop configuration, this includes all signing devices and data of all wallets.
                </p>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/import-export.svg" 
                  alt="Import Export" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Import and export between apps.</h3>
                <p className="text-gray-300 mb-4">
                  Import wallets from Electrum, Fully-Noded, Sparrow Wallet or another Specter instance.
                </p>
                <p className="text-gray-300 mb-4">
                  Export your Specter Desktop wallets and import them into other software.
                </p>
                <p className="text-gray-300">
                  Interoperable standards mean you are free to choose, and your funds are accessible also without Specter Desktop.
                </p>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/scan.svg" 
                  alt="Scan" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Scan for existing funds.</h3>
                <p className="text-gray-300 mb-4">
                  When importing an existing wallet, rescan the entire timechain for balances or specify a block height to scan from.
                </p>
                <p className="text-gray-300">
                  Rescan UTXOs to find only unspent transactions (especially useful when running a pruned node).
                </p>
              </div>
            </div>
          </section>

          {/* User Interface Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-white text-center">User Interface</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/explore.svg" 
                  alt="Explore" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Explore Bitcoin.</h3>
                <p className="text-gray-300 mb-4">
                  View the Bitcoin Whitepaper directly from the timechain from your full node.
                </p>
                <p className="text-gray-300">
                  Run the numbers and verify the total current mined supply of bitcoin.
                </p>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/customise-settings.svg" 
                  alt="Customise Settings" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Customise.</h3>
                <p className="text-gray-300 mb-3">
                  Set the interface to your preferred language.
                </p>
                <p className="text-gray-300 mb-3">
                  Make sats the standard and set Specter to show balances in sats or BTC.
                </p>
                <p className="text-gray-300 mb-3">
                  View the bitcoin price in fiat currency.
                </p>
                <p className="text-gray-300">
                  Hide sensitive info with a quick access button.
                </p>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/supported-networks.svg" 
                  alt="Supported Networks" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Networks Supported.</h3>
                <p className="text-gray-300">
                  Liquid, Testnet, Regtest and Signet are supported.
                </p>
              </div>
            </div>
          </section>

          {/* Learn More Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-white text-center">Learn More</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/tutorials.svg" 
                  alt="Tutorials" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Tutorials.</h3>
                <div className="space-y-2">
                  <a 
                    href="https://mattodell.keybase.pub/coldcard.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-specter-coral hover:underline text-sm"
                  >
                    Bitcoin Best Practices – Bitcoin Core + Specter + Coldcard Guide by Matt Odell &gt;&gt;
                  </a>
                  <a 
                    href="https://bitcoiner.guide/multisig" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-specter-coral hover:underline text-sm"
                  >
                    Multisig Guide by Bitcoin Q&A &gt;&gt;
                  </a>
                  <a 
                    href="https://btcguide.github.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-specter-coral hover:underline text-sm"
                  >
                    10x Security Bitcoin Guide by Michael Flaxman &gt;&gt;
                  </a>
                  <a 
                    href="https://www.ministryofnodes.com.au/ubuntu-node-box-guide-2020" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-specter-coral hover:underline text-sm"
                  >
                    Ubuntu Node Box Guide 2020 by Ketan &gt;&gt;
                  </a>
                </div>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/documentation.svg" 
                  alt="Documentation" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Specter Desktop documentation.</h3>
                <p className="text-gray-300 mb-4">
                  View the Specter Desktop documentation for Instructions, Tips and Tricks, FAQ and more.
                </p>
                <a 
                  href="https://specter.solutions/docs/desktop/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-specter-coral hover:underline"
                >
                  Docs &gt;&gt;
                </a>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/community.svg" 
                  alt="Community" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Join the Specter community.</h3>
                <p className="text-gray-300 mb-4">
                  Join our community on Telegram for support, questions, or head straight to github to open an issue or get involved.
                </p>
                <a 
                  href="https://t.me/spectersupport" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-specter-coral hover:underline"
                >
                  Join &gt;&gt;
                </a>
              </div>
            </div>
          </section>

          {/* Contribute Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-white text-center">Contribute</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/foss.svg" 
                  alt="FOSS" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Free open source software.</h3>
                <p className="text-gray-300">
                  Specter Desktop is free and open source software under the MIT Licence, this gives everyone the freedom to review and use the code.
                </p>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/code.svg" 
                  alt="Code" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Contribute to the tools we all use.</h3>
                <p className="text-gray-300 mb-4">
                  We have a developer community, please reach out to the team.
                </p>
                <p className="text-gray-300 mb-4">
                  Join the many contributors who build, improve and maintain the tools we all use.
                </p>
                <a 
                  href="https://github.com/cryptoadvance/specter-desktop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-specter-coral hover:underline"
                >
                  Github &gt;&gt;
                </a>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2022/01/donate.svg" 
                  alt="Donate" 
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Donate some sats.</h3>
                <p className="text-gray-300 mb-4">
                  Show your appreciation for the open source projects you use.
                </p>
                <a 
                  href="https://donate.specter.solutions/apps/3k77BAT6zshCGNd3i7gw9WKwXQy1/pos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-specter-coral hover:underline"
                >
                  Donate &gt;&gt;
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-20">
            <div className="text-center">
              <img 
                src="https://specter.solutions/wp-content/uploads/2021/12/moritz-square-new-1500x1500.jpg" 
                alt="Moritz" 
                className="w-48 h-48 rounded-full mx-auto mb-8 object-cover"
              />
              <h5 className="text-xl font-semibold text-white mb-8">
                Contact Moritz for more information
              </h5>
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