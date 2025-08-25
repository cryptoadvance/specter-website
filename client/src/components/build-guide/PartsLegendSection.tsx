interface PartsLegendSectionProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function PartsLegendSection({ activeFilter, onFilterChange }: PartsLegendSectionProps) {
  return (
    <>
      {/* Filter Controls for Legend */}
      <div className="mb-8 flex flex-wrap justify-center items-center gap-2">
        <h3 className="text-lg font-semibold text-white mr-4">Filter Legend by Case:</h3>
        <button 
          className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'all' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
          data-filter="all"
          onClick={() => onFilterChange('all')}
        >
          Show All
        </button>
        <button 
          className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-diy' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
          data-filter="specter-diy"
          onClick={() => onFilterChange('specter-diy')}
        >
          Specter DIY
        </button>
        <button 
          className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
          data-filter="specter-shield"
          onClick={() => onFilterChange('specter-shield')}
        >
          Specter Shield
        </button>
        <button 
          className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield-lite' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
          data-filter="specter-shield-lite"
          onClick={() => onFilterChange('specter-shield-lite')}
        >
          Specter Shield Lite
        </button>
        <button 
          className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield-lite-battery' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
          data-filter="specter-shield-lite-battery"
          onClick={() => onFilterChange('specter-shield-lite-battery')}
        >
          Shield Lite (Batteries)
        </button>
      </div>
      
      {/* Legend Section */}
      <div className="bg-specter-navy rounded-xl shadow-lg p-6 sm:p-8 mb-12" id="legend-section">
        <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-gray-700 pb-2">Legend of Parts</h2>
        <p className="text-gray-400 text-sm mb-4">A list of all the parts and components with short descriptions and links to a few suppliers.</p>

        <ul className="list-none text-gray-300 space-y-8" id="parts-list">
          <li id="part-developer-board" data-cases="specter-diy specter-shield specter-shield-lite specter-shield-lite-battery">
            <h3 className="text-xl font-semibold text-white mb-2">Developer Board</h3>
            <p className="text-gray-400 mb-4">This is the main Smartphone Developer Board that runs the Specter firmware. The STM32F469I-DISCO is the recommended model.</p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://eu.mouser.com/ProductDetail/STMicroelectronics/STM32F469I-DISCO?qs=kWQV1gtkNndotCjy2DKZ4w%3D%3D" target="_blank" className="text-specter-primary hover:underline">Mouser</a></li>
              <li><a href="https://de.rs-online.com/web/p/entwicklungstools-microcontroller/9092865" target="_blank" className="text-specter-primary hover:underline">RS-Online</a></li>
              <li><a href="https://www.digikey.com/en/products/detail/stmicroelectronics/STM32F469I-DISCO/5428811" target="_blank" className="text-specter-primary hover:underline">Digi-Key</a></li>
            </ul>
          </li>
          
          <li id="part-gm65-scanner-board" data-cases="specter-diy">
            <h3 className="text-xl font-semibold text-white mb-2">GM65 Scanner with board</h3>
            <p className="text-gray-400 mb-4">A QR code scanner module used for air-gapped transactions.</p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://www.waveshare.com/barcode-scanner-module.htm" target="_blank" className="text-specter-primary hover:underline">Waveshare</a></li>
              <li><a href="https://www.sunsky-online.com/de/p/ZY14328032/Waveshare-Barcode-Scanner-Module-1D-2D-Codes-Reader.htm" target="_blank" className="text-specter-primary hover:underline">Sunsky-Online</a></li>
            </ul>
          </li>
          
          <li id="part-gm65-scanner" data-cases="specter-shield specter-shield-lite specter-shield-lite-battery">
            <h3 className="text-xl font-semibold text-white mb-2">GM65 or GM65-S Scanner</h3>
            <p className="text-gray-400 mb-4">A standard GM65 barcode scanner for reading QR codes.</p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://www.alibaba.com/product-detail/Original-GM65-S-Barcode-QR-Code_1601114566992.html?spm=a2700.galleryofferlist.normal_offer.d_image.51f213a0IJ52CF&priceId=aecebae476e543e7aaebb0c257c58836" target="_blank" className="text-specter-primary hover:underline">Alibaba</a></li>
              <li><a href="https://de.aliexpress.com/item/33008958186.html?spm=a2g0o.productlist.main.8.3abc2cc23LfGCp&algo_pvid=859a7d84-4e23-4bb6-9133-d65418377045&pdp_ext_f=%7B%22order%22%3A%227%22%2C%22eval%22%3A%221%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A33008958186%7C_p_origin_prod%3A" target="_blank" className="text-specter-primary hover:underline">AliExpress</a></li>
              <li><a href="https://cryptoguide.tips/product/gm65-barcode-scanner/" target="_blank" className="text-specter-primary hover:underline">Cryptoguide.tips</a></li>
            </ul>
          </li>
          
          <li id="part-m3y-scanner" data-cases="specter-shield-lite specter-shield-lite-battery">
            <h3 className="text-xl font-semibold text-white mb-2">M3Y -W</h3>
            <p className="text-gray-400 mb-4">An OEM barcode scan module for QR code reading.</p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://www.alibaba.com/product-detail/M3Y-W-OEM-Barcode-Scan-Module_1601368712449.html?spm=a2756.trade-list-buyer.0.0.374776e9PKaVPA" target="_blank" className="text-specter-primary hover:underline">Alibaba</a></li>
            </ul>
          </li>
          
          <li id="part-pins" data-cases="specter-diy">
            <h3 className="text-xl font-semibold text-white mb-2">PINs</h3>
            <p className="text-gray-400 mb-4">These pins are used to connect the Developer Board to the Shield boards and need to be bent to an L-shape for proper fitting.</p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://eu.mouser.com/ProductDetail/Samtec/DW-02-10-T-S-571?qs" target="_blank" className="text-specter-primary hover:underline">Mouser</a></li>
              <li><a href="https://www.amazon.com/gp/product/B015KA0RRU/" target="_blank" className="text-specter-primary hover:underline">Amazon</a></li>
            </ul>
          </li>

          <li id="part-specter-shield-board" data-cases="specter-shield">
            <h3 className="text-xl font-semibold text-white mb-2">Specter Shield Board</h3>
            <p className="text-gray-400 mb-4">The main PCB for the Specter Shield, which includes secure element support.</p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://www.pcbway.com/project/shareproject/Specter_Shield_v1_0_0_2024_Update_ea6f25c5.html" target="_blank" className="text-specter-primary hover:underline">PCBWay</a></li>
              <li><a href="https://cryptoguide.tips/product/specter-shield-board/" target="_blank" className="text-specter-primary hover:underline">Cryptoguide.tips</a></li>
              <li><a href="https://clavastack.com/produkt/specter-shield-board/" target="_blank" className="text-specter-primary hover:underline">Clavastack</a></li>
            </ul>
          </li>

          <li id="part-specter-shield-lite-board" data-cases="specter-shield-lite specter-shield-lite-battery">
            <h3 className="text-xl font-semibold text-white mb-2">Specter Shield Lite Board</h3>
            <p className="text-gray-400 mb-4">A compact and simplified version of the Specter Shield PCB.</p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://www.pcbway.com/project/shareproject/Specter_Shield_Lite_ad02f25b.html" target="_blank" className="text-specter-primary hover:underline">PCBWay</a></li>
              <li><a href="https://cryptoguide.tips/product/specter-shield-lite-board/" target="_blank" className="text-specter-primary hover:underline">Cryptoguide.tips</a></li>
              <li><a href="https://clavastack.com/produkt/specter-shield-lite-board/" target="_blank" className="text-specter-primary hover:underline">Clavastack</a></li>
            </ul>
          </li>

          <li id="part-smart-card" data-cases="specter-shield specter-shield-lite specter-shield-lite-battery">
            <h3 className="text-xl font-semibold text-white mb-2">Smart Card</h3>
            <p className="text-gray-400 mb-4">A secure element card used to store cryptographic keys.</p>
            <div className="mt-4">
              <h4 className="font-semibold text-lg text-gray-200">Preflashed:</h4>
              <ul className="list-disc list-inside text-specter-primary space-y-1 ml-4">
                <li><a href="https://cryptoguide.tips/product/j3h145-javacard/" target="_blank" className="text-specter-primary hover:underline">Cryptoguide.tips</a></li>
                <li><a href="https://clavastack.com/produkt/smartcard/" target="_blank" className="text-specter-primary hover:underline">Clavastack</a></li>
                <li><a href="https://clavastack.com/produkt/smartcard/" target="_blank" className="text-specter-primary hover:underline">Clavastack (printed)</a></li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-lg text-gray-200">Raw:</h4>
              <ul className="list-disc list-inside text-specter-primary space-y-1 ml-4">
                <li><a href="https://www.alibaba.com/product-detail/J3H145-JCOP3-SecID-P60-JavaCard-Contact_1600717536549.html" target="_blank" className="text-specter-primary hover:underline">Alibaba</a></li>
                <li><a href="https://de.aliexpress.com/item/1005001306297920.html" target="_blank" className="text-specter-primary hover:underline">AliExpress</a></li>
              </ul>
            </div>
          </li>
          
          <li id="part-rechargeable-battery" data-cases="specter-shield">
            <h3 className="text-xl font-semibold text-white mb-2">Rechargeable battery</h3>
            <p className="text-gray-400 mb-4">A rechargeable battery to make the Specter Shield portable.</p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://www.amazon.de/dp/B095YC5PW8" target="_blank" className="text-specter-primary hover:underline">Amazon.de</a></li>
            </ul>
          </li>

          <li id="part-usb-c-module" data-cases="specter-shield-lite-battery">
            <h3 className="text-xl font-semibold text-white mb-2">USB-C Power Module</h3>
            <p className="text-gray-400 mb-4">A module for providing USB-C power to the Specter Shield Lite with Batteries.</p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://de.aliexpress.com/item/1005007510399629.html?gatewayAdapt=usa2deu4itemAdapt" target="_blank" className="text-specter-primary hover:underline">AliExpress</a></li>
            </ul>
          </li>

          <li id="part-switch" data-cases="specter-shield-lite-battery">
            <h3 className="text-xl font-semibold text-white mb-2">Switch</h3>
            <p className="text-gray-400 mb-4">A switch to turn the device on and off.</p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://de.aliexpress.com/item/10000003088863.html?gatewayAdapt=usa2deu4itemAdapt" target="_blank" className="text-specter-primary hover:underline">AliExpress</a></li>
            </ul>
          </li>

          <li id="part-contact-springs" data-cases="specter-shield-lite-battery">
            <h3 className="text-xl font-semibold text-white mb-2">Contact Springs</h3>
            <p className="text-gray-400 mb-4">Springs used for battery contacts.</p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://de.aliexpress.com/item/1005005681174972.html?gatewayAdapt=usa2deu4itemAdapt" target="_blank" className="text-specter-primary hover:underline">AliExpress</a></li>
            </ul>
          </li>

          <li id="part-screws-shield" data-cases="specter-shield">
            <h3 className="text-xl font-semibold text-white mb-2">Screws (Specter Shield)</h3>
            <p className="text-gray-400 mb-4">
              M3 flathead screws
              4x 6mm,
              2x 8mm,
              2x 10mm,
              - or 8x 10mm
            </p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://www.amazon.de/Drenky-Senkkopfschrauben-Gewindeschrauben-Steckdosen-Regelgewinde/dp/B0CN6CLQT1/" target="_blank" className="text-specter-primary hover:underline">Amazon.de</a></li>
              <li><a href="https://de.aliexpress.com/item/1005004020339065.html" target="_blank" className="text-specter-primary hover:underline">AliExpress</a></li>
            </ul>
          </li>

          <li id="part-screws-lite" data-cases="specter-shield-lite specter-shield-lite-battery">
            <h3 className="text-xl font-semibold text-white mb-2">Screws (Specter Shield Lite)</h3>
            <p className="text-gray-400 mb-4">
              M3 countersunk head Screws
              2x 16mm, 2x 12mm, 2x 10mm, 2x 6mm
              - or 6x 12mm, 2x 10mm
            </p>
            <ul className="list-disc list-inside text-specter-primary space-y-1">
              <li><a href="https://1aschrauben.de/SPAX-Senkkopf-Kreuzschlitz-Z-kleiner-Kopf-Vollgewinde-YELLOX-A2L-PZ1-3x10-1000-Stk" target="_blank" className="text-specter-primary hover:underline">10mm - 1aschrauben.de</a></li>
              <li><a href="https://1aschrauben.de/SPAX-Senkkopf-Kreuzschlitz-Z-kleiner-Kopf-Vollgewinde-YELLOX-A2L-PZ1-3x12-1000-Stk" target="_blank" className="text-specter-primary hover:underline">12mm - 1aschrauben.de</a></li>
            </ul>
          </li>

          <li>
            <h3 className="text-xl font-semibold text-white mb-2">Cases</h3>
            <p className="text-gray-400 mb-4">3D-printed cases to house and protect the Specter hardware wallet components.</p>

            <div className="mt-4" data-cases="specter-diy" id="case-specter-diy">
              <h4 className="font-semibold text-lg text-gray-200">Specter DIY:</h4>
              <p className="text-gray-400 text-sm mb-2">A simple 3D-printed case designed to snap together.</p>
              <h5 className="font-semibold text-md text-gray-300 ml-4">Print Files:</h5>
              <ul className="list-disc list-inside text-specter-primary space-y-1 ml-8">
                <li><a href="https://github.com/cryptoadvance/specter-diy/tree/master/docs/enclosures/snapcase" target="_blank" className="text-specter-primary hover:underline">GitHub</a></li>
              </ul>
              <h5 className="font-semibold text-md text-gray-300 ml-4 mt-2">Buy:</h5>
              <ul className="list-disc list-inside text-specter-primary space-y-1 ml-8">
                <li><a href="https://bitcoin-store.org/products/specter-diy?variant=48150933045560" target="_blank" className="text-specter-primary hover:underline">Bitcoin Store</a></li>
                <li><a href="https://clavastack.com/en/product/einzelteil-snapcase-fuer-specter-diy/" target="_blank" className="text-specter-primary hover:underline">Clavastack</a></li>
              </ul>
            </div>

            <div className="mt-4" data-cases="specter-shield-lite" id="case-specter-shield-lite">
              <h4 className="font-semibold text-lg text-gray-200">Specter Shield Lite Case:</h4>
              <p className="text-gray-400 text-sm mb-2">A case designed to fit the more compact Shield Lite board and would work with Batteries and USB-C as well.</p>
              <h5 className="font-semibold text-md text-gray-300 ml-4">Print Files:</h5>
              <ul className="list-disc list-inside text-specter-primary space-y-1 ml-8">
                <li><a href="https://www.printables.com/model/1054878-specter-shield-lite-case/comments" target="_blank" className="text-specter-primary hover:underline">Printables.com</a></li>
              </ul>
              <h5 className="font-semibold text-md text-gray-300 ml-4 mt-2">Buy:</h5>
              <ul className="list-disc list-inside text-specter-primary space-y-1 ml-8">
                <li><a href="https://cryptoguide.tips/product/specter-shield-lite-case/" target="_blank" className="text-specter-primary hover:underline">Cryptoguide.tips</a></li>
                <li><a href="https://clavastack.com/en/product/specter-shield-lite-case/" target="_blank" className="text-specter-primary hover:underline">Clavastack</a></li>
              </ul>
            </div>

            <div className="mt-4" data-cases="specter-shield" id="case-specter-shield">
              <h4 className="font-semibold text-lg text-gray-200">Alternative 3D printed case:</h4>
              <p className="text-gray-400 text-sm mb-2">A more print-friendly case for the Specter Shield that provides access to all ports.</p>
              <h5 className="font-semibold text-md text-gray-300 ml-4">Print Files:</h5>
              <ul className="list-disc list-inside text-specter-primary space-y-1 ml-8">
                <li><a href="https://github.com/cryptoadvance/specter-diy/tree/master/shield/Alternative_3D_Printed_Case" target="_blank" className="text-specter-primary hover:underline">GitHub</a></li>
              </ul>
              <h5 className="font-semibold text-md text-gray-300 ml-4 mt-2">Buy:</h5>
              <ul className="list-disc list-inside text-specter-primary space-y-1 ml-8">
                <li><a href="https://clavastack.com/produkt/specter-shield-case/" target="_blank" className="text-specter-primary hover:underline">Clavastack</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
