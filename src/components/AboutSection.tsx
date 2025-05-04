
import { Button } from "@/components/ui/button";
import { File, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a Full Stack Python Developer with a strong foundation in full-stack web development using Django, Flask, 
              and React.js. I'm passionate about creating scalable, secure, and user-centric solutions that solve real-world problems.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              My experience includes developing full-stack web applications, engineering responsive front-end components,
              implementing automation scripts, and working with cross-functional teams to deliver complex project requirements
              within tight deadlines.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Beyond coding, I've had experience as a translator between English and Arabic, ensuring accuracy
              and cultural nuance. I've also managed kitchen operations as a chef, which honed my leadership and
              time management skills.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button 
                className="bg-portfolio-primary hover:bg-portfolio-accent text-white flex gap-2 items-center"
                asChild
              >
                <a href="#" download>
                  <File className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-portfolio-dark">Personal Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-portfolio-accent mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Location</h4>
                      <p className="text-gray-600">Fayoum City, Egypt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-portfolio-accent mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">(+20) 01018805134</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-portfolio-accent mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">MustafaMuhammedAM@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t">
                    <h4 className="font-medium text-gray-900 mb-2">Languages</h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-600">Arabic</span>
                          <span className="text-xs text-gray-500">Native</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-portfolio-accent h-1.5 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-600">English</span>
                          <span className="text-xs text-gray-500">Professional</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-portfolio-accent h-1.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
