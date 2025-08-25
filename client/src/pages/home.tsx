import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import heroBackgroundImage from "@assets/imgi_6_Specter_Foss_Suite-scaled_1755535754418.png";
import contactPersonImage from "@assets/Uncle Jim Tutorial (1)_1755536226982.png";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout showNewsletter={true} onHomeClick={() => scrollToSection('hero')}>
      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden" 
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-md">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-specter-coral">Open-Source</span><br />
              Specter Project
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-300">
              Secure your Bitcoin with Specter
            </h2>
            <div>
              <Link href="/hardware">
                <Button className="bg-specter-primary hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">Specter Hardware Wallet</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Hardware Section */}
          <section id="hardware" className="mb-20">
            <Card className="bg-specter-navy rounded-xl shadow-2xl border-0 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-12 h-full">
                <div className="md:col-span-2 flex items-end">
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/03/IMG_0062.png" 
                    alt="Specter DIY Hardware Wallet" 
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Hardware</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Trust minimised signing devices running Specter open source firmware.
                  </p>
                  <Link href="/hardware">
                    <Button className="bg-transparent border-2 border-specter-coral text-specter-coral hover:bg-specter-coral hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                      Build yours &gt;&gt;
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </section>

          {/* Desktop Section */}
          <section id="desktop" className="mb-20">
            <Card className="bg-specter-navy rounded-xl shadow-2xl border-0 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-12 h-full">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Desktop</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Secure your bitcoin. Verify your transactions. Protect your privacy.
                  </p>
                  <Link href="/desktop">
                    <Button className="bg-transparent border-2 border-specter-coral text-specter-coral hover:bg-specter-coral hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                      Get Specter &gt;&gt;
                    </Button>
                  </Link>
                </div>
                <div className="md:col-span-2 flex items-end">
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/02/Home-Specter_Add_Device.png" 
                    alt="Specter Desktop - Add your devices interface" 
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-20">
            <Card className="bg-specter-navy rounded-xl p-8 md:p-12 shadow-2xl border-0">
              <ContactForm
                showTitle={true}
                showImage={true}
                imageUrl={contactPersonImage}
                title="Contact Association"
              />
            </Card>
          </section>

        </div>
      </main>
    </Layout>
  );
}
