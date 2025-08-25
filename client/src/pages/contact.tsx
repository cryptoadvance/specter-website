import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import Leadership from "@/components/contact/Leadership";
import ContactAssociation from "@/components/contact/ContactAssociation";
import BoardMembers from "@/components/contact/BoardMembers";



export default function Contact() {
  return (
    <Layout showNewsletter={true}>


      {/* Header Section */}
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The Specter Association</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          We are an association of Bitcoin enthusiasts dedicated to promoting self-custody and securing hardware wallets. Our mission is to strengthen the community and continue the legacy of Specter.
        </p>
      </header>

      <main className="container mx-auto px-4 space-y-16 pb-20">
        
        {/* Leadership Section */}
        <Leadership />

        {/* Board & Honorary Members */}
        <BoardMembers />

        {/* Contact Association */}
        <ContactAssociation />



        {/* History Section */}
        <section>
          <Card className="bg-specter-navy rounded-2xl p-8 shadow-2xl border-0">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The Specter Story</h2>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-sm md:text-base space-y-4">
              <p>
                In 2017, Moritz Wietersheim sought better hardware wallets. In 2018, he met Stepan Snigirev in Lisbon, who had developed a secure, open-source DIY signing device prototype. They founded Specter Solutions, releasing a 2019 prototype featuring air-gapped QR codes, a touchscreen, and true entropy via coin flips, empowering users to build wallets with off-the-shelf components. The community's high-quality case designs highlighted Specter's collaborative ethos.
              </p>
              <p>
                To complement the hardware, Specter Desktop was developed to provide user-friendly tools for air-gapped and multi-signature setups, filling a critical gap. In September 2022, Swan, a prominent Bitcoin company, invested in Specter, boosting its growth. However, COVID-19 supply chain issues and the Ukraine war disrupted progress, and Swan redirected the Specter team to other projects.
              </p>
              <p>
                In 2025, the Specter Association was formed in Switzerland, taking full ownership of the project. Swan donated the logo rights, X channel, YouTube, and GitHub to the association, solidifying its community-driven mission to advance Bitcoin self-custody.
              </p>
            </div>
          </Card>
        </section>

      </main>
    </Layout>
  );
}
