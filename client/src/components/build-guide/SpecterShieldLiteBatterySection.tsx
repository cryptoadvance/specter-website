import specterShieldLiteBatteryImage from "@assets/Specter Shield Lite von hinten ohne case_1756030601602.png";

interface SpecterShieldLiteBatterySectionProps {
  isVisible?: boolean;
}

export default function SpecterShieldLiteBatterySection({ isVisible = true }: SpecterShieldLiteBatterySectionProps) {
  if (!isVisible) return null;

  return (
    <div className="bg-specter-navy rounded-xl shadow-lg border-0 mb-12 case-section overflow-hidden" data-case="specter-shield-lite-battery">
      <div className="grid md:grid-cols-3 gap-12 h-full">
        <div className="md:col-span-2 flex items-end">
          <img 
            src={specterShieldLiteBatteryImage} 
            alt="Specter Shield Lite with Batteries (internal view)"
            className="w-full h-auto block"
          />
        </div>
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-gray-700 pb-2">Specter Shield Lite with Batteries</h2>
          <p className="text-gray-400 text-sm mb-4">A portable version of the Specter Shield Lite with a built-in AAA batteries and USB-C Port.</p>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">Case Name: Specter Shield Lite with Batteries Case</h3>
          <p className="text-gray-300 mb-4">A case designed specifically to accommodate the batteries and USB-C</p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Parts</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><a href="#shield-lite" className="hover:underline text-specter-primary">Specter Shield Lite</a></li>
            <li><a href="#part-usb-c-module" className="hover:underline text-specter-primary">USB-C Power Module</a></li>
            <li><a href="#part-switch" className="hover:underline text-specter-primary">Switch</a></li>
            <li><a href="#part-contact-springs" className="hover:underline text-specter-primary">Contact Springs</a></li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">Necessary Tools</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Mini-USB Cable</li>
            <li>Cross-head screwdriver</li>
            <li>Soldering iron</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">For Use</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Micro USB Cable</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">How to Build</h3>
          <ul className="list-disc list-inside text-specter-primary space-y-2">
            <li><a href="https://www.youtube.com/watch?v=NWD0xLyAras&t=332s" target="_blank" className="text-specter-primary hover:underline">Specter Shield Lite with Batteries Case Instructions</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
