import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import profileImage from '@/assets/2.jpg';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient">
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.1),transparent_70%)]"
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-8">
            <div 
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-portfolio-accent font-semibold mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-portfolio-dark">
                Mustafa Muhammed
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700">
                Full Stack Python Developer
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                I build scalable, secure, and user-centric web applications
                using Django, Flask, and React.js, with expertise in PostgreSQL
                and RESTful API integration. Currently working on innovative projects
                including e-learning platforms and clinic management systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-portfolio-primary hover:bg-portfolio-accent text-white"
                >
                  Get In Touch
                </Button>
                <Button 
                  onClick={scrollToAbout}
                  variant="outline" 
                  className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          
          <div 
            className={`md:w-2/5 mt-10 md:mt-0 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                <div className="w-full h-full bg-portfolio-secondary/30 flex items-center justify-center">
                  <img 
                    src={profileImage} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="w-14 h-14 rounded-full bg-portfolio-accent/20 flex items-center justify-center">
                  <span className="text-portfolio-accent text-2xl font-bold">+5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToAbout}
            className="rounded-full border border-gray-300"
          >
            <ArrowDown className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
