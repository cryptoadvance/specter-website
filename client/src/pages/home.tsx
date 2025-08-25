import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";
import Layout from "@/components/Layout";
import heroBackgroundImage from "@assets/imgi_6_Specter_Foss_Suite-scaled_1755535754418.png";
import contactPersonImage from "@assets/Uncle Jim Tutorial (1)_1755536226982.png";

export default function Home() {
  const { toast } = useToast();

  // Contact form
  const contactForm = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honeypot: "",
    },
  });

  // Contact form mutation
  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      contactForm.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onContactSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

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
              <div className="text-center mb-8">
                <img 
                  src={contactPersonImage}
                  alt="Association Contact" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg object-cover"
                />
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

        </div>
      </main>
    </Layout>
  );
}
