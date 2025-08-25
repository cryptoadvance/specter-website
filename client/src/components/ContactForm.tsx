import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";

interface ContactFormProps {
  showTitle?: boolean;
  showImage?: boolean;
  imageUrl?: string;
  title?: string;
  className?: string;
}

export default function ContactForm({ 
  showTitle = true, 
  showImage = false, 
  imageUrl, 
  title = "Contact Association",
  className = ""
}: ContactFormProps) {
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

  // Contact form submission for Netlify Forms
  const onContactSubmit = async (data: InsertContact) => {
    try {
      // For Netlify Forms, we need to submit as form data
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message! We'll get back to you soon.",
        });
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={className}>
      {(showTitle || showImage) && (
        <div className="text-center mb-8">
          {showImage && imageUrl && (
            <img 
              src={imageUrl}
              alt="Contact" 
              className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg object-cover"
            />
          )}
          {showTitle && (
            <h3 className="text-2xl font-semibold text-white">
              {title}
            </h3>
          )}
        </div>
      )}
      
      <div className="max-w-lg mx-auto">
        {/* Hidden form for Netlify detection */}
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={contactForm.handleSubmit(onContactSubmit)}
          className="space-y-4"
        >
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
            className="w-full bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
