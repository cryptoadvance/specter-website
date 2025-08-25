import specterShieldLiteImage from "@assets/Front_Smartcard_Kabel_removed_orange-scaled_1756029302530.png";

interface SpecterShieldLiteSectionProps {
  isVisible?: boolean;
}

export default function SpecterShieldLiteSection({ isVisible = true }: SpecterShieldLiteSectionProps) {
  if (!isVisible) return null;

  return (
    <div className="bg-specter-navy rounded-xl shadow-lg border-0 mb-12 case-section overflow-hidden" data-case="specter-shield-lite">
      <div className="grid md:grid-cols-3 gap-12 h-full">
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-gray-700 pb-2" id="shield-lite">Specter Shield Lite</h2>
          <p className="text-gray-400 text-sm mb-4">A streamlined, low-cost version of the Shield.</p>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">Case Name: Specter Shield Lite Case</h3>
          <p className="text-gray-300 mb-4">A case designed to fit the more compact Shield Lite board.</p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Parts</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><a href="#part-developer-board" className="hover:underline text-specter-primary">Developer Board</a></li>
            <li>
              <a href="#part-gm65-scanner" className="hover:underline text-specter-primary">GM65</a> or <a href="#part-m3y-scanner" className="hover:underline text-specter-primary">M3Y Scanner</a>
            </li>
            <li><a href="#part-specter-shield-lite-board" className="hover:underline text-specter-primary">Specter Shield Lite Board</a></li>
            <li><a href="#part-smart-card" className="hover:underline text-specter-primary">Smart Card</a></li>
            <li><a href="#case-specter-shield-lite" className="hover:underline text-specter-primary">3D-printed Case</a></li>
            <li>
              <a href="#part-screws-lite" className="hover:underline text-specter-primary">
                8x M3 countersunk head screws<br/>
                (2x 16mm, 2x 12mm, 2x 10mm, 2x 6mm or 6x 12mm, 2x 10mm)
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Tools</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Mini-USB Cable</li>
            <li>Cross-head screwdriver</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">For Use</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Micro USB Cable</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">How to Build</h3>
          <ul className="list-disc list-inside text-specter-primary space-y-2">
            <li><a href="https://www.youtube.com/watch?v=NWD0xLyAras&t=332s" target="_blank" className="text-specter-primary hover:underline">Specter Shield Lite Build Guide</a></li>
          </ul>
        </div>
        <div className="md:col-span-2 flex items-end">
          <img 
            src={specterShieldLiteImage} 
            alt="Specter Shield Lite Hardware Wallet"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </div>
  );
}
