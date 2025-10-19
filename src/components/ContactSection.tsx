
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, MapPin, Phone, Linkedin, Globe } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-1">
            <Card className="shadow-sm h-full">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold mb-4 text-portfolio-dark">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-portfolio-accent mr-3" />
                    <div>
                      <h4 className="text-sm text-gray-500">Phone</h4>
                      <a href="tel:+201018805134" className="text-gray-800 hover:text-portfolio-accent transition-colors">
                        (+20) 01018805134
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-portfolio-accent mr-3" />
                    <div>
                      <h4 className="text-sm text-gray-500">Email</h4>
                      <a href="mailto:MustafaMuhammedAM@gmail.com" className="text-gray-800 hover:text-portfolio-accent transition-colors">
                        MustafaMuhammedAM@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-portfolio-accent mr-3" />
                    <div>
                      <h4 className="text-sm text-gray-500">Location</h4>
                      <p className="text-gray-800">
                        Cairo City, Egypt
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-portfolio-accent mr-3" />
                    <div>
                      <h4 className="text-sm text-gray-500">Portfolio</h4>
                      <a href="https://portfolio-nine-swart-92.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-portfolio-accent transition-colors">
                        portfolio-nine-swart-92.vercel.app
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 mt-2 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Find me on</h4>
                  <div className="flex space-x-3">
                    <a 
                      href="https://github.com/mustafajuba98" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-gray-100 p-2.5 rounded-full text-gray-600 hover:bg-portfolio-accent hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://linkedin.com/in/mustafa-muhammed-abdullah" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-gray-100 p-2.5 rounded-full text-gray-600 hover:bg-portfolio-accent hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="mailto:MustafaMuhammedAM@gmail.com" 
                      className="bg-gray-100 p-2.5 rounded-full text-gray-600 hover:bg-portfolio-accent hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus-visible:ring-portfolio-accent"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus-visible:ring-portfolio-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can I help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus-visible:ring-portfolio-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-32 resize-y border-gray-300 focus-visible:ring-portfolio-accent"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-portfolio-primary hover:bg-portfolio-accent"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
