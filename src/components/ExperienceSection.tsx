
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, School } from "lucide-react";

type ExperienceItem = {
  type: "education" | "work" | "internship";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    type: "internship",
    title: "Full Stack Developer Intern",
    organization: "Information Technology Institute (ITI)",
    location: "BeniSueif, Egypt",
    period: "Jan. 2024 – Jun. 2024",
    description: [
      "Developed full-stack web applications using Django and Flask frameworks with a focus on security best practices.",
      "Engineered responsive front-end components using React.js, improving user engagement by 30%.",
      "Collaborated with cross-functional teams to deliver complex project requirements within tight deadlines.",
      "Implemented automation scripts using Bash and JavaScript to optimize development workflows.",
      "Applied agile methodologies for efficient project management and feature delivery."
    ],
  },
  {
    type: "work",
    title: "Chef",
    organization: "Various Restaurants",
    location: "Egypt",
    period: "2021 – 2024",
    description: [
      "Prepared dishes, managed kitchen operations, and ensured food quality and safety.",
      "Developed leadership skills through kitchen management and staff coordination.",
      "Enhanced problem-solving abilities through handling high-pressure situations."
    ],
  },
  {
    type: "work",
    title: "Translator",
    organization: "Freelance",
    location: "Remote",
    period: "2019 – 2021 (Part-time)",
    description: [
      "Translated documents between English and Arabic, ensuring accuracy and cultural nuance.",
      "Developed strong communication skills and attention to detail."
    ],
  },
  {
    type: "education",
    title: "Bachelor's Degree in Islamic and Arabic Studies",
    organization: "Faculty of Islamic and Arabic Studies",
    location: "Sharqia, Egypt",
    period: "Graduated Sep. 2023",
    description: [
      "Completed studies with a focus on analytical thinking and research methodologies.",
      "Developed strong writing and communication skills."
    ],
  }
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("experience");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Experience & Education</h2>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.title}-${index}`}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className={`p-6 text-white ${
                      exp.type === "education" ? "bg-portfolio-primary" : 
                      exp.type === "internship" ? "bg-portfolio-accent" : "bg-portfolio-secondary"
                    } md:w-1/4`}>
                      <div className="flex items-center mb-3">
                        {exp.type === "education" ? (
                          <School className="h-5 w-5 mr-2" />
                        ) : exp.type === "internship" ? (
                          <Briefcase className="h-5 w-5 mr-2" />
                        ) : (
                          <Briefcase className="h-5 w-5 mr-2" />
                        )}
                        <span className="font-medium capitalize">{exp.type}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 md:w-3/4">
                      <h3 className="text-xl font-semibold text-portfolio-dark">{exp.title}</h3>
                      <p className="text-portfolio-accent font-medium mb-1">{exp.organization}</p>
                      <p className="text-gray-600 text-sm mb-4">{exp.location}</p>
                      
                      <ul className="space-y-2 text-gray-700">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-portfolio-accent mr-2 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
