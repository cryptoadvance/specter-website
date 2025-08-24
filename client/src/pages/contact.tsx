import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Import team member images
import schnuartzImage from "@assets/Schnuartz Profilbild_1755804562715.png";
import mikeImage from "@assets/Mike Tolkachev_1755805238554.png";
import cryptoguideImage from "@assets/Cryptoguide_1755805248345.jpg";
import yanImage from "@assets/Yan-Swan_1755805253984.jpg";
import moritzImage from "@assets/Moritz_1755805413765.jpg";
import stepanImage from "@assets/Stepan-Snigirev_1755804956177.jpg";
import kimImage from "@assets/Kim_1755804970556.jpg";
import poltoImage from "@assets/polto_1755804982512.jpg";
import thomasImage from "@assets/Thomas_1755804997253.jpg";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hardwareDropdownOpen, setHardwareDropdownOpen] = useState(false);
  
  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honeypot: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (data.honeypot) {
        throw new Error("Spam detected");
      }
      
      return apiRequest("/api/contacts", "POST", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      contactForm.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onContactSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="bg-specter-dark text-white font-sans">
      {/* Header */}
      <header className="bg-specter-primary shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <img 
                  src="https://specter.solutions/wp-content/uploads/2020/09/SpecterSolutions_Logo%402x-180x15.png" 
                  alt="Specter Solutions Logo" 
                  className="h-6"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-specter-coral transition-colors duration-200">
                Home
              </Link>
              <Link href="/desktop" className="text-white hover:text-specter-coral transition-colors duration-200">
                Desktop
              </Link>
              <div className="relative">
                <button
                  onClick={() => setHardwareDropdownOpen(!hardwareDropdownOpen)}
                  className="flex items-center text-white hover:text-specter-coral transition-colors duration-200"
                >
                  Hardware
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {hardwareDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-specter-navy rounded-lg shadow-lg border border-gray-600 z-50">
                    <Link 
                      href="/hardware" 
                      className="block px-4 py-2 text-white hover:bg-specter-dark hover:text-specter-coral transition-colors duration-200 rounded-t-lg"
                      onClick={() => setHardwareDropdownOpen(false)}
                    >
                      Hardware Overview
                    </Link>
                    <Link 
                      href="/vendors" 
                      className="block px-4 py-2 text-white hover:bg-specter-dark hover:text-specter-coral transition-colors duration-200"
                      onClick={() => setHardwareDropdownOpen(false)}
                    >
                      Vendors
                    </Link>
                    <Link 
                      href="/build-guide" 
                      className="block px-4 py-2 text-white hover:bg-specter-dark hover:text-specter-coral transition-colors duration-200 rounded-b-lg"
                      onClick={() => setHardwareDropdownOpen(false)}
                    >
                      Build Guide
                    </Link>
                  </div>
                )}
              </div>
              <span className="text-specter-coral font-medium">
                Contact
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
                  Home
                </Link>
                <Link href="/desktop" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
                  Desktop
                </Link>
                <Link href="/hardware" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
                  Hardware
                </Link>
                <Link href="/vendors" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left pl-4">
                  Vendors
                </Link>
                <Link href="/build-guide" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left pl-4">
                  Build Guide
                </Link>
                <span className="text-specter-coral font-medium py-2 text-left">
                  Contact
                </span>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Header Section */}
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The Specter Association</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          We are an association of Bitcoin enthusiasts dedicated to promoting self-custody and securing hardware wallets. Our mission is to strengthen the community and continue the legacy of Specter.
        </p>
      </header>

      <main className="container mx-auto px-4 space-y-16 pb-20">
        
        {/* Leadership Section */}
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
                As the founder of a small German online shop named ClavaStack that sold Specter hardware wallets and created numerous Specter tutorials on the EINUNDZWANZIG channel, Schnuartz has been living the association's mission from the very beginning. He was elected president to lead Specter into the future as an officially community-driven organization.
              </p>
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
            </div>
          </Card>
        </section>

        {/* Contact Form */}
        <section>
          <Card className="bg-specter-navy rounded-xl p-8 md:p-12 shadow-2xl border-0">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white">
                Contact Association
              </h3>
            </div>
            <div className="max-w-lg mx-auto">
              <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Name *
                  </Label>
                  <Input
                    {...contactForm.register("name")}
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-specter-dark border border-gray-600 focus:border-specter-primary focus:outline-none transition-colors text-white"
                  />
                  {contactForm.formState.errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {contactForm.formState.errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email *
                  </Label>
                  <Input
                    {...contactForm.register("email")}
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-specter-dark border border-gray-600 focus:border-specter-primary focus:outline-none transition-colors text-white"
                  />
                  {contactForm.formState.errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {contactForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message *
                  </Label>
                  <Textarea
                    {...contactForm.register("message")}
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-specter-dark border border-gray-600 focus:border-specter-primary focus:outline-none transition-colors resize-vertical text-white"
                  />
                  {contactForm.formState.errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {contactForm.formState.errors.message.message}
                    </p>
                  )}
                </div>
                <div className="text-xs text-gray-400 mb-4 text-center">
                  Fields marked with an * are required
                </div>
                {/* Honeypot field for spam protection */}
                <input 
                  {...contactForm.register("honeypot")}
                  type="text" 
                  name="honeypot" 
                  style={{ display: 'none' }} 
                  tabIndex={-1} 
                />
                <Button 
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </Card>
        </section>

        {/* Board & Honorary Members */}
        <section>
          <Card className="bg-specter-navy rounded-2xl p-8 shadow-2xl border-0">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Board of Directors & Members</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              
              {/* Board Members */}
              <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
                <img 
                  src={cryptoguideImage} 
                  alt="CryptoGuide" 
                  className="rounded-full w-20 h-20 mb-2 object-cover"
                />
                <h3 className="text-lg font-semibold text-white">CryptoGuide</h3>
                <p className="text-sm text-specter-coral">Board of Directors</p>
                <p className="text-xs text-gray-400 mt-1">Revived the Specter Shield with his PCB skills and created the cost-effective Shield Lite version.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
                <img 
                  src={yanImage} 
                  alt="Yan" 
                  className="rounded-full w-20 h-20 mb-2 object-cover"
                />
                <h3 className="text-lg font-semibold text-white">Yan</h3>
                <p className="text-sm text-specter-coral">Board of Directors</p>
                <p className="text-xs text-gray-400 mt-1">Co-founder of Swan and a crucial bridge in transferring Specter into the hands of the community.</p>
              </div>

              {/* Honorary Members */}
              <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
                <img 
                  src={moritzImage} 
                  alt="Moritz Wietersheim" 
                  className="rounded-full w-20 h-20 mb-2 object-cover"
                />
                <h3 className="text-lg font-semibold text-white">Moritz Wietersheim</h3>
                <p className="text-sm text-gray-400">Honorary Member</p>
                <p className="text-xs text-gray-400 mt-1">The founding partner who teamed up with Stepan to establish the company Specter Solutions.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
                <img 
                  src={stepanImage} 
                  alt="Stepan Snigirev" 
                  className="rounded-full w-20 h-20 mb-2 object-cover"
                />
                <h3 className="text-lg font-semibold text-white">Stepan Snigirev</h3>
                <p className="text-sm text-gray-400">Honorary Member</p>
                <p className="text-xs text-gray-400 mt-1">Main Developer of the Specter DIY and Specter Desktop now working on a quantum computer.</p>
              </div>
              
              {/* General Members */}
              <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
                <img 
                  src={kimImage} 
                  alt="Kim" 
                  className="rounded-full w-20 h-20 mb-2 object-cover"
                />
                <h3 className="text-lg font-semibold text-white">Kim</h3>
                <p className="text-sm text-gray-400">Association Member</p>
                <p className="text-xs text-gray-400 mt-1">A former key member of the Specter team who contributed to improving the software wallet.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
                <img 
                  src={poltoImage} 
                  alt="Polto" 
                  className="rounded-full w-20 h-20 mb-2 object-cover"
                />
                <h3 className="text-lg font-semibold text-white">Polto</h3>
                <p className="text-sm text-gray-400">Association Member</p>
                <p className="text-xs text-gray-400 mt-1">Led Specter workshops at conferences to promote knowledge and adoption within the community.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
                <img 
                  src={thomasImage} 
                  alt="Thomas" 
                  className="rounded-full w-20 h-20 mb-2 object-cover"
                />
                <h3 className="text-lg font-semibold text-white">Thomas</h3>
                <p className="text-sm text-gray-400">Association Member</p>
                <p className="text-xs text-gray-400 mt-1">Designer of the Specter Snap Case, who also sells Specter DIYs at BitcoinStoreOrg.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* History Section */}
        <section>
          <Card className="bg-specter-navy rounded-2xl p-8 shadow-2xl border-0">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The Specter Story</h2>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-sm md:text-base space-y-4">
              <p>
                The Specter story begins in 2019, when the hardware wallet landscape was characterized by low-quality devices and security vulnerabilities. Out of this frustration, Stepan Snigirev, a physicist, decided to build a prototype that met his extremely high security standards. In 2018, he met Moritz Wietersheim, who had been looking for a partner to develop a hardware wallet for a year, and together they founded the company Specter Solutions.
              </p>
              <p>
                Their vision was to create an open ecosystem where anyone could build their own signing device from off-the-shelf components. Features like a temporary seed, air-gapped security via QR codes, and a large touchscreen made the device not only secure but also user-friendly. Everything was open-sourced—the firmware, build instructions, and parts list. The community, especially the SeedSigner guys, contributed from the beginning, showing that Specter was always a community project.
              </p>
              <p>
                With the hardware prototype in place, a new challenge emerged: the lack of good tools to effectively use such a secure device. In response, Specter Desktop was born. It became an even greater success than the hardware itself, attracting key developers like Keith Mukai, Kim, and Ben Kaufman. Mike, who wasn't officially part of the company, also made invaluable contributions.
              </p>
              <p>
                When Swan decided not to continue development, the community saw its chance to take over Specter—but officially as an association. Nine Specter enthusiasts founded the association in Switzerland. Stepan and Moritz stepped down from their roles but became honorary members.
              </p>
            </div>
          </Card>
        </section>

      </main>
    </div>
  );
}