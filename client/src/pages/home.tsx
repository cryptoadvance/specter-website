import { useState } from "react";
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
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { Menu, X, ChevronDown } from "lucide-react";
import type { InsertContact, InsertNewsletter } from "@shared/schema";
import heroBackgroundImage from "@assets/imgi_6_Specter_Foss_Suite-scaled_1755535754418.png";
import contactPersonImage from "@assets/Uncle Jim Tutorial (1)_1755536226982.png";

export default function Home() {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hardwareDropdownOpen, setHardwareDropdownOpen] = useState(false);

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

  // Newsletter form
  const newsletterForm = useForm<InsertNewsletter>({
    resolver: zodResolver(insertNewsletterSchema),
    defaultValues: {
      email: "",
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

  // Newsletter mutation
  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      return apiRequest('POST', '/api/newsletter', data);
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to Specter updates!",
      });
      newsletterForm.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onContactSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const onNewsletterSubmit = (data: InsertNewsletter) => {
    newsletterMutation.mutate(data);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-specter-dark text-white font-sans">
      {/* Header */}
      <header className="bg-specter-primary shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://specter.solutions/wp-content/uploads/2020/09/SpecterSolutions_Logo%402x-180x15.png" 
                alt="Specter Solutions Logo" 
                className="h-6"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-specter-coral transition-colors duration-200"
              >
                Home
              </button>
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
              <Link href="/contact" className="text-white hover:text-specter-coral transition-colors duration-200">
                Contact
              </Link>
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
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left"
                >
                  Home
                </button>
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
                <Link href="/contact" className="text-white hover:text-specter-coral transition-colors duration-200 py-2 text-left">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
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
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-specter-coral">Open-Source</span><br />
            Specter Project
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-300">
            Secure your Bitcoin with Specter
          </h2>
          <Link href="/hardware">
            <Button className="bg-specter-primary hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">Specter Hardware Wallet</Button>
          </Link>
        </div>
      </section>
      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          
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

          {/* Hardware Section */}
          <section id="hardware" className="mb-20">
            <Card className="bg-specter-navy rounded-xl p-8 md:p-12 shadow-2xl border-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://specter.solutions/wp-content/uploads/2022/03/IMG_0062.png" 
                    alt="Specter DIY Hardware Wallet" 
                    className="w-full h-auto"
                  />
                </div>
                <div>
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
      {/* Footer */}
      <footer className="bg-specter-navy py-16 mt-20">
        <div className="container mx-auto px-4">
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="https://github.com/cryptoadvance/specter-desktop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/spectersupport" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931L23.93 3.821c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693L18.953 5.78c.595-.394 1.136-.176.691.218z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/specterwallet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/cryptoadvance" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/channel/UCg36aDMyesRu5bQxyuY25tQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-specter-coral transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center mb-12">
            <h4 className="text-xl font-semibold mb-4 text-white">
              Stay up to date<br />with Specter
            </h4>
            <form 
              onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} 
              className="max-w-md mx-auto flex"
            >
              <Input
                {...newsletterForm.register("email")}
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-l-lg bg-specter-dark border border-gray-600 focus:border-specter-primary focus:outline-none text-white"
              />
              <Button 
                type="submit"
                disabled={newsletterMutation.isPending}
                className="bg-specter-primary hover:bg-blue-600 text-white px-6 py-3 rounded-r-lg transition-colors duration-200"
              >
                {newsletterMutation.isPending ? "..." : "Subscribe"}
              </Button>
            </form>
            {newsletterForm.formState.errors.email && (
              <p className="text-red-400 text-sm mt-2">
                {newsletterForm.formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Copyright and Legal */}
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">© 2022 | Specter Solutions AG</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://specter.solutions/imprint/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-specter-coral transition-colors"
              >
                Imprint
              </a>
              <span>|</span>
              <a 
                href="https://specter.solutions/privacy-policy/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-specter-coral transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
