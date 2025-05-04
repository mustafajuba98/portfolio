
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-portfolio-primary font-bold text-xl">
            Mustafa<span className="text-portfolio-accent">.Dev</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a
              onClick={() => scrollToSection("home")}
              className="nav-link text-gray-800 hover:text-portfolio-accent transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="nav-link text-gray-800 hover:text-portfolio-accent transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("skills")}
              className="nav-link text-gray-800 hover:text-portfolio-accent transition-colors cursor-pointer"
            >
              Skills
            </a>
            <a
              onClick={() => scrollToSection("experience")}
              className="nav-link text-gray-800 hover:text-portfolio-accent transition-colors cursor-pointer"
            >
              Experience
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="nav-link text-gray-800 hover:text-portfolio-accent transition-colors cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="nav-link text-gray-800 hover:text-portfolio-accent transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className={`${scrolled ? "text-gray-800" : "text-gray-800"}`} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md rounded-b-lg animate-fade-in">
            <div className="flex flex-col p-4 space-y-3">
              <a
                onClick={() => scrollToSection("home")}
                className="text-gray-800 hover:text-portfolio-accent transition-colors py-2"
              >
                Home
              </a>
              <a
                onClick={() => scrollToSection("about")}
                className="text-gray-800 hover:text-portfolio-accent transition-colors py-2"
              >
                About
              </a>
              <a
                onClick={() => scrollToSection("skills")}
                className="text-gray-800 hover:text-portfolio-accent transition-colors py-2"
              >
                Skills
              </a>
              <a
                onClick={() => scrollToSection("experience")}
                className="text-gray-800 hover:text-portfolio-accent transition-colors py-2"
              >
                Experience
              </a>
              <a
                onClick={() => scrollToSection("projects")}
                className="text-gray-800 hover:text-portfolio-accent transition-colors py-2"
              >
                Projects
              </a>
              <a
                onClick={() => scrollToSection("contact")}
                className="text-gray-800 hover:text-portfolio-accent transition-colors py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
