import specterShieldImage from "@assets/Specter_Shield_vorne_Smarcard_removed_1756029281093.png";

interface SpecterShieldSectionProps {
  isVisible?: boolean;
}

export default function SpecterShieldSection({ isVisible = true }: SpecterShieldSectionProps) {
  if (!isVisible) return null;

  return (
    <div className="bg-specter-navy rounded-xl shadow-lg border-0 mb-12 case-section overflow-hidden" data-case="specter-shield">
      <div className="grid md:grid-cols-3 gap-12 h-full">
        <div className="md:col-span-2 flex items-end">
          <img 
            src={specterShieldImage} 
            alt="Specter Shield Hardware Wallet with Smart Card"
            className="w-full h-auto block"
          />
        </div>
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-gray-700 pb-2">Specter Shield</h2>
          <p className="text-gray-400 text-sm mb-4">
            An enhanced version with a secure element and a battery.
          </p>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">Case Name: Alternative 3D printed case</h3>
          <p className="text-gray-300 mb-4">
            This is a more print-friendly case for the Specter Shield that provides access to all ports.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Parts</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><a href="#part-developer-board" className="hover:underline text-specter-primary">Developer Board</a></li>
            <li><a href="#part-gm65-scanner" className="hover:underline text-specter-primary">GM65 Scanner</a></li>
            <li><a href="#part-specter-shield-board" className="hover:underline text-specter-primary">Specter Shield Extension Board</a></li>
            <li><a href="#part-smart-card" className="hover:underline text-specter-primary">Smart Card</a></li>
            <li><a href="#part-rechargeable-battery" className="hover:underline text-specter-primary">Rechargeable battery</a></li>
            <li><a href="#case-specter-shield" className="hover:underline text-specter-primary">Specter Shield Case</a></li>
            <li><a href="#part-screws-shield" className="hover:underline text-specter-primary">8x M3 flathead screws (4x 6mm, 2x 8mm, 2x 10mm or 8x 10mm)</a></li>
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
            <li><a href="https://github.com/cryptoadvance/specter-diy/blob/master/shield/Alternative_3D_Printed_Case/Assembly_Instructions.pdf" target="_blank" className="text-specter-primary hover:underline">Assembly Instructions</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
