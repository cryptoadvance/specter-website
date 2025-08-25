import { Card } from "@/components/ui/card";

// Import team member images
import cryptoguideImage from "@assets/Cryptoguide_1755805248345.jpg";
import yanImage from "@assets/Yan-Swan_1755805253984.jpg";
import moritzImage from "@assets/Moritz_1755805413765.jpg";
import stepanImage from "@assets/Stepan-Snigirev_1755804956177.jpg";
import kimImage from "@assets/Kim_1755804970556.jpg";
import poltoImage from "@assets/polto_1755804982512.jpg";
import thomasImage from "@assets/Thomas_1755804997253.jpg";
import xIcon from "@assets/imgi_1_x-icon-white-logo-x-app-editable-transparent-background-premium-social-media-de_1756110415058.png";
import linkedinIcon from "@assets/Linkedin-Logo-PNG-Picture_1756110417256.png";
import websiteIcon from "@assets/website-Icon_1756111196211.png";

export default function BoardMembers() {
  return (
    <section>
      <Card className="bg-specter-navy rounded-2xl p-8 shadow-2xl border-0">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Board of Directors & Members</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* Board Members */}
          <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
            <img 
              src={cryptoguideImage} 
              alt="CryptoGuide" 
              className="rounded-full w-20 h-20 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-white">CryptoGuide</h3>
            <p className="text-sm text-specter-coral">Board of Directors</p>
            <p className="text-xs text-gray-400 mt-1">Revived the Specter Shield with his PCB skills and created the cost-effective Shield Lite version.</p>
            <div className="flex justify-center space-x-3 mt-3">
              <a href="https://x.com/YTCryptoGuide" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={xIcon} alt="X (Twitter)" className="w-5 h-5" />
              </a>
              <a href="https://cryptoguide.tips/shop/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={websiteIcon} alt="Website" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
            <img 
              src={yanImage} 
              alt="Yan" 
              className="rounded-full w-20 h-20 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-white">Yan</h3>
            <p className="text-sm text-specter-coral">Board of Directors</p>
            <p className="text-xs text-gray-400 mt-1">Co-founder of Swan and a crucial bridge in transferring Specter into the hands of the community.</p>
            <div className="flex justify-center space-x-3 mt-3">
              <a href="https://x.com/skwp" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={xIcon} alt="X (Twitter)" className="w-5 h-5" />
              </a>
              <a href="https://www.swanbitcoin.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={websiteIcon} alt="Website" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Honorary Members */}
          <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
            <img 
              src={moritzImage} 
              alt="Moritz Wietersheim" 
              className="rounded-full w-20 h-20 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-white">Moritz Wietersheim</h3>
            <p className="text-sm text-gray-400">Honorary Member</p>
            <p className="text-xs text-gray-400 mt-1">The founding partner who teamed up with Stepan to establish the company Specter Solutions.</p>
            <div className="flex justify-center space-x-3 mt-3">
              <a href="https://x.com/MWietersheim" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={xIcon} alt="X (Twitter)" className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/moritzwietersheim/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
            <img 
              src={stepanImage} 
              alt="Stepan Snigirev" 
              className="rounded-full w-20 h-20 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-white">Stepan Snigirev</h3>
            <p className="text-sm text-gray-400">Honorary Member</p>
            <p className="text-xs text-gray-400 mt-1">Main Developer of the Specter DIY and Specter Desktop now working on a quantum computer.</p>
            <div className="flex justify-center space-x-3 mt-3">
              <a href="https://x.com/StepanSnigirev" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={xIcon} alt="X (Twitter)" className="w-5 h-5" />
              </a>
              <a href="https://stepansnigirev.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={websiteIcon} alt="Website" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* General Members */}
          <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
            <img 
              src={kimImage} 
              alt="Kim" 
              className="rounded-full w-20 h-20 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-white">k9ert</h3>
            <p className="text-sm text-gray-400">Association Member</p>
            <p className="text-xs text-gray-400 mt-1">A former key member of the Specter team who contributed to improving the software wallet.</p>
            <div className="flex justify-center space-x-3 mt-3">
              <a href="https://x.com/k9ert" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={xIcon} alt="X (Twitter)" className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/k9ert/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
            <img 
              src={poltoImage} 
              alt="Polto" 
              className="rounded-full w-20 h-20 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-white">Polto</h3>
            <p className="text-sm text-gray-400">Association Member</p>
            <p className="text-xs text-gray-400 mt-1">Led Specter workshops at conferences to promote knowledge and adoption within the community.</p>
            <div className="flex justify-center space-x-3 mt-3">
              <a href="https://x.com/_polto_" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={xIcon} alt="X (Twitter)" className="w-5 h-5" />
              </a>
              <a href="https://hodling.ch/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={websiteIcon} alt="Website" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
            <img 
              src={thomasImage} 
              alt="Thomas" 
              className="rounded-full w-20 h-20 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-white">Thomas</h3>
            <p className="text-sm text-gray-400">Association Member</p>
            <p className="text-xs text-gray-400 mt-1">Designer of the Specter Snap Case, who also sells Specter DIYs at BitcoinStoreOrg.</p>
            <div className="flex justify-center space-x-3 mt-3">
              <a href="https://x.com/Kayth21" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={xIcon} alt="X (Twitter)" className="w-5 h-5" />
              </a>
              <a href="https://bitcoin-store.org/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={websiteIcon} alt="Website" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
