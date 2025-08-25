import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SpecterDIYSection from "@/components/build-guide/SpecterDIYSection";
import SpecterShieldSection from "@/components/build-guide/SpecterShieldSection";
import SpecterShieldLiteSection from "@/components/build-guide/SpecterShieldLiteSection";
import SpecterShieldLiteBatterySection from "@/components/build-guide/SpecterShieldLiteBatterySection";
import PartsLegendSection from "@/components/build-guide/PartsLegendSection";

export default function BuildGuide() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Initialize filtering when component mounts
    filterElements('all');

    // Add event listeners for part links
    const partLinks = document.querySelectorAll('.case-section ul a');
    partLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = (link as HTMLAnchorElement).getAttribute('href')?.substring(1);
        if (targetId) {
          filterElements('all');
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
              highlightTarget(targetId);
            }, 300);
          }
        }
      });
    });
  }, []);

  const filterElements = (filter: string) => {
    setActiveFilter(filter);

    const caseSections = document.querySelectorAll('.case-section');
    const partsList = document.getElementById('parts-list');
    const legendSection = document.getElementById('legend-section');

    // Handle case sections
    caseSections.forEach(section => {
      const sectionElement = section as HTMLElement;
      const caseType = sectionElement.getAttribute('data-case');

      if (filter === 'all' || caseType === filter) {
        sectionElement.style.display = 'block';
      } else {
        sectionElement.style.display = 'none';
      }
    });

    // Handle parts list
    if (partsList) {
      const partItems = partsList.querySelectorAll('.part-item');
      partItems.forEach(item => {
        const itemElement = item as HTMLElement;
        const itemCases = itemElement.getAttribute('data-cases')?.split(',') || [];

        if (filter === 'all' || itemCases.includes(filter)) {
          itemElement.style.display = 'block';
        } else {
          itemElement.style.display = 'none';
        }
      });
    }

    // Handle legend section
    if (legendSection) {
      const legendItems = legendSection.querySelectorAll('.legend-item');
      legendItems.forEach(item => {
        const itemElement = item as HTMLElement;
        const itemCases = itemElement.getAttribute('data-cases')?.split(',') || [];

        if (filter === 'all' || itemCases.includes(filter)) {
          itemElement.style.display = 'block';
        } else {
          itemElement.style.display = 'none';
        }
      });
    }
  };

  const highlightTarget = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.classList.add('highlight');
      setTimeout(() => {
        targetElement.classList.remove('highlight');
      }, 2000);
    }
  };

  return (
    <Layout className="min-h-screen bg-specter-dark text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            Specter DIY Build Guide
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            A step-by-step guide to building your own Specter hardware wallet from scratch.
          </p>
          <div className="mt-6 text-center">
            <p className="text-gray-300 mb-4">Additional Resources:</p>
            <ul className="inline-flex flex-wrap gap-4 text-sm">
              <li><a href="https://github.com/cryptoadvance/specter-diy/tree/master/docs/enclosures" target="_blank" className="text-specter-primary hover:underline">More Case Enclosures</a></li>
              <li><a href="https://github.com/cryptoadvance/specter-diy/blob/master/docs/assembly.md" target="_blank" className="hover:underline text-specter-primary">Assembly Instructions</a></li>
              <li><a href="https://github.com/cryptoadvance/specter-diy/tree/master/shield" target="_blank" className="hover:underline text-specter-primary">Shield GitHub Page</a></li>
            </ul>
          </div>
        </header>

        {/* Filter Controls */}
        <div className="mb-8 flex flex-wrap justify-center items-center gap-2">
          <h3 className="text-lg font-semibold text-white mr-4">Filter by Case:</h3>
          <button
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'all' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="all"
            onClick={() => filterElements('all')}
          >
            Show All
          </button>
          <button
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-diy' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-diy"
            onClick={() => filterElements('specter-diy')}
          >
            Specter DIY
          </button>
          <button
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-shield"
            onClick={() => filterElements('specter-shield')}
          >
            Specter Shield
          </button>
          <button
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield-lite' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-shield-lite"
            onClick={() => filterElements('specter-shield-lite')}
          >
            Specter Shield Lite
          </button>
          <button
            className={`filter-btn py-2 px-4 rounded-full font-medium transition-colors hover:bg-gray-600 ${activeFilter === 'specter-shield-lite-battery' ? 'bg-specter-primary text-white' : 'bg-gray-700 text-gray-200'}`}
            data-filter="specter-shield-lite-battery"
            onClick={() => filterElements('specter-shield-lite-battery')}
          >
            Shield Lite (Batteries)
          </button>
        </div>

        {/* Hardware Sections */}
        <SpecterDIYSection isVisible={activeFilter === 'all' || activeFilter === 'specter-diy'} />
        <SpecterShieldSection isVisible={activeFilter === 'all' || activeFilter === 'specter-shield'} />
        <SpecterShieldLiteSection isVisible={activeFilter === 'all' || activeFilter === 'specter-shield-lite'} />
        <SpecterShieldLiteBatterySection isVisible={activeFilter === 'all' || activeFilter === 'specter-shield-lite-battery'} />

        {/* Parts Legend Section */}
        <PartsLegendSection activeFilter={activeFilter} onFilterChange={filterElements} />
      </div>
    </Layout>
  );
}
