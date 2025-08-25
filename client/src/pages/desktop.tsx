import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import BlinkPayButton from "@/components/BlinkPayButton";
import desktopImage from "@assets/imgi_39_Specter_Desktop_In_Use2-scaled_1756034442973.png";
import specterDesktopHeroImage from "@assets/Specter_Desktop-scaled_1756037166999.jpg";

// Desktop page specific images
import adjustIcon from "@assets/desktop/Adjust.svg";
import backupIcon from "@assets/desktop/backup.svg";
import bitcoinCoreImage from "@assets/desktop/bitcoin_core.png";
import codeIcon from "@assets/desktop/code.svg";
import communityIcon from "@assets/desktop/community.svg";
import connectIcon from "@assets/desktop/connect.svg";
import customiseSettingsIcon from "@assets/desktop/customise-settings.svg";
import desktopAddDeviceImage from "@assets/desktop/Desktop-Specter_Add_Device.png";
import desktopAddNewWalletImage from "@assets/desktop/Desktop-Specter_Add_New_Wallet.png";
import documentationIcon from "@assets/desktop/documentation.svg";
import donateIcon from "@assets/desktop/donate.svg";
import exploreIcon from "@assets/desktop/explore.svg";
import fastIcon from "@assets/desktop/Fast.svg";
import fossIcon from "@assets/desktop/foss.svg";
import importExportIcon from "@assets/desktop/import-export.svg";
import importExportIcon2 from "@assets/desktop/import_export.svg";
import liquidArticlesIcon from "@assets/desktop/liquid-articles.svg";
import qrCodeIcon from "@assets/desktop/QR-Code.svg";
import receiveIcon from "@assets/desktop/Receive.svg";
import scanIcon from "@assets/desktop/scan.svg";
import securelyIcon from "@assets/desktop/securely.svg";
import selectCoinsIcon from "@assets/desktop/select-coins.svg";
import sendIcon from "@assets/desktop/Send.svg";
import specterBackupFileImage from "@assets/desktop/Specter_Backup_File.png";
import specterDesktopInUseImage from "@assets/desktop/Specter_Desktop_In_Use.jpg";
import specterReceiveTransactionImage from "@assets/desktop/Specter_Receive_Transaction.png";
import specterSendTransactionImage from "@assets/desktop/Specter_Send_Transaction.png";
import supportedNetworksIcon from "@assets/desktop/supported-networks.svg";
import swanImage from "@assets/desktop/Swan.png";
import torIcon from "@assets/desktop/tor.svg";
import tutorialsIcon from "@assets/desktop/tutorials.svg";

export default function Desktop() {
  return (
    <Layout className="bg-specter-dark text-white font-sans min-h-screen">


      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden" 
        style={{
          backgroundImage: `url(${specterDesktopHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-md">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Specter Desktop
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Secure your bitcoin. Verify your transactions. Protect your privacy.
            </p>
            <div>
              <Link
                href="/downloads"
                className="inline-block bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Download
              </Link>
            </div>
          </div>
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
                  src={desktopAddDeviceImage}
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
                  src={desktopAddNewWalletImage}
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
                  src={bitcoinCoreImage}
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
                    src={qrCodeIcon}
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
            <div className="bg-specter-navy rounded-xl border-0 mb-16 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-12 h-full">
                <div className="p-8 flex flex-col justify-center">
                  <img
                    src={sendIcon}
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
                <div className="md:col-span-2 flex items-end">
                  <img
                    src={specterSendTransactionImage}
                    alt="Specter Send Transaction"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>

            {/* Receive */}
            <div className="bg-specter-navy rounded-xl border-0 mb-16 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-12 h-full">
                <div className="md:col-span-2 flex items-end">
                  <img
                    src={specterReceiveTransactionImage}
                    alt="Specter Receive Transaction"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <img
                    src={receiveIcon}
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
            </div>

            {/* Three Feature Boxes */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img
                  src={adjustIcon}
                  alt="Adjust"
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Optimise your transactions.</h3>
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
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img
                  src={liquidArticlesIcon}
                  alt="Articles"
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Transaction History & Labels.</h3>
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
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img
                  src={selectCoinsIcon}
                  alt="Select Coins"
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Select coins for spending.</h3>
                <p className="text-gray-300 mb-3">
                  Use coin selection to spend from specific UTXO's and control your onchain visibility.
                </p>
                <p className="text-gray-300">
                  Freeze or unfreeze specific UTXO's to control sending and improve your onchain privacy.
                </p>
              </div>
            </div>
          </section>



          {/* Plugins & Extensions Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-white text-center">Plugins & Extensions</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img
                  src={swanImage}
                  alt="Swan"
                  className="w-24 h-24 mx-auto mb-6 object-contain"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Swan Integration.</h3>
                <p className="text-gray-300 mb-4">
                  The integration enables auto withdrawals from a Swan account to be sent directly to your self-custody wallet. Stack with Swan and secure with Specter.
                </p>
                <a 
                  href="https://www.swanbitcoin.com/Specter/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-specter-coral hover:underline text-sm"
                >
                  Sign up at Swan to support Specter development &gt;&gt;
                </a>
              </div>
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <div className="h-16 mb-6"></div>
                <h3 className="text-xl font-bold mb-4 text-white">Keeping your XPub Private.</h3>
                <p className="text-gray-300">
                  Specter reserves addresses for your Swan withdrawals and is keeping your wallet XPub private.
                </p>
              </div>
              
            </div>
          </section>

          {/* Securely Connected Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-white text-center">Securely Connected</h2>

            <div className="mb-16 text-center">
              <img
                src={specterDesktopInUseImage}
                alt="Specter Desktop In Use 2"
                className="w-full max-w-5xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img
                  src={torIcon}
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
                  src={securelyIcon}
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
                  src={connectIcon}
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

            <div className="bg-specter-navy rounded-xl border-0 mb-16 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-12 h-full">
                <div className="p-8 flex flex-col justify-center">
                  <img
                    src={importExportIcon2}
                    alt="Import/Export"
                    className="w-16 h-16 mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-white">Backup your multi-sig.</h3>
                  <p className="text-gray-300">
                    Export a PDF Backup from Specter Desktop, it is recommended you keep this with each device/seed word back-up especially for multi-sig wallets.
                  </p>
                </div>
                <div className="md:col-span-2 flex items-end">
                  <img
                    src={specterBackupFileImage}
                    alt="Specter Backup File"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-specter-navy rounded-xl p-8 border-0 text-center">
                <img
                  src={backupIcon}
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
                  src={importExportIcon}
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
                  src={scanIcon}
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
                  src={exploreIcon}
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
                  src={customiseSettingsIcon}
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
                  src={supportedNetworksIcon}
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
                  src={tutorialsIcon}
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
                  src={documentationIcon}
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
                  src={communityIcon}
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
                  src={fossIcon}
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
                  src={codeIcon}
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
                  src={donateIcon}
                  alt="Donate"
                  className="w-16 h-16 mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-4 text-white">Donate some sats.</h3>
                <p className="text-gray-300 mb-4">
                  Show your appreciation for the open source projects you use.
                </p>
                <BlinkPayButton className="mt-4" />
              </div>
            </div>
          </section>



        </div>
      </main>


    </Layout>
  );
}
