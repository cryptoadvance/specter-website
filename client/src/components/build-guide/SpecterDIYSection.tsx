import specterDiyImage from "@assets/Specter_diy_startscreen_1756029214790.png";

interface SpecterDIYSectionProps {
  isVisible?: boolean;
}

export default function SpecterDIYSection({ isVisible = true }: SpecterDIYSectionProps) {
  if (!isVisible) return null;

  return (
    <div className="bg-specter-navy rounded-xl shadow-lg border-0 mb-12 case-section overflow-hidden" data-case="specter-diy">
      <div className="grid md:grid-cols-3 gap-12 h-full">
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-gray-700 pb-2">Specter DIY</h2>
          <p className="text-gray-400 text-sm mb-4">A simple 3D printed case with QR-Code scanner using micro USB.</p>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">Case Name: Specter DIY</h3>
          <p className="text-gray-300 mb-4">A simple 3D-printed case designed to snap together.</p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Parts</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><a href="#part-developer-board" className="hover:underline text-specter-primary">Developer Board</a></li>
            <li><a href="#part-gm65-scanner-board" className="hover:underline text-specter-primary">GM65 Scanner with board</a></li>
            <li><a href="#part-pins" className="hover:underline text-specter-primary">PINs</a></li>
            <li><a href="#case-specter-diy" className="hover:underline text-specter-primary">Specter DIY Case</a></li>
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
            <li><a href="https://github.com/cryptoadvance/specter-diy/tree/master/docs/enclosures/snapcase" target="_blank" className="text-specter-primary hover:underline">Specter DIY Official Build Guide</a></li>
          </ul>
        </div>
        <div className="md:col-span-2 flex items-end">
          <img 
            src={specterDiyImage} 
            alt="Specter DIY Hardware Wallet"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </div>
  );
}
