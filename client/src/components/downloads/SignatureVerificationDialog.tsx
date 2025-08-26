import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Info } from 'lucide-react';
import goodSigImage from "@assets/good_sig_1756045019493.png";
import fileOkImage from "@assets/file_ok_1756045021825.png";

interface SignatureVerificationDialogProps {
  platform: 'mac' | 'windows' | 'linux';
  version: string;
  fileName: string;
}

export default function SignatureVerificationDialog({ platform, version, fileName }: SignatureVerificationDialogProps) {
  const platformTitles = {
    mac: 'Mac OS Signature Verification',
    windows: 'Windows Signature Verification',
    linux: 'Linux Signature Verification'
  };

  const downloadUrls = {
    file: `https://github.com/cryptoadvance/specter-desktop/releases/download/${version}/${fileName}`,
    hashfile: `https://github.com/cryptoadvance/specter-desktop/releases/download/${version}/SHA256SUMS`,
    signatures: `https://github.com/cryptoadvance/specter-desktop/releases/download/${version}/SHA256SUMS.asc`
  };

  const renderMacInstructions = () => (
    <div className="space-y-4 text-sm">
      <ol className="list-decimal list-inside space-y-3">
        <li>Download Specter for macOS (<a href={downloadUrls.file} target="_blank" rel="noopener noreferrer" className="bg-specter-navy px-1 py-0.5 rounded text-specter-coral hover:text-white transition-colors">{fileName}</a>), the hashfile (<a href={downloadUrls.hashfile} target="_blank" rel="noopener noreferrer" className="bg-specter-navy px-1 py-0.5 rounded text-specter-coral hover:text-white transition-colors">SHA256SUMS</a>) and the signatures file (<a href={downloadUrls.signatures} target="_blank" rel="noopener noreferrer" className="bg-specter-navy px-1 py-0.5 rounded text-specter-coral hover:text-white transition-colors">SHA256SUMS.asc</a>)</li>
        <li>Download and import the PGP Public key of "Specter Signer" here here. The fingerprint for this key is <code className="bg-specter-navy px-1 py-0.5 rounded">785A 2269 EE3A 9736 AC1A 4F4C 864B 7CF9 A811 FEF7</code>.
          <div className="pl-4 mt-2 space-y-1">
            <div><strong>2b.</strong> Download and import the PGP Public key of Kim Neunert (for v1.7.0): <a href="https://keybase.io/k9ert/pgp_keys.asc?fingerprint=ecc0b4abd74e716f5ade095228b358a8843b0109" target="_blank" rel="noopener noreferrer" className="text-specter-coral hover:text-white transition-colors">https://keybase.io/k9ert/pgp_keys.asc</a></div>
            <div><strong>2c.</strong> For older releases, download and save the PGP public key of Ben Kaufman: <a href="https://benkaufman.info/ben-kaufman.asc" target="_blank" rel="noopener noreferrer" className="text-specter-coral hover:text-white transition-colors">https://benkaufman.info/ben-kaufman.asc</a></div>
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
        <code className="font-mono text-sm">sha256sum -c SHA256SUMS --ignore-missing {fileName}</code>
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
  );

  const renderWindowsInstructions = () => (
    <div className="space-y-4 text-sm">
      <ol className="list-decimal list-inside space-y-3">
        <li>Download Specter for Windows (<a href={downloadUrls.file} target="_blank" rel="noopener noreferrer" className="bg-specter-navy px-1 py-0.5 rounded text-specter-coral hover:text-white transition-colors">{fileName}</a>), the hashfile (<a href={downloadUrls.hashfile} target="_blank" rel="noopener noreferrer" className="bg-specter-navy px-1 py-0.5 rounded text-specter-coral hover:text-white transition-colors">SHA256SUMS</a>) and the signatures file (<a href={downloadUrls.signatures} target="_blank" rel="noopener noreferrer" className="bg-specter-navy px-1 py-0.5 rounded text-specter-coral hover:text-white transition-colors">SHA256SUMS.asc</a>)</li>
        <li>Download and import the PGP Public key of "Specter Signer" here here. The fingerprint for this key is <code className="bg-specter-navy px-1 py-0.5 rounded">785A 2269 EE3A 9736 AC1A 4F4C 864B 7CF9 A811 FEF7</code>.
          <div className="pl-4 mt-2 space-y-1">
            <div><strong>2b.</strong> Download and import the PGP Public key of Kim Neunert (for v1.7.0): <a href="https://keybase.io/k9ert/pgp_keys.asc?fingerprint=ecc0b4abd74e716f5ade095228b358a8843b0109" target="_blank" rel="noopener noreferrer" className="text-specter-coral hover:text-white transition-colors">https://keybase.io/k9ert/pgp_keys.asc</a></div>
            <div><strong>2c.</strong> For older releases, download and save the PGP public key of Ben Kaufman: <a href="https://benkaufman.info/ben-kaufman.asc" target="_blank" rel="noopener noreferrer" className="text-specter-coral hover:text-white transition-colors">https://benkaufman.info/ben-kaufman.asc</a></div>
          </div>
        </li>
        <li>Download and install <a href="https://files.gpg4win.org/gpg4win-3.1.15.exe" target="_blank" rel="noopener noreferrer" className="text-specter-coral hover:text-white transition-colors">Gpg4Win</a> (you can get it directly here)</li>
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
          <li><code>Get-FileHash {fileName}</code></li>
        </ol>
      </div>
      <ol start={10} className="list-decimal list-inside space-y-3">
        <li>Open the SHA256SUMS file</li>
        <li>Verify the result of the hash from the PowerShell matches the hash that is aligned with the name of the file written inside SHA256SUMS</li>
      </ol>
    </div>
  );

  const renderLinuxInstructions = () => (
    <div className="space-y-4 text-sm">
      <ol className="list-decimal list-inside space-y-3">
        <li>Download Specter for Linux (<a href={downloadUrls.file} target="_blank" rel="noopener noreferrer" className="bg-specter-navy px-1 py-0.5 rounded text-specter-coral hover:text-white transition-colors">{fileName}</a>), the hashfile (<a href={downloadUrls.hashfile} target="_blank" rel="noopener noreferrer" className="bg-specter-navy px-1 py-0.5 rounded text-specter-coral hover:text-white transition-colors">SHA256SUMS</a>) and the signatures file (<a href={downloadUrls.signatures} target="_blank" rel="noopener noreferrer" className="bg-specter-navy px-1 py-0.5 rounded text-specter-coral hover:text-white transition-colors">SHA256SUMS.asc</a>)</li>
        <li>Download and import the PGP Public key of "Specter Signer" here here. The fingerprint for this key is <code className="bg-specter-navy px-1 py-0.5 rounded">785A 2269 EE3A 9736 AC1A 4F4C 864B 7CF9 A811 FEF7</code>.
          <div className="pl-4 mt-2 space-y-1">
            <div><strong>2b.</strong> Download and import the PGP Public key of Kim Neunert (for v1.7.0): <a href="https://keybase.io/k9ert/pgp_keys.asc?fingerprint=ecc0b4abd74e716f5ade095228b358a8843b0109" target="_blank" rel="noopener noreferrer" className="text-specter-coral hover:text-white transition-colors">https://keybase.io/k9ert/pgp_keys.asc</a></div>
            <div><strong>2c.</strong> For older releases, download and save the PGP public key of Ben Kaufman: <a href="https://benkaufman.info/ben-kaufman.asc" target="_blank" rel="noopener noreferrer" className="text-specter-coral hover:text-white transition-colors">https://benkaufman.info/ben-kaufman.asc</a></div>
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
  );

  const renderInstructions = () => {
    switch (platform) {
      case 'mac':
        return renderMacInstructions();
      case 'windows':
        return renderWindowsInstructions();
      case 'linux':
        return renderLinuxInstructions();
      default:
        return null;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center gap-1 mb-4 text-gray-400 hover:text-white text-xs cursor-pointer w-full">
          <Info className="w-3 h-3" />
          <span>Verify signature</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-specter-dark text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">{platformTitles[platform]}</DialogTitle>
        </DialogHeader>
        {renderInstructions()}
      </DialogContent>
    </Dialog>
  );
}
