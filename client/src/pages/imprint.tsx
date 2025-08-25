import Layout from "@/components/Layout";

export default function Imprint() {
  return (
    <Layout className="min-h-screen bg-specter-dark text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Imprint
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Legal information and contact details
          </p>
        </header>

        {/* Imprint Content */}
        <div className="bg-specter-navy rounded-xl shadow-lg p-8 md:p-12">
          <div className="space-y-8">
            {/* Organization Information */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Organization</h2>
              <div className="text-gray-300 space-y-2">
                <p className="text-xl font-medium text-white">Specter Association</p>
                <p>Ruelle William-Mayor 2</p>
                <p>CH-NE Neuchâtel 2000</p>
                <p>Switzerland</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
              <div className="text-gray-300 space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-specter-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <a 
                    href="mailto:specter.association@proton.me" 
                    className="text-specter-primary hover:text-specter-coral transition-colors duration-200"
                  >
                    specter.association@proton.me
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-specter-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <a 
                    href="tel:+491754567890" 
                    className="text-specter-primary hover:text-specter-coral transition-colors duration-200"
                  >
                    +49 157 519 027 96
                  </a>
                </div>
              </div>
            </div>

            {/* Legal Notice */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Legal Notice</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  The Specter Association is a non-profit organization dedicated to advancing 
                  Bitcoin privacy and security through open-source hardware and software solutions.
                </p>
                <p>
                  All content on this website is provided for informational purposes only. 
                  The Specter Association makes no warranties about the completeness, reliability, 
                  and accuracy of this information.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Any action you take upon the information on this website is strictly at your own risk, 
                  and the Specter Association will not be liable for any losses and damages in connection 
                  with the use of this website.
                </p>
                <p>
                  External links on this website may lead to third-party websites. The Specter Association 
                  has no control over the nature, content, and availability of those sites and is not 
                  responsible for their content.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Copyright</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  © 2024 Specter Association. All rights reserved.
                </p>
                <p>
                  The content of this website is licensed under open-source licenses where applicable. 
                  Please refer to individual project repositories for specific licensing information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
