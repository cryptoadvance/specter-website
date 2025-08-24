import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Info, Menu, X, ChevronDown } from 'lucide-react';
import goodSigImage from '@assets/good_sig_1756045019493.png';
import fileOkImage from '@assets/file_ok_1756045021825.png';
import specterLogo from '@assets/Specter_logo_1756046218246.png';
import windowsLogo from '@assets/windows_1756046309003.png';
import linuxLogo from '@assets/linux_1756046310812.png';

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
    size: number;
  }>;
}

// Platform icons with consistent sizing
const WindowsIcon = () => (
  <div className="w-16 h-16 mb-4 flex items-center justify-center">
    <img src={windowsLogo} alt="Windows" className="w-12 h-12 object-contain" />
  </div>
);

const MacIcon = () => (
  <div className="w-16 h-16 mb-4 flex items-center justify-center">
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
    </svg>
  </div>
);

const LinuxIcon = () => (
  <div className="w-16 h-16 mb-4 flex items-center justify-center">
    <img src={linuxLogo} alt="Linux" className="w-12 h-12 object-contain" />
  </div>
);

export default function Downloads() {
  const [releases, setReleases] = useState<GitHubRelease[]>([]);
  const [latestRelease, setLatestRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/cryptoadvance/specter-desktop/releases');
        const data = await response.json();
        setReleases(data);
        setLatestRelease(data[0]);
      } catch (error) {
        console.error('Error fetching releases:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getMainAssets = (assets: GitHubRelease['assets']) => {
    const macAsset = assets.find(asset => asset.name.endsWith('.dmg'));
    const winAsset = assets.find(asset => asset.name.includes('Setup') && asset.name.endsWith('.exe'));
    const linuxAsset = assets.find(asset => asset.name.includes('linux-gnu.tar.gz') && !asset.name.includes('specterd'));
    
    return { macAsset, winAsset, linuxAsset };
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [hardwareDropdownOpen, setHardwareDropdownOpen] = useState(false);

  return (
    <div className="bg-specter-dark text-white font-sans">
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
                  className="text-white hover:text-specter-coral transition-colors duration-200 flex items-center"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  Desktop
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {desktopDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setDesktopDropdownOpen(true)}
                    onMouseLeave={() => setDesktopDropdownOpen(false)}
                  >
                    <Link href="/desktop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Desktop Overview
                    </Link>
                    <Link href="/downloads" className="block px-4 py-2 text-sm text-specter-coral font-medium bg-gray-100">
                      Downloads
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <Link 
                  href="/hardware"
                  className="text-white hover:text-specter-coral transition-colors duration-200 flex items-center"
                  onMouseEnter={() => setHardwareDropdownOpen(true)}
                  onMouseLeave={() => setHardwareDropdownOpen(false)}
                >
                  Hardware
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                {hardwareDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setHardwareDropdownOpen(true)}
                    onMouseLeave={() => setHardwareDropdownOpen(false)}
                  >
                    <Link href="/hardware" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Hardware Overview
                    </Link>
                    <Link href="/vendors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Vendors
                    </Link>
                    <Link href="/build-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
                className="block py-2 text-specter-coral font-medium"
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
                className="block py-2 text-white hover:text-specter-coral transition-colors duration-200"
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-specter-dark to-specter-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Download Specter Desktop
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Use <strong>your own node</strong>, improve <strong>your privacy</strong> and verify <strong>your Bitcoin</strong>.
          </p>

          {loading ? (
            <div className="text-center">Loading latest release...</div>
          ) : latestRelease ? (
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {(() => {
                const { macAsset, winAsset, linuxAsset } = getMainAssets(latestRelease.assets);
                
                return (
                  <>
                    {/* macOS */}
                    <div className="bg-specter-navy rounded-xl p-8 text-center">
                      <div className="flex justify-center text-white">
                        <MacIcon />
                      </div>
                      <Button
                        onClick={() => macAsset && window.open(macAsset.browser_download_url, '_blank')}
                        className="bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 mb-2 w-full text-xl"
                      >
                        For OS X
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="flex items-center justify-center gap-1 mb-4 text-gray-400 hover:text-white text-xs cursor-pointer">
                            <Info className="w-3 h-3" />
                            <span>Verify signature</span>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-specter-dark text-white">
                          <DialogHeader>
                            <DialogTitle className="text-xl font-bold text-white">Mac OS Signature Verification</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 text-sm">
                            <ol className="list-decimal list-inside space-y-3">
                              <li>Download Specter for macOS (<code className="bg-specter-navy px-1 py-0.5 rounded">Specter-v2.0.5.dmg</code>), the hashfile (<code className="bg-specter-navy px-1 py-0.5 rounded">SHA256SUMS</code>) and the signatures file (<code className="bg-specter-navy px-1 py-0.5 rounded">SHA256SUMS.asc</code>)</li>
                              <li>Download and import the PGP Public key of "Specter Signer" here here. The fingerprint for this key is <code className="bg-specter-navy px-1 py-0.5 rounded">785A 2269 EE3A 9736 AC1A 4F4C 864B 7CF9 A811 FEF7</code>.
                                <div className="pl-4 mt-2 space-y-1">
                                  <div><strong>2b.</strong> Download and import the PGP Public key of Kim Neunert (for v1.7.0): https://keybase.io/k9ert/pgp_keys.asc</div>
                                  <div><strong>2c.</strong> For older releases, download and save the PGP public key of Ben Kaufman: https://benkaufman.info/ben-kaufman.asc</div>
                                </div>
                              </li>
                              <li>Open the terminal app (you can search for it on the Launchpad)</li>
                              <li>Paste in the following lines (Note: The first 2 commands are needed only if it's your first time doing this process):</li>
                            </ol>
                            <div className="bg-specter-navy p-4 rounded-lg">
                              <ol className="list-decimal list-inside space-y-2 font-mono text-sm">
                                <li><code>ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code></li>
                                <li><code>brew install gnupg</code></li>
                                <li><code>cd Downloads</code></li>
                                <li><code>gpg --import pgp_keys.asc</code></li>
                                <li><code>gpg --verify SHA256SUMS.asc</code></li>
                              </ol>
                            </div>
                            <ol start={5} className="list-decimal list-inside space-y-3">
                              <li>After the last command, you should see a few lines of output - make sure they contain "Good signature" and the key identity and fingerprint are correct.</li>
                            </ol>
                            <div className="my-4 p-4 bg-gray-800 rounded-lg">
                              <img 
                                src={goodSigImage} 
                                alt="Good signature verification output" 
                                className="w-full max-w-full h-auto rounded border border-gray-600" 
                              />
                            </div>
                            <ol start={6} className="list-decimal list-inside space-y-3">
                              <li>Verify the sha256 of the Specter software file is indeed in the signed hashes file by running:</li>
                            </ol>
                            <div className="bg-specter-navy p-4 rounded-lg">
                              <code className="font-mono text-sm">sha256sum -c SHA256SUMS --ignore-missing Specter-v2.0.5.dmg</code>
                            </div>
                            <ol start={7} className="list-decimal list-inside space-y-3">
                              <li>Make sure the output shows "OK" next to the file name, like this:</li>
                            </ol>
                            <div className="my-4 p-4 bg-gray-800 rounded-lg">
                              <img 
                                src={fileOkImage} 
                                alt="File verification OK output" 
                                className="w-full max-w-full h-auto rounded border border-gray-600" 
                              />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      {macAsset && (
                        <p className="text-gray-400 text-sm">{formatFileSize(macAsset.size)}</p>
                      )}
                    </div>

                    {/* Windows */}
                    <div className="bg-specter-navy rounded-xl p-8 text-center">
                      <div className="flex justify-center text-white">
                        <WindowsIcon />
                      </div>
                      <Button
                        onClick={() => winAsset && window.open(winAsset.browser_download_url, '_blank')}
                        className="bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 mb-2 w-full text-xl"
                      >
                        For Windows
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="flex items-center justify-center gap-1 mb-4 text-gray-400 hover:text-white text-xs cursor-pointer">
                            <Info className="w-3 h-3" />
                            <span>Verify signature</span>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-specter-dark text-white">
                          <DialogHeader>
                            <DialogTitle className="text-xl font-bold text-white">Windows Signature Verification</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 text-sm">
                            <ol className="list-decimal list-inside space-y-3">
                              <li>Download Specter for Windows (<code className="bg-specter-navy px-1 py-0.5 rounded">Specter-Setup-v2.0.5.exe</code>), the hashfile (<code className="bg-specter-navy px-1 py-0.5 rounded">SHA256SUMS</code>) and the signatures file (<code className="bg-specter-navy px-1 py-0.5 rounded">SHA256SUMS.asc</code>)</li>
                              <li>Download and import the PGP Public key of "Specter Signer" here here. The fingerprint for this key is <code className="bg-specter-navy px-1 py-0.5 rounded">785A 2269 EE3A 9736 AC1A 4F4C 864B 7CF9 A811 FEF7</code>.
                                <div className="pl-4 mt-2 space-y-1">
                                  <div><strong>2b.</strong> Download and import the PGP Public key of Kim Neunert (for v1.7.0): https://keybase.io/k9ert/pgp_keys.asc</div>
                                  <div><strong>2c.</strong> For older releases, download and save the PGP public key of Ben Kaufman: https://benkaufman.info/ben-kaufman.asc</div>
                                </div>
                              </li>
                              <li>Download and install Gpg4Win (you can get it directly here)</li>
                              <li>Wait for it to open up or open Kleopatra from the Windows search bar</li>
                              <li>Click "Import" on the main screen and choose the pgp_keys.asc key you have downloaded in step 2</li>
                              <li>Click Decrypt/Verify on the upper bar and select the SHA256SUMS.asc file downloaded in step 1</li>
                              <li>Make sure verification passes successfully and returned the key you have imported as the signer of the file</li>
                              <li>Right click on the Windows button and choose PowerShell</li>
                              <li>In the PowerShell terminal, type:</li>
                            </ol>
                            <div className="bg-specter-navy p-4 rounded-lg">
                              <ol className="list-decimal list-inside space-y-2 font-mono text-sm">
                                <li><code>cd Downloads</code></li>
                                <li><code>Get-FileHash Specter-Setup-v2.0.5.exe</code></li>
                              </ol>
                            </div>
                            <ol start={10} className="list-decimal list-inside space-y-3">
                              <li>Open the SHA256SUMS file</li>
                              <li>Verify the result of the hash from the PowerShell matches the hash that is aligned with the name of the file written inside SHA256SUMS</li>
                            </ol>
                          </div>
                        </DialogContent>
                      </Dialog>
                      {winAsset && (
                        <p className="text-gray-400 text-sm">{formatFileSize(winAsset.size)}</p>
                      )}
                    </div>

                    {/* Linux */}
                    <div className="bg-specter-navy rounded-xl p-8 text-center">
                      <div className="flex justify-center text-white">
                        <LinuxIcon />
                      </div>
                      <Button
                        onClick={() => linuxAsset && window.open(linuxAsset.browser_download_url, '_blank')}
                        className="bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 mb-2 w-full text-xl"
                      >
                        For Linux
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="flex items-center justify-center gap-1 mb-4 text-gray-400 hover:text-white text-xs cursor-pointer">
                            <Info className="w-3 h-3" />
                            <span>Verify signature</span>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-specter-dark text-white">
                          <DialogHeader>
                            <DialogTitle className="text-xl font-bold text-white">Linux Signature Verification</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 text-sm">
                            <ol className="list-decimal list-inside space-y-3">
                              <li>Download Specter for Linux (<code className="bg-specter-navy px-1 py-0.5 rounded">specter_desktop-v2.0.5-x86_64-linux-gnu.tar.gz</code>), the hashfile (<code className="bg-specter-navy px-1 py-0.5 rounded">SHA256SUMS</code>) and the signatures file (<code className="bg-specter-navy px-1 py-0.5 rounded">SHA256SUMS.asc</code>)</li>
                              <li>Download and import the PGP Public key of "Specter Signer" here here. The fingerprint for this key is <code className="bg-specter-navy px-1 py-0.5 rounded">785A 2269 EE3A 9736 AC1A 4F4C 864B 7CF9 A811 FEF7</code>.
                                <div className="pl-4 mt-2 space-y-1">
                                  <div><strong>2b.</strong> Download and import the PGP Public key of Kim Neunert (for v1.7.0): https://keybase.io/k9ert/pgp_keys.asc</div>
                                  <div><strong>2c.</strong> For older releases, download and save the PGP public key of Ben Kaufman: https://benkaufman.info/ben-kaufman.asc</div>
                                </div>
                              </li>
                              <li>Open the terminal app (you can search for it on the Launchpad)</li>
                              <li>Paste in the following lines (Note: The first 2 commands are needed only if it's your first time doing this process):</li>
                            </ol>
                            <div className="bg-specter-navy p-4 rounded-lg">
                              <ol className="list-decimal list-inside space-y-2 font-mono text-sm">
                                <li><code>sudo apt update</code></li>
                                <li><code>sudo apt-get install gnupg</code></li>
                                <li><code>cd Downloads</code></li>
                                <li><code>gpg --import pgp_keys.asc</code></li>
                                <li><code>gpg --verify SHA256SUMS.asc</code></li>
                              </ol>
                            </div>
                            <ol start={5} className="list-decimal list-inside space-y-3">
                              <li>After the last command, you should see a few lines of output - make sure they contain "Good signature" and the key identity and fingerprint are correct.</li>
                            </ol>
                            <div className="my-4 p-4 bg-gray-800 rounded-lg">
                              <img 
                                src={goodSigImage} 
                                alt="Good signature verification output" 
                                className="w-full max-w-full h-auto rounded border border-gray-600" 
                              />
                            </div>
                            <ol start={6} className="list-decimal list-inside space-y-3">
                              <li>Verify the sha256 of the Specter software file is indeed in the signed hashes file by running:</li>
                            </ol>
                            <div className="bg-specter-navy p-4 rounded-lg">
                              <code className="font-mono text-sm">sha256sum -c SHA256SUMS --ignore-missing</code>
                            </div>
                            <ol start={7} className="list-decimal list-inside space-y-3">
                              <li>Make sure the output shows "OK" next to the file name, similar to this (example from MacOS but you get the idea):</li>
                            </ol>
                            <div className="my-4 p-4 bg-gray-800 rounded-lg">
                              <img 
                                src={fileOkImage} 
                                alt="File verification OK output" 
                                className="w-full max-w-full h-auto rounded border border-gray-600" 
                              />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      {linuxAsset && (
                        <p className="text-gray-400 text-sm">{formatFileSize(linuxAsset.size)}</p>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : null}

          <div className="mt-12">
            <a 
              href="https://github.com/cryptoadvance/specter-desktop/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-specter-coral hover:underline"
            >
              Signatures
            </a>
          </div>

          <p className="mt-8 text-gray-300">
            View our Open Source project on{' '}
            <a 
              href="https://github.com/cryptoadvance/specter-desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-specter-coral hover:underline"
            >
              Github.
            </a>
          </p>
        </div>
      </section>

      {/* Releases Section */}
      <main className="py-20 bg-specter-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Specter Releases:</h2>
          
          {loading ? (
            <div className="text-center">Loading releases...</div>
          ) : (
            <div className="space-y-8">
              {releases.slice(0, 5).map((release, index) => (
                <Card key={release.tag_name} className="bg-specter-navy rounded-xl p-8 border-0">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {release.tag_name} {index === 0 && <span className="text-specter-coral">Latest</span>}
                      </h3>
                      <p className="text-gray-400">Date: {formatDate(release.published_at)}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Assets:</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {release.assets.map((asset) => (
                        <div key={asset.name} className="bg-specter-dark rounded-lg p-4">
                          <a 
                            href={asset.browser_download_url}
                            className="text-specter-coral hover:underline font-mono text-sm break-all"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {asset.name}
                          </a>
                          <p className="text-gray-400 text-xs mt-1">{formatFileSize(asset.size)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <details className="cursor-pointer">
                    <summary className="text-specter-coral hover:underline font-semibold">
                      {release.tag_name} details
                    </summary>
                    <div className="mt-4 p-4 bg-specter-dark rounded-lg">
                      <div className="prose prose-invert max-w-none">
                        <div className="whitespace-pre-wrap text-gray-300">
                          {release.body || 'No release notes available.'}
                        </div>
                      </div>
                    </div>
                  </details>
                </Card>
              ))}
            </div>
          )}

          {/* Artifacts Section */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Artifacts</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-8">
                Specter is available in several forms: as a GUI application, as a binary that can be executed like a web app, and as a PyPI package. Additionally, Specter is available as a Docker image via the awesome{' '}
                <a href="https://github.com/lncm/docker-specter-desktop" className="text-specter-coral hover:underline">
                  Chiang Mai LN devs
                </a>.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Signed hashsum files are available for all binaries.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-specter-navy rounded-xl p-6 border-0">
                  <h3 className="text-xl font-bold mb-4 text-white">GUI Application</h3>
                  <p className="text-gray-300 mb-4">
                    This is a GUI application with a windowed interface, which includes the Specter server.
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong>Note on Linux:</strong> you need to set up udev rules (included in the archive). Check out the{' '}
                    <a href="https://github.com/cryptoadvance/specter-desktop/blob/master/udev/README.md#usage" className="text-specter-coral hover:underline">
                      readme
                    </a>.
                  </p>
                  <p className="text-gray-300 text-sm mt-2">
                    <strong>Note on macOS:</strong> The current build supports only macOS Catalina (10.15) or higher.
                  </p>
                </Card>

                <Card className="bg-specter-navy rounded-xl p-6 border-0">
                  <h3 className="text-xl font-bold mb-4 text-white">specterd</h3>
                  <p className="text-gray-300 mb-4">
                    Specterd is a command-line program that runs only the Specter server, behaving like a traditional web application.
                  </p>
                </Card>

                <Card className="bg-specter-navy rounded-xl p-6 border-0">
                  <h3 className="text-xl font-bold mb-4 text-white">PyPi Packages</h3>
                  <p className="text-gray-300">
                    If you're experienced Python user and/or developer, you might appreciate the{' '}
                    <a href="https://pypi.org/project/cryptoadvance.specter/" className="text-specter-coral hover:underline">
                      pypi-packages
                    </a>{' '}
                    which are also available on our github-release-page.
                  </p>
                </Card>

                <Card className="bg-specter-navy rounded-xl p-6 border-0">
                  <h3 className="text-xl font-bold mb-4 text-white">Signatures and hashes</h3>
                  <p className="text-gray-300 text-sm">
                    SHA256SUMS file contains sha256 hashes of all binary files and signed with "Specter Signer's" GPG key.
                    You can get the public key from{' '}
                    <a href="http://keyserver.ubuntu.com/pks/lookup?op=get&search=0x785a2269ee3a9736ac1a4f4c864b7cf9a811fef7" className="text-specter-coral hover:underline">
                      here
                    </a>.
                  </p>
                  <p className="text-gray-300 text-sm mt-2">
                    Fingerprint of the key is <code className="bg-specter-dark px-1 rounded">785A 2269 EE3A 9736 AC1A 4F4C 864B 7CF9 A811 FEF7</code>
                  </p>
                </Card>
              </div>
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