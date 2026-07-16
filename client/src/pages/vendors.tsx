import { useState } from "react";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

// Import vendor logos
import clavaStackLogo from "@assets/BtcFrankenstein Logo 3.4.1_1755840288095.png";
import plebStyleLogo from "@assets/imgi_1_YwTqyo_1_400x400_1755840295047.png";
import bitcoinStoreLogo from "@assets/CalMPylj_400x400 (1)_1755840297048.jpg";
import cryptoguideLogo from "@assets/Cryptoguide_1755840305434.jpg";
import bayotoLogo from "@assets/Bayoto.jpg";
import cryptomaanLogo from "@assets/Cryptomaan.jpg";
import btcDirectLogo from "@assets/btcdirect.jpg";
import dezentralshopLogo from "@assets/Dezentralshop.jpg";
import lwalletLogo from "@assets/Lwallet.jpg";
import bitcoinBrabantLogo from "@assets/BitcoinBrabant.jpg";
import bitsagaLogo from "@assets/BitSaga.jpg";
import bitcoinBazisLogo from "@assets/BitcoinBazis.jpg";
import bitcoinBazarLogo from "@assets/BitcoinBazar.jpg";

export default function Vendors() {
  const [continentFilter, setContinentFilter] = useState("all");
  const [tagsFilter, setTagsFilter] = useState("all");

  const vendors = [
    {
      name: "ClavaStack",
      url: "https://clavastack.com/",
      continent: "europe",
      country: "Germany",
      tags: ["parts", "shield", "preassembled"],
      member: "Schnuartz",
      logo: clavaStackLogo,
      shippingCountry: "Germany",
    },
    {
      name: "Pleb.style",
      url: "https://pleb.style/",
      continent: "europe",
      country: "Germany",
      tags: ["shield", "preassembled"],
      member: "None",
      logo: plebStyleLogo,
      shippingCountry: "Germany",
    },
    {
      name: "Bitcoin-store.org",
      url: "https://bitcoin-store.org/",
      continent: "europe",
      country: "Switzerland",
      tags: ["parts", "preassembled"],
      member: "Thomas",
      logo: bitcoinStoreLogo,
      shippingCountry: "Switzerland",
    },
    {
      name: "Cryptoguide.tips",
      url: "https://cryptoguide.tips/shop/",
      continent: "north-america",
      country: "Canada",
      tags: ["parts", "shield"],
      member: "Crypto Guide",
      logo: cryptoguideLogo,
      shippingCountry: "Canada",
    },
    {
      name: "Bayoto",
      url: "https://bayoto.me/",
      continent: "europe",
      country: "Denmark",
      tags: ["preassembled", "shield"],
      member: "None",
      logo: bayotoLogo,
      shippingCountry: "Denmark",
    },
    /*
    {
      name: "Cryptomaan",
      url: "https://cryptomaan.eu/collections/hardware-wallets",
      continent: "europe",
      country: "Netherlands",
      tags: ["preassembled", "shield"],
      member: "None",
      logo: cryptomaanLogo,
    },
    {
      name: "BTC Direct",
      url: "https://shop.btcdirect.eu/",
      continent: "europe",
      country: "Netherlands",
      tags: ["preassembled", "shield"],
      member: "None",
      logo: btcDirectLogo,
    },
    */
    {
      name: "Dezentralshop",
      url: "https://dezentralshop.ch/",
      continent: "europe",
      country: "Switzerland",
      tags: ["preassembled", "shield"],
      member: "None",
      logo: dezentralshopLogo,
      shippingCountry: "Switzerland",
    },
    {
      name: "LWallet",
      url: "https://lwallet.com.ua/en/",
      continent: "europe",
      country: "Ukraine",
      tags: ["preassembled", "shield"],
      member: "None",
      logo: lwalletLogo,
      shippingCountry: "Germany",
    },
    {
      name: "Bitcoin Brabant",
      url: "https://bitcoinbrabant.com/",
      continent: "europe",
      country: "Netherlands",
      tags: ["preassembled", "shield"],
      member: "None",
      logo: bitcoinBrabantLogo,
      shippingCountry: "Germany", // Corrected based on user feedback
    },
    {
      name: "Bitsaga",
      url: "https://bitsaga.be/product/specter-shield-metal/",
      continent: "europe",
      country: "Belgium",
      tags: ["preassembled", "shield"],
      member: "None",
      logo: bitsagaLogo,
      shippingCountry: "Germany",
    },
    {
      name: "Bitcoin Bazar",
      url: "https://bitcoinbazar.fr/en/products/specter-shield-lite",
      continent: "europe",
      country: "France",
      tags: ["preassembled", "shield"],
      member: "None",
      logo: bitcoinBazarLogo,
      shippingCountry: "France",
    },
    {
      name: "Bitcoin Bazis",
      url: "https://shop.bitcoinbazis.hu/",
      continent: "europe",
      country: "Hungary",
      tags: ["preassembled", "shield"],
      member: "None",
      logo: bitcoinBazisLogo,
      shippingCountry: "Hungary",
    },
  ];

  const filteredVendors = vendors.filter(vendor => {
    const continentMatch = continentFilter === 'all' || vendor.continent === continentFilter;
    const tagMatch = tagsFilter === 'all' || vendor.tags.includes(tagsFilter);
    return continentMatch && tagMatch;
  });

  const getTagLabel = (tag: string) => {
    const labels: { [key: string]: string } = {
      'parts': 'Parts',
      'shield': 'Shield',
      'preassembled': 'Preassembled'
    };
    return labels[tag] || tag;
  };

  return (
    <Layout>
      <SEO
        title="Vendors"
        description="Find trusted vendors selling Specter DIY hardware wallets, parts, shields and preassembled devices — worldwide."
        path="/vendors"
      />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">

        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            Specter Wallet Vendors
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Find vendors for the Specter Hardware Wallet.
          </p>
        </header>

        {/* Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 p-4 rounded-xl bg-specter-navy shadow-xl">
          {/* Continent Filter */}
          <div className="w-full sm:w-1/2">
            <label htmlFor="continent-filter" className="block text-sm font-medium text-gray-400 mb-2">Filter by Continent</label>
            <select 
              id="continent-filter"
              value={continentFilter}
              onChange={(e) => setContinentFilter(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base bg-specter-dark border border-gray-600 focus:outline-none focus:ring-2 focus:ring-specter-primary focus:border-specter-primary rounded-lg text-white"
            >
              <option value="all">All Continents</option>
              <option value="europe">Europe</option>
              <option value="north-america">North America</option>
            </select>
          </div>
          
          {/* Tags Filter */}
          <div className="w-full sm:w-1/2">
            <label htmlFor="tags-filter" className="block text-sm font-medium text-gray-400 mb-2">Filter by Product Type</label>
            <select 
              id="tags-filter"
              value={tagsFilter}
              onChange={(e) => setTagsFilter(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base bg-specter-dark border border-gray-600 focus:outline-none focus:ring-2 focus:ring-specter-primary focus:border-specter-primary rounded-lg text-white"
            >
              <option value="all">All Products</option>
              <option value="parts">Parts</option>
              <option value="shield">Shield</option>
              <option value="preassembled">Preassembled</option>

            </select>
          </div>
        </div>

        {/* Vendors List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor, index) => (
            <Card key={index} className="p-6 bg-specter-navy rounded-xl shadow-lg transition-transform transform hover:scale-105 border-0">
              {/* Logo */}
              <div className="mb-4">
                <img 
                  src={vendor.logo} 
                  alt={`${vendor.name} logo`}
                  className="h-16 w-16 object-contain rounded-[4px]"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-white">
                <a 
                  href={vendor.url} 
                  className="hover:underline hover:text-specter-coral transition-colors duration-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {vendor.name}
                </a>
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                {vendor.continent === 'europe' ? 'Europe' : 'North America'}, {vendor.country}
              </p>
              <p className="text-gray-500 text-xs mb-4">
                Ships from: {vendor.shippingCountry}
              </p>
              <p className="text-gray-500 text-xs mb-4">
                Association member: {vendor.member}
              </p>
              <div className="flex flex-wrap gap-2">
                {vendor.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-600 text-gray-300"
                  >
                    {getTagLabel(tag)}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Warning Section */}
        <div className="mt-12 p-6 rounded-xl bg-red-900/25 text-red-300 border border-red-900 text-center">
          <p className="text-lg font-medium">
            Buy at your own risk. Make sure yourself whether the shop is reputable or build the device yourself.
          </p>
        </div>

      </main>
    </Layout>
  );
}
