
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Mustafa<span className="text-portfolio-accent">.Dev</span></h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Full Stack Python Developer specializing in Django, Flask, and React.js, with a focus on 
              building scalable, secure, and user-centric web applications.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/mustafajuba98"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-portfolio-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/mustafa-muhammed-abdullah"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-portfolio-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:MustafaMuhammedAM@gmail.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-portfolio-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-portfolio-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-portfolio-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-portfolio-accent transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-gray-400 hover:text-portfolio-accent transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-portfolio-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-portfolio-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Fayoum City, Egypt</span>
              </li>
              <li>
                <a 
                  href="mailto:MustafaMuhammedAM@gmail.com" 
                  className="text-gray-400 hover:text-portfolio-accent transition-colors"
                >
                  MustafaMuhammedAM@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+201018805134" 
                  className="text-gray-400 hover:text-portfolio-accent transition-colors"
                >
                  (+20) 01018805134
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button 
                asChild
                className="bg-portfolio-accent hover:bg-portfolio-accent/90"
              >
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-center text-gray-500">
            © {currentYear} Mustafa Muhammed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
