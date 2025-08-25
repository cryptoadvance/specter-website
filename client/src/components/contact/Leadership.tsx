import { Card } from "@/components/ui/card";

// Import leadership team member images
import schnuartzImage from "@assets/Schnuartz Profilbild_1755804562715.png";
import mikeImage from "@assets/Mike Tolkachev_1755805238554.png";
import xIcon from "@assets/imgi_1_x-icon-white-logo-x-app-editable-transparent-background-premium-social-media-de_1756110415058.png";
import linkedinIcon from "@assets/Linkedin-Logo-PNG-Picture_1756110417256.png";
import websiteIcon from "@assets/website-Icon_1756111196211.png";

export default function Leadership() {
  return (
    <section className="grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Schnuartz - President */}
      <Card className="bg-specter-navy rounded-2xl p-6 shadow-2xl border-0 flex flex-col items-center space-y-4">
        <div className="flex-shrink-0">
          <img 
            src={schnuartzImage} 
            alt="Portrait of Schnuartz" 
            className="rounded-full w-28 h-28 object-cover border-4 border-specter-coral"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white">Schnuartz</h2>
          <p className="text-specter-coral font-medium mb-4">President</p>
          <p className="text-gray-300 text-sm md:text-base">
            As the founder of a German online shop named ClavaStack that sold Specter hardware wallets and created numerous Specter tutorials on the EINUNDZWANZIG channel, Schnuartz has been living the association's mission from the very beginning. He was elected president to lead Specter into the future as an officially community-driven organization.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://x.com/schnuartz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={xIcon} alt="X (Twitter)" className="w-6 h-6" />
            </a>
            <a href="https://clavastack.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={websiteIcon} alt="Website" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Card>

      {/* Mike - Vice President */}
      <Card className="bg-specter-navy rounded-2xl p-6 shadow-2xl border-0 flex flex-col items-center space-y-4">
        <div className="flex-shrink-0">
          <img 
            src={mikeImage} 
            alt="Portrait of Mike" 
            className="rounded-full w-28 h-28 object-cover border-4 border-specter-coral"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white">Mike</h2>
          <p className="text-specter-coral font-medium mb-4">Vice President</p>
          <p className="text-gray-300 text-sm md:text-base">
            Mike was a driving force behind the development of the Specter hardware wallet from the start. Although he was not part of the original company, he made invaluable contributions. Today, as vice president, he is working to make it easier for developers to contribute and to strengthen the community.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/mikhail-tolkachev/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://www.embedity.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={websiteIcon} alt="Website" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}
